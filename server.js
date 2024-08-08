import express from 'express';
import bodyParser from 'body-parser';

let message = [];

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
    const { name, email, phone, message } = req.body;

    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);

    message.push({ name, email, phone, message });
    
    res.json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
