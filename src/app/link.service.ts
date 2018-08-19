import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Link } from './model/Link';
@Injectable({
  providedIn: 'root'
})
export class LinkService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/api/link';
  // baseUrl = 'https://powerful-sierra-61218.herokuapp.com/api/link';

  getLinks() {
    return this.http.get<Link[]>(this.baseUrl);
  }

  getLinkById(id: string) {
    return this.http.get<Link>(this.baseUrl + '/' + id);
  }

  createLink(link: Link) {
    return this.http.post(this.baseUrl, link);
  }

  updateLink(link: Link) {
    return this.http.put(this.baseUrl + '/' + link.id, link);
  }

  deleteLink(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
