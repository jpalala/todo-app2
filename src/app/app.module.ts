import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { FooterComponent } from './footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
// import { TodoComponent } from './todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
    MainNavComponent,
    FooterComponent,
    TodosComponent,
    TodoItemComponent,
    TodoInputComponent,
    ConfirmationComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
