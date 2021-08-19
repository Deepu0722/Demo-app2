import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-router1comp1',
  templateUrl: './router1comp1.component.html',
  styleUrls: ['./router1comp1.component.css']
})
export class Router1comp1Component implements OnInit {
  
  public itemId:any ;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    //this.itemId = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((param: ParamMap) => {
           this.itemId = param.get('id');
    });
  }
  onBack(){
    let _id = parseInt(this.itemId) - 1 ;
    //this.router.navigate(['/route1', parseInt(this.itemId) - 1]);
    this.router.navigate( ['..',_id] ,{ relativeTo: this.route });
    
  }
  onNext(){
   //this.router.navigate(['/route1', parseInt(this.itemId) + 1]);
    let _id = parseInt(this.itemId) + 1 ;
    this.router.navigate(['..',_id],{ relativeTo: this.route});
  }

  onListClick(){
    //this.router.navigate(['/route1', {'id':this.itemId}]);
     this.router.navigate(['../', {'id': this.itemId}],
                            {relativeTo: this.route})
  }

  onOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route});
  }

}
