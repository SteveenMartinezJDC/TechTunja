import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string ='';

  @Input('img')
  set changeImg(newImg:string){
    this.img = newImg;
    console.log('change just img  =>',this.img);  //FORMA ESPECIFICA DE MOSTRAR EL ESTADO DE ESE COMPONEENTE
  }
  @Input() opcion2: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.jpg';
  counter = 0;
  counterFn: number | undefined;
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    //before render
    //No sync -- once time - UNA VEZ
    console.log('contructor', 'imgValue =>', this.img);
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnChanges(changes:SimpleChanges) {
    //BEFORE RENDER
    //DETECTA LOS CAMBIOS EN LOS INPUTS --times
    console.log('ngOnChan\nges', 'imgValue =>', this.img);
    console.log('changes',changes);  //aca te mostrara el estado anterior del input y el actual, tambien hay que tener en cuenta que puede mostrarte cualquier tipo de input, o todos los inputs que cambiaron a la vez.

    //SE PODRIA EVALUAR LOS CAMBIOS POR CADA INPUT, O SE PODRIA HACERLOS TODDOS A LA VEZ SIN NINGUN TIPO DE CONDICIONAL
  }
  ngOnInit(): void {
    //BEFORE RENDER
    //ASYNC - FETCH -- ONE TIME
    console.log('ngOnInit', 'imgValue =>', this.img);
    if (this.isBrowser) {
      this.counterFn = window.setInterval(() => {  //RELOJ EN LINEA
        this.counter += 1;
        console.log('run counter');
      }, 1000); //Se le asigna el tiempo en que requiere para que dé el uso de esta función
    }
  }

  ngAfterViewInit() {
    //after render
    //handler children -- one time
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    //delete
    console.log('ngOnDestroy');
    if (this.isBrowser && this.counterFn) {
      window.clearInterval(this.counterFn);
    }
  }

  //imagen que quedará por defecto en caso de que el enlace sea VACÍO
  imgError() {
    this.img = this.imageDefault;
  }

  //se crea el evento del hijo hacia el padre, donde adjuntará el enlace original de la imagen
  imgLoad() {
    console.log('Log Hijo');
    this.loaded.emit(this.img);
  }

}
