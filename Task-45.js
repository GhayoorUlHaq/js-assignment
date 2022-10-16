const carDetails = (manufacturer, model, ...options) => {
  const info = {
    manufacturer,
    model
  }
  for (let i = 0; i < options.length; i = i+2) {
    info[options[i]] = options[i + 1];
  }
  return info
}

const car1 = carDetails('Honda', 'CHR');
const car2 = carDetails('Honda', 'CHR', 'engine', '1.6L');
const car3 = carDetails('Honda', 'CHR', 'import', '2015', 'price', '2.5M');

console.log(car1)
console.log(car2)
console.log(car3)

