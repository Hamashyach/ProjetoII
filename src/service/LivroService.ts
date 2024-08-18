import { LivroEntity } from "../model/entity/LivroEntity";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository();

    async cadastrarLivro(livroData: any): Promise<LivroEntity> {
        const { titulo, autor, categoriaId } = livroData;
        
        const livro = new LivroEntity(undefined, titulo, autor, categoriaId)

        const novoLivro =  await this.livroRepository.insertLivro(livro);
        console.log("Service - Insert ", novoLivro);
        return novoLivro;
    }

    async atualizarLivro(livroData: any): Promise<LivroEntity> {
        const { id, titulo, autor, categoriaId } = livroData;

        const livro = new LivroEntity(id, titulo, autor, categoriaId)

        await this.livroRepository.updateLivro(livro);
        console.log("Service - Update ", livro);
        return livro;
    }

    async deletarLivro(livroData: any): Promise<LivroEntity> {
        const { id, titulo, autor, categoriaId } = livroData;

        const livro = new LivroEntity(id, titulo, autor, categoriaId)

        await this.livroRepository.deleteLivro(livro);
        console.log("Service - Delete ", livro);
        return livro;
    }

    async filtrarLivroById(livroData: any): Promise<LivroEntity> {
        const idNumber = parseInt(livroData, 10);

        const livro =  await this.livroRepository.filterLivroById(idNumber);
        console.log("Service - Filtrar", livro);
        return livro;
    }

    async filtrarLivroByTitulo(livroData: any): Promise<LivroEntity[]> {
        const titulo:string = livroData;

        const livro =  await this.livroRepository.filterLivroByTitulo(titulo);
        console.log("Service - Filtrar", livro);
        return livro;
    }

    async listarTodosLivros(): Promise<LivroEntity[]> {
        const livro =  await this.livroRepository.filterAllLivro();
        console.log("Service - Filtrar Todos", livro);
        return livro;
    }

}
