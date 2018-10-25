import { Component } from '@angular/core';
import {SpotifyServices} from '../../services/spotify.service';

@Component({
  moduleId : module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
  providers: [SpotifyServices]
})

export class SearchComponent  {
  searchStr:string

  constructor(private _spotifyService: SpotifyServices){

  }
  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        console.log(res.artist.items);
      });
  }
 }
