const request = require("request");
const fs = require("fs");
// node fetcher.js http://www.example.edu/ ./index.html
const url = process.argv[2];
const localPath = process.argv[3];
request(url, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log("body:", body); // Print the HTML for the Google homepage.
  //Download to the file here
  fs.writeFile(localPath, body, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
  });
});
