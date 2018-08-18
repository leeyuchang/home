import { Component, OnInit } from '@angular/core';
import { Link } from '/projects/gaga/src/app/model/link';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { LinkService } from '../../link.service';
@Component({
  selector: 'app-list-link',
  templateUrl: './list-link.component.html',
  styleUrls: ['./list-link.component.css']
})
export class ListLinkComponent implements OnInit {

  links: Link[];

  constructor(private router: Router, private linkService: LinkService) { }

  ngOnInit() {
    this.linkService.getLinks().subscribe(
      data => {
        this.links = data;
        console.log(data.values);
      }
    );
  }

  deleteLink(link: Link): void {
    this.linkService.deleteLink(link.id.toString()).
      subscribe(
        data => {
          this.links.filter(u => u !== link);
        });
  }

  editLink(link: Link): void {
    localStorage.removeItem('editLinkId');
    localStorage.setItem('editLinkId', link.id.toString());
    this.router.navigate(['edit-link']);
  }

  addLink(): void {
    this.router.navigate(['add-link']);
  }

  addUser(): void {

  }
}
