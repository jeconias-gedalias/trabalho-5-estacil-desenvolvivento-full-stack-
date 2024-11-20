import Livro from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

// Definir a interface LivroMongo para compatibilizar os dados do livro com as chamadas para o servidor
interface LivroMongo {
    _id: string;
    titulo: string;
    codEditora: number;
    resumo: string;
    autores: string[];
}

// Classe ControleLivros, responsável por gerenciar as ações de livros
export class ControleLivro {
    // Método para obter os livros do servidor de forma assíncrona
    public async obterLivros(): Promise<Livro[]> {
        try {
            const response = await fetch(baseURL);

            if (!response.ok) {
                throw new Error(`Falha ao buscar livros: ${response.statusText}`);
            }

            const livrosMongo: LivroMongo[] = await response.json();

            // Mapear os dados de LivroMongo para a classe Livro
            return livrosMongo.map(
                (livro) =>
                    new Livro(
                        livro.codEditora,
                        livro.titulo,
                        livro.resumo,
                        livro.autores,
                        livro._id
                    )
            );
        } catch (error) {
            console.error("Erro ao obter livros:", error);
            throw error;
        }
    }

    // Método para excluir um livro baseado no código (ID) do livro
    public async excluir(codigo: string): Promise<boolean> {
        try {
            const response = await fetch(`${baseURL}/${codigo}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Falha ao excluir livro: ${response.statusText}`);
            }

            // Considerando que o backend retorna { ok: true/false }
            const data = await response.json();
            return data.ok || false;
        } catch (error) {
            console.error("Erro ao excluir livro:", error);
            return false;
        }
    }

    // Método para incluir um livro no servidor
    public async incluir(livro: Livro): Promise<boolean> {
        try {
            // Convertendo Livro para LivroMongo
            const livroMongo: Omit<LivroMongo, '_id'> = {
                codEditora: livro.codEditora,
                titulo: livro.titulo,
                resumo: livro.resumo,
                autores: livro.autores,
            };

            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(livroMongo),
            });

            if (!response.ok) {
                throw new Error(`Falha ao incluir livro: ${response.statusText}`);
            }

            const data = await response.json();
            return data.ok || false;  
        } catch (error) {
            console.error("Erro ao incluir livro:", error);
            return false;
        }
    }
}

export default ControleLivro;