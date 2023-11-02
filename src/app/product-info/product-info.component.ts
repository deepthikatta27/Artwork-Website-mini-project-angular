import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  currentArtworkInfo: any | undefined;
  constructor(
    private activeRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const id = Number(params['productId']);
      this.dataService.getArtworkById(id).subscribe(
        (data) => {
          this.currentArtworkInfo = data.data;
        },
        (error) => console.log(error)
      );
    });
  }
  
  addToWishlist(currentArtworkInfo:any){
    let wishlist:any[]=JSON.parse(localStorage.getItem('wishlist') || '[]');
    console.log(wishlist);
    let index = wishlist.findIndex(item=> item.id===currentArtworkInfo.id);
    if(index==-1){
      wishlist.push(currentArtworkInfo);
      localStorage.setItem('wishlist',JSON.stringify(wishlist));
      alert("Added to Wishlist!");
    }
    else{
      window.alert('Item already present in wishlist');
    }
  }
}
