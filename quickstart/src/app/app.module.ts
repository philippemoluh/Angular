import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HeroService}     from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import { AppComponent }  from './app.component';
import {DashboardComponent} from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent,
                  DashboardComponent,
                  HeroDetailComponent, 
                  HeroesComponent],

  providers:    [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
