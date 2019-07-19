import { Component } from "@angular/core";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
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
    }
  ];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3.5,
    speed: 400
  };

  BannerSlideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 500
  };

  slides = [
    {
      src: "assets/net3.jpg"
    },
    {
      src: "assets/net4.jpg"
    }
  ];

  constructor() {}

  playSelected() {
    console.log("press clicked");
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
