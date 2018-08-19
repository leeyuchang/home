import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LinkService } from '../../link.service';
import { Router } from '@angular/router';
import { Link } from '../../model/Link';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-link',
  templateUrl: './edit-link.component.html',
  styleUrls: ['./edit-link.component.css']
})
export class EditLinkComponent implements OnInit {

  link: Link;
  editForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private linkService: LinkService, private location: Location) { }

  // TODO：ngOnInitの起動時点をまとめる。
  ngOnInit() {
    const linkId = localStorage.getItem('editLinkId');
    if (!linkId) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.fb.group({
      id: [],
      title: ['', Validators.required],
      url: ['', Validators.required]
    });
    this.linkService.getLinkById(linkId).subscribe(data => this.editForm.setValue(data));
  }

  onSubmit() {
    this.linkService.updateLink(this.editForm.value).pipe(first()).subscribe(
      data => {
        alert('更新完了');
        this.router.navigate(['list-link']);
        // TODO:応答電文の確認用
        console.log(data);
      },
      error => {
        alert(error);
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
