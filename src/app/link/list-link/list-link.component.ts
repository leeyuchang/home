import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from '../../model/link';
import { LinkService } from '../../link.service';

@Component({
  selector: 'app-list-link',
  templateUrl: './list-link.component.html',
  styleUrls: ['./list-link.component.css']
})
export class ListLinkComponent implements OnInit {

  links: Link[];

  constructor(private router: Router, private linkService: LinkService, private location: Location) { }

  ngOnInit() {
    this.linkService.getLinks().subscribe(
      data => {
        this.links = data;
      },
      error => {
        alert('Invalid action.');
      }
    );
  }

  deleteLink(link: Link): void {
    this.linkService.deleteLink(link.id.toString()).
      subscribe(
        data => {
          this.links = this.links.filter(l => l.id !== link.id);
          alert('削除完了');
        },
        error => {
          alert('Invalid action.');
        }
      );
  }

  editLink(link: Link): void {
    localStorage.removeItem('editLinkId');
    localStorage.setItem('editLinkId', link.id.toString());
    this.router.navigate(['edit-link']);
  }

  addLink(): void {
    this.router.navigate(['add-link']);
  }

  trackFn(index: any, link: any) {
    return link.id;
  }
}
