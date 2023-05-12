import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movieApiService:MovieApiServiceService){}

  ngOnInit():void{}


  searchResult:any
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  })

  submitForm(){

   this.movieApiService.getSearchMovie(this.searchForm.value).subscribe((res)=>{
    console.log(res)
   this.searchResult = res.results
   })
  }
}
