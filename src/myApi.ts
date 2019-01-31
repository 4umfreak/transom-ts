module.exports = {
    note: "This is a simple TransomJS Typescript example to implement Hello World",
    name: "My Typescript server App",
    transom: {},
    definition: {
        functions: {
          hello:{
            methods: ["GET"],
            "function": function(server: any, req: any, res: any, next: any) {
              res.send("hello world!");
              next();
            }
          }
        }  
      }
  };
  