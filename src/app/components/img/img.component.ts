import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'valor init';
  imageDefault = './assets/images/default.jpg'
  constructor() { }

  ngOnInit(): void {
  }
  //imagen que quedara por defecto en caso de que el enlace sea vacido
  imgError(){
    this.img = this.imageDefault;

  }

}
