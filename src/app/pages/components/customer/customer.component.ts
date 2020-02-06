import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CustomersService } from 'src/app/_services';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

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
            firstName: { title: 'Tên', type: 'string' },
            lastName: { title: 'Điện thoại', type: 'string' },
            shopPlace: { title: 'Shop', type: 'string' },
            username: { title: 'Địa chỉ', type: 'string' },
            email: { title: 'E-mail', type: 'string' },
            age: { title: 'Age', width: '30px', type: 'number' },
            created: { title: 'Created', type: 'number' },
            updated: { title: 'Updated', type: 'number' },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(
        private customersService: CustomersService,
    ) {
        const data = this.customersService.getData();
        this.source.load(data);
    }

    ngOnInit() {
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

}
