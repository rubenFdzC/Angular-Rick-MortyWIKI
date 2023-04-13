import { PaginationComponent } from './shared/pagination/pagination.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonComponent } from './shared/button/button.component';
import { GameComponent } from './pages/game/game.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './form-error/form-error.component';
import { CharsGalleryComponent } from './chars-gallery/chars-gallery.component';
import { CharactersDetailPageComponent } from './pages/characters-detail-page/characters-detail-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    ContactPageComponent,
    HeaderComponent,
    ButtonComponent,
    GameComponent,
    FormErrorComponent,
    CharsGalleryComponent,
    PaginationComponent,
    CharactersDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
