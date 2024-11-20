// Importa a conexão com o MongoDB
const banco = require('./conexao');

// Define a estrutura do modelo Livro usando o Schema do Mongoose
const livroSchema = new banco.Schema({
  _id: {
    type: banco.Schema.Types.ObjectId,
    required: true,
    auto: true // Garante que o _id seja gerado automaticamente
  },
  titulo: {
    type: String,
    required: true
  },
  codEditora: {
    type: Number,  // Agora é do tipo Number
    required: true
  },
  resumo: {
    type: String,
    required: true
  },
  autores: {
    type: [String],  // Array de autores
    required: true
  }
});

// Associa o esquema à coleção "livros" no MongoDB
const Livro = banco.model('Livro', livroSchema, 'livros');

// Exporta o modelo Livro
module.exports = Livro;