import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { MaterialModule } from "./material-module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { HomeComponent } from "./home/home.component";
import { environment } from "../environments/environment";
import { NavbarComponent } from "./common/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  PlaylistsComponent,
  CreatePlaylistForm
} from "./panel/playlists/playlists.component";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    NavbarComponent,
    PlaylistsComponent,
    CreatePlaylistForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,

    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreatePlaylistForm]
})
export class AppModule {}
