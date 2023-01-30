import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
// I choose to import the service using it's relative path to avoid having issues with the server

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies?: any = [];
  climateCountry: any = [];
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    // this.movieService.getAllMovies().subscribe((res: any) => {
    //   this.movies = res.results;
    //   console.log(this.movies);
    // });

    this.movieService.getClimateApi().subscribe((res: any) => {
      this.climateCountry = res.country;
      console.log(this.climateCountry);
    });
  }
}
