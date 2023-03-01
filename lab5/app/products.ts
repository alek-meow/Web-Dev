export interface Product {
  id: number;
  image: string,
  name: string;
  price: number;
  description: string;
  rating: number,
  url: string,
  categoryId: number,
  likes: number
}

export const products = [
  {
    id: 11,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/had/48076323553310/deerma-dx700-belyj-3701383-1-Container.jpg',
    name: 'Пылесос Deerma DX700 белый',
    price: 19648,
    description: 'тип: вертикальный\n' +
      'уборка: сухая\n' +
      'тип пылесборника: циклонный фильтр\n' +
      'потребляемая мощность: 600 Вт\n' +
      'источник питания: сеть\n' +
      'цвет: белый',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000#!/item',
    categoryId: 1,
    likes: 0
  },
  {
    id: 12,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h21/31633788436510/karcher-vc-3-premium-belyj-3700709-1-Container.jpg',
    name: 'Пылесос Karcher VC 3 Premium белый',
    price: 69890,
    description: 'тип: традиционный\n' +
      'уборка: сухая\n' +
      'тип пылесборника: циклонный фильтр\n' +
      'потребляемая мощность: 700 Вт\n' +
      'источник питания: сеть\n' +
      'цвет: белый',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/karcher-vc-3-premium-belyi-3700709/?c=750000000#!/item',
    categoryId: 1,
    likes: 0
  },
  {
    id: 13,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h11/31515835564062/artel-vcc-0220-seryj-3701268-1-Container.jpg',
    name: 'Пылесос Artel VCC 0220 серый',
    price: 39870,
    description: 'тип: традиционный\n' +
      'уборка: сухая\n' +
      'тип пылесборника: циклонный фильтр\n' +
      'потребляемая мощность: 2000 Вт\n' +
      'источник питания: сеть\n' +
      'цвет: серый',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/artel-vcc-0220-seryi-3701268/?c=750000000#!/item',
    categoryId: 1,
    likes: 0
  },
  {
    id: 14,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h68/49402604453918/samsung-vcc4520s36-xev-sinij-3701056-1-Container.jpg',
    name: 'Пылесос Samsung VCC4520S36/XEV синий',
    price: 36162,
    description: 'тип: традиционный\n' +
      'уборка: сухая\n' +
      'тип пылесборника: контейнер\n' +
      'потребляемая мощность: 1600 Вт\n' +
      'источник питания: сеть\n' +
      'цвет: синий',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000#!/item',
    categoryId: 1,
    likes: 0
  },
  {
    id: 15,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h33/49333407940638/dauscher-dvc-2750tr-cernyj-3701388-1-Container.jpg',
    name: 'Пылесос DAUSCHER DVC-2750TR черный',
    price: 20530,
    description: 'тип: вертикальный\n' +
      'уборка: сухая\n' +
      'тип пылесборника: циклонный фильтр\n' +
      'потребляемая мощность: 1200 Вт\n' +
      'источник питания: сеть\n' +
      'цвет: черный',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/dauscher-dvc-2750tr-chernyi-3701388/?c=750000000#!/item',
    categoryId: 1,
    likes: 0
  },
  {
    id: 21,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h70/31593847128094/vitek-vt-8304-cernyj-sinij-3800548-1-Container.jpg',
    name: 'Утюг Vitek VT-8304 черный',
    price: 16990,
    description: 'мощность: 2400 Вт\n' +
      'резервуар для воды: 350 мл\n' +
      'автоматическое отключение: Да\n' +
      'защита от накипи: Да\n' +
      'противокапельная система: Да\n' +
      'цвет: черный',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/vitek-vt-8304-chernyi-3800548/?c=750000000#!/item',
    categoryId: 2,
    likes: 0
  },
  {
    id: 22,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h4f/34611439501342/tefal-fv2836e0-fioletovyi-101312106-1.jpg',
    name: 'Утюг Tefal FV2836E0 фиолетовый',
    price: 26990,
    description: 'мощность: 2400 Вт\n' +
      'резервуар для воды: 270 мл\n' +
      'автоматическое отключение: Нет\n' +
      'защита от накипи: Да\n' +
      'противокапельная система: Да\n' +
      'цвет: фиолетовый',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/tefal-fv2836e0-fioletovyi-101312106/?c=750000000#!/item',
    categoryId: 2,
    likes: 0
  },
  {
    id: 23,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h32/hf1/31573984215070/vitek-vt-1201-2010-belyj-koricnevyj-3800447-2-Container.jpg',
    name: 'Утюг Vitek VT-1201 2010 коричневый',
    price: 13944,
    description: 'мощность: 2200 Вт\n' +
      'резервуар для воды: 280 мл\n' +
      'автоматическое отключение: Нет\n' +
      'защита от накипи: Да\n' +
      'противокапельная система: Да\n' +
      'цвет: коричневый',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/vitek-vt-1201-2010-korichnevyi-3800447/?c=750000000#!/item',
    categoryId: 2,
    likes: 0
  },
  {
    id: 24,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/hb3/47776313737246/vitek-vt-1215pk-103183185-1.jpg',
    name: 'Утюг Vitek VT-1215 PK розовый',
    price: 7140,
    description: 'мощность: 2400 Вт\n' +
      'резервуар для воды: 320 мл\n' +
      'автоматическое отключение: Нет\n' +
      'защита от накипи: Да\n' +
      'противокапельная система: Да\n' +
      'цвет: розовый',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/vitek-vt-1215-pk-rozovyi-103183185/?c=750000000#!/item',
    categoryId: 2,
    likes: 0
  },
  {
    id: 25,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hed/h11/50547666092062/arg-sl-2088a-sinij-100987961-1-Container.jpg',
    name: 'Утюг ARG SL-2088А синий',
    price: 6380,
    description: 'мощность: 2200 Вт\n' +
      'автоматическое отключение: Нет\n' +
      'защита от накипи: Нет\n' +
      'противокапельная система: Да\n' +
      'цвет: синий',
    rating: 4.5,
    url: 'https://kaspi.kz/shop/p/arg-sl-2088a-sinii-100987961/?c=750000000#!/item',
    categoryId: 2,
    likes: 0
  },
  {
    id: 31,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/ha3/32301022314526/household-fhsm-505-white-5000820-1-Container.jpg',
    name: 'Швейная машина House Hold FHSM-505 белый',
    price: 27978,
    description: 'количество швейных операций: 8\n' +
      'тип управления: электромеханическое\n' +
      'конструкция: автоматический обрезатель нити, ,отсек для аксессуаров, ,рукавная платформа\n' +
      'подключение к компьютеру: Нет\n' +
      'цвет: белый',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/house-hold-fhsm-505-belyi-5000820/?c=750000000#!/item',
    categoryId: 3,
    likes: 0
  },
  {
    id: 32,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h1a/33659855339550/vivagoods-handy-stich-belyj-101850429-1-Container.jpg',
    name: 'Швейная машина VIVAGOODS Handy Stich белый',
    price: 4995,
    description: 'количество швейных операций: 1\n' +
      'тип управления: механическое\n' +
      'конструкция: нитевдеватель\n' +
      'подключение к компьютеру: Нет\n' +
      'цвет: белый',
    rating: 4.5,
    url: 'https://kaspi.kz/shop/p/vivagoods-handy-stich-belyi-101850429/?c=750000000#!/item',
    categoryId: 3,
    likes: 0
  },
  {
    id: 33,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/h14/31510936944670/janome-1225s-belyj-5000356-1-Container.jpg',
    name: 'Швейная машина Janome 1225s белый',
    price: 112990,
    description: 'количество швейных операций: 25\n' +
      'тип управления: электромеханическое\n' +
      'тип челнока: ротационный вертикальный\n' +
      'конструкция: автоматический обрезатель нити, ,отсек для аксессуаров, ,нитевдеватель, ,рукавная платформа\n' +
      'подключение к компьютеру: Нет\n' +
      'цвет: белый',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/janome-1225s-belyi-5000356/?c=750000000#!/item',
    categoryId: 3,
    likes: 0
  },
  {
    id: 34,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h85/65955354411038/jack-jk-f5-belyi-107651742-1.jpg',
    name: 'Швейная машина Jack JK-F5 белый',
    price: 194000,
    description: 'количество швейных операций: 1\n' +
      'тип управления: механическое\n' +
      'конструкция: стол для расширения рабочей поверхности, ,отсек для аксессуаров\n' +
      'подключение к компьютеру: Нет\n' +
      'цвет: белый',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/jack-jk-f5-belyi-107651742/?c=750000000#!/item',
    categoryId: 3,
    likes: 0
  },
  {
    id: 35,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hfe/48302236237854/reach-easystitch-hsm-21-01-103455019-1.jpg',
    name: 'https://kaspi.kz/shop/p/vivagoods-handy-stich-belyi-101850429/?c=750000000#!/item',
    price: 3350,
    description: 'количество швейных операций: 1\n' +
      'тип управления: механическое\n' +
      'конструкция: рукавная платформа\n' +
      'подключение к компьютеру: Нет\n' +
      'цвет: белый, ,красный',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/reach-easystitch-hsm-21-01-belyi-krasnyi-103455019/?c=750000000#!/item',
    categoryId: 3,
    likes: 0
  },
  {
    id: 41,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/h2f/34128757358622/svc-afp-620-belyj-101590765-1-Container.jpg',
    name: 'Вентилятор SVC AFP-620 белый',
    price: 3520,
    description: 'тип: настольный\n' +
      'мощность: 20 Вт\n' +
      'функция поворота: Нет\n' +
      'регулировка высоты: Нет\n' +
      'цвет: белый',
    rating: 4.5,
    url: 'https://kaspi.kz/shop/p/svc-afp-620-belyi-101590765/?c=750000000#!/item',
    categoryId: 4,
    likes: 0
  },
  {
    id: 42,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/haa/49199442591774/sakura-sa-10bk-cernyj-100370219-1-Container.jpg',
    name: 'Вентилятор Sakura SA-10BK черный',
    price: 7990,
    description: 'тип: напольный\n' +
      'мощность: 35 Вт\n' +
      'функция поворота: Да\n' +
      'регулировка высоты: Да\n' +
      'цвет: черный',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/sakura-sa-10bk-chernyi-100370219/?c=750000000#!/item',
    categoryId: 4,
    likes: 0
  },
  {
    id: 43,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/h50/31733115748382/polaris-psf-2140-rc-black-8600192-1-Container.jpg',
    name: 'Вентилятор Polaris PSF 2140 RC черный',
    price: 20390,
    description: 'тип: напольный\n' +
      'мощность: 40 Вт\n' +
      'функция поворота: Да\n' +
      'регулировка высоты: Да\n' +
      'цвет: черный',
    rating: 4.5,
    url: 'https://kaspi.kz/shop/p/polaris-psf-2140-rc-chernyi-8600192/?c=750000000#!/item',
    categoryId: 4,
    likes: 0
  },
  {
    id: 44,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hcb/49808257351710/midea-fs40-21m-belyj-101752977-1-Container.jpg',
    name: 'Вентилятор Midea FS40-21M белый',
    price: 10497,
    description: 'тип: напольный\n' +
      'мощность: 45 Вт\n' +
      'функция поворота: Да\n' +
      'регулировка высоты: Да\n' +
      'цвет: белый',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/midea-fs40-21m-belyi-101752977/?c=750000000#!/item',
    categoryId: 4,
    likes: 0
  },
  {
    id: 45,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hb6/32279928406046/vitek-vt-1923-cernyj-100403893-1-Container.jpg',
    name: 'Вентилятор Vitek VT-1923 черный',
    price: 39990,
    description: 'тип: напольный\n' +
      'мощность: 120 Вт\n' +
      'функция поворота: Нет\n' +
      'регулировка высоты: Нет\n' +
      'цвет: черный',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/vitek-vt-1923-chernyi-100403893/?c=750000000#!/item',
    categoryId: 4,
    likes: 0
  }



];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
