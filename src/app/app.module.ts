import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { LineRegisterComponent } from './line-register/line-register.component';
import { LineCallBackComponent } from './line-call-back/line-call-back.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent,LineRegisterComponent,LineCallBackComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
