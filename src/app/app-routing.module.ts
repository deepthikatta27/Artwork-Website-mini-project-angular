import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchProductListComponent } from './search-product-list/search-product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { DocumentationComponent } from './documentation/documentation.component';

const routes: Routes = [
  {
    path : "",
    component : ProductListComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "wishlist",
    component : WishlistComponent
  },
  {
    path: "search/:searchedValue",
    component: SearchProductListComponent
  },
  {
    path: "productInfo/:productId",
    component: ProductInfoComponent
  },
  {
    path: "documentation",
    component: DocumentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
