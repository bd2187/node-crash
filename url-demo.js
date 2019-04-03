const url = require("url");

module.exports = function() {
    const myUrl = new URL(
        "http://mywebsite.com:8000/hello.html?id=100&status=active"
    );

    // Legacy:
    // const myLegacyUrl = url.parse(
    //     "http://mywebsite.com/hello.html?id=100&status=active"
    // );
    // console.log(myLegacyUrl);

    // Host (root domain)
    console.log(`Host: ${myUrl.host}`);

    // Hostname (excludes port if included)
    console.log(`Hostname: ${myUrl.hostname}`);

    // Pathname
    console.log(`Pathname: ${myUrl.pathname}`);

    // Serialized query
    console.log(`Serialized query: ${myUrl.search}`);

    // Params object
    console.log(`Params object: ${myUrl.searchParams}`);

    // Append param
    myUrl.searchParams.append("channel", "live");
    console.log(`Appended param: ${myUrl.href}`);

    // Loop through params
    myUrl.searchParams.forEach(function(value, name) {
        console.log(`${name}: ${value}`);
    });
};
