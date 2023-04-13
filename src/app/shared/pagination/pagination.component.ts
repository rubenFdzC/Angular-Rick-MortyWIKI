import { Component , EventEmitter, Output , } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  
  @Output() changepageEmitter = new EventEmitter();
page: number = 1;
changepage(newPage:number){
  this.page=newPage;
  this.changepageEmitter.emit(newPage);
}
// @Output() public emitMessage = new EventEmitter<number>();
}
