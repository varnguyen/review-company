import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
import { UserService, AuthService } from 'src/app/_services';
import { emailRegex } from '../../../_data';

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
    user: any;

    constructor(
        private toastrService: NbToastrService,
        private authService: AuthService,
        private userSerice: UserService,
    ) {
        // const token = this.authService.getJwtToken();
        // if(token) { }
        this.initProfileForm();
    }

    initProfileForm() {
        this.profileForm = new FormGroup({
            first_name: new FormControl('', [
                Validators.required,
                Validators.maxLength(20)
            ]),
            last_name: new FormControl('', [
                Validators.required,
                Validators.maxLength(8)
            ]),
            nick_name: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(50)
            ]),
            gender: new FormControl('1', []),
            birthday: new FormControl('', []),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern(emailRegex)
            ]),
            phone: new FormControl('', []),
            address: new FormControl('', [
                Validators.maxLength(256)
            ]),
            description: new FormControl('', [
                Validators.maxLength(500)
            ]),
        });
    }

    ngOnInit() {
        this.getUserInfo();
    }

    get f() { return this.profileForm.controls; }

    submit() {
        this.submitted = true;
        console.log(this.profileForm);

        if (this.profileForm.status === 'VALID') {
            this.updateUserInfo();
        }
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

    getUserInfo() {
        this.userSerice.getUserInfo().subscribe(
            res => {
                console.log(res);
                if (res.code === 0) {
                    this.user = res.data;
                    this.profileForm.patchValue(this.user);
                }
            },
            errors => { console.log(errors); }
        );
    }

    updateUserInfo() {

        const user = this.profileForm.value;
        user.user_id = this.user.user_id;
        return;
        this.userSerice.updateUserInfo(user).subscribe(
            res => {
                console.log(res);
                return;
                this.submitted = false;
                this.handleStatus(0);
            }
        );
    }

}
