import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line-call-back',
  templateUrl: './line-call-back.component.html',
  styleUrls: ['./line-call-back.component.css'],
})
export class LineCallBackComponent implements OnInit {
  mPhoneNumber = '';
  mIDCard = '';
  mTokenID = '';
  mState = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('Line Param :' + params);
      this.mTokenID = params.code;
      this.mState = params.state;
      console.log('access_token:' + this.mTokenID);
    });
  }

  
  UpdateLineRegister()
  {
    let msg = "Your Phone : " + this.mPhoneNumber;
      msg += "\r\n IDCard : " + this.mIDCard;
      msg += "\r\n TokenID : " + this.mTokenID;
      window.alert('Update Complete\r\n' + msg);
  }
  
}
