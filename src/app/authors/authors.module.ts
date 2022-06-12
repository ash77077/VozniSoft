import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import { ListComponent } from '../shared/list/list.component';
import { ListDirective } from '../shared/list/list.directive'

@NgModule({
  declarations: [
    AuthorsComponent,
    ListComponent,
    ListDirective,

  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
  ],
  exports: [ListComponent]
})
export class AuthorsModule { }
