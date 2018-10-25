import { Component, OnInit } from '@angular/core';
import { AppService} from './../app.service'

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  //Variables
  private movies:any[];
  private movie;
  private data;
  private count =0;
  private pageNo = 1;
  private totalPages;
  constructor(public service : AppService) { }

  ngOnInit() {
  }

  //function to search movie by name
  public searchMovie : any = (name)=>{
    if(name !== ''){
      this.service.searchFunction(name).subscribe(

        data => {
          console.log(data);
          this.data=data;
          this.movies = data['results'];
          this.totalPages =data['total_pages']
          console.log(this.movies);
        },
        error => {
          console.log("some error occured");
          console.log(error.errorMessage)
        }
        )
    }
    else{
      this.count=this.count+1;
    }

  }
  //end of searchFunction


  //function to get details of movie by ID
  public findMovieById : any = (id) =>{
    this.service.getDetailsFunction(id).subscribe(

      data => {
        console.log(data);
        this.movie = data;
        console.log(this.movie);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    )
  }
  //end of getDetailsFunction

  //to get next page from response
  public nextPage : any = (name)=>{
    if(this.pageNo<this.totalPages){
      this.pageNo = this.pageNo+1;
      console.log(this.pageNo)
      this.service.searchFunction(name,this.pageNo.toString()).subscribe(

        data => {
          console.log(data);
          this.movies =this.movies.concat(data['results']);
          console.log(this.movies);
        },
        error => {
          console.log("some error occured");
          console.log(error.errorMessage)
        }
        )
    }

  }
  //end of nextPage function

}
