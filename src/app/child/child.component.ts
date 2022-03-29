import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() userForm: any = [];

  @Output() passedEvent = new EventEmitter();
  
  data: any;

  constructor(public FormsModule: FormsModule) {}

  ngOnInit(): void {}

  PassEvent() {
    this.passedEvent.emit(this.userForm.value);
  }

}

















