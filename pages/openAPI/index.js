import express from "express";
import axios from "axios";
import env from "dotenv";
import md5 from "md5";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;
env.config();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
  try {
    res.render("index.ejs"); // Render the main page
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

app.post("/marvelForm", async (req, res) => {

  function hash12(string, digits) {
    digits = digits || 6;
    var m = Math.pow(10, digits + 1) - 1;
    var phi = Math.pow(10, digits) / 2 - 1;
    var n = 0;
    for (var i = 0; i < string.length; i++) {
      n = (n + phi * string.charCodeAt(i)) % m;
    }
    return n.toString();
  }

  const name = req.body.usersName;
  console.log(name);
  name.toLowerCase();
  let name_hash = md5(name);
  let your_Hero_Id = hash12(name_hash, 4);
  if (your_Hero_Id >= 1564) { 
    while(your_Hero_Id > 1564)
    {
      your_Hero_Id /= 10;
    }
   }
  console.log(your_Hero_Id);

  const publicKey = "5e0d9e41a28b77598bbf3cf127e7f1bb";
  const privateKey = "f3fdf1d223338e7b335388875bb5a115329a8ea2";

  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey);

  try {
    const result = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=1&offset=${Math.round(your_Hero_Id)}`);
    const character = result.data.data.results[0];

    console.log(`${character.thumbnail.path}.${character.thumbnail.extension}`);

    res.render("index", {
      hero_Name: character.name,
      picture: `${character.thumbnail.path}.${character.thumbnail.extension}`, // Include the extension for the image
    });

  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
