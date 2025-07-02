import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new  EventEmitter<string>();
  imageDefault = './assets/images/default.jpg'
  constructor() { }


  ngOnInit(): void {
  }
  //imagen que quedara por defecto en caso de que el enlace sea vacido
  imgError(){
    this.img = this.imageDefault;

  }
  //se crea el evento del hijo hacia el padre, donde adjuntara el enlace original de la imagen
  imgLoad(){
    console.log('Log Hijo');
    this.loaded.emit(this.img);
  }

}
