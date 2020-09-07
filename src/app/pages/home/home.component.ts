import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from './services/home.service';
import { Request } from './domain/request'
import { AppRoutes } from '../../app-routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _form: FormGroup;
  private _neighborhoods = new Array<string>();
  private _tags = new Array<string>();

  constructor(
    private _fb: FormBuilder,
    private _homeService: HomeService,
    private _router: Router) {
    this._form = this.initForm();
    this._homeService.locations()
      .then(data => {
        this._neighborhoods = data
      })
    this._homeService.tags()
      .then(data => {
        this._tags = data
      })
  }

  ngOnInit(): void {
  }

  private initForm(): FormGroup {
    return this._fb.group({
      neighborhood: ['', [Validators.required]],
      tags: ['', null],
      pax: [1, null]
    })
  }

  onSubmit() {
    if (this._form.valid) {
      console.log(this._form.value)
      const request = new Request(this._form.value);
      this._router.navigate([AppRoutes.BASE_PATH, AppRoutes.APPARTMENT], { queryParams: request })
    }
  }

  get form(): FormGroup {
    return this._form;
  }

  get neighborhoods(): Array<string> {
    return this._neighborhoods;
  }
  get tags(): Array<string> {
    return this._tags;
  }

  get dropdownSettings() {
    return {
      singleSelection: false,
      enableCheckAll: false,
      itemsShowLimit: 3,
      limitSelection: 5,
      allowSearchFilter: false
    }
  }
}
