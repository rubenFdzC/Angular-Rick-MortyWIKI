import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }
 
  getCharacters(pag: number, text: string){
    return this.http.get(`https://rickandmortyapi.com/api/character?page=${pag}&name=${text}`);
  }
  getCharacterDetail(id:string| null){
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
