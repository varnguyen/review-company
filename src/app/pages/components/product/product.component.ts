import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { ProductService, CustomersService } from 'src/app/_services';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

    settings = {
        mode: 'inline',
        actions: { add: true, edit: true, delete: true, position: 'right', },
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true,
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave: true,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            id: { title: 'ID', width: '30px', editable: false, type: 'number' },
            firstName: { title: 'Mã SP', type: 'string' },
            lastName: { title: 'Tên SP', type: 'string' },
            username: { title: 'Giá tiền', type: 'string' },
            email: { title: 'Mô tả', type: 'string' },
            age: { title: 'Age', width: '30px', type: 'number' },
            created: { title: 'Ngày tạo', type: 'number' },
            updated: { title: 'Ngày cập nhật', type: 'number' },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(
        private productService: ProductService,
        private customersService: CustomersService,
    ) {
        const data = this.productService.getData();
        this.source.load(data);
    }

    ngOnInit() {
        // this.getCustomers();
    }

    onCreateConfirm(event): void {
        console.log('CREATE', event);
        setTimeout(() => {
            event.confirm.resolve(event.newData);
        }, 2000);
    }

    onEditConfirm(event): void {
        console.log('EDIT', event);

        if (window.confirm('Are you sure you want to save?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        } else {
            event.confirm.reject();
        }

    }

    onDeleteConfirm(event): void {
        console.log('DELETE', event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

    getCustomers() {
        this.customersService.getCustomersList().subscribe(
            customers => {
                console.log(customers);
            }
        );
    }
}
