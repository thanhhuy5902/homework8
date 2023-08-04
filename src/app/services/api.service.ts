import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get<Article[]>(
      'https://social.runwayclub.dev/api/articles/latest'
    );
  }
}
