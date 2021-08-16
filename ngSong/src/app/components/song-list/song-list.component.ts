import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];
  newSong: Song | null = null;
  selected: Song | null = null;
  editSong: Song | null = null;


  constructor(
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs(){
  this.songService.index().subscribe(
    songs => {
      this.songs = songs;
    },
    noSongs => {
      console.error('SongListComponent.loadSons(): error retrieving song list');
      console.error(noSongs);
    }
  )
  }

  deleteSong(id: number){
    console.log(id);
     this.songService.destroy(id).subscribe(data => {
       console.log(data);
       this.reload();
     });
  }


  openAddSongForm(){
    this.newSong = new Song();
  }

  addSong(song: Song){
    console.log(song);
    this.songService.create(song).subscribe(
      data => {
        this.reload();
        this.newSong = new Song();

      },
      err => console.error('Observer got an error in addTodo: ' + err)
      );
  }

  reload(){
    this.songService.index().subscribe(
      data => this.songs = data,
      err => console.error('Observer got an error in reload: ' + err)
    )
  }

  displaySong(song: Song): Song {
    this.selected = song;
    return this.selected;
  }

  setEditSong() {
    this.editSong = Object.assign({}, this.selected);
  }

  updateSong(song: Song){
    this.songService.update(song).subscribe(
      data => {
      console.log(song);
      this.reload();
    });
    this.editSong = null;
    this.selected = null;
      }
}
