import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
text: string = "soy un dato compartido";

  constructor() { }
}
