import Editora from "../modelo/Editora";

export let editoras: Array<Editora> = [
    { codEditora: 1, nome: "Alta Books" },
    { codEditora: 2, nome: "Pearson" },
    { codEditora: 3, nome: "Addison Wesley" }
];

class ControleEditora {
    editoras: Array<Editora>;

    constructor(editoras: Array<Editora>) {
        this.editoras = editoras;
    }

  
    public getEditoras(): Array<Editora> {
        return this.editoras;
    }


    public getNomeEditora(codEditora: number): String | undefined {
        const editora = this.editoras.filter(e => e.codEditora === codEditora);
        return editora.length > 0 ? editora[0].nome : undefined;
    }
}

export default ControleEditora;
