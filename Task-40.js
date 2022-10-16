const make_album = (artist, title, tracks = -99) => {
  const album = {artist, title};
  if(tracks > 0){
    album.tracks = tracks;
  }
  return album
}

const album1 = make_album("Taylor", "Tomorrow");
const album2 = make_album("Josh", "1994");
const album3 = make_album("TeamX", "10X", 10);

console.log(album1)
console.log(album2)
console.log(album3)
