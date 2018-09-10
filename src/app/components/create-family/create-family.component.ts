import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../../shared_service/family.service';
import { Family } from '../../family';
import { Father } from '../../father';
import { Child } from '../../child';
import { FatherService } from '../../shared_service/father.service';
import { ChildService } from '../../shared_service/child.service';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.css']
})
export class CreateFamilyComponent implements OnInit {
  private id: Number;
  private family: Family;
  private fathers: Father[];
  private children: Child[];



  constructor(private _familyService: FamilyService, private _fatherService: FatherService, private _childService: ChildService) { }

  ngOnInit() {
    this.family = this._familyService.getter();
    let id = this.id = this.family.id;

    this._fatherService.readFathers().subscribe((fathers) => {
      let fathersWithoutFamily: Father[] = [];
      for (let father of fathers) {
        if (father.family == null) {
          fathersWithoutFamily.push(father);
        }
      }
      this.fathers = fathersWithoutFamily;
    }, (error) => {
      console.log(error);
    });

    this._childService.readChildren().subscribe((children) => {
      let childrenWithoutFamily: Child[] = [];
      for (let child of children) {
        if (child.family == null) {
          childrenWithoutFamily.push(child);
        }
      }
      this.children = childrenWithoutFamily;
    }, (error) => {
      console.log(error);
    })
  }

}
