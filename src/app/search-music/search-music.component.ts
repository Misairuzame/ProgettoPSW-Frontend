import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MusicServiceService } from '../music-service.service';
import { SearchFilter } from '../search-filter';
import { Music } from '../music';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {

  filter: SearchFilter = new SearchFilter();
  searchForm: FormGroup;
  whichParam: string[];
  whichValue: string[];
  message: string;
  musicList: Music[];
  page: number;

  constructor(private musicService: MusicServiceService) {
    this.searchForm = new FormGroup({
      title: new FormControl('', [Validators.maxLength(50), Validators.pattern('^[\\w\\s\\-]*$')]),
      author: new FormControl('', [Validators.maxLength(50), Validators.pattern('^[\\w\\s\\-]*$')]),
      album: new FormControl('', [Validators.maxLength(50), Validators.pattern('^[\\w\\s\\-]*$')]),
      year: new FormControl('', [Validators.maxLength(4), Validators.pattern('^\\d{4}$')]),
      genre: new FormControl('', [Validators.maxLength(50), Validators.pattern('^[\\w\\s\\-]*$')])
    });
    this.whichParam = new Array();
    this.whichValue = new Array();
    this.page = 0;
  }

  isFormValid() {
    let bool: boolean;
    bool = this.searchForm.value.title.length > 0 ||
           this.searchForm.value.author.length > 0 ||
           this.searchForm.value.album.length > 0 ||
           this.searchForm.value.year.toString().length > 0 ||
           this.searchForm.value.genre.length > 0;
    return bool;
  }

  onSubmit() {
    this.filter.title = this.searchForm.value.title;
    this.filter.author = this.searchForm.value.author;
    this.filter.album = this.searchForm.value.album;
    this.filter.year = this.searchForm.value.year;
    this.filter.genre = this.searchForm.value.genre;
    
    let i: number = 0;
    if(this.filter.title.length > 0) {
      this.whichParam.push("title");
      this.whichValue.push(this.filter.title);
    }
    if(this.filter.author.length > 0) {
      this.whichParam.push("author");
      this.whichValue.push(this.filter.author);
    }
    if(this.filter.album.length > 0) {
      this.whichParam.push("album");
      this.whichValue.push(this.filter.album);
    }
    if(this.filter.year.toString().length > 0) {
      this.whichParam.push("year");
      this.whichValue.push(this.filter.year.toString());
    }
    if(this.filter.genre.length > 0) {
      this.whichParam.push("title");
      this.whichValue.push(this.filter.genre);
    }

    this.getData();

    this.resetAll();
  }

  getData() {
    this.musicService.getMusicByParams(this.whichParam, this.whichValue, this.page).subscribe(
      result => {
        console.log("Received from server:");
        console.log(result);
        this.musicList = result["data"];
        this.message = result["message"];
    },
    err => {
      console.log("Received from server:");
      console.log(err["error"]);
      this.message = err["error"]["message"];
    });
  }

  resetAll() {
    this.searchForm.reset();
    this.page = 0;
    this.whichParam = new Array();
    this.whichValue = new Array();
  }

  ngOnInit() {
  }

}
