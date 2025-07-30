import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {
  livro = {
    titulo: 'Bastardos inglórios',
    autoria: 'Quentin Tarantino',
    imagem:
      'https://upload.wikimedia.org/wikipedia/pt/c/c2/Inglourious_basterds_ver9.jpg',
  };
}
