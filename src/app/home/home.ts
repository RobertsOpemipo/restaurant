import { Component } from '@angular/core';
import { Button } from "../component/button/button";
import { Specials } from "../specials/specials";
import { Expert } from "../expert/expert";
import { Customers } from "../customers/customers";

@Component({
  selector: 'app-home',
  imports: [Button, Specials, Expert, Customers],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
