import { Component, OnInit } from '@angular/core';
import { FatherService } from '../../shared_service/father.service';
import { Father } from '../../father';
import { Child } from '../../child';
import { ChildService } from '../../shared_service/child.service';

@Component({
  selector: 'app-get-family',
  templateUrl: './get-family.component.html',
  styleUrls: ['./get-family.component.css']
})
export class GetFamilyComponent implements OnInit {

  private father: Father;
  private children: Child[] = [];
  private familyId: Number;

  constructor(private _fatherService: FatherService, private _childService: ChildService) { }

  ngOnInit() {
    this.father = this._fatherService.getter();
    this.familyId = this.father.family.id;

    this._childService.getChildrenIdByFamilyId(this.father.family.id).subscribe((childrenId) => {
      for (let childId of childrenId) {
        this._childService.getChildById(childId).subscribe((child) => {
          this.children.push(child);
        })
      }
    }, (error) => {
      console.log(error);
    })



  }



}
