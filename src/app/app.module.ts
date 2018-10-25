import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { AppService } from './app.service';

import {HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : 'mov-ie', component: CommonComponent},
      { path : '',redirectTo: 'mov-ie', pathMatch: 'full'}
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
