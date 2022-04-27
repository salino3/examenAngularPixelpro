import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  copyPoliticaPrivacidad: any;
  click: boolean = false;

  isDisplay = false;

  constructor(private window: Window, public FormsModule: FormsModule) {}

  ngOnInit(): void {}

  passEvent() {
    this.passedEvent.emit(this.userForm.value);
  }


  copyDivToClipboard() {
    var range = document.createRange();
    const politicaPrivacidad = document.getElementById('politicaPrivacidad');
    range.selectNode(politicaPrivacidad as Node);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // to deselect

    this.click = !this.click;
  }


  removeHtmlTags(text: string): string {
    return text.replace(/<[^>]*>?/gm, '');
  }
}
