import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css'],
})
export class InputDataComponent implements OnInit {
  constructor(private api: ApiService) {}
  postTitle: FormControl = new FormControl('', Validators.required);
  postAuthor: FormControl = new FormControl('', Validators.required);

  status: { success: boolean } = { success: false };
  sendData() {
    const title = this.postTitle.value;
    const author = this.postAuthor.value;
    this.api.makePost(title, author).subscribe((data: { success: boolean }) => {
      this.status = data;
    });
  }
  getStatus() {
    return JSON.stringify(this.status.success);
  }
  ngOnInit(): void {}
}
