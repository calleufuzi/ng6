import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger , style, transition, animate, keyframes, query, stagger } from '@angular/animations'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', 
        [
          style({opacity: 0, transform: 'traslateY(-15px)'}),
          stagger('50ms',
          animate('550ms ease-out',
          style({ opacity:1, transform: 'traslateY(0px)'})))
        ], { optional: true}), 
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class PostComponent implements OnInit {
  posts$: Object;

  constructor(private data: DataService) {

   }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    )
  }


}
