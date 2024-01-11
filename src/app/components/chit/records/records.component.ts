import { Component } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { RecordFormComponent } from '../../record-form/record-form.component';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent {
  constructor(private modalService: ModalService) {}

  onRecordClick() {
    this.modalService.openDialog(RecordFormComponent);
  }
}
