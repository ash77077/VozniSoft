import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/books.component";

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'authors', loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule) },
  { path: 'genres', loadChildren: () => import('./genres/genres.module').then(m => m.GenresModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
