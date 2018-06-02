import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAcessor } from '../../base-control-value-acessor';

@Component({
  selector: 'app-component-intraction',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: BaseControlValueAcessor,
    multi: true
  }]
})
export class ChildComponent extends BaseControlValueAcessor implements OnInit {


  // we can  Pass data from parent to child with input binding
  // declare input binding and use property in html
  @Input() public label: string;

  constructor() { super(); }

  ngOnInit() {
  }



}
