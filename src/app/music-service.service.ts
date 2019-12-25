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

  public getAllMusic(page: number): Observable<string> {
    let params: HttpParams = new HttpParams()
                .set("page", page.toString());
    return this.http.get<string>(this.musicUrl, {params});
  }

  public getMusicById(id: number): Observable<string> {
    return this.http.get<string>(this.musicUrl+"/"+id);
  }

  public getMusicByParams(paramValues: string[], paramNames: string[], page: number): Observable<string> {
    let params: HttpParams = new HttpParams();
    let i: number;
    for(i=0; i<paramValues.length; i++) {
      params = params.set(paramNames[i], paramValues[i]);
    }
    params = params.set("page", page.toString());
    return this.http.get<string>(this.musicUrl, {params});
  }

}
