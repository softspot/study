/*
 * ex) phantomjs makepdf.js md-presentation
 */

var page = require('webpage').create(),
    system = require('system'),
    doc = 'basic';

page.viewportSize = { width: 800, height: 600, margin: '10px'};
page.paperSize = {width: 1024, height: 768, margin: '0px'};

if (system.args.length < 2) {
    console.log("Usage: makepdf.js [doc]");
} else {
    doc = system.args[1];
}

var filename = doc+'.pdf';

page.open('http://softspot.github.io/study/?doc='+doc+'&print-pdf', function () {
    page.render(filename);
    phantom.exit();
});
