import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../../shared_service/family.service';
import { Family } from '../../family';
import { FatherService } from '../../shared_service/father.service';
import { Father } from '../../father';
import { Child } from '../../child';
import { ChildService } from '../../shared_service/child.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-family',
  templateUrl: './read-family.component.html',
  styleUrls: ['./read-family.component.css']
})
export class ReadFamilyComponent implements OnInit {
  private family: Family;
  private father: Father
  private id: Number;
  private firstName: string;
  private secondName: string;
  private birthDate: string;
  private pesel: string;
  private children: Child[] = [];

  constructor(private _familyService: FamilyService, private _fatherService: FatherService, 
        private _childService: ChildService, private _router: Router) { }

  ngOnInit() {
    this._familyService.findCurrentFamily().subscribe((family) => {
      // console.log(family);
      this.family = family;
      this.id = this.family.id;
      // console.log(this.id)
      this._fatherService.getFatherByFamilyId(this.family.id).subscribe((father) => {
        console.log(father);
        this.father = father;
        this.firstName = father.firstName;
        this.secondName = father.secondName;
        this.birthDate = father.birthDate;
        this.pesel = father.pesel;
      }, (error) => {
        console.log(error);
      });
      this._childService.getChildrenIdByFamilyId(this.family.id).subscribe((childrenId) => {
        console.log(childrenId);
        for(let childId of childrenId){
          this._childService.getChildById(childId).subscribe((child)=>{
            this.children.push(child);
          })
        }
      }, (error) => {
        console.log(error);
      });
    });
  }

  goToTheIndex(){
    this._router.navigate(['']);
  }

}