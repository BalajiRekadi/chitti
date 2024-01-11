import { Component } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { RecordFormComponent } from '../record-form/record-form.component';
import { ChitFormComponent } from '../chit-form/chit-form.component';

@Component({
  selector: 'app-chit',
  templateUrl: './chit.component.html',
  styleUrls: ['./chit.component.css'],
})
export class ChitComponent {
  constructor(private modalService: ModalService) {}
  onAddRecord() {
    this.modalService.openDialog(RecordFormComponent);
  }

  onChitEdit() {
    this.modalService.openDialog(ChitFormComponent);
  }
}
