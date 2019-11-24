import { Injectable } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  form: FormGroup = new FormGroup({
    userName: new FormControl('', [ Validators.required]),
    password: new FormControl('' , [ Validators.required])
  });

}
