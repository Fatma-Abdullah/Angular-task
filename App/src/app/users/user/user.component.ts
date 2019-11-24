import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import {NotificationService} from 'src/app/services/notification.service';
import { User } from '../list/list.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // users: any = [];
  constructor(
    private usrService: UserService,
    public dialogRef: MatDialogRef<UserComponent>,
    public notification: NotificationService
    ) { }

  ngOnInit() {}

  onSubmit() {
    if (this.usrService.form.valid) {

      if (!this.usrService.form.get('id').value) {
        this.usrService.addUser(this.usrService.form.value).subscribe(data => {
          this.usrService.users.push(data);
          console.log(data);
        });
        this.notification.success('User added successfully');

      } else {
      this.usrService.EditUser(this.usrService.form.value)

      .subscribe(data  => {
        this.usrService.users.splice(this.usrService.form.get('id').value, 1 );
        this.usrService.users.push(data);
      });

      this.usrService.getAllUsers().subscribe( (data: User[]) => {
      this.usrService.users = data;
      });
      this.notification.success('User Edited successfully');
    }

      console.log(this.usrService.form.value);
      this.usrService.form.reset();
      this.onClose();

    }
  }
  onClose() {
    this.usrService.form.reset();
    this.dialogRef.close();
  }
  edit(user) {
    this.usrService.EditUser(user);

  }
}
