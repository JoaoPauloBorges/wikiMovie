import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  @Input() consulting: boolean;
  roles: string[]  = ['actor', 'director', 'writer'];
  personForm: FormGroup;
  @Input() person: Person;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      name: [this.person?.name, Validators.required],
      bio: [this.person?.bio],
      born: [this.person?.bornAt],
      role: [this.person?.role.toLowerCase(), Validators.required],
      imgUrl: ['']
    });
  }

  onSubmit() {

  }

}
