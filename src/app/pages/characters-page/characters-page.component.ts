import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';



@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {
searchText:string="";
  characters:any; //variable con los personajes almacenados

  constructor(private charactersService: CharactersService ){}
pag: number = 1
ngOnInit(): void {
 this.getCharacters(1, "")
}
getCharacters(pag:number, text:string){
  this.charactersService.getCharacters(pag,text).subscribe((res:any) =>{
    console.log(res);
    this.characters = res.results;
  });
}
}
