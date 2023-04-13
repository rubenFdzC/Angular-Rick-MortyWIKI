import { InterPlanet } from './../game/models/gameInterface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  planetsNormal: InterPlanet [] =  [
    {
        id: 1,
        name: 'earth',
        img: 'assets/earth.svg'
    },
    {
        id: 2,
        name: 'jupiter',
        img: 'assets/jupiter.svg'
    },
    {
        id: 3,
        name: 'mars',
        img: 'assets/mars.svg'
    },
    {
        id: 7,
        name: 'earth',
        img: 'assets/earth.svg'
    },
    {
        id: 8,
        name: 'jupiter',
        img: 'assets/jupiter.svg'
    },
    {
        id: 9,
        name: 'mars',
        img: 'assets/mars.svg'
    }
  ];
}
