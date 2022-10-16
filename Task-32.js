const current_users = ['Ghayoor', 'Bilal', 'Aqeel', 'ADMIN', 'Jamil'];
const new_users = ['Ghayoor', 'Bilal', 'Aqeel', 'admin', 'Tahoor'];

new_users.forEach(user => {
  if(current_users.includes(user)){
    console.log(`Use different user name`)
  }else{
    console.log(`Username ${user} is available`)
  }
})
