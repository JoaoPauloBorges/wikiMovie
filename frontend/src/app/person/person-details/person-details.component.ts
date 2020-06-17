import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../person';
import { PersonService } from './person.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  @Input() consulting: boolean;
  roles: string[] = ['actor', 'director', 'writer'];
  personForm: FormGroup;
  @Input() person: Person;
  constructor(
    private formBuilder: FormBuilder,
    private service: PersonService) { }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      name: [this.person?.name, Validators.required],
      bio: [this.person?.bio],
      bornAt: [this.person?.bornAt],
      role: [this.person?.role.toLowerCase(), Validators.required],
      imgUrl: [''],
      id: [this.person?.id]
    });

  }

  onSubmit(movieId) {
    if (this.personForm.valid && !!movieId) {
      this.service.associatePersonMovie(movieId, this.personForm.value).subscribe(res => {
      }, err => {
        console.log(err);
      });
    } else {
      console.log('person form not valid to submit');
    }
  }

}
