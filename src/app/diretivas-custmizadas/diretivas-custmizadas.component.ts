import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivas-customizadas',
  templateUrl: './diretivas-custmizadas.component.html',
  styleUrls: ['./diretivas-custmizadas.component.css']
})
export class DiretivasCustmizadasComponent implements OnInit {

  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
