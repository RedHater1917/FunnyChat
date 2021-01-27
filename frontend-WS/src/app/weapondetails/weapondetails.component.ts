import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../entities/book';
import { ImageService } from '../services/imageService';
import { bookService } from '../services/bookService';
@Component({
  selector: 'app-weapondetails',
  templateUrl: './weapondetails.component.html',
  styleUrls: ['./weapondetails.component.css']
})
export class WeapondetailsComponent implements OnInit {

  book:Book;
  image:any;
  constructor(
     private httpClient: HttpClient,
     private bookService:bookService,
     private route: ActivatedRoute,
     private imageService:ImageService,
     ) { }

  ngOnInit(): void {
    this.loadWeapon(this.route.snapshot.params['id']);
  }
  loadWeapon(id:number){
    this.bookService.find(id).subscribe(
      data=>{
        this.book = data.body;
        this.imageService.getImageFromWeapon(data.body.id).subscribe(
          data=>{
            this.imageService.getImageByName(data.name).subscribe(
              data=>{
                this.image = 'data:image/jpeg;base64,'+ data.picByte;
              }
            )
          }
        );
      }
    );
  }
}
