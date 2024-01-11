import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ModalService } from 'src/app/core/services/modal.service';
import { addChitStart } from 'src/app/store/chits.action';

@Component({
  selector: 'app-chit-form',
  templateUrl: './chit-form.component.html',
  styleUrls: ['./chit-form.component.css'],
})
export class ChitFormComponent {
  constructor(private modal: ModalService, private store: Store) {}

  chitForm: FormGroup = new FormGroup({
    chitName: new FormControl('', Validators.required),
    managerName: new FormControl(''),
    amount: new FormControl('', Validators.required),
    numberOfMonths: new FormControl('', Validators.required),
    notes: new FormControl(''),
  });

  onChitSave(): void {
    if (this.chitForm.valid) {
      this.store.dispatch(addChitStart({ payload: this.chitForm.value }));
    }
  }
}
