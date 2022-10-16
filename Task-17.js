const names = ['Ghayoor', 'Bilal', 'Aqeel'];

console.log(`Please consider this message as invitation for dinner at my place ${names[0]}!`);
console.log(`Please consider this message as invitation for dinner at my place ${names[1]}!`);
console.log(`Please consider this message as invitation for dinner at my place ${names[2]}!`);

console.log(`${names[2]} can't make it`);

names[2] = 'Jamil';

console.log(`Please consider this message as invitation for dinner at my place ${names[0]}!`);
console.log(`Please consider this message as invitation for dinner at my place ${names[1]}!`);
console.log(`Please consider this message as invitation for dinner at my place ${names[2]}!`);

names.unshift("Mohsin");
names.splice(2,0,"Sohail");

// append is not an array method, using push instead to add at end
names.push("Tahoor");

names.forEach(name => console.log(`Please consider this message as invitation for dinner at my place ${name}!`));

console.log('I can invite only two people');

for(let i = 0; i < 4; i++){
    const popped = names.pop();
    console.log(`${popped}, sorry, I can't invite you`)
}

names.forEach(name => console.log(`Please consider this message as invitation for dinner at my place ${name}!`));
names.pop();
names.pop();

console.log(names)
