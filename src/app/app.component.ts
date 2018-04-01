import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
  styles: [
    `input.ng-invalid.ng-touched { border: solid red 1px }`,
    `.error { color: red }`,
    `.container {margin-top: 3%;}`,
    `.code {
      background-color: #f2f2f2;
      border: 1px solid silver;
      margin-top: 10px;
      border-radius: 5px;
    }`,
      `label {
      font-weight: 800;
    }`
  ]
})
export class AppComponent implements OnInit {
  answers = [{
    type: 'yes',
    text: 'да'
  },
    {
      type: 'no',
      text: 'нет'
    }
  ];

  charsCount = 5;

  isSubmited = false;

  form: FormGroup;

  onSubmit() {
    console.log('Submitted');
    console.log(this.form);
    this.isSubmited = true;
  }

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('defaultValue', [ Validators.required, Validators.email ] ),
        password: new FormControl( '', [Validators.required , this.checkForLength.bind(this)] )
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  checkForLength(control: FormControl) {
    if (control.value.length <= this.charsCount) {
      return {'lengthError': true};
    }
    return null;
  }
}
