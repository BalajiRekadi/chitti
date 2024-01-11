import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, from, map, of } from 'rxjs';
import { IState } from 'src/app/store/chits.reducer';
import { Chit } from 'src/app/types/Chit';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private store: Store<IState>) {}

  chit!: Chit;

  ngOnInit(): void {
    this.store
      .select((state: any) => state.chit)
      .subscribe((data) => {
        const chits = data.chits.filter(
          (item: any) => item.id === data.selectedChitId
        );
        if (chits.length) {
          this.chit = chits[0];
        }
      });
  }
}
