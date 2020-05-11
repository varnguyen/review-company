import { environment } from 'src/environments/environment';

/**
 * API ALL
 */
const API_VERSION = 'api';
const SERVER_URL = environment.api;
const URL = `${SERVER_URL}/${API_VERSION}`;


export const API = {
    LOGIN: `${URL}/auth/login`,
    REFRESH_TOKEN: `${URL}/auth/refresh-token`,
    REGISTER_USER: `${URL}/auth/register`,
    USER_INFO: `${URL}/me/profile`,
    UPDATE_USER_INFO: `${URL}/me/update`,
    PROVINCE: `${URL}/province`,
    COMPANY: `${URL}/company`,
    COMMENT_COMPANY: `${URL}/company/comment`,
    JOB_TYPE: `${URL}/job-type`,
    COMMENT: `${URL}/comment`,
    STATISTIC_COMMENT: `${URL}/statistic-comment`,
    STATISTIC_REVIEW: `${URL}/statistic-review`,
    UPLOAD: `${URL}/upload`,

    LOGOUT: `${URL}/logout`,
    CUSTOMER: `${URL}/customer`,
    absentconfig: `${URL}/absentconfig`,
    achievement: `${URL}/achievement`,
    achievementcompliment: `${URL}/achievementcompliment`,
    achievementsetup: `${URL}/achievementsetup`,
    article: `${URL}/article`,
    articlecomment: `${URL}/articlecomment`,
    articlelike: `${URL}/articlelike`,
    configleave: `${URL}/configleave`,
    chatgroup: `${URL}/chatgroup`,
    chatmessage: `${URL}/chatmessage`,
    chatconversation: `${URL}/chatconversation`,
    department: `${URL}/department`,
    district: `${URL}/district`,
    employees: `${URL}/employees`,
    fileupload: `${URL}/fileupload`,
    goalresultcomment: `${URL}/goalresultcomment`,
    goals: `${URL}/goals`,
    goalscomment: `${URL}/goalscomment`,
    goalstatistic: `${URL}/goalstatistic`,
    grouppermission: `${URL}/grouppermission`,
    holiday: `${URL}/holiday`,
    holidaydefault: `${URL}/holidaydefault`,
    notification: `${URL}/notification`,
    notificationhistory: `${URL}/notificationhistory`,
    password: `${URL}/password`,
    position: `${URL}/position`,
    positionassign: `${URL}/positionassign`,
    province: `${URL}/province`,
    resetpassword: `${URL}/resetpassword`,
    teammember: `${URL}/teammember`,
    teams: `${URL}/teams`,
    topachievement: `${URL}/topachievement`,
    user: `${URL}/user`,
    timekeeping: `${URL}/timekeeping`,
};
