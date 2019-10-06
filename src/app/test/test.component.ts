import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import TestService from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [TestService]
})
export class TestComponent implements OnInit {

  constructor(private service: TestService) { }

  ngOnInit() {
    let btn$ = document.getElementById('clickBtn') as HTMLButtonElement;

    fromEvent(btn$, 'click')
      .subscribe((event: MouseEvent) => {
        console.log('clicked', event);
      })

    let customObs = this.customObserver();
    customObs.subscribe(
      (data) => {
        console.log('custom observer', data)
      },
      (err) => {
        console.log('custom observer err', err)
      },
      () => {
        console.log('complete observer')
      }
    )

    this.fetchData()
      .subscribe(
        (res) => {
          console.log(res)
        },
        (err) => console.log(err, 'ERR'),
      )


    this.getDataByService();

  }

  customObserver() {
    return new Observable((observer) => {

      let count = 10;
      let next = () => {
        count--;
        observer.next(count);

        if (count !== 0) {
          next();
        } else {
          throw new Error('Value crossed to 0');
        }
      }

      // next
      next();

      // complete
      observer.complete();

      // unsubscribe
      return () => {
        observer.unsubscribe();
      }
    })
  }

  fetchData() {
    let httpRequest = fetch('https://jsonplaceholder.typicode.com/todos/1');

    return from(httpRequest)
      .pipe(
        switchMap(res => {
          return res.json();
        })
      );
  }

  getDataByService() {
    this.service
      .fetchTodo()
      .subscribe(todo => {
        console.log('todo by service', todo)
      })
  }

}
