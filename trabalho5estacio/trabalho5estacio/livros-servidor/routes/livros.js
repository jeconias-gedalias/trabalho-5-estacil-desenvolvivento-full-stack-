// Importa a biblioteca express
const express = require('express');

// Cria o objeto router a partir do express
const router = express.Router();

// Importa as funções do livro-dao
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// Rota GET: Obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();  // Chama a função para obter os livros
    res.status(200).json(livros);  // Envia os livros no formato JSON
  } catch (err) {
    res.status(500).json({ ok: false, mensagem: 'Erro ao obter livros', erro: err });
  }
});

// Rota POST: Incluir um novo livro
router.post('/', async (req, res) => {
  const livro = req.body;  // Recebe o livro do corpo da requisição
  try {
    const novoLivro = await incluir(livro);  // Chama a função para incluir o livro
    res.status(201).json({ ok: true, mensagem: 'Livro adicionado com sucesso', livro: novoLivro });
  } catch (err) {
    res.status(500).json({ ok: false, mensagem: 'Erro ao incluir livro', erro: err });
  }
});

// Rota DELETE: Excluir um livro pelo ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;  // Obtém o ID do livro a partir dos parâmetros da requisição
  try {
    const resultado = await excluir(id);  // Chama a função para excluir o livro
    if (resultado.deletedCount > 0) {
      res.status(200).json({ ok: true, mensagem: 'Livro excluído com sucesso' });
    } else {
      res.status(404).json({ ok: false, mensagem: 'Livro não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ ok: false, mensagem: 'Erro ao excluir livro', erro: err });
  }
});

// Exporta o router para ser utilizado no servidor principal
module.exports = router;