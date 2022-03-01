/**
 * @jest-environment jsdom
 */

// This docblock is for projects that are not dependent on Node

let fs = require('fs');

test('All the terrarium plants elements are not null and draggable', () => {

    // Set up document body by loading index.html file
    var htmlData = new Promise((resolve, reject) => {
        fs.readFile('./index.html', (err, data) => {
            resolve(data)
        });

    });

    var markup = () => {
        htmlData.then(d => {
            return d.toString();
        });
    }

    //set markup to the body
    document.body.innerHTML = markup()

        // document.body.innerHTML = htmlData.then();

        //   '<div>' +
        //   '<div class="plant-holder">' +
        //   '<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />' +
        //   '</div>';

        require('./script');

        //If no problems with script.js, this test will run
        expect(document.getElementById('plant1')).not.toBeNull()
    });
