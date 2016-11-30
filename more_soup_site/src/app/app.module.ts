import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { WorkComponent } from './work.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, AboutComponent, ContactComponent, WorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
