import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;

  constructor(private movieApiSearvice:MovieApiServiceService,private router:ActivatedRoute){}

  ngOnInit():void{
    let getParamId= this.router.snapshot.paramMap.get('id')
    this.getMovie(getParamId)
  }

  getMovie(id:any){
    this.movieApiSearvice.getMovieDetails(id).subscribe((res)=>{
      this.getMovieDetailResult = res
    })
  }

}
