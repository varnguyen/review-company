export const CONFIG = {
    REGEX_EMAIL: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
    REGEX_PHONE: '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})',
    REGEX_URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    THEMES: [
        { value: 'default', name: 'Sáng' },
        { value: 'dark', name: 'Tối' },
        { value: 'cosmic', name: 'Cosmic' },
        { value: 'corporate', name: 'Corporate' },
    ],
    OPTIONS_PROVINCE_DEFAULT: [
        { province_id: -1, province_name: 'Vui lòng chọn' },
    ],
    OPTIONS_JOB_DEFAULT: [
        { job_id: -1, job_name: 'Vui lòng chọn' },
    ],
    GENDER: [
        { value: 1, name: 'Nam' },
        { value: 0, name: 'Nữ' },
    ],
    STAFFS: [
        { value: 1, name: '1 - 50' },
        { value: 2, name: '51 - 100' },
        { value: 3, name: '101 - 200' },
        { value: 4, name: '201 - 300' },
        { value: 5, name: '301 - 500' },
        { value: 6, name: '501 - 1000' },
        { value: 7, name: '1001 - 2000' },
        { value: 8, name: '2001 - 3000' },
        { value: 9, name: '3001 - 4000' },
        { value: 10, name: '4001 - 5000' },
    ],
    WHO: [
        { value: 1, name: 'Nhân viên' },
        { value: 2, name: 'Người dưng' },
        { value: 3, name: 'Luffy' },
        { value: 3, name: 'Saitama' },
        { value: 3, name: 'Naruto' },
        { value: 3, name: 'Tanjiro' },
    ],
}