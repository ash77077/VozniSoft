import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books/books.component'
import { ModalComponent } from './shared/modal/modal.component';
import { AuthorsModule } from "./authors/authors.module";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormsComponent } from './shared/modal/dynamic-forms/dynamic-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ModalComponent,
    DynamicFormsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthorsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
