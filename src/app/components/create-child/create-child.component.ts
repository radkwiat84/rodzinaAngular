import { Component, OnInit } from '@angular/core';
import { ChildService } from '../../shared_service/child.service';
import { Child } from '../../child';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-child',
  templateUrl: './create-child.component.html',
  styleUrls: ['./create-child.component.css']
})
export class CreateChildComponent implements OnInit {
  private child: Child;

  constructor(private _childService: ChildService, private _router: Router) { }

  ngOnInit() {
    this.child = this._childService.getter();
  }

  processForm(){
    this._childService.createChild(this.child).subscribe((check)=>{
      console.log(check);
    });
    this._router.navigate(['/']);
    (error)=>{
      console.log(error);
    }
  }
}
