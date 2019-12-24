import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from './music';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  private musicUrl: string;

  constructor(private http: HttpClient) {
    this.musicUrl = "http://localhost:8080/music";
  }

  public getAllMusic(page: number): Observable<Music[]> {
    return this.http.get<Music[]>(this.musicUrl+"?page="+page);
  }

}
