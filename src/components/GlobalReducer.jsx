export const initialState = {
   loginEmail: '',
   loginPassword: '',
   firstOTP: '',
   userInfo: {
    firstName: '',
    finalName: '',
    userMobile: '',
    userOfBank: '',
    bankName: '',
    totalAmount: '',
    password: ''
   },
   finalOTP: ''
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_TREGER":
            console.log("DONE!");
            break;
        default:
            console.log("default");
            break;
    }
}