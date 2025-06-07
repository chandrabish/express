const express = require("express");
const app = express();

let port = 8080;

app.listen(port , ()=>{
  console.log("app is listing");
});

// app.use((req , res)=>{
//   let code = "<h1>fruits<h1> <ul><li>apple</li><li>mango</li></ul>"
//   res.send(code);
// })


// app.get("/apple" , (req , res)=>{
//   res.send("right"); 
// });

app.get("/:username/:id", (req , res)=>{
  let{username , id} = req.params;
  res.send(`welcome to the page of ${username}`);
})

app.get("/apple" , (req  ,res)=>{
  let {q} = req.query;
  console.log(q);
  res.send(`the query id ${q}`);
});