import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  primaryBtn = 'Save';

  @Output() onPrimaryBtnClick = new EventEmitter();

  onSaveBtnClick(): void {
    this.onPrimaryBtnClick.emit();
  }
}
