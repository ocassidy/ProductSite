import {Component, OnInit, Inject} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from './product.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

export interface DialogData {
	productID: string;
	productName: string;
	productCode: string;
	productPrice: string;
	productRating: string;
	productImgUrl: string;
}

export interface ProductNames {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-product',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
	pageTitle = 'Product List';
	imageWidth = 50;
	imageMargin = 2;
	showImage = true;
	errorMessage: string;
	productID: string;
	productName: string;
	productCode: string;
	productPrice: string;
	productRating: string;
	productImgUrl: string;

	constructor(private dialog: MatDialog, private productService: ProductService) {}

	_listFilter: string;
	get listFilter(): string {
		return this._listFilter;
	}

	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}

	filteredProducts: IProduct[];
	products: IProduct[] = [];

	onRatingClicked(message: string): void {
		this.pageTitle = 'Product Rating = ' + message;
	}

	performFilter(filterBy: string): IProduct[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter((product: IProduct) =>
			product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	openAddDialog(): void {
		const dialogRef = this.dialog.open(AddProductDialogComponent, {
			width: '500px',
			data: {productID: this.productID,
				productName: this.productName,
				productCode: this.productCode,
				productPrice: this.productPrice,
				productRating: this.productRating,
				productImgUrl: this.productImgUrl}
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			this.productName = result;
		});
	}

	openEditDialog(): void {
		const dialogRef = this.dialog.open(EditProductDialogComponent, {
			width: '500px',
			data: {productID: this.productID,
				productName: this.productName,
				productCode: this.productCode,
				productPrice: this.productPrice,
				productRating: this.productRating,
				productImgUrl: this.productImgUrl}
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			this.productName = result;
		});
	}

	ngOnInit(): void {
		this.productService.getProducts().subscribe(
			products => {
				this.products = products, this.filteredProducts = this.products;
			},
			error => this.errorMessage = <any>error);
	}
}

@Component({
	selector: 'app-add-product-dialog',
	templateUrl: 'add-product-dialog.html',
	styleUrls: ['./product-list.component.css']
})
export class AddProductDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<AddProductDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) {
	}
	onNoClick(): void {
		this.dialogRef.close();
	}
}

@Component({
	selector: 'app-edit-product-dialog',
	templateUrl: 'edit-product-dialog.html',
	styleUrls: ['./product-list.component.css']
})
export class EditProductDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<EditProductDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) {
	}

	products: ProductNames[] = [
		{value: '1', viewValue: 'ABC'}];

	onNoClick(): void {
		this.dialogRef.close();
	}
}
