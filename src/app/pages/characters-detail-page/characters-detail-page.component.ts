import { CharactersService } from 'src/app/shared/services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-characters-detail-page',
  templateUrl: './characters-detail-page.component.html',
  styleUrls: ['./characters-detail-page.component.scss']
})
export class CharactersDetailPageComponent implements OnInit{
details:any;

constructor(private characterService : CharactersService, 
  private route :ActivatedRoute){}

ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')

      this.characterService.getCharacterDetail(id).subscribe(res => {
      this.details = res})
    })
}
}


