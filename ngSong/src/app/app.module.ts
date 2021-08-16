import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongService } from './services/song.service';
import { SongListComponent } from './components/song-list/song-list.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SongService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
