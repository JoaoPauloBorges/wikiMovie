import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API = 'api/files/';

@Injectable({ providedIn: 'root' })

export class UploaderService {

  constructor(private http: HttpClient) { }

  submitImage(formData) {
    return this.http
      .post(API, formData, {
        reportProgress: true,
        observe: 'events',
      });
  }

  deleteImage(filename: string) {
    return this.http
    .delete(API + filename, {observe: 'body'});
  }
}

