import { Component, OnInit } from '@angular/core';
import {DonaterModel} from '../../models/donater.model';

@Component({
  selector: 'app-donater',
  templateUrl: './donater.component.html',
  styleUrls: ['./donater.component.scss']
})
export class DonaterComponent implements OnInit {

  constructor() { }
  donater:DonaterModel;
  ngOnInit() {
  }

}
