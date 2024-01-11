import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getChitsStart, setSelectedChitId } from 'src/app/store/chits.action';
import { IState } from 'src/app/store/chits.reducer';
import { Chit } from 'src/app/types/Chit';

@Component({
  selector: 'app-chitlist',
  templateUrl: './chitlist.component.html',
  styleUrls: ['./chitlist.component.css'],
})
export class ChitlistComponent implements OnInit {
  constructor(private store: Store<IState>) {}

  chits$: Observable<Chit[]> = new Observable();

  ngOnInit(): void {
    this.store.dispatch(getChitsStart());
    this.chits$ = this.store.select((state) => state.chit.chits);
  }

  onChitSelect(chit: Chit): void {
    this.store.dispatch(setSelectedChitId({ payload: chit.id }));
  }
}
