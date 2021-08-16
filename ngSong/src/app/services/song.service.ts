import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Song } from '../models/song';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  baseUrl = 'http://localhost:8084/';
  url = this.baseUrl + 'api/songs';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  index(): Observable<Song[]>{
    return this.http.get<Song[]>(this.url).pipe(
      catchError((err: any) => {
        console.error('SongService.index(): error retrieving song list');
        return throwError(err);
      })
    );
  }

  getHttpOptions(){
    // const credentials = this.authService.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders( {
        'Content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        // 'Authorization': `Basic ${credentials}`,
      }),
    }
    return httpOptions;
  }

  public create(song: Song){
    console.log(song);
      const httpOptions = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      return this.http.post<Song>('http://localhost:8084/api/songs', song, this.getHttpOptions())
        .pipe(
          catchError(this.handleError)
        );
    }

    handleError(error: any) {
      console.error('Something Broke');
      console.error(error.message);
      return throwError(error.json().error || 'Server Error');
    }

    public update(song: Song){

      return this.http.put<Song>('http://localhost:8084/api/songs', song, this.getHttpOptions())
      .pipe(
        catchError(this.handleError)
      );

    }

    public destroy(id: number){

      return this.http.delete<Song>('http://localhost:8084/api/songs/'+ id, this.getHttpOptions());
    }
}
