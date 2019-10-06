import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.db.collection('todos')
      .valueChanges()
      .subscribe(data => {
        console.log(data)
      })
  }

}
