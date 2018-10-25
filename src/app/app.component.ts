import { Component } from '@angular/core';
import { SpotifyServices } from './services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers:  [ SpotifyServices ]
})

export class AppComponent  { }
