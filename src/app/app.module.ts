import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PbbComponent } from './components/pbb/pbb.component';
import { UserComponent } from './components/user/user.component';
import { ShowComponent } from './components/show/show.component';
import { HeaderComponent } from './components/header/header.component';
import { GaleryComponent } from './components/galery/galery.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PbbComponent,
    UserComponent,
    ShowComponent,
    HeaderComponent,
    GaleryComponent,
    BannerComponent,
    ServerComponent,
    TodoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
