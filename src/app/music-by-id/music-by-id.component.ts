import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../music-service.service';
import { Music } from '../music';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-music-by-id',
  templateUrl: './music-by-id.component.html',
  styleUrls: ['./music-by-id.component.css']
})
export class MusicByIdComponent implements OnInit {

  music: Music;
  message: string;
  show: boolean = false;
  isDataLoaded: boolean = false;
  musicId: number = 0;
  success: boolean;

  constructor(private musicService: MusicServiceService) {
  }

  getData() {
    this.show = false;
    this.isDataLoaded = false;
    this.musicService.getMusicById(this.musicId).subscribe(
      result => {
        this.success = true;
        this.isDataLoaded = true;
        console.log("Received from server:");
        console.log(result);
        this.music = result["data"][0];
        this.message = result["message"];
    },
    err => {
      this.success = false;
      this.isDataLoaded = false;
      console.log("Received from server:");
      console.log(err["error"]);
      this.message = err["error"]["message"];
    });
    this.show = true;
  }

  ngOnInit() { }

}
