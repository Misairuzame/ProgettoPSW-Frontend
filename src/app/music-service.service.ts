import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  private musicUrl: string;

  constructor(private http: HttpClient) {
    this.musicUrl = "http://localhost:8080/music";
  }

  public parseArray(jsonArray: string) {
    console.log("jsonArray: "+jsonArray);
  }

  public getAllMusic(page: number): Observable<string> {
    let params: HttpParams = new HttpParams()
                .set("page", page.toString());
    return this.http.get<string>(this.musicUrl, {params});
  }

  public getMusicById(id: number): Observable<string> {
    return this.http.get<string>(this.musicUrl+"/"+id);
  }

}
