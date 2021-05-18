import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.css'],
})
export class OutputTableComponent implements OnInit {
  constructor(private api: ApiService) {}

  table: HTMLTableElement | undefined = undefined;
  posts: { id: number; title: string; author: string }[];

  getPosts() {
    // Simply update the posts variable
    this.api
      .getPosts()
      .subscribe((data: { id: number; title: string; author: string }[]) => {
        this.posts = data;
      });
  }
  updateTable() {
    // Clear rows
    console.log(this.table.rows.length);
    for (let i = 0; i < this.table.rows.length; i) {
      console.log('Deleted row: ' + i);
      this.table.deleteRow(0);
    }
    console.log('Done deleting');
    // Have to do this becasue of observable
    this.api
      .getPosts()
      .subscribe((data: { id: number; title: string; author: string }[]) => {
        const row = this.table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.setAttribute('style', 'border: 1px solid black;');
        cell2.setAttribute('style', 'border: 1px solid black;');
        cell3.setAttribute('style', 'border: 1px solid black;');
        cell1.innerHTML = 'id';
        cell2.innerHTML = 'title';
        cell3.innerHTML = 'author';
        for (let i = 0; i < data.length; i++) {
          const row = this.table.insertRow();
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          const cell3 = row.insertCell(2);
          cell1.setAttribute('style', 'border: 1px solid black;');
          cell2.setAttribute('style', 'border: 1px solid black;');
          cell3.setAttribute('style', 'border: 1px solid black;');
          cell1.innerHTML = this.posts[i].id.toString();
          cell2.innerHTML = this.posts[i].title;
          cell3.innerHTML = this.posts[i].author;
        }
      });
  }
  getPostsAsString() {
    return JSON.stringify(this.posts);
  }

  ngOnInit(): void {
    // Set table
    this.table = document.getElementById('outTable') as HTMLTableElement;
  }
}
