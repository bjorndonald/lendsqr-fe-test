export enum UserStatus {
    BLACKLISTED = 1, ACTIVE, INACTIVE, PENDING
}

export type UserType = {
    "createdAt": string,
    "orgName": string,
    "userName": string,
    "email": string,
    status?: UserStatus,
    "phoneNumber": string,
    "lastActiveDate": string,
    "profile": {
        "firstName": string,
        "lastName": string,
        "phoneNumber": string,
        "avatar": string,
        "gender": string,
        "bvn": string,
        "address": string,
        "currency": string
    },
    "guarantor": {
        "firstName": string,
        "lastName": string,
        "phoneNumber": string,
        "gender": string,
        "address": string
    },
    "accountBalance": string,
    "accountNumber": string,
    "socials": {
        "facebook": string,
        "instagram": string,
        "twitter": string
    },
    "education": {
        "level": string,
        "employmentStatus": string,
        "sector": string,
        "duration": string,
        "officeEmail": string,
        "monthlyIncome": [
            "128.57",
            "118.07"
        ],
        "loanRepayment": string
    },
    "id": string
}

export const exampleUserObj = {
    "createdAt": "2072-12-27T03:44:22.522Z",
    "orgName": "labore-dolor-et",
    "userName": "Wilburn.Rice",
    "email": "Maverick.Hyatt83@gmail.com",
    "phoneNumber": "(553) 208-0727 x31321",
    "lastActiveDate": "2099-02-28T23:17:40.013Z",
    "profile": {
        "firstName": "Darian",
        "lastName": "Rolfson",
        "phoneNumber": "494-278-0946",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
        "gender": "Male",
        "bvn": "815809412",
        "address": "Gusikowski Locks",
        "currency": "NGN"
    },
    "guarantor": {
        "firstName": "Celine",
        "lastName": "Monahan",
        "phoneNumber": "1-482-227-3654 x71086",
        "gender": "Male",
        "address": "O'Hara Centers"
    },
    "accountBalance": "496.00",
    "accountNumber": "GWQUSEH1",
    "socials": {
        "facebook": "@lendsqr",
        "instagram": "@lendsqr",
        "twitter": "@lendsqr"
    },
    "education": {
        "level": "Bsc",
        "employmentStatus": "Employed",
        "sector": "FinTech",
        "duration": "2 Years",
        "officeEmail": "Edna4@yahoo.com",
        "monthlyIncome": [
            "128.57",
            "118.07"
        ],
        "loanRepayment": "122.47"
    },
    "id": "1"
}