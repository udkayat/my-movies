import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent {
 @Input()
  imgURL ;//= "https://i.stack.imgur.com/ATB3o.gif";
  @Input()
  list;
}
