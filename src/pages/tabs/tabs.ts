import { Component } from '@angular/core';

import { AboutPage } from '../about/about'; 
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { MoviePage } from '../movie/movie';
import { StorePage } from '../store/store';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MoviePage;
  tab3Root = StorePage;
  tab4Root = AboutPage; 

  constructor() {

  }
}