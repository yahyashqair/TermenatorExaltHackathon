import {Component, OnInit} from '@angular/core';
import {DonaterModel} from 'src/app/models/donater.model';
import {DonaterService} from 'src/app/Services/donater-service.service';

@Component({
  selector: 'app-donater-profile',
  templateUrl: './donater-profile.component.html',
  styleUrls: ['./donater-profile.component.scss']
})
export class DonaterProfileComponent implements OnInit {
  donater: DonaterModel = new DonaterModel();


  constructor(private donaterService: DonaterService) {
  }

  ngOnInit() {
    this.donaterService.getDonater(1).subscribe(data => {
      this.donater = data;
    });
  }

}
