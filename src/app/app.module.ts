import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicListComponent } from './music-list/music-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MusicByIdComponent } from './music-by-id/music-by-id.component';
import { FormsModule } from '@angular/forms';
import { SearchMusicComponent } from './search-music/search-music.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    MusicByIdComponent,
    SearchMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
