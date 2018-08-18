import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Route, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';


import { UserService } from '../user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  id: string;
  user: User;

  calcForm: FormGroup;
  result = '足し算';

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService, private builder: FormBuilder) { }

  ngOnInit() {
    this.calcForm = new FormGroup({
      fieldOne: new FormControl('0', Validators.required),
      fieldTwo: new FormControl('0', [Validators.required, Validators.maxLength(5)])
    });

    // method#1
    this.id = this.route.snapshot.paramMap.get('id');

    // method#2
    // this.route.params.subscribe(
    //   param => this.id = param['id']
    // );
    this.userService.getUserById(this.id).subscribe(user => this.user = user);
  }

  get fieldOne() {
    return this.calcForm.get('fieldOne');
  }

  get fieldTwo() {
    return this.calcForm.get('fieldTwo');
  }

  backToList() {
    this.location.back();
  }

  addAnyway() {
    this.result = this.fieldOne.value + this.fieldTwo.value;
  }

  clearResult() {
    this.result = '';
  }



}
