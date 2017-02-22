import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { ReactiveformViewmodel } from './reactiveform.viewmodel';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
  viewProviders: [ReactiveformViewmodel]
})
export class ReactiveformComponent implements OnInit {

  fgroup: FormGroup;

  constructor(
    private vm: ReactiveformViewmodel
  ) {

  }

  ngOnInit() {
    /*
    let group: Object = {};

    this.fgroup = new FormGroup({
      parentform1: new FormControl('p', Validators.required),
      childform1: new FormControl('c')
    });
    */
  }

}
