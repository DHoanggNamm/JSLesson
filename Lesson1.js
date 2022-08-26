function validatePhoneNumber (number) {
    if(number.length > 11 && number.length === 0 || isNaN(number)) {
        return false
    }else {
        return true
    }
    /**TH3: country code: number == +84 XXX XXX XXX -> number.length === 12
     * convert +84 -> 0
     * number == 0 XXX XXX XXX 
     */

    /**TH4: province code: number == [province code] + XXXX XXXX
     * HN & HCM: 022 & 028 -> number.length === 11
     * Others: number.length === 12
     */

    /**TH4: international code: number == [+] + [country code] + [number]
     * number.length = [11, 12, 13]
     */
}
console.log(validatePhoneNumber('0347510495'))
