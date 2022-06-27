const inital_otp_data = {
    otp_data:[]
};
export const otpdata_reducers = (state=inital_otp_data,{type,payload}) =>{
    switch (type) {
        case "FATCHING_OTP_DATA":
            return {...state,otp_data:payload};
        default:
            return state;
    }
};