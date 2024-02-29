
   export default function generatePassword(){
        let password: string = ''
        let characters:string = 'Aa@#354490575gcghdjDBJSKHXAPQERÇDLSMCXSmbapore'
        let passWordLength = 8
        for(let index = 0; index < passWordLength; index++){
            password += characters.charAt(
                Math.floor(Math.random() * characters.length)
            )
        }

        return    password
    
}

