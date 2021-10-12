import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../services/image-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public images = '';
  public categories = [
    { categoryName: 'science', name: 'Ciencia' },
    { categoryName: 'education', name: 'Educacion' },
    { categoryName: 'people', name: 'Personas' },
    { categoryName: 'feelings', name: 'Sentimientos' },
    { categoryName: 'computer', name: 'Computadoras' },
    { categoryName: 'buildings', name: 'Construcciones' },
  ]
  public category;
  public search;
  constructor(private imageService: ImageServiceService) { }

  ngOnInit(): void {
    this.getData()
  }
  /** Función que conecta al servicio y realiza la petición de data de imágenes
   * @returns observable
   */
  getData(cat?) {
    cat != 'none' ? this.category=cat : this.category=null;
    return this.imageService.getImages(this.category ? this.category.categoryName : null, this.search ? this.search : null).subscribe(data => {
      this.images = data.hits;
    })
  }
}
