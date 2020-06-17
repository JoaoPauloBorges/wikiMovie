import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

const URL_RENDER = 'api/files/image/';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 650px)'])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  logoPath: Observable<string>;

  constructor(
    private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {

  }

}

