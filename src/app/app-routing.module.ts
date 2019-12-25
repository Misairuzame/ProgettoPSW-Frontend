import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicByIdComponent } from './music-by-id/music-by-id.component';
import { SearchMusicComponent } from './search-music/search-music.component';


const routes: Routes = [
{
  path: 'list',
  component: MusicListComponent
},
{
  path: 'byId',
  component: MusicByIdComponent
},
{
  path: 'search',
  component: SearchMusicComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
