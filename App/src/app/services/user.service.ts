import { Injectable } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { User } from '../users/list/list.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [ Validators.required, Validators.email]),
    phone: new FormControl('' , [ Validators.required, Validators.minLength(8)]),
    status: new FormControl('', Validators.required)
  });
  users: Array<User> = [];

  getAllUsers() {
    // console.log('get data');
    return this.http.get('http://localhost:3000/users');

  }
  addUser(user) {
    // console.log(user);
    return this.http.post('http://localhost:3000/users/', user);
  }
  EditUser(user) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.form.setValue(user);
    return this.http.put('http://localhost:3000/users/' + user.id , user);

  }
  DeleteUser(id) {
    return this.http.delete('http://localhost:3000/users/' + id);
  }
}
