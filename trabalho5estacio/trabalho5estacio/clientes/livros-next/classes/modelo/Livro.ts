class Livro {
    _id?: string; // Identificador opcional do MongoDB, do tipo string
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor(codEditora: number, titulo: string, resumo: string, autores: string[], _id?: string) {
        this._id = _id; // Opcional, pois pode não ser fornecido na criação
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
}

export default Livro;