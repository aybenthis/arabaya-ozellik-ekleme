function addMethods(araba) {
  const yeniAraba = { ...araba };

  yeniAraba.getKilometers = function () {
    return `Arabanın güncel kilometresi ${this.kilometre} km'dir.`;
  };

  yeniAraba.getYear = function () {
    const currentYear = new Date().getFullYear();
    const modelYear = currentYear - this.yas;
    return `Araba ${modelYear} modeldir.`;
  };

  yeniAraba.changePrice = function (percentage) {
    let newPrice = (this.fiyat * percentage) / 100 + this.fiyat;
    this.fiyat = newPrice;
    return `Araba'nın güncel fiyatı ${newPrice} TL'dir.`;
  };

  return yeniAraba;
}

const yeniAraba = addMethods({
  model: 'VW Passat',
  yas: 11,
  kilometre: 153000,
  fiyat: 800000,
});
console.log(yeniAraba.getKilometers());
console.log(yeniAraba.getYear());
console.log(yeniAraba.changePrice(10));
