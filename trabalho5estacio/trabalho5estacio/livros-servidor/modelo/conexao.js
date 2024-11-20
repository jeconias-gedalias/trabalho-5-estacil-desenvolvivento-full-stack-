// Importa a biblioteca mongoose
const banco = require('mongoose');

// Define as opções para a conexão
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

// Realiza a conexão com o banco de dados MongoDB
banco.connect('mongodb://localhost:27017/livraria', options)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Exporta a variável banco para ser utilizada em outros arquivos
module.exports = banco;