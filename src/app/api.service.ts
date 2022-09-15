import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'https://portfolio-backendapp.herokuapp.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  headers2 = new HttpHeaders().set('Content-Type', 'multipart/form-data')

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/login`
    return this.http.post(API_URL, data).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }
/*Educacion */
  get_educacion(): Observable<any> {
    let API_URL = `${this.apiUrl}/educacion`
    return this.http.get(API_URL).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  post_educacion(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/educacion`
    return this.http.post(API_URL, data, {headers: this.headers}).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  put_educacion(id: number, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/educacion/${id}`
    return this.http.put(API_URL, data, {headers: this.headers}).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  del_educacion(id: number): Observable<any> {
    let API_URL = `${this.apiUrl}/educacion/${id}`
    return this.http.delete(API_URL).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

/*Experiencia */
  get_experiencia(): Observable<any> {
    let API_URL = `${this.apiUrl}/experiencia-laboral`
    return this.http.get(API_URL).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  post_experiencia(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/experiencia-laboral`
    return this.http.post(API_URL, data, {headers: this.headers}).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  put_experiencia(id: number, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/experiencia-laboral/${id}`
    return this.http.put(API_URL, data, {headers: this.headers}).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  del_experiencia(id: number): Observable<any> {
    let API_URL = `${this.apiUrl}/experiencia-laboral/${id}`
    return this.http.delete(API_URL).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

/*Proyectos*/
  get_proyectos(): Observable<any> {
    let API_URL = `${this.apiUrl}/proyectos`
    return this.http.get(API_URL).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  post_proyectos(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/proyectos`
    return this.http.post(API_URL, data, {headers: this.headers}).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  put_proyectos(id: number, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/proyectos/${id}`
    return this.http.put(API_URL, data, {headers: this.headers}).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  del_proyectos(id: number): Observable<any> {
    let API_URL = `${this.apiUrl}/proyectos/${id}`
    return this.http.delete(API_URL).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

/*Tecnologías*/
  get_tecnologias(): Observable<any> {
    let API_URL = `${this.apiUrl}/tecnologias`
    return this.http.get(API_URL).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  post_tecnologias(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/tecnologias`
    return this.http.post(API_URL, data, {headers: this.headers}).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  put_tecnologias(id: number, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/tecnologias/${id}`
    return this.http.put(API_URL, data, {headers: this.headers}).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  del_tecnologias(id: number): Observable<any> {
    let API_URL = `${this.apiUrl}/tecnologias/${id}`
    return this.http.delete(API_URL).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

/*Persona*/
  get_persona(): Observable<any> {
    let API_URL = `${this.apiUrl}/persona`
    return this.http.get(API_URL).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }
  put_persona(id: number, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/persona/${id}`
    return this.http.put(API_URL, data, {headers: this.headers}).pipe(catchError((error: HttpErrorResponse) => throwError(()=>{return error.error.message})));
  }

  upload_file(file: any): Observable<any> {
    let API_URL = `${this.apiUrl}/file-upload`
    let data = new FormData()
    data.append("file", file)
    return this.http.post(API_URL, data,{responseType: 'text'})
  }


}
