import { PlaylistsComponent } from "./panel/playlists/playlists.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test/test.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "test",
    component: TestComponent
  },
  {
    path: "panel",
    children: [
      {
        path: "playlists",
        component: PlaylistsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
