import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NbToastrService, NbComponentStatus, NbIconConfig } from '@nebular/theme';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;
    submitted = false;
    toast: any = {};
    avatarLocalSrc: any = 'https://via.placeholder.com/250/4479e7/ffffff?Text=IMG';
    disable = true;

    constructor(
        private toastrService: NbToastrService,
    ) {
        this.initProfileForm();
    }

    initProfileForm() {
        this.profileForm = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            fakeName: new FormControl('', [Validators.required]),
            gender: new FormControl('', []),
            birthday: new FormControl('', []),
            email: new FormControl('', [Validators.required]),
            phone: new FormControl('', []),
            street: new FormControl('', []),
            description: new FormControl('', []),
        });
    }

    ngOnInit() {
    }

    get f() { return this.profileForm.controls; }

    submit() {
        this.submitted = true;
        console.log(this.profileForm);

        setTimeout(() => {
            this.updateProfile();
        }, 3000);
    }

    updateProfile() {
        this.profileForm.patchValue({
            firstName: 'Nguyen',
            lastName: 'Minh',
            fakeName: 'My Fake Name',
            gender: '',
            birthday: '',
            email: 'enqminh@gmail.com',
            phone: '',
            street: 'Hà Nội',
            description: 'Description',
        });
        this.submitted = false;
        this.handleStatus(0);
    }

    uploadAvatar() {
        // this.showToast('bottom-left', 'success'); // basic - primary - success - info - warning - danger - control
        const code = 0;
        this.handleStatus(code);
    }

    handleStatus(code) {
        switch (code) {
            case 404:
                this.toast.title = 'Error 404';
                this.toast.message = ' Msg Error 404';
                this.showToast('bottom-left', 'danger', this.toast);
                break;
            case 401:
                this.toast.title = 'Error 401';
                this.toast.message = ' Msg Error 401';
                this.showToast('bottom-left', 'danger', this.toast);
                break;
            default:
                this.toast.title = 'Success';
                this.toast.message = ' Msg success';
                this.showToast('bottom-left', 'success', this.toast);
                break;
        }
    }

    showToast(position, status: NbComponentStatus, toast: any) {
        this.toastrService.show(
            toast.message,
            toast.title,
            { position, status });
    }

    onFileSelected([file]) {
        console.log(file);
        if (file) {
            // this.avatar = file;
            const reader = new FileReader();
            reader.onload = () => {
                console.log(reader);
                console.log(reader.result);
                this.avatarLocalSrc = reader.result;
                this.disable = false;
            };
            reader.readAsDataURL(file);
        }
    }

}
