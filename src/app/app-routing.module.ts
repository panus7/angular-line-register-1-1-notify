import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineCallBackComponent } from './line-call-back/line-call-back.component';
import { LineRegisterComponent } from './line-register/line-register.component';

const routes: Routes = [
  { path: 'line', component: LineRegisterComponent },
  { path: 'linecallback', component: LineCallBackComponent },
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
