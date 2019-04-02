const url = require("url");

module.exports = function() {
    const myUrl = new URL(
        "http://mywebsite.com/hello.html?id=100&status=active"
    );

    // Legacy:
    // const myLegacyUrl = url.parse(
    //     "http://mywebsite.com/hello.html?id=100&status=active"
    // );
    // console.log(myLegacyUrl);
};
