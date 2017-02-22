import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveformViewmodel } from '../reactiveform.viewmodel';

@Component({
  selector: 'app-reactiveform-child',
  templateUrl: './reactiveform-child.component.html',
  styleUrls: ['./reactiveform-child.component.css']
})
export class ReactiveformChildComponent implements OnInit {

  @Input() fgroup: FormGroup;

  constructor(
    private vm: ReactiveformViewmodel
  ) {

  }

  ngOnInit() {
  }

}
