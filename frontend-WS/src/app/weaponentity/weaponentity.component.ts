import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bookService } from '../services/bookService';
import { ActivatedRoute, Router, UrlHandlingStrategy } from '@angular/router';
import { Book } from '../entities/book';
import { Image } from '../entities/image';
import { ImageService } from '../services/imageService';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER } from '@angular/cdk/overlay/overlay-directives';

@Component({
  selector: 'app-weaponentity',
  templateUrl: './weaponentity.component.html',
  styleUrls: ['./weaponentity.component.css']
})
export class WeaponentityComponent implements OnInit {

  constructor(
    private weaponService:bookService,
    private route: ActivatedRoute,
    private imageService:ImageService,
    private router: Router) { }
  maxByte=1048576;
  book:Book;
  new:boolean;
  newImage:boolean;
  max:boolean;
  selectedFile: File;
  retrievedImage:any;
  ngOnInit(): void {
    this.book = new Book();
    if(this.route.snapshot.params['id']=='new'){
      this.new = true;
    }
    else
    {
      this.getWeaponData();
    }
  }

  public onFileChanged(event) {
    //Select File
    this.newImage=true;
    this.selectedFile = event.target.files[0];
    const file = (event.target as HTMLInputElement).files[0];
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.retrievedImage = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  saveWeapon(){
    let result = new Book();
    result.id = this.book.id;
    result.name = this.book.name;
    result.izdat = this.book.izdat;
    result.year = this.book.year;
    result.description = this.book.description;
    result.photo = this.book.photo;
    console.log(this.book);
  if(this.retrievedImage!=null)
    {
       if(this.new || this.newImage){
         if(this.selectedFile.size<=this.maxByte){
          this.imageService.loadImage(this.selectedFile).subscribe(
            data=>{
              result.photo=data.body;
          this.weaponService.postDataInDB(result).subscribe(s=>{
            this.router.navigateByUrl(`books`)});
              }
          );
          }else{
            this.max=true;
          }
      }else{
        this.weaponService.postDataInDB(result).subscribe(s=>{
          this.router.navigateByUrl(`books`)
        });
      }
    }
  }

  getWeaponData(){
    this.weaponService.find(this.route.snapshot.params["id"]).subscribe(
      data=>{
        this.book.id = data.body.id;
        this.book.izdat = data.body.izdat;
        this.book.year = data.body.year;
        this.book.name = data.body.name;
        this.book.description = data.body.description;
        console.log(this.book);
        this.imageService.getImageFromWeapon(data.body.id).subscribe(
          data=>{
               this.book.photo = data;
               this.imageService.getImageByName(data.name).subscribe(
                 data=>{
                  this.retrievedImage = 'data:image/jpeg;base64,'+ data.picByte;
                 }
               );
          }
        );
      }
    );
  }
}
