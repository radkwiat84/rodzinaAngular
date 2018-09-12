import { Component, OnInit } from '@angular/core';
import { ChildService } from '../../shared_service/child.service';
import { Child } from '../../child';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-child-decision',
  templateUrl: './add-child-decision.component.html',
  styleUrls: ['./add-child-decision.component.css']
})
export class AddChildDecisionComponent implements OnInit {
  private child: Child;

  constructor(private _childService: ChildService, private _router: Router) { }

  ngOnInit() {
    this.child = this._childService.getter();
  }

  processForm(){
    this._childService.addChildToFamily(this.child).subscribe((child)=>{
      console.log(child);
    }, (error)=>{
      console.log(error);
    })
    this._router.navigate(['addChildToFamily']);
  }

  back(){
    this._router.navigate(['addChildToFamily']);
  }

}
