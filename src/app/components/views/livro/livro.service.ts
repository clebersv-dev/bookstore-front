import { Livro } from './livro.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findLivroById(id: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros/${id}`;
    return this.http.get<Livro>(url);
  }
  
  update(livro: Livro):Observable<Livro> {
    const url = `${this.baseUrl}/livros/${livro.id}`;
    return this.http.put<Livro>(url, livro);
  }

  excluir(id: String):Observable<Livro> {
    const url = `${this.baseUrl}/livros/${id}`;
    return this.http.delete<Livro>(url);
  }

  findAllByCategoria(id_cat: String): Observable<Livro[]> {
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`;
    return this.http.get<Livro[]>(url);
  }

  create(livro: Livro, id_cat: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`;
    return this.http.post<Livro>(url, livro);
  }

  mensagem(str: String):void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      
      duration: 3000
    })
  }
}