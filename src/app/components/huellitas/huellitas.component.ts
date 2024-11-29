import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-huellitas',
  templateUrl: './huellitas.component.html',
  styleUrls: ['./huellitas.component.css'],
})
export class HuellitasComponent implements OnInit {
  huellitasList = [
    {
      name: 'Logan - Pitbull',
      img: '../../../assets/images/Logan1.jpeg',
      alt: 'Logan1',
    },
    {
      name: 'Cloe - Chausie',
      img: '../../../assets/images/Cloe.jpeg',
      alt: 'Cloe',
    },
    {
      name: 'Gaia - Rottweiler',
      img: '../../../assets/images/Gaia.jpeg',
      alt: 'Gaia',
    },
    {
      name: 'Logan - Pitbull',
      img: '../../../assets/images/Logan2.jpeg',
      alt: 'Logan2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
