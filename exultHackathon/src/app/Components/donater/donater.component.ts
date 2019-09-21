import {Component, OnInit} from '@angular/core';
import {DonaterModel} from '../../models/donater.model';
import {DonaterService} from '../../Services/donater-service.service';

@Component({
  selector: 'app-donater',
  templateUrl: './donater.component.html',
  styleUrls: ['./donater.component.scss']
})
export class DonaterComponent implements OnInit {

  constructor(private donaterService: DonaterService) {
  }

  donater: DonaterModel;

  ngOnInit() {
    //this.donater=this.donaterService.getDonater();
  }

}
