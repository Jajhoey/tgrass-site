import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTwitter, faTiktok, faYoutube, faDiscord, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GrassrootsComponent } from './grassroots/grassroots.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faTwitter);
    library.addIcons(faTiktok);
    library.addIcons(faYoutube);
    library.addIcons(faDiscord);
    library.addIcons(faTwitch);
  }
 }
