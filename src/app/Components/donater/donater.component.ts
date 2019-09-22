import {Component, OnInit} from '@angular/core';
import {DonaterModel} from '../../models/donater.model';
import {DonaterService} from '../../Services/donater-service.service';

@Component({
  selector: 'app-donater',
  templateUrl: './donater.component.html',
  styleUrls: ['./donater.component.scss']
})
export class DonaterComponent implements OnInit {
  donater: DonaterModel = new DonaterModel();

  constructor(private donaterService: DonaterService) {

  }


  ngOnInit() {
    //   this.donaterService.donater
    //     .subscribe(res => {
    //       this.donater = res;
    //       console.log(res + ' sent');
    //     });
    this.donaterService.getDonater(1).subscribe(data => {
      this.donater = data;
    });
  }

}
