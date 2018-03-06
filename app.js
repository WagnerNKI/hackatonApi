const express = require('express')
const app = express()

app.get('/iot', (req, res) => res.send(
    {
        "question": "O que compoe a materia?",
        "alternativas": [
            "energia",
            "atomos",
            "magia",
        ],
        "rightAnswer": "atomos"
    }
));

app.put('/iot', function (req, res) {
    console.log("Id:");
    console.log(req.body);
})


app.post('/escolas', function (req, res) {
  res.send('POST request to homepage');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));