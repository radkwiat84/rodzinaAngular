import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Father } from '../../father';
import { FatherService } from '../../shared_service/father.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private father: Father;
  constructor(private _router: Router, private _fatherService: FatherService) { }

  ngOnInit() {
  }

  startEvent() {
    let father = new Father();
    this._fatherService.setter(father);
    this._router.navigate(['/createFather']);
  }


}
