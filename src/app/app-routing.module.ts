import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicByIdComponent } from './music-by-id/music-by-id.component';


const routes: Routes = [
{
  path: 'list',
  component: MusicListComponent
},
{
  path: 'byId',
  component: MusicByIdComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
