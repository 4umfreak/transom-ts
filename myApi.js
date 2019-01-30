module.exports = {
    note: "This is a simple TransomJS Typescript example to implement Hello World",
    name: "My Typescript server App",
    transom: {},
    definition: {
        functions: {
          hello:{
            methods: ["GET"],
            "function": function(server, req, res, next) {
              res.send("hello world");
              next();
            }
          }
        }  
      }
  };
  