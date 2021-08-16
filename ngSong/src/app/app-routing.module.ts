import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SongListComponent } from './components/song-list/song-list.component';

const routes: Routes = [
  { path: 'songs', component: SongListComponent },
  { path: 'songs/:id', component: SongListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
