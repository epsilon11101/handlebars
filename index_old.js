const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });
    //we will generate a file that will download and this is the name of the file
    // res.setHeader("Content-Disposition", "attachment; filename=list.csv");
    // res.writeHead(200, {
    //   "Content-Type": "application/csv",
    // });
    res.write("hello man");
    res.end();

    // const people = {
    //   id: 1,
    //   name: "Aaron MV",
    // };

    // res.write(JSON.stringify(people));
    // res.write("id,name\n");
    // res.write("1,aaron\n");
    // res.write("2,miranda\n");
  })
  .listen(8080);

console.log("Listening on port:", 8080);
