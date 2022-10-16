let names = ['Ghayoor', 'Bilal', 'Aqeel'];

const show_magicians = (magicians) => {
  magicians.forEach(magician=> {
    console.log(magician)
  });
}

const make_great = (magicians) => {
  return magicians.map(name => `Great ${name}`)
}

const modified = make_great(names);
show_magicians(modified);
show_magicians(names);

