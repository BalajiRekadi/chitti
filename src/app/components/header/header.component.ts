import { Component } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { ChitFormComponent } from '../chit-form/chit-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private modalService: ModalService) {}
  onAddChit() {
    this.modalService.openDialog(ChitFormComponent);
  }
}
