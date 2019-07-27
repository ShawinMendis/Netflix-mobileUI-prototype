import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  items = [
    {
      src: "assets/net2.jpg",
      name: "king pie"
    },

    {
      src: "assets/net3.jpg",
      name: "Red maggot"
    },
    {
      src: "assets/net4.jpg",
      name: "Pigeon"
    },
    {
      src: "assets/net5.jpg",
      name: "Pinacle"
    },
    {
      src: "assets/banner1.jpg",
      name: "Pinacle"
    },
    {
      src: "assets/net1.jpg",
      name: "Pinacle"
    }
  ];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3.5,
    speed: 400,
    
  };

  constructor() {}

  ngOnInit() {}
}
