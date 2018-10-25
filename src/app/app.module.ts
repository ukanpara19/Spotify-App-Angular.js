import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent} from './components/navbar/navbar.component';
import { AboutComponent} from './components/about/about.component';
import { SearchComponent} from './components/search/search.component';
import { AppComponent }  from './app.component'
import { AppRoutingModule } from './app.routes'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  imports:      [ AppRoutingModule ,BrowserModule, FormsModule,HttpModule ],
  declarations: [ AppComponent, NavbarComponent , AboutComponent,SearchComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
