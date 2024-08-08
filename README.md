# arabaya-ozellik-ekleme
Volvo chat uygulaması yazmaya başladı. Bunun için eski verilerin güncellenmesi lazım. Bunun için eldeki araba nesnelerine bazı metodlar eklemek istiyorlar.

Bunun için adı addMethods olan bir fonksiyon yazalım.

Bu fonksiyon bir arabanın özelliklerini nesne olarak alsın.

Gelen bu nesne'nin içine 3 tane metod eklesin:

.getKilometers(): "Arabanın güncel kilometresi {kilometre} km'dir." metnini dönecek.
.getYear(): "Araba {yil} modeldir." metnini dönmeli
.changePrice(percentage): arabanın güncel fiyatını gelen oran kadar zamlı hale getirmeli ve "Araba'nın güncel fiyatı {fiyat} TL'dir." metnini dönmeli.
Metodlar eklenmiş halini nesne olarak dönsün.

Örnek Kullanım:

const araba = addMethods({
  model: 'VW Passat',
  yas: 11,
  kilometre: 153000,
  fiyat: 800000
})
araba.getKilometers(); // "Arabanın güncel kilometresi 153000 km'dir."
araba.getYear(); // "Araba 2012 modeldir."
araba.changePrice(10); // "Araba'nın güncel fiyatı 880000 TL'dir."
