import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  reportes = [
    {
      img: "https://images.ecestaticos.com/K-H13opp5EdmIWo61v0sXMfywco=/0x87:2155x1283/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8ec%2F08c%2F85c%2F8ec08c85c866ccb70c4f1c36492d890f.jpg",
      titulo: 'Perro Perdido',
      descripcion: 'Descripción del reporte 1',
      fechaUltimaVezVisto: '2023-06-10',
      telefono: '123456789',
      pais: 'Paraguay',
      linkCompleto: 'https://www.example.com/reporte1',
      visible: true
    },
    {
      img: "https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.webp?w=1600&h=1067",
      titulo: 'Gato Perdido',
      descripcion: 'Descripción del reporte 2',
      fechaUltimaVezVisto: '2023-06-12',
      telefono: '987654321',
      pais: 'Paraguay',
      linkCompleto: 'https://www.example.com/reporte2',
      visible: false
    },
  ];
  nuevoReporte = {
    img: '',
    titulo: '',
    descripcion: '',
    fechaUltimaVezVisto: '',
    telefono: '',
    pais: 'Paraguay',
    linkCompleto: '',
    visible: true
  };

  agregarReporte() {
    this.reportes.push(this.nuevoReporte);
    this.nuevoReporte = {
      img: '',
      titulo: '',
      descripcion: '',
      fechaUltimaVezVisto: '',
      telefono: '',
      pais: 'Paraguay',
      linkCompleto: '',
      visible: true
    };

   
  }
}
