export interface Product {
  id: number;
  image: string,
  name: string;
  price: number;
  description: string;
  rating: number,
  url: string
}

export const products = [
  {
    id: 1,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hdc/47400773779486/kulikov-tort-medovik-s-orehami-grand-900-g-102987419-1.jpg',
    name: 'Kulikov торт Медовик с орехами гранд 900 г',
    price: 5500,
    description: 'основа: коржевая\n' +
      'оформление: медовая крошка, ,ореховая крошка\n' +
      'начинка: сливочный крем\n' +
      'добавки: орехи\n' +
      'вид начинки: дробленая\n' +
      'страна производства: Казахстан\n' +
      'условия хранения: -18°C ; 4±2°C',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/kulikov-tort-medovik-s-orehami-grand-900-g-102987419/?c=750000000#!/item'
  },
  {
    id: 2,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h48/47400775614494/kulikov-tort-medovik-so-slivkami-grand-850-g-102987427-1.jpg',
    name: 'Kulikov торт Медовик со сливками гранд 850 г',
    price: 4900,
    description: 'основа: коржевая\n' +
      'оформление: медовая крошка, ,белый шоколад\n' +
      'начинка: сливочный крем\n' +
      'добавки: без добавок\n' +
      'страна производства: Казахстан\n' +
      'условия хранения: 4±2 °С, -18°С',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/kulikov-tort-medovik-so-slivkami-grand-850-g-102987427/?c=750000000#!/item'
  },
  {
    id: 3,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h19/h75/47242069999646/kulikov-tort-praga-klassik-750-g-102910954-1.jpg',
    name: 'Kulikov торт Прага классик 750 г',
    price: 5500,
    description: 'основа: кексовая, ,коржевая\n' +
      'оформление: ганаш, ,белый шоколад\n' +
      'начинка: крем\n' +
      'добавки: коньяк, ,сгущенное молоко\n' +
      'вид начинки: крем\n' +
      'страна производства: Казахстан\n' +
      'условия хранения: 4±2 °С, -18°С',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/kulikov-tort-praga-klassik-750-g-102910954/?c=750000000#!/item'
  },
  {
    id: 4,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h3d/47208465301534/kulikov-tort-medovik-so-slivkami-550-g-102891239-1.jpg',
    name: 'Kulikov торт Медовик со сливками 550 г',
    price: 3500,
    description: 'основа: медовая, ,коржевая\n' +
      'оформление: шоколад, ,медовая крошка\n' +
      'начинка: крем\n' +
      'добавки: без добавок\n' +
      'вид начинки: крем\n' +
      'страна производства: Казахстан\n' +
      'условия хранения: 4±2 °С -18°С',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/kulikov-tort-medovik-so-slivkami-550-g-102891239/?c=750000000#!/item'
  },
  {
    id: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1e/h60/47239463436318/kulikov-tort-kapriz-plus-1-5-kg-102910885-1.jpg',
    name: 'Kulikov торт Каприз плюс 1.5 кг',
    price: 8900,
    description: 'основа: бисквитная\n' +
      'оформление: шоколад, ,мак\n' +
      'начинка: крем\n' +
      'добавки: грецкая пудра\n' +
      'вид начинки: дробленая\n' +
      'страна производства: Казахстан\n' +
      'условия хранения: 4±2 °С, -18°С',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/kulikov-tort-kapriz-pljus-1-5-kg-102910885/?c=750000000#!/item'
  },
  {
    id: 6,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h04/h84/47400781119518/kulikov-tort-snezok-klassik-600-g-102987498-1.jpg',
    name: 'Kulikov торт Снежок классик 600 г',
    price: 3500,
    description: 'основа: бисквитная\n' +
      'оформление: кокосовая стружка, ,орешки из молочного шоколада\n' +
      'начинка: сливочный крем\n' +
      'добавки: сахарный сироп\n' +
      'вид начинки: крем\n' +
      'страна производства: Казахстан\n' +
      'условия хранения: 4±2 °С, -18°С',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/kulikov-tort-snezhok-klassik-600-g-102987498/?c=750000000#!/item'
  },
  {
    id: 7,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/hb3/47201983103006/kulikov-tort-medovik-so-sgusenkoj-550-g-102887338-1.jpg',
    name: 'Kulikov торт Медовик со сгущенкой 550 г',
    price: 3500,
    description: 'основа: коржевая\n' +
      'оформление: медовая крошка\n' +
      'начинка: крем\n' +
      'добавки: вареная сгущенка\n' +
      'вид начинки: крем\n' +
      'страна производства: Казахстан\n' +
      'условия хранения: 4±2 °С, -18°С',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/kulikov-tort-medovik-so-sguschenkoi-550-g-102887338/?c=750000000#!/item'
  },
  {
    id: 8,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/hac/47357415391262/kulikov-tort-neznyj-so-sgusenkoj-grand-950-g-102966952-1.jpg',
    name: 'Kulikov торт Нежный со сгущенкой гранд 950 г',
    price: 5900,
    description: 'основа: бисквитная\n' +
      'оформление: бисквитная крошка, ,шоколад\n' +
      'начинка: крем\n' +
      'добавки: вареная сгущенка\n' +
      'вид начинки: крем\n' +
      'страна производства: Казахстан\n' +
      'условия хранения: 4±2 °С, -18°С',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/kulikov-tort-nezhnyi-so-sguschenkoi-grand-950-g-102966952/?c=750000000#!/item'
  },
  {
    id: 9,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/h8a/47738156187678/kulikov-ptifur-florentin-245-g-103163820-1.jpg',
    name: 'Kulikov Птифур Флорентин 245 г',
    price: 1990,
    description: 'основа: песочная\n' +
      'начинка: орех, ,цукаты\n' +
      'добавки: изюм\n' +
      'страна производства: Казахстан\n' +
      'условия хранения: 4±2 °С, -18°С',
    rating: 4,
    url: 'https://kaspi.kz/shop/p/kulikov-ptifur-florentin-245-g-103163820/?c=750000000#!/item'
  },
  {
    id: 10,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h66/h60/47735656546334/kulikov-ptifury-assorti-240-g-103162607-1.jpg',
    name: 'Kulikov птифуры Ассорти 240 г',
    price: 2690,
    description: 'основа: бисквитная\n' +
      'начинка: смородиновый джем, ,цукаты\n' +
      'добавки: без добавок\n' +
      'страна производства: Казахстан\n' +
      'условия хранения: 4±2 °С, -18°С',
    rating: 4.5,
    url: 'https://kaspi.kz/shop/p/kulikov-ptifury-assorti-240-g-103162607/?c=750000000#!/item'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
