import { Component, OnInit } from '@angular/core';
import { Music } from '../music';
import { MusicServiceService } from '../music-service.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  musicList: Music[];

  constructor(private musicService: MusicServiceService) { }

  ngOnInit() {
    this.musicService.getAllMusic(0).subscribe(
      data => {
        this.musicList = data
      //TODO: Fare il parsing del JSON!
    }
    );
  }

}
