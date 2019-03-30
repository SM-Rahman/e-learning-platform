import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Author } from '../models/author.model';
import { Course } from '../models/course.model';

@Injectable()
export class CourseService {
  public readonly API_URL = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  public getCourses(textFragment = '', to: number, from = 0): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(`${this.API_URL}/courses`, {
      params: new HttpParams()
        .set('textFragment', `${textFragment}`)
        .set('start', `${from}`)
        .set('count', `${to}`)
    });
  }

  public createCourse(newCourse: Course): Observable<Course> {
    return this.http.post<Course>(`${this.API_URL}/courses`, newCourse);
  }

  public getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${this.API_URL}/courses/${courseId}`);
  }

  public updateCourse(oldCourse: Course, newCourse: Course): Observable<Course> {
    return this.http.put<Course>(`${this.API_URL}/courses/${oldCourse.id}`, newCourse);
  }

  public removeCourse(courseId: number): Observable<{}> {
    return this.http.delete<Course>(`${this.API_URL}/courses/${courseId}`);
  }

  public getAuthors(textFragment = ''): Observable<Array<Author>> {
    return this.http.get<Array<Author>>(`${this.API_URL}/authors`, {
      params: new HttpParams()
        .set('textFragment', `${textFragment}`)
    });
  }
}
