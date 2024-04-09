import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewPostPageComponent } from './components/posts-page/children/new-post-page/new-post-page.component';
import { PostDetailsComponent } from './components/posts-page/children/post-details/post-details.component';
import { EditPostPageComponent } from './components/posts-page/children/edit-post-page/edit-post-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    PostsPageComponent,
    HomePageComponent,
    NewPostPageComponent,
    PostDetailsComponent,
    EditPostPageComponent,
    ErrorPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
