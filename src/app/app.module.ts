import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practice1Component } from './practice1/practice1.component';
import { HeaderComponent } from './practice1/header/header.component';
import { FooterComponent } from './practice1/footer/footer.component';
import { ContentComponent } from './practice1/content/content.component';
import { SlidebarComponent } from './practice1/slidebar/slidebar.component';
import { Practice2Component } from './practice2/practice2.component';
import { HeaderPractice2Component } from './practice2/header-practice2/header-practice2.component';
import { CarouselPractice2Component } from './practice2/carousel-practice2/carousel-practice2.component';
import { CollectionPractice2Component } from './practice2/collection-practice2/collection-practice2.component';
import { FooterPractice2Component } from './practice2/footer-practice2/footer-practice2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralComponent } from './directives/structural/structural.component';

@NgModule({
  declarations: [
    AppComponent,
    Practice1Component,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SlidebarComponent,
    Practice2Component,
    HeaderPractice2Component,
    CarouselPractice2Component,
    CollectionPractice2Component,
    FooterPractice2Component,
    DataBindingComponent,
    DirectivesComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
