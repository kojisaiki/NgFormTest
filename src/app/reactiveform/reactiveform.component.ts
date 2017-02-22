import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  fgroup: FormGroup;

  constructor(
  ) {

  }

  ngOnInit() {
    this.fgroup = new FormGroup({
      parentform1: new FormControl('p', Validators.required),
      childform1: new FormControl('c', Validators.required)
    });
  }

  getmodel() {
    alert("value:" + JSON.stringify(this.fgroup.value) + ", valid:" + this.fgroup.valid);
  }

}
