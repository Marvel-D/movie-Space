import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get(
      // 'https://www.carboninterface.com/api/v1/estimates'
      'https://api.themoviedb.org/3/movie/upcoming?api_key=245084e9eab74be131469895e4ac30c0'
    );
  }

  getClimateApi() {
    return this.http.get(
      'http://api.airvisual.com/v2/countries?key=05833a38-1653-4288-a57f-c5fdba31b50a'
    );
  }
}
