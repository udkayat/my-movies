import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.model';
import { coordinatesMap } from 'src/app/utilities/map/coordinate';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {

  }
  form: FormGroup;

  @Input()
  model: movieTheatersDTO;
  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();

  initialCoordinates: coordinatesMap[] = [];
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      longitude: ['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }]
    })
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude:this.model.latitude,longitude:this.model.longitude});
    }
  }
  onSelectedLocation(corrdinates: coordinatesMap) {
    this.form.patchValue(corrdinates);
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

}
