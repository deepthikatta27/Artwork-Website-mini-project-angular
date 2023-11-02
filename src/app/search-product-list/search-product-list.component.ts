import { Component, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-search-product-list',
  templateUrl: './search-product-list.component.html',
  styleUrls: ['./search-product-list.component.css']
})
export class SearchProductListComponent {
  searchedArtworks: Array<any> | undefined;
  
  constructor(private dataService: DataService,
     private activeRoute: ActivatedRoute) { }

    pageIndex: number = 0;
    pageSize: number = 12;
    totalItems: number = 0;
    
    @ViewChild(MatPaginator) paginator!:MatPaginator;
    
    ngOnInit(): void {
      this.getData(this.pageIndex, this.pageSize);
    }
   
    getData(pageIndex: number, pageSize: number) {
      // Retrieve data from the API based on the pageIndex and pageSize
      this.activeRoute.params.subscribe((params) => {
        const searchedValue = params['searchedValue'];
        const searchText = searchedValue || '';
        this.dataService.getArtworksByTextSearch(searchText, pageIndex, pageSize).subscribe(
          (data:any) => {
            this.searchedArtworks = data.data;
            console.log(this.searchedArtworks);
          },
          (error) => console.log(error)
        );
      });
    }
  
    onPageChanged(e:any) {
      console.log("event: ",e)
      this.pageIndex = e.pageIndex;
      this.pageSize = e.pageSize;
      this.getData(this.pageIndex, this.pageSize);
    }
  
}
