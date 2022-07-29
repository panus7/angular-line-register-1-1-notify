import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-line-register',
  templateUrl: './line-register.component.html',
  styleUrls: ['./line-register.component.css'],
})
export class LineRegisterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  LineRegister() {
    //https://notify-bot.line.me/my/services/edit?clientId=UxGd8nKydrBVlTaJx3sR99
    this.router.navigate([
      'https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=v8B5HhU9qgwFCj8leuNDeQ&redirect_uri=http://localhost/linecallback&scope=notify&state=sitecall',
    ]);
  }
}
