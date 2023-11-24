import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {

  }

  model: actorDTO = {
    name: 'Tom Holland',
    dateOfBirth: new Date(),
    picture: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chaar-lugaai-et00358041-1682671655.jpg',
    biography:'This is testing'
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }
  saveChanges(actorCreationDTO: actorCreationDTO) {

  }

}
