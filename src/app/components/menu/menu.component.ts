import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FatherService } from '../../shared_service/father.service';
import { ChildService } from '../../shared_service/child.service';
import { Father } from '../../father';
import { Child } from '../../child';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // private child: Child;

  constructor(private _router: Router, private _fatherService: FatherService, private _childService: ChildService) { }

  ngOnInit() {
  }

  startEvent() {
    let father = new Father();
    this._fatherService.setter(father);
    this._router.navigate(['createFather']);
  }

  searchEngine(){
    let child = new Child();
    // this.child = child;
    this._childService.setter(child);
    this._router.navigate(['searchEngine']);
  }

}
