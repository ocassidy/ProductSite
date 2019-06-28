import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

import {Product} from '../product';

@Component({
    selector: 'app-add-product-form-component',
    templateUrl: './add-product-form.component.html',
    styleUrls: ['./add-product-form.component.css']
})

export class AddProductFormComponent implements OnInit {
    productForm: FormGroup;
    product = new Product();

    constructor() {
    }

    ngOnInit(): void {
    }
}
