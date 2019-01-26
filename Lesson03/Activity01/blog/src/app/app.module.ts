import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { TitleHeaderComponent } from './title-header/title-header.component';



@NgModule({
  declarations: [
    AppComponent,
    BlogHomeComponent,
    HeaderComponent,
    FooterComponent,
    ViewPostComponent,
    TitleHeaderComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }