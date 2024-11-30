// info-user.component.ts
import { Component, OnInit } from '@angular/core';
import { MapServiceService } from '@services/Map/map-service.service'; // Importar el servicio

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css'],
})
export class InfoUserComponent implements OnInit {
  user: any = {}; // Para almacenar la información del usuario

  constructor(private mapService: MapServiceService) {}

  ngOnInit(): void {
    this.getUserInfo(); // Llamada al servicio para obtener la información del usuario
  }

  // Método para obtener la información del usuario
  getUserInfo(): void {
    this.mapService.infoUser = this.user;
  }
}
