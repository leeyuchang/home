import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LinkService } from '../../link.service';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private linkService: LinkService) { }

  ngOnInit() {

    this.addForm = this.fb.group({
      id: [],
      title: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  onSubmit() {
    this.linkService.createLink(this.addForm.value).subscribe(
      data => {
        alert('登録完了');
        this.router.navigate(['list-link']);
      }
    );
  }
}
