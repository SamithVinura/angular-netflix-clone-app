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
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id:any){
    this.movieApiSearvice.getMovieDetails(id).subscribe(async(result)=>{

        this.getMovieDetailResult = await result;

        // updatetags
        /* this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
        this.meta.updateTag({name:'title',content:this.getMovieDetailResult.original_title});
        this.meta.updateTag({name:'description',content:this.getMovieDetailResult.overview});

        // facebook
        this.meta.updateTag({property:'og:type',content:"website"});
        this.meta.updateTag({property:'og:url',content:``});
        this.meta.updateTag({property:'og:title',content:this.getMovieDetailResult.original_title});
        this.meta.updateTag({property:'og:description',content:this.getMovieDetailResult.overview});
        this.meta.updateTag({property:'og:image',content:`https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}`}); */

    });
  }

  getVideo(id:any)
  {
    this.movieApiSearvice.getMovieVideo(id).subscribe((result)=>{

        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getMovieVideoResult = element.key;
            }
        });

    });
  }

  getMovieCast(id:any)
  {
    this.movieApiSearvice.getMovieCast(id).subscribe((result)=>{

      this.getMovieCastResult = result.cast;
    });
  }


}
