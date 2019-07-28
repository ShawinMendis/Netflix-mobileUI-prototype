import { Component, OnInit } from "@angular/core";

import { MoviesService, SearchType } from "../services/movies.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  searchTerm = "";

  movies: Observable<any>;

  type: SearchType = SearchType.movie;

  constructor(private movieservice: MoviesService) {}

  ngOnInit() {}
}
