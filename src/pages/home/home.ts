import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  backgrounds = [
    'assets/imgs/bg1.jpg',
    'assets/imgs/bg2.jpg',
    'assets/imgs/bg3.jpg',
    'assets/imgs/bg4.jpg'
  ];

	slides: any;

  constructor(public navCtrl: NavController, param: NavParams) {

	  this.slides = [
	    {
	      title: "Welcome to the Docs!",
	      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
	      image: "../assets/imgs/poster1.jpg",
	      color: "#2662F7",
	    },
	    {
	      title: "What is Ionic?",
	      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
	      image: "../assets/imgs/poster2.jpg",
	      color: "#FD4B4B",
	    }
	  ];
  }

}
