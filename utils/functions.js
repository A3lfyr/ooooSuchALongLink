var BaseN = require('basen');
var baseO = new BaseN({
    base:[
        'O','о','О','Ο','ο','Օ','օ','੦','ଠ','௦','౦','೦','ഠ','൦','๐','၀','ჿ','ዐ','០','᧐','ᱛ','ᴑ'
    ]
});

/**
 * Encode an url to BaseO
 */
exports.encodeLink = function (stringUrl) {
    let asciiUrl = stringUrl.split("").map(e => e.charCodeAt(0));

    var oooUrl = "";
    asciiUrl.forEach(function(item) {
        oooUrl += baseO.encode(item) + 'o';
    });
    oooUrl = oooUrl.slice(0,-1);

    return oooUrl
}

/**
 * Decode an url to BaseO
 */
exports.decodeLink = function (oooUrl) {
    var stringUrl = "";
    oooUrl.split("o").forEach(function(item) {
        stringUrl += String.fromCharCode(baseO.decode(item));
    });

    return stringUrl.toString();
}