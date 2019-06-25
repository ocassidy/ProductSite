import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent, AddProductDialogComponent, EditProductDialogComponent} from './products/product-list-component';
import {ConvertToSpacesPipe} from './Shared/convert-to-spaces.pipe';
import {StarComponent} from './Shared/star.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';


@NgModule({
	declarations: [
		AppComponent,
		ProductListComponent,
		ConvertToSpacesPipe,
		StarComponent,
		AddProductDialogComponent,
		EditProductDialogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		MatDialogModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule
	],
	entryComponents: [
		AddProductDialogComponent,
		EditProductDialogComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
