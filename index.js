import express from "express";
const app = express();

app.get(`/`, (req, res) => {
    const q = req.query;
    console.log(q);  // {name: 'David'}  ha a link ?name=David
    res.send(`Ciao, ${q.name}`); // mert dot notationnal hozzáférhető
    // console.log(req); 
    //console.log(res); console.dir(req); console.dir(res);// in my terminal
    console.log(req.params);
 
});

app.listen(3000, () => {
    console.log(`Open this link in your browser: http://127.0.0.1:3000`);
   
});

app.get(`/another-path`, (req, res) => {
    res.send(`Ciao on another path`);
});

app.get(`/users/:userId`, (req, res) => {
    res.send(`The user id is: ${req.params.userId}`)
})