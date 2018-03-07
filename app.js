const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var router = express.Router();

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
    // req.json({
    //     'nome': '8º ano',
    //     'cnpj': 'A',
    //     'endereco': 'rua a, 1 – São Paulo - SP'
    // })

    res.send({
        'id': 1,
        'nome': '8º ano',
        'cnpj': 'A',
        'endereco': 'rua a, 1 – São Paulo - SP'
    })
})

app.post('/disciplinas', function (req, res) {
    // req.send({
    //     'nome': 'Matemática'
    // })

    res.send({
        'id': 1,
        'nome': 'Matemática'
    })
})

app.post('/escola/1/turmas', function (req, res) {
    // req.json({
    //     'nome': 'Turma A',
    //     'ano': '2018',
    //     'serie': '8 série',
    //     'descricao': 'A',
    //     'status': 1,
    //     'escola': {
    //         'id': 1
    //     }
    // })

    res.send({
        'id': 1,
        'nome': 'Turma A',
        'ano': '2018',
        'serie': '8 série',
        'descricao': 'A',
        'status': 1,
        'escola': {
            'id': 1
        }
    })
})

app.post('/usuario-professor', function (req, res) {
    // req.json({
    //     'email': 'dani',
    //     'senha': '1234',
    //     'nome': 'Helena Camila',
    //     'sobrenome': 'Silva',
    //     'professor': {
    //         'cpf': '1234',
    //         'cidade': 'São Paulo',
    //         'estado': 'SP',
    //         'telefone': 2222 - 2222,
    //         'data nascimento': '18/03/93'
    //     }
    // })

    res.send({
        'id': 1,
        'email': 'dani',
        'senha': '1234',
        'nome': 'Helena Camila',
        'sobrenome': 'Silva',
        'professor': {
            'cpf': '1234',
            'cidade': 'São Paulo',
            'estado': 'SP',
            'telefone': 2222 - 2222,
            'data nascimento': '18/03/93'
        }
    })
})

app.post('/usuario-aluno', function (req, res) {
    // req.json({
    //     'email': 'dani',
    //     'senha': '1234',
    //     'nome': 'Helena Camila',
    //     'sobrenome': 'Silva',
    //     'aluno': {
    //         'cpf': '1234',
    //         'nomeResponsavel': 'Mamãe',
    //         'cidade': 'São Paulo',
    //         'estado': 'SP',
    //         'telefone': 2222 - 2222,
    //         'data nascimento': '18/03/93',
    //         'escola': {
    //             'id': 1
    //         }
    //     }
    // })

    res.send({
        'id': 2,
        'email': 'dani',
        'senha': '1234',
        'nome': 'Helena Camila',
        'sobrenome': 'Silva',
        'aluno': {
            'cpf': '1234',
            'nomeResponsavel': 'Mamãe',
            'cidade': 'São Paulo',
            'estado': 'SP',
            'telefone': 2222 - 2222,
            'data nascimento': '18/03/93',
            'escola': {
                'id': 1
            }
        }
    })
})

app.post('/grupos', function (req, res) {
    // req.json({
    //     'nome': 'grupo 1',
    //     'ano': '2018',
    //     'descricao': 'grupo foi bem',
    //     'turma': {
    //         'id': 1
    //     },
    //     'status': 1
    // })

    res.send({
        'id': 1,
        'nome': 'grupo 1',
        'ano': '2018',
        'descricao': 'grupo foi bem',
        'turma': {
            'id': 1
        },
        'status': 1
    })
})

app.post('/desafio', function (req, res) {
    // req.json({
    //     'nome': 'foguete',
    //     'descricao': 'a gente vai lançar o foguete'
    // })

    res.send({
        'id': 1,
        'nome': 'foguete',
        'descricao': 'a gente vai lançar o foguete'
    })
})

app.post('/pergunta', function (req, res) {
    // req.json({
    //     'titulo': 'enunciado questao 1',
    //     'desafio': {
    //         'id': 1
    //     }
    // })

    res.send({
        'id': 1,
        'titulo': 'enunciado questao 1',
        'desafio': {
            'id': 1
        }
    })
})

app.post('/alternativa', function (req, res) {
    // req.json({
    //     'a': 'resposta a',
    //     'b': 'resposta b',
    //     'c': 'resposta c',
    //     'd': 'resposta d',
    //     'e': 'resposta e',
    //     'correta': 'a',
    //     'pergunta': {
    //         'id': 1
    //     }
    // })

    res.send({
        'id': 1,
        'a': 'resposta a',
        'b': 'resposta b',
        'c': 'resposta c',
        'd': 'resposta d',
        'e': 'resposta e',
        'correta': 'a',
        'pergunta': {
            'id': 1
        }
    })
})

app.use('/api', router);
app.listen(8080, () => console.log('Example app listening on port 8080!'));