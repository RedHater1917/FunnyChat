import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image } from '../entities/image';

type EntityResponseType = HttpResponse<Image>;

@Injectable({ providedIn: 'root' })
export class ImageService {
  
  public resourceUrl = 'http://localhost:48888/images';

  constructor(protected http: HttpClient) {}

  getImageByName(imageName:String):Observable<Image>{
    //Make a call to Sprinf Boot to get the Image Bytes.
    return this.http.get(`${this.resourceUrl}/get/${imageName}`);
  }
   getImageFromWeapon(weaponId:number):Observable<Image>{
    return this.http.get('http://localhost:48888/books/'+weaponId+'/photo');
   }

  loadImage(image:File):Observable<EntityResponseType>{
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', image, image.name);
    return this.http.post(this.resourceUrl+'/upload', uploadImageData, { observe: 'response' });
  }
}