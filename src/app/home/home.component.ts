import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  ngOnInit(): void {

    this.inTheaters = [{
      title: 'Test1',
      releaseDate: new Date(),
      price: 200,
      poster:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzNC42SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-nmwukaluxy-portrait.jpg'
    },
    {
      title: 'Test2',
      releaseDate: new Date(),
      price: 400,
      poster:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICA0LjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00118776-mywkpmneqt-portrait.jpg'
    },
    {
      title: 'Test3',
      releaseDate: new Date(),
      price: 500,
      poster:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyNSBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00332998-srerbbxbyd-portrait.jpg'
    },];
    this.futureRelease = [];
    //[{
    //   title: 'future 1',
    //   releaseDate: new Date(),
    //   price: 200
    // },
    // {
    //   title: 'future 2',
    //   releaseDate: new Date(),
    //   price: 400
    // }];


  }
  title = 'my-movies';


  movies: any;

  inTheaters;
  futureRelease;
}
