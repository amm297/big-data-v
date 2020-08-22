import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AppartmentService } from './services/appartment.service';
import { Request } from './domain/request'

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.scss']
})
export class AppartmentComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _appartmentService: AppartmentService) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      const request = new Request(params)
      this._appartmentService.appartments(request).then(data => {
        console.log(data)
      })
    })
  }

}
