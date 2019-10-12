import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { inrcemnet, dercemnet } from './actions/counter.action';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ngrx-tut";
  count: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count = store.pipe(select('count'));
  }


  onDecrement() {
	this.store.dispatch(dercemnet());
  }

  onIncrement(){
	this.store.dispatch(inrcemnet());
  }

}
