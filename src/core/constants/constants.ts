export const KEY_PROFILE = 'profile';

export interface Profile {
    username: string;
    password: string;
    phoneNumber: string;
}

export interface SupportTicket {
    title: string;
    description: string;
}