import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() artwork: any;
  @Output() viewMore = new EventEmitter<any>();

  isFavorite = false;
  toggleFavorite(artwork:any): void {
    this.isFavorite = !this.isFavorite;
    if(this.isFavorite==true){
      this.addToWishlist(artwork);
    }
    else{
      alert("Removed from Wishlist!");
      this.removeFromWishlist(artwork);
    }
  }
  inWishlist(artwork:any){
    let wishlist:any[]=JSON.parse(localStorage.getItem('wishlist') || '[]');
    let index = wishlist.findIndex(item=> item.id===artwork.id);
    return index >= 0;
  }
  addToWishlist(artwork:any){
    let wishlist:any[]=JSON.parse(localStorage.getItem('wishlist') || '[]');
    console.log(wishlist);
    let index = wishlist.findIndex(item=> item.id===artwork.id);
    if(index==-1){
      wishlist.push(artwork);
      localStorage.setItem('wishlist',JSON.stringify(wishlist));
      alert("Added to Wishlist!");
    }
    else{
      window.alert('Item already present in wishlist');
    }
  }

  removeFromWishlist(artwork:any){
    let wishlist:any[]=JSON.parse(localStorage.getItem('wishlist') || '[]');
    let index = wishlist.findIndex(item=> item.id===artwork.id);
    if(index>=0){
      wishlist.splice(index, 1);
      localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }
    console.log(wishlist);
  }


}