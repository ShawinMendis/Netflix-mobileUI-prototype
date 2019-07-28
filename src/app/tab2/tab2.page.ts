import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SearchType, MoviesService } from "../services/movies.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  results: Observable<any>;
  searchTerm = "";
  type: SearchType = SearchType.all;

  constructor(private movieservice: MoviesService) {}

  ngOnInit() {}

  searchChanged() {
    this.results = this.movieservice.searchData(this.searchTerm, this.type);
  }
}
