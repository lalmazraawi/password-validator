const checkUpperCaseLetter = (letter) => {
    const upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
    if (upperCaseLetter.includes(letter)) {
      return true
    }
    else {
      return false
    }
  }
  
  const checkLowerCaseLetter = (letter) => {
    const lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz'
  
    if (lowerCaseLetter.includes(letter)) {
      return true
    }
    else {
      return false
    }
  }
  
  const checkSpecialCharacter = (letter) => {
    const specialCharacterLetter = '!@#$%^&*.'
  
    if (specialCharacterLetter.includes(letter)) {
      return true
    }
    else {
      return false
    }
}

    const checkNumericCharacter = (letter) => {
        const numericCharacterLetter = '0123456789'
      
        if (numericCharacterLetter.includes(letter)) {
          return true
        }
        else {
          return false
        }
  }

  
  
  const validatePassword = (password) => {
    if (password.length < 8) return false
  
    let hasLower = false
    let hasUpper = false
    let hasSpecialCharacter = false
    let hasNumericCharacter = false
  
    for (let i = 0; i < password.length; i++) {
      if (checkLowerCaseLetter(password[i]) === true) {
        hasLower = true
      }
  
      if (checkUpperCaseLetter(password[i]) === true) {
        hasUpper = true
      }
      if (checkSpecialCharacter(password[i]) === true) {
        hasSpecialCharacter = true
      }
      if (checkNumericCharacter (password[i]) === true)
      hasNumericCharacter = true 
    }
  
    return hasUpper && hasLower && hasSpecialCharacter && 
    hasNumericCharacter
  }

  
  
  module.exports = validatePassword

  
   
    




