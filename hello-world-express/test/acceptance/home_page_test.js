'use strict'
/*global casper*/

casper.test.begin('home page', 4, function suite(test) {

    casper.start('http://localhost:3000/', function() {
        test.assertHttpStatus(200);


    });

    casper.then(function() {
        test.assertTitle('High Energy Physics Labs', 'title is High Energy Physics Labs');

    });

    casper.then(function() {
        test.assertExists('div.lab-detail');
    });

    casper.then(function() {
        test.assertSelectorHasText('div.lab-detail', 'This list contains some of the largest high energy physics (HEP) labs in the world');

    });

    casper.run(function() {
        test.done();

    });
});
