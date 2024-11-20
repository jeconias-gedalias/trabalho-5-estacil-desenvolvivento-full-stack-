const Livro = require('./modelo/livro-schema');

// Cria um novo livro
const novoLivro = new Livro({
  titulo: "Core Java for the Impatient",
  codEditora: 3,
  resumo: "eaders familiar with Horstmann's original, two-volume \"Core Java\" books who are looking for a comprehensive, but condensed guided to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries",
  autores: ["Cay Horstmann"]
});

// Salva o livro no banco de dados
novoLivro.save()
  .then(() => console.log('Livro adicionado com sucesso!'))
  .catch((err) => console.error('Erro ao adicionar livro:', err));