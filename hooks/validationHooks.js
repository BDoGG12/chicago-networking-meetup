const isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // Define the password criteria
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  // Check if the password meets all the criteria
  if (password.length < minLength || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
    return false;
  } else {
    return true;
  }
}

export {isEmail, validatePassword};