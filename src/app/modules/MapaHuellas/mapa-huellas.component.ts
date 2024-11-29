import { Component, OnInit } from '@angular/core';
import {
  latLng,
  tileLayer,
  marker,
  icon,
  Map,
  Marker,
  LeafletMouseEvent,
} from 'leaflet';

@Component({
  selector: 'app-mapa-huellas',
  templateUrl: './mapa-huellas.component.html',
  styleUrls: ['./mapa-huellas.component.css'],
})
export class MapaHuellasComponent implements OnInit {
  mapOptions: any; // Opciones iniciales del mapa
  userLocationMarker?: Marker; // Marcador de la ubicación del usuario
  private mapInstance!: Map; // Referencia a la instancia de Leaflet Map

  constructor() {}

  ngOnInit(): void {
    this.trackUserLocation();
  }

  /**
   * Inicializa las opciones básicas del mapa
   */
  private initializeMapOptions(userLat: number, userLng: number): void {
    this.mapOptions = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }),
      ],
      zoom: 14,
      center: latLng(userLat, userLng), // Centro inicial del mapa (Cali, Colombia)
    };
  }

  addMarker(lat: number, lng: number): void {
    const markerClick = marker([lat, lng], {
      icon: icon({
        iconUrl: 'assets/user-location-icon.svg', // Icono personalizado
        iconSize: [30, 30], // Ajusta el tamaño del icono
      }),
    }).addTo(this.mapInstance);

    // Opcional: Agregar un popup al marcador
    markerClick
      .bindPopup(`Coordenadas: ${lat.toFixed(5)}, ${lng.toFixed(5)}`)
      .openPopup();
  }

  /**
   * Método ejecutado cuando el mapa está listo
   * @param map Instancia del mapa Leaflet
   */
  onMapReady(map: Map): void {
    this.mapInstance = map;
    this.trackUserLocation();

    this.mapInstance.on('click', (event: LeafletMouseEvent) => {
      const { lat, lng } = event.latlng;
      this.addMarker(lat, lng);
    });
  }

  /**
   * Rastrea la ubicación del usuario y actualiza el marcador
   */
  private trackUserLocation(): void {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          this.initializeMapOptions(userLat, userLng);

          // Si ya existe un marcador, actualízalo; si no, créalo
          if (this.userLocationMarker)
            this.userLocationMarker.setLatLng([userLat, userLng]);
          else
            this.userLocationMarker = marker([userLat, userLng], {
              icon: icon({
                iconUrl: 'assets/user-location-icon.svg', // Ruta del ícono del usuario
                iconSize: [70, 70],
              }),
            })?.addTo(this.mapInstance);
        },
        (error) =>
          console.error('Error al obtener la ubicación del usuario:', error),
        {
          enableHighAccuracy: true,
          maximumAge: 0,
        }
      );
    } else console.warn('Geolocalización no es soportada en este navegador.');
  }
}
