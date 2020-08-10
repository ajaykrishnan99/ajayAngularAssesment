import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkparam',
  templateUrl: './checkparam.component.html',
  styleUrls: ['./checkparam.component.css']
})
export class CheckparamComponent implements OnInit {
  user:{id:number,name:string}
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
  }

}
