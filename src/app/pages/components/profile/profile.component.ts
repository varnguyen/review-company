import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NbToastrService, NbComponentStatus, NbDateService } from '@nebular/theme';
import { UserService, AuthService, UploadService } from 'src/app/_services';
import { CONFIG } from '../../../_data';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;
    submitted = false;
    isLoading = false;
    toast: any = {};
    avatarLocalSrc: any = 'https://via.placeholder.com/250/4479e7/ffffff?Text=IMG';
    disable = true;
    user: any;
    positonToastr = 'bottom-left';
    gender = CONFIG.GENDER;
    files: any;

    constructor(
        private toastrService: NbToastrService,
        private authService: AuthService,
        private userSerice: UserService,
        protected dateService: NbDateService<Date>,
        private uploadService: UploadService
    ) {
        // const token = this.authService.getJwtToken();
        // if(token) { }
        this.dateService.setLocale('vi');
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
                Validators.maxLength(30)
            ]),
            gender: new FormControl(1, []),
            birthday: new FormControl(new Date(), []),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern(CONFIG.REGEX_EMAIL)
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
            this.isLoading = true;
            this.updateUserInfo();
        }
    }

    uploadAvatar() {
        // this.showToast('bottom-left', 'success'); // basic - primary - success - info - warning - danger - control
        // const res = { code: 401 };
        // this.handleStatus(res);
        console.log(this.files);
        this.uploadService.upload(this.files).subscribe(
            res => {
                console.log(res);
            }
        );
    }

    handleStatus(res) {
        switch (res.code) {
            case 0:
                this.user = res.data;
                this.user.birthday = new Date(res.data.birthday);
                this.profileForm.patchValue(this.user);
                this.isLoading = false;
                this.submitted = false;
                this.toast.title = 'Success';
                this.toast.message = res.message;
                this.showToast(this.positonToastr, 'success', this.toast);
                break;
            case 401:
                this.toast.title = 'Error 401';
                this.toast.message = ' Msg Error 401';
                this.showToast(this.positonToastr, 'danger', this.toast);
                break;
            default:
                this.toast.title = 'Success';
                this.toast.message = ' Msg success';
                this.showToast(this.positonToastr, 'success', this.toast);
                break;
        }
    }

    // handleCode(res) {
    //     switch (res.code) {
    //         case 0:
    //             this.authService.setStoreTokens(res.data.token);
    //             this.authService.setCurrentUser(res.data);
    //             this.router.navigate([this.returnUrl]);
    //             break;
    //         case 3:
    //             this.showToast(res, 'danger');
    //             this.loading = false;
    //             break;
    //         case 5:
    //             this.showToast(res, 'danger');
    //             this.loading = false;
    //             break;
    //         default:
    //             break;
    //     }
    // }

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
            this.files = file;
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
                    this.user.birthday = new Date(this.user.birthday);
                    this.profileForm.patchValue(this.user);
                }
            },
            errors => { console.log(errors); }
        );
    }

    updateUserInfo() {
        const user = this.profileForm.value;
        // user.user_id = this.user.user_id;
        this.userSerice.updateUserInfo(user).subscribe(
            res => {
                this.handleStatus(res);
            }
        );
    }

}
