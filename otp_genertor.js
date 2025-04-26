function checkOtp(otp,otp1){
    if(otp == otp1){
        console.log('opt matched')
    }else{
        console.log('not matched');
    }
};



function otpGenerator(length =6){
    let otp="";  // create a string to store a otp
    for(let i=0;i<length;i++){
        otp+=Math.floor(Math.random()*10);
    }
    console.log(otp)
    checkOtp(otp,otp);
}


otpGenerator();

