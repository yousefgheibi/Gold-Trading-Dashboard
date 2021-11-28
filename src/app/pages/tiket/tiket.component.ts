import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { TiketApiService } from 'src/app/services/tiket-api.service';
import { ContactModel } from '../../models/tiket.model';
@Component({
  selector: 'app-tiket',
  templateUrl: './tiket.component.html',
  styleUrls: ['./tiket.component.scss']
})
export class TiketComponent implements OnInit {

  contactformValue !: FormGroup;
  TicketmodelObj : ContactModel = new ContactModel();
  constructor(private formbuilder : FormBuilder,private _tiketApi:TiketApiService ,private _notification : NotificationService) { }

  ngOnInit(): void {
    this.contactformValue = this.formbuilder.group({
      id:(null),
      firstname : [''],
      lastname : [''],
      subject : [''],
      comment :['']
    });
  }
  PostTicket(){
    this.TicketmodelObj.firstname = this.contactformValue.value.firstname;
    this.TicketmodelObj.lastname = this.contactformValue.value.lastname;
    this.TicketmodelObj.subject = this.contactformValue.value.subject;
    this.TicketmodelObj.comment = this.contactformValue.value.comment;
    
    this._tiketApi.postTicket(this.TicketmodelObj)
    .subscribe(res=>{
      console.log(res);
      this._notification.success('ایمیل شما با موفقیت ارسال شد.');
      this.contactformValue.reset();

    },
    (err)=>{
      console.log(err);
      this._notification.warn('ایمیل شما با مشکل مواجه شده است.');
    })
  }

}
