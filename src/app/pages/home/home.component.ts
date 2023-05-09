import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  bannerResult:any=[]
  trendingMovieResult:any=[]
  constructor(private movieApiService:MovieApiServiceService){}

  ngOnInit():void{
    this.bannerData()
    this.trendingData()
  }

  bannerData(){
    this.movieApiService.bannerApiData().subscribe((res)=>{
      this.bannerResult = res.results
    })
  }

  trendingData() {
    this.movieApiService.trendingMovieApiData().subscribe((result) => {
      this.trendingMovieResult = result.results;
    });
  }

}
