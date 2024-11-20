// Importa o modelo Livro
const Livro = require('./livro-schema');

// Função assíncrona para obter todos os livros
const obterLivros = async () => {
  try {
    // Busca todos os livros no banco de dados
    const livros = await Livro.find();  // Método find sem parâmetros retorna todos os livros
    return livros;
  } catch (err) {
    console.error('Erro ao obter livros:', err);
    throw err;
  }
};

// Função assíncrona para incluir um novo livro
const incluir = async (livro) => {
  try {
    // Cria e salva um novo livro no banco de dados
    const novoLivro = await Livro.create(livro);  // Método create insere um novo documento
    return novoLivro;
  } catch (err) {
    console.error('Erro ao incluir livro:', err);
    throw err;
  }
};

// Função assíncrona para excluir um livro pelo código (_id)
const excluir = async (codigo) => {
  try {
    // Exclui um livro com base no _id
    const resultado = await Livro.deleteOne({ _id: codigo });  // Método deleteOne com o ID do livro
    return resultado;
  } catch (err) {
    console.error('Erro ao excluir livro:', err);
    throw err;
  }
};

// Exporta as funções para uso em outros arquivos
module.exports = {obterLivros, incluir, excluir};