let names = ['Ghayoor', 'Bilal', 'Aqeel', 'admin', 'Jamil'];

const greetUser = (name) => {
    if(names?.length === 0){
        console.log("Need to find some users");
        return
    }

    if(name === 'admin'){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${name}, thanks for logging in`)
    }
}

names = [];

greetUser('Nadeem')

