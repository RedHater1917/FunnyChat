import { Component, OnInit } from '@angular/core';
import { Book } from '../entities/book';
import { bookService } from '../services/bookService';
import { ImageService } from '../services/imageService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books:any[];
  srch:string;
  constructor(private bookService:bookService, private imageService:ImageService) { }

  ngOnInit(): void {
    this.bookService.findAll().subscribe(all=>{
      this.books=all;
      this.books.forEach(book=>{
        book.description = book.description.slice(0,30)+"...";
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
    })
  }
  search(){
    if(this.srch==""){
      this.bookService.findAll().subscribe(all=>{
        this.books=all;
        this.books.forEach(book=>{
          book.description = book.description.slice(0,30)+"...";
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
      })
    }else{
      this.bookService.searchForContaining(this.srch).subscribe(find=>{
        this.books=find;
        this.books.forEach(book=>{
          book.description = book.description.slice(0,30)+"...";
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
      })
    }
    }
}
