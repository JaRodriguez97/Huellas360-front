import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-familias',
  templateUrl: './familias.component.html',
  styleUrls: ['./familias.component.css'],
})
export class FamiliasComponent implements OnInit {
  familyList = [
    {
      name: 'Colitas en Rescate',
      img: '../../../assets/images/centro01.jpg',
      alt: 'centro01',
    },
    {
      name: 'Refugio Vida Animal',
      img: '../../../assets/images/centro02.jpg',
      alt: 'centro02',
    },
    {
      name: 'Almas Felinas y Caninas',
      img: '../../../assets/images/centro03.jpg',
      alt: 'centro03',
    },
    {
      name: 'Patitas en Casa',
      img: '../../../assets/images/centro04.jpg',
      alt: 'centro04',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
