import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Request } from './domain/request'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _form: FormGroup;

  private _neighborhoods = [
    "Abrantes",
    "Acacias",
    "Adelfas",
    "Aeropuerto",
    "Aguilas",
    "Alameda de Osuna",
    "Almagro",
    "Almenara",
    "Almendrales",
    "Aluche",
    "Ambroz",
    "Amposta",
    "Apostol Santiago",
    "Arapiles",
    "Aravaca",
    "Arcos",
    "Argüelles",
    "Atocha",
    "Bellas Vistas",
    "Berruguete",
    "Buenavista",
    "Butarque",
    "Campamento",
    "Canillas",
    "Canillejas",
    "Casa de Campo",
    "Casco Histórico de Barajas",
    "Casco Histórico de Vallecas",
    "Casco Histórico de Vicálvaro",
    "Castellana",
    "Castilla",
    "Castillejos",
    "Chopera",
    "Ciudad Jardín",
    "Ciudad Universitaria",
    "Colina",
    "Comillas",
    "Concepción",
    "Corralejos",
    "Cortes",
    "Costillares",
    "Cuatro Caminos",
    "Cuatro Vientos",
    "Cármenes",
    "Delicias",
    "El Goloso",
    "El Plantío",
    "El Viso",
    "Embajadores",
    "Entrevías",
    "Estrella",
    "Fontarrón",
    "Fuente del Berro",
    "Fuentelareina",
    "Gaztambide",
    "Goya",
    "Guindalera",
    "Hellín",
    "Hispanoamérica",
    "Ibiza",
    "Imperial",
    "Jerónimos",
    "Justicia",
    "La Paz",
    "Legazpi",
    "Lista",
    "Los Angeles",
    "Los Rosales",
    "Lucero",
    "Marroquina",
    "Media Legua",
    "Mirasierra",
    "Moscardó",
    "Niño Jesús",
    "Nueva España",
    "Numancia",
    "Opañel",
    "Orcasitas",
    "Orcasur",
    "Pacífico",
    "Palacio",
    "Palomas",
    "Palomeras Bajas",
    "Palomeras Sureste",
    "Palos de Moguer",
    "Pavones",
    "Peñagrande",
    "Pilar",
    "Pinar del Rey",
    "Piovera",
    "Portazgo",
    "Pradolongo",
    "Prosperidad",
    "Pueblo Nuevo",
    "Puerta Bonita",
    "Puerta del Angel",
    "Quintana",
    "Recoletos",
    "Rejas",
    "Rios Rosas",
    "Rosas",
    "Salvador",
    "San Andrés",
    "San Cristobal",
    "San Diego",
    "San Fermín",
    "San Isidro",
    "San Juan Bautista",
    "San Pascual",
    "Santa Eugenia",
    "Simancas",
    "Sol",
    "Timón",
    "Trafalgar",
    "Universidad",
    "Valdeacederas",
    "Valdefuentes",
    "Valdemarín",
    "Valdezarza",
    "Vallehermoso",
    "Valverde",
    "Ventas",
    "Vinateros",
    "Vista Alegre",
    "Zofío"
  ]

  constructor(private _fb: FormBuilder) {
    this._form = this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm(): FormGroup {
    return this._fb.group({
      neighborhood: ['', null],
      paxes: [1, null]
    })
  }

  onSubmit() {
    console.log(this._form.value)
  }

  makeArr(e) {
    console.log(e);
  }

  get form(): FormGroup {
    return this._form;
  }

  get neighborhoods(): Array<string> {
    return this._neighborhoods;
  }
}
