import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();       
  public autoresForm: string = '';         
  public editoras: Array<Editora> = [];    
  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;
  private router: Router;

  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService, router: Router) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.router = router;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n');
    
    // Chama o método incluir do serviço ControleLivrosService
    this.servLivros.incluir(this.livro).then(() => {
      // Navega para a página de lista após o sucesso da inclusão
      this.router.navigateByUrl('/lista');
    }).catch((erro) => {
      console.error('Erro ao incluir livro:', erro);
      // Aqui você pode adicionar um tratamento de erro, se necessário
    });
  };
}