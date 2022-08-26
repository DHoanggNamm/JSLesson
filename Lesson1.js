function validatePhoneNumber (number) {
    if(number.length > 11 && number.length === 0 || isNaN(number)) {
        return false
    }else {
        return true
    }

}
console.log(validatePhoneNumber('0347510495'))