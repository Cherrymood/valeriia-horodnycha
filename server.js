import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static("./public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    // Render page 
    res.render('home');
});

app.get("/contact", (req, res) => {
    // Render page 
    res.render('contact');
});

app.get("/my_portfolio", (req, res) => {
    // Render page 
    res.render('my_portfolio"');
});

app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log(`Server is running on ${port}`);
});
