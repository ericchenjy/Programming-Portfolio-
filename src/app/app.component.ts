import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'website';

  constructor(private router: Router){}

  ngOnInit(): void{

    this.router.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        window.scrollTo(0,0);
      }
    })
  }


}
