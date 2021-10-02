
password1 = prompt("What is your password?")
password2 = prompt("Please retype your password.")

function Compare(pass1, pass2){
  let password1 = ""
  let password2 = ""
  let answer = password1.localeCompare(password2)
  return answer
}

if (password1 == password2)
  console.log("The passwords are the same.")
else
  console.log("The passwords are not the same.")
