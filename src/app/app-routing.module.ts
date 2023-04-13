import { CharsGalleryComponent } from './chars-gallery/chars-gallery.component';
import { GameComponent } from './pages/game/game.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailPageComponent } from './pages/characters-detail-page/characters-detail-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "contact", component : ContactPageComponent
  },
  {
    path: "characters", component : CharactersPageComponent
  },
  {
    path: "characters/:id", component : CharactersDetailPageComponent
  },
  {
    path: "memoGame", component: GameComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
