import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddImageComponent } from './add-image/add-image.component';
import { ShowImageComponent } from './show-image/show-image.component';
import { ImageService } from './shared/image.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddImageComponent,
    ShowImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
