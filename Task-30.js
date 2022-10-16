const names = ['Ghayoor', 'Bilal', 'Aqeel', 'admin', 'Jamil'];

const greetUser = (name) => {
  if(name === 'admin'){
    console.log("Hello admin, would you like to see a status report?")
  }else{
    console.log(`Hello ${name}, thanks for logging in`)
  }
}

names.forEach(name => greetUser(name))
