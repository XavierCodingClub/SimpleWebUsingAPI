import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Needed for requests
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  // Api server address
  server: string = '127.0.0.1';
  port: string = '3000';
  id: number = 0;
  /**
   * Sets the server adress
   * @param server is the api server adress (ex: 127.0.0.1, myapi.com, jsonplaceholder.typicode.com)
   */
  configServer(server: string = '127.0.0.1', port: string = '3000') {
    this.server = server;
  }
  /**
   * Makes a post with given info
   * @param title The title of the new post
   * @param author The author of the new post
   */
  makePost(title: string, author: string) {
    console.log('http://' + this.server + ':' + this.port + '/posts/new');
    this.id++;
    return this.http.post(
      'http://' + this.server + ':' + this.port + '/posts/new',
      { id: this.id, title: title, author: author }
    );
  }
  /**
   * Gets all the posts on API server
   * @returns Observable of the request
   */
  getPosts() {
    this.http
      .get('http://' + this.server + ':' + this.port + '/posts/latestId')
      .subscribe((data: number) => {
        this.id = data;
      });
    return this.http.get('http://' + this.server + ':' + this.port + '/posts');
  }
}
