// Importa a biblioteca express
const express = require('express');

// Importa o CORS para gerenciar compartilhamento de recursos entre origens
const cors = require('cors');

// Cria a instância do express
const app = express();

// Configura o CORS para permitir acesso de qualquer origem
app.use(cors());

// Define que o servidor vai aceitar requisições no formato JSON
app.use(express.json());

// Importa o roteador de livros
const livroRouter = require('./routes/livros');

// Configura a rota base para livros
app.use('/livros', livroRouter);

// Rota raiz (padrão)
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor de livros!');
});

// Rota users (padrão)
app.get('/users', (req, res) => {
  res.send('Página de usuários');
});

// Exporte o app (para ser usado em bin/www)
module.exports = app;