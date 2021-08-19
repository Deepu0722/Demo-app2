import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {
  public isSelected :any;
  
  public items = [
     {id:1 , name:"Angular"},
     {id:2 , name:"React"},
     {id:3,  name: "javascript"}
  ];
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
              this.isSelected = param.get('id');
    });
  }
  onClickHandler(item:any){
    this.router.navigate(['/route1',item.id]);   
  }
  onSelect(item:any){
   return item.id === parseInt(this.isSelected) ;
  }

}
