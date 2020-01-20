import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { GroupedObservable } from 'rxjs';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./session-detail.scss'],
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;
  isFavorite = false;
  defaultHref = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    /*const sessionId = this.route.snapshot.paramMap.get('sessionId');
    this.dataProvider.load().subscribe((data: any) => {
      for(const day of data.schedule){
        for(const group of day.groups){
          for(const session of group.sessions){
            if (session.id === sessionId) {
              this.session = session;
              return;
            }
          }
        }
      }
  });*/
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }


  shareSession() {
    console.log('Clicked share session');
  }
}
