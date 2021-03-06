import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresComponent } from './genres.component';
import { AuthorsModule } from "../authors/authors.module";

@NgModule({
  declarations: [
    GenresComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    AuthorsModule
  ]
})
export class GenresModule { }
