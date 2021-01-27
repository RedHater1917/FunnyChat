import { Component, OnInit } from '@angular/core';
import { bookService } from '../services/bookService';
import { Book } from '../entities/book';
import { ImageService } from '../services/imageService';


@Component({
  selector: 'app-weaponlist',
  templateUrl: './weaponlist.component.html',
  styleUrls: ['./weaponlist.component.css']
})
export class WeaponlistComponent implements OnInit {
  books?: any[];
  constructor(private bookService:bookService, private imageService:ImageService) { }

  ngOnInit(): void {
  this.loadAll();
  }
  loadAll(): any {
    this.bookService.findAll().subscribe(
      data=>{
        console.log(data);
        this.books = data;
        this.books.forEach(book=>{
          this.imageService.getImageFromWeapon(book.id).subscribe(
            data=>{
                 this.imageService.getImageByName(data.name).subscribe(
                   data=>{
                    book.photo = 'data:image/jpeg;base64,'+ data.picByte;
                   }
                 );
            }
          );
        })
        console.log(this.books);
      }
    );
  }

}
