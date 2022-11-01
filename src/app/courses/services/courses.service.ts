import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root' //a instancia do nosso serviço vai ficar de maneira global
})
export class CoursesService {

  private readonly API = 'api/courses';
  constructor(private httpClient: HttpClient) { }
  //a importação do httpclient deve ficar no app.module pois vai ser global para o nosso cod
  list(){
    return this.httpClient.get<Course[]>(this.API).pipe(
      //take(1), assim que o servidor me der uma resposta eu encerro a conexao
      first(),// Eu quero apenas a primeira resposta que o servidor me enviar
       //para manipular dados

      tap(courses => console.log(courses))
    );
  }
}
