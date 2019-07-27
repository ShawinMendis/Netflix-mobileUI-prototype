import { Component, OnInit } from "@angular/core";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})
export class BannerComponent implements OnInit {
  BannerSlideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 800,
    preloadImages: true
  };

  slides = [
    {
      src: "assets/net2.jpg"
    },
    {
      src: "assets/net5.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {}

  playSelected() {
    console.log("press clicked");
  }

  slidesDidLoad(slides: IonSlides) {
    // slides.startAutoplay();
  }
}
