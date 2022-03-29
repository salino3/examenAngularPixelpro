import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidateUrl } from '../validators/url.validators';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @Output() passedEvent = new EventEmitter();
  data: any = '';
  post: any = '';

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      url: ['', Validators.required],
      url2: ['', Validators.required],
      checkbox: ['', Validators.required],
      nombre: ['', Validators.required],
      documento: ['', Validators.required],
      address: ['', Validators.required],
      tel: ['', Validators.required],
      numfax: '',
      email: ['', [Validators.required, ValidateUrl]],
    });
  }
  click: boolean = false;

  onSubmit2(data: any) {
    console.log(data);
    this.click = !this.click;
  }

  AddPost(post: any) {
    this.click = !this.click;
  }

  PassEvent() {
    this.passedEvent.emit(this.post);
    this.passedEvent.emit(this.data);
    this.passedEvent.emit(this.userForm.value);
  }

  isDisplay = false;
}
