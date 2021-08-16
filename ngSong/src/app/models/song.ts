export class Song {

  id: number;
  artist: string;
  title: string;
  album: string;
  releaseDate: Date;
  length: number;

  constructor(
    id: number = 0,
    artist: string = '',
    title: string = '',
    album: string = '',
    releaseDate: Date = new Date(),
    length: number = 0

  ){
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.releaseDate = releaseDate;
    this.length = length;
  }
}
