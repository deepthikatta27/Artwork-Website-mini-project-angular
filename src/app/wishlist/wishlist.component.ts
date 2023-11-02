import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlist: Array<any> = [];

  ngOnInit(): void {
    let localWishlist = localStorage.getItem('wishlist');
    if (localWishlist) {
      this.wishlist = JSON.parse(localWishlist);
    }
  }

  removeFromWishlist(artwork: any): void {
    let index = this.wishlist.findIndex(item => item.id === artwork.id);
    if (index >= 0) {
      this.wishlist.splice(index, 1);
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }
}
