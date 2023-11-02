import { Component, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  artworks: Array<any> | undefined;

  pageIndex: number = 0;
  pageSize: number = 12;
  totalItems: number = 0;

  constructor(private dataService: DataService) { }
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  
  ngOnInit(): void {
    this.getData(this.pageIndex, this.pageSize);
  }
 
  getData(pageIndex: number, pageSize: number) {
    // Retrieve data from the API based on the pageIndex and pageSize
    this.dataService.getArtworks(pageIndex, pageSize).subscribe({
      next: (data:any) => {
        this.artworks = data.data;
        this.totalItems = data.pagination.total;
        console.log(this.artworks);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('fetch completed');
      }
    });
  }

  onPageChanged(e:any) {
    console.log("event: ",e)
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.getData(this.pageIndex, this.pageSize);
  }
}


