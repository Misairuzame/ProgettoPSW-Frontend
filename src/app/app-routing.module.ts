import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicByIdComponent } from './music-by-id/music-by-id.component';
import { SearchMusicComponent } from './search-music/search-music.component';
import { InsertMusicComponent } from './insert-music/insert-music.component';
import { UpdateMusicComponent } from './update-music/update-music.component';
import { DeleteMusicComponent } from './delete-music/delete-music.component';


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
},
{
  path: 'insert',
  component: InsertMusicComponent
},
{
  path: 'update',
  component: UpdateMusicComponent
},
{
  path: 'delete',
  component: DeleteMusicComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
