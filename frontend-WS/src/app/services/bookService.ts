import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../entities/book';


type EntityResponseType = HttpResponse<Book>;

@Injectable({ providedIn: 'root' })
export class bookService {
  public resourceUrl = 'http://localhost:48888/books';

  constructor(protected http: HttpClient) {}

  postDataInDB(book: Book): Observable<EntityResponseType>{
    console.log(book);
     return this.http.post<Book>(this.resourceUrl+"/save", book, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<Book>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
  findAll():Observable<Book[]>{
    return this.http.get<GetResponse>(this.resourceUrl).pipe(
      map(res=>res._embedded.books)
    );
  }
  searchForContaining(value){
    return this.http.get<Book[]>(`${this.resourceUrl}/search/${value}`)
  }
  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
interface GetResponse{
  _embedded:{
    books:Book[];
  }
}
