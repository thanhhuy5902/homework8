import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/Article';
import { DataState } from 'src/app/ngrx/states/data.state';
import { ApiService } from 'src/app/services/api.service';
import * as DataActions from '../../ngrx/actions/data.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  articlelist$: Observable<Article[]> = this.store.select('data', 'articalist');
  constructor(
    private ApiService: ApiService,
    private store: Store<{ data: DataState }>
  ) {
    this.store.dispatch(DataActions.get());
    console.log(this.articlelist$);
  }
}
