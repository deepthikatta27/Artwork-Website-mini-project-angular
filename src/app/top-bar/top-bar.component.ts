import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  @Input() searchedValue: string | undefined;

  constructor(private router: Router) {}

  onSubmit() {
    console.log(this.searchedValue);
    this.router.navigate(['/search',this.searchedValue]);
  }
}
