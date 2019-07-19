import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  items = [
    {
      src: "assets/net2.jpg"
    },

    {
      src: "assets/net1.jpg"
    },
    {
      src: "assets/net4.jpg"
    },
    {
      src: "assets/net5.jpg"
    }
  ];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2.5,
    speed: 400
  };

  constructor() {}
}
