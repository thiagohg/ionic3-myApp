import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = IntroPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
