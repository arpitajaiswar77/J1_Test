const express = require('express');
const app = express();

app.set("view engine","ejs");
app.get("/",(req,resp)=>{
    const a=10;
    resp.render("index",{a});
})


app.get("/products",(req,resp)=>{
    const products=[
        {id:1,name:"TV",price:12900},
        {id:2,name:"Fridge",price:23000},
    ];
    resp.render("product",{products});

})
app.listen(4000,()=>{
    console.log("running");
    
})
