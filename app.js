/* ============ ЕДИНЫЙ ИСТОЧНИК ДАННЫХ ============ */
const SITE = {
  brand: 'Шнурка.ру',
  experienceYears: '15+',           /* подтверждено действующим сайтом, редактируется здесь */
  minOrder: '6 000 ₽',
  colorsCount: '200+',              /* подтверждено, редактируется здесь */
  address: '124460, Россия, Москва, Зеленоград, Панфиловский проспект, дом 10, строение 1',
  email: 'info@shnurka.ru',
  phoneMain: '+7 (925) 340-36-06',
  phoneMainHref: '+79253403606',
  phoneAlt: '+7 (926) 056-69-56',
  phoneAltHref: '+79260566956',
  phoneCity: '+7 (499) 734-96-39',  /* [НУЖНО УТОЧНИТЬ] — встречается в футере старого сайта */
  schedule: null,                   /* [НУЖНО УТОЧНИТЬ] — не публикуется до подтверждения */
  carriers: ['СДЭК', 'Деловые Линии', 'Байкал Сервис', 'Главдоставка'],
  geo: 'Россия, Казахстан, Беларусь, Армения',
  payment: '100% предоплата после согласования спецификации и коммерческого предложения'
};
const NEED = 'Уточняется после проверки параметров заказа';

const CATS = [
  {slug:'shnurki', name:'Шнурки', short:'Для обуви, одежды и аксессуаров', purpose:'Обувное производство, одежда, спортивные и специальные изделия'},
  {slug:'shnury', name:'Шнуры', short:'Метражом и отрезками для производства', purpose:'Швейные производства, галантерея, декор, упаковка'},
  {slug:'ruchki-dlya-upakovki', name:'Ручки для упаковки', short:'Для бумажных и подарочных пакетов, коробок', purpose:'Типографии, производители пакетов, коробок и подарочной упаковки'},
  {slug:'rezinki-i-narezka', name:'Другое', short:'Резинки и услуги горячей нарезки', purpose:'Шляпная и масочная резинка, горячая нарезка лент и шнуров'}
];

const MATERIALS = ['полиэфир', 'полипропилен', 'хлопок', 'метанит'];

function P(slug, cat, name, o){ return Object.assign({slug, cat, name, slugFull: cat + '/' + slug}, o); }

const PRODUCTS = [
  /* ШНУРЫ */
  P('polipropilen-kruglyj','shnury','Шнур из полипропилена круглый',{
    material:'полипропилен',form:'круглый',twist:'однотонное',purpose:'производство',
    description:'Круглый полипропиленовый шнур подходит для широкого спектра применений. Обладает высокой прочностью, устойчивостью к влаге, химическим веществам и ультрафиолету. Материал не проводит электричество и легко моется, поэтому может использоваться в различных сферах деятельности.'
  }),
  P('polipropilen-vitoj','shnury','Шнур из полипропилена витой',{
    material:'полипропилен',form:'витой',twist:'витое',purpose:'производство',
    description:'Витой шнур из полипропилена — устойчивый и прочный материал, который подходит для широкого применения в различных сферах деятельности.'
  }),
  P('polipropilen-s-metanitom','shnury','Шнур из полипропилена с метанитом',{
    material:'полипропилен, метанит',form:'круглый',twist:'с метанитом',purpose:'производство',
    description:'Шнур из полипропилена с метанитом обладает высокой износостойкостью и устойчивостью к воздействию влаги и ультрафиолетовых лучей. Подходит для применения в различных сферах: от промышленности и сельского хозяйства до ремонта и строительства.'
  }),
  P('poliefir-kruglyj','shnury','Шнур из полиэфира круглый',{
    material:'полиэфир',form:'круглый',twist:'однотонное',purpose:'производство',
    description:'Круглый полиэфирный шнур — универсальный материал для широкого спектра применений. Он обладает высокой прочностью, износостойкостью и устойчивостью к растяжению, поэтому подходит для швейной, текстильной, обувной, мебельной и других отраслей промышленности.'
  }),
  P('poliefir-vitoj','shnury','Шнур из полиэфира витой',{
    material:'полиэфир',form:'витой',twist:'витое',purpose:'производство',
    description:'Вощёный полиэфирный шнур от «Шнурка.ру» обладает высокой износостойкостью и выдерживает сильные механические нагрузки. Благодаря восковому покрытию шнур не пачкается и легко проходит даже через узкие отверстия. Доступен в различных цветах и толщинах, включая классический чёрный цвет.'
  }),
  P('poliefir-ploskij','shnury','Шнур из полиэфира плоский',{material:'полиэфир',form:'плоский',twist:'однотонное',purpose:'производство'}),
  P('hlopok-kruglyj','shnury','Шнур из хлопка круглый',{
    material:'хлопок',form:'круглый',twist:'однотонное',purpose:'производство',
    description:'Круглый шнур из хлопка — один из наших самых популярных продуктов. Он обладает высокой прочностью и надёжностью, поэтому подходит для широкого спектра применений: от рукоделия и творчества до производства одежды и аксессуаров.'
  }),
  P('hlopok-vitoj','shnury','Шнур из хлопка витой',{
    material:'хлопок',form:'витой',twist:'витое',purpose:'производство',
    description:'Витой шнур из хлопка подходит для создания украшений, ремешков и декора различных изделий. Возможно индивидуальное изготовление на заказ: можно выбрать необходимую длину, цвет и толщину шнура. Параметры и срок производства согласовываются с учётом пожеланий заказчика.'
  }),
  P('hlopok-ploskij','shnury','Шнур из хлопка плоский',{
    material:'хлопок',form:'плоский',twist:'однотонное',purpose:'производство',
    description:'Плоский шнур из хлопка — один из наших хитов продаж. Он подходит для упаковки подарков, декорирования домашнего текстиля, создания браслетов и решения других производственных и творческих задач. Доступен для оптового заказа у производителя.'
  }),
  P('hlopok-voshchenyj-kruglyj','shnury','Шнур из хлопка вощёный круглый',{
    material:'хлопок',form:'круглый',twist:'вощёное',purpose:'производство',
    description:'Круглый вощёный шнур из хлопка — универсальный материал для рукоделия, шитья, упаковки подарков, производства обувных изделий и других задач. Отличается высокой прочностью, долговечностью и износостойкостью.'
  }),
  P('hlopok-voshchenyj-ploskij','shnury','Шнур из хлопка вощёный плоский',{
    material:'хлопок',form:'плоский',twist:'вощёное',purpose:'производство',
    description:'Плоский вощёный шнур из хлопка подходит для различных видов ручных работ, изготовления украшений, текстильных изделий, обуви и других задач. Он прочный, хорошо воспринимает красители и сохраняет форму.'
  }),
  P('metanit-vitoj','shnury','Шнур из метанита витой',{
    material:'метанит',form:'витой',twist:'витое',purpose:'производство',
    description:'Витой шнур из метанита — универсальный материал, который может применяться в самых разных областях: от текстильной промышленности до изделий медицинского назначения.'
  }),

  /* ШНУРКИ */
  P('poliefir-kruglye','shnurki','Шнурки для обуви и одежды из полиэфира круглые',{material:'полиэфир',form:'круглый',twist:'однотонное',purpose:'обувь, одежда'}),
  P('poliefir-ploskie','shnurki','Шнурки для обуви и одежды из полиэфира плоские',{material:'полиэфир',form:'плоский',twist:'однотонное',purpose:'обувь, одежда'}),
  P('poliefir-ploskie-dvuhtsvetnye','shnurki','Шнурки для обуви из полиэфира плоские двухцветные',{
    material:'полиэфир',form:'плоский',twist:'двухцветное',purpose:'обувь',
    description:'Плоские двухцветные шнурки из полиэфира отличаются высокой прочностью, износостойкостью и удобством использования. Они подходят для различных видов обуви, одежды, сумок и аксессуаров. Продукция соответствует требованиям качества и безопасности.'
  }),
  P('hlopok-kruglye','shnurki','Шнурки для обуви и одежды из хлопка круглые',{material:'хлопок',form:'круглый',twist:'однотонное',purpose:'обувь, одежда'}),
  P('hlopok-ploskie','shnurki','Шнурки для обуви и одежды из хлопка плоские',{material:'хлопок',form:'плоский',twist:'однотонное',purpose:'обувь, одежда'}),
  P('hlopok-voshchenye','shnurki','Шнурки для обуви и одежды из хлопка вощёные',{material:'хлопок',form:'круглый',twist:'вощёное',purpose:'обувь, одежда'}),

  /* РУЧКИ */
  P('polipropilen-ploskie','ruchki-dlya-upakovki','Ручки для подарочной упаковки из полипропилена плоские',{
    material:'полипропилен',form:'плоский',twist:'однотонное',purpose:'подарочная упаковка',
    description:'Плоские ручки изготавливаются из высококачественного полипропилена — прочного и лёгкого материала. Плоская форма обеспечивает равномерное распределение нагрузки и удобный захват, что особенно важно при переноске тяжёлых пакетов. Подходят для пакетов магазинов, ресторанов, оптовых и розничных продавцов.'
  }),
  P('polipropilen-vyazanye-plastik','ruchki-dlya-upakovki','Ручки для подарочной упаковки из полипропилена вязаные с пластиковым фиксатором',{
    material:'полипропилен',form:'вязаный',twist:'вязаное',purpose:'подарочная упаковка',
    description:'Вязаные ручки из полипропилена с пластиковым фиксатором — стильное и практичное решение для оформления подарочной упаковки. Доступна большая палитра цветов для подбора ручек под дизайн пакета или фирменный стиль.'
  }),
  P('polipropilen-metanit-kruglye','ruchki-dlya-upakovki','Ручки для подарочной упаковки из полипропилена с метанитом круглые',{
    material:'полипропилен, метанит',form:'круглый',twist:'с метанитом',purpose:'подарочная упаковка',
    description:'Круглые ручки из полипропилена с метанитом сочетают выразительный дизайн и практичность. Они устойчивы к внешним воздействиям и сохраняют первоначальный вид в течение длительного времени.'
  }),
  P('polipropilen-kruglye','ruchki-dlya-upakovki','Ручки для подарочной упаковки из полипропилена круглые',{
    material:'полипропилен',form:'круглый',twist:'однотонное',purpose:'подарочная упаковка',
    description:'Круглые ручки из полипропилена — удобное и практичное решение для подарочной упаковки разных форм и размеров. Прочный и гибкий материал не рвётся и сохраняет цвет. Благодаря круглой форме ручки удобно лежат в руке и не вызывают дискомфорта при переноске упаковки.'
  }),
  P('polipropilen-vitye-metall','ruchki-dlya-upakovki','Ручки для подарочной упаковки из полипропилена витые с металлическим фиксатором',{
    material:'полипропилен',form:'витой',twist:'витое',purpose:'подарочная упаковка',
    description:'Витые ручки изготовлены из прочного полипропилена, обеспечивающего надёжность и долговечность. Металлический фиксатор позволяет удобно и безопасно закрепить ручку на упаковке, придавая ей завершённый вид. Разнообразие цветов и дизайнов помогает подобрать вариант под конкретное оформление подарка.'
  }),
  P('polipropilen-vitye-plastik-4-5','ruchki-dlya-upakovki','Ручки для подарочной упаковки из полипропилена витые с пластиковым фиксатором, 4–5 мм',{material:'полипропилен',form:'витой',twist:'витое',purpose:'подарочная упаковка'}),
  P('polipropilen-vitye','ruchki-dlya-upakovki','Ручки для подарочной упаковки из полипропилена витые',{
    material:'полипропилен',form:'витой',twist:'витое',purpose:'подарочная упаковка',
    description:'Витой полипропиленовый шнур с наконечниками, готовый к установке в пакет. Пакет с витой ручкой выглядит дороже и служит дольше пакета с вырубной ручкой: шнур не рвёт бумагу под нагрузкой и не режет ладонь.'
  }),
  P('poliefir-ploskie','ruchki-dlya-upakovki','Ручки для подарочной упаковки из полиэфира плоские',{
    material:'полиэфир',form:'плоский',twist:'однотонное',purpose:'подарочная упаковка',
    description:'Высококачественные плоские ручки из полиэфира для подарочных пакетов. Доступна большая палитра цветов. Изготавливаются оптом и в розницу.'
  }),
  P('poliefir-vitye','ruchki-dlya-upakovki','Ручки для подарочной упаковки из полиэфира витые',{
    material:'полиэфир',form:'витой',twist:'витое',purpose:'подарочная упаковка',
    description:'Витые ручки из полиэфира — стильное и удобное решение для оформления подарков и упаковки. Выразительный дизайн и качественное исполнение помогают сделать упаковку запоминающейся. Доступна большая палитра цветов, изготовление оптом и в розницу.'
  }),
  P('poliefir-kruglye','ruchki-dlya-upakovki','Ручки для подарочной упаковки из полиэфира круглые',{material:'полиэфир',form:'круглый',twist:'однотонное',purpose:'подарочная упаковка'}),
  P('metanit-vitye','ruchki-dlya-upakovki','Ручки для подарочной упаковки из метанита витые',{
    material:'метанит',form:'витой',twist:'витое',purpose:'подарочная упаковка',
    description:'Витые ручки из метанита — металлизированной нити — помогают создать стильный и выразительный дизайн упаковки. Подходят для корпоративных подарков и индивидуальных заказов, подарочных наборов, новогодних сувениров и другой праздничной продукции.'
  }),
  P('metanit-kruglye','ruchki-dlya-upakovki','Ручки для подарочной упаковки из метанита круглые',{
    material:'метанит',form:'круглый',twist:'однотонное',purpose:'подарочная упаковка',
    description:'Круглые ручки из метанита — металлизированной нити — подходят для оформления подарочной упаковки. Они отличаются стойкостью, прочностью и оригинальным дизайном. Доступны оптом и для изготовления на заказ.'
  }),
  P('hlopok-kruglye','ruchki-dlya-upakovki','Ручки для подарочной упаковки из хлопка круглые',{
    material:'хлопок',form:'круглый',twist:'однотонное',purpose:'подарочная упаковка',
    description:'Круглые ручки изготовлены из высококачественного хлопка, что обеспечивает долговечность и удобство использования. Разнообразие цветов и дизайнов позволяет подобрать вариант, который дополнит оформление упаковки и поможет выделить подарок.'
  }),
  P('hlopok-vitye','ruchki-dlya-upakovki','Ручки для подарочной упаковки из хлопка витые',{
    material:'хлопок',form:'витой',twist:'витое',purpose:'подарочная упаковка',
    description:'Витые ручки из хлопка подходят для оформления подарочной упаковки различных форм и размеров. Натуральный хлопок приятен на ощупь и делает изделие более экологичным.'
  }),
  P('hlopok-ploskie','ruchki-dlya-upakovki','Ручки для подарочной упаковки из хлопка плоские',{
    material:'хлопок',form:'плоский',twist:'однотонное',purpose:'подарочная упаковка',
    description:'Плоские ручки из хлопка — практичное решение для красивого оформления подарочной упаковки. Натуральный материал приятен на ощупь, а плоская форма обеспечивает удобный захват и аккуратный внешний вид.'
  }),

  /* ДРУГОЕ */
  P('shlyapnaya-rezinka-plastik','rezinki-i-narezka','Шляпная резинка с пластиковым фиксатором',{
    material:'подбирается',form:'круглый',twist:'—',purpose:'головные уборы',
    description:'Шляпная резинка с пластиковым наконечником — незаменимый аксессуар для обуви, сумок, одежды и других изделий. Отличается прочностью, долговечностью и надёжностью. При производстве используются высококачественные материалы, обеспечивающие долгий срок службы изделия.'
  }),
  P('shlyapnaya-rezinka-metall','rezinki-i-narezka','Шляпная резинка с металлическим фиксатором',{
    material:'подбирается',form:'круглый',twist:'—',purpose:'головные уборы',
    description:'Шляпная резинка с металлическим наконечником — незаменимый аксессуар для обуви, сумок, одежды и других изделий. Отличается прочностью, долговечностью и надёжностью. При производстве используются высококачественные материалы, обеспечивающие долгий срок службы изделия.'
  }),
  P('rezinka-dlya-masok-2mm','rezinki-i-narezka','Резинка для масок диаметром 2 мм',{
    material:'полиэфир',form:'круглый',twist:'—',purpose:'маски',
    description:'Эластичный круглый шнур из латексных нитей в полиэфирной оплётке. Сохраняет форму и качество, не деформируется и не вызывает аллергии при контакте с кожей. Предназначен для оптового производства медицинских масок.',
    features:[
      'Диаметр — 2 мм.',
      'Упругость и сохранение первоначальной формы без деформации.',
      'Не вызывает аллергии и раздражения при тесном контакте с кожей.',
      'Высокая прочность.'
    ]
  }),
  P('goryachaya-narezka-atlasnyh-lent','rezinki-i-narezka','Горячая нарезка атласных лент',{
    material:'атласная лента',form:'плоский',twist:'—',purpose:'нарезка',
    description:'Горячая нарезка атласных лент предназначена для отделки текстильных изделий, аксессуаров и декорирования. Атласные ленты широко применяются в различных видах рукоделия, при упаковке подарков и производстве сувениров, в рекламных акциях, брендировании продукции и изготовлении ручек для пакетов.'
  }),
  P('goryachaya-narezka-shnura','rezinki-i-narezka','Горячая нарезка шнура, кроме хлопкового',{material:'полиэфир, полипропилен',form:'круглый, плоский',twist:'—',purpose:'нарезка'})
];

/* Служебная палитра оттенков для формы запроса */
const COLOR_MAPS = {
  poliefir:      {name:'Полиэфир', colors:[['ПЭ-001','Белый','#F4F4EF'],['ПЭ-002','Чёрный','#1B1B1B'],['ПЭ-003','Серый','#8A8F8B'],['ПЭ-004','Красный','#B33A32'],['ПЭ-005','Тёмно-красный','#7A2320'],['ПЭ-006','Синий','#2C4C7C'],['ПЭ-007','Тёмно-синий','#1F3453'],['ПЭ-008','Голубой','#7FA8C9'],['ПЭ-009','Зелёный','#3E7A4E'],['ПЭ-010','Тёмно-зелёный','#234A30'],['ПЭ-011','Жёлтый','#E4C33B'],['ПЭ-012','Оранжевый','#D57932'],['ПЭ-013','Бежевый','#C9B48F'],['ПЭ-014','Коричневый','#6B4A32'],['ПЭ-015','Розовый','#D98CA0'],['ПЭ-016','Фиолетовый','#6E5A8E']]},
  hlopok:        {name:'Хлопок', colors:[['ХБ-001','Белый','#F6F5EE'],['ХБ-002','Молочный','#EFE8D5'],['ХБ-003','Чёрный','#22211F'],['ХБ-004','Серый','#969B96'],['ХБ-005','Красный','#A93A31'],['ХБ-006','Синий','#33517E'],['ХБ-007','Джинс','#4E6E96'],['ХБ-008','Зелёный','#46784F'],['ХБ-009','Оливковый','#75704B'],['ХБ-010','Жёлтый','#DEC15A'],['ХБ-011','Горчичный','#B99338'],['ХБ-012','Бежевый','#CDBB98'],['ХБ-013','Коричневый','#6E4E38'],['ХБ-014','Кофейный','#8A6A4E'],['ХБ-015','Розовый','#D9A2AE'],['ХБ-016','Голубой','#A5C3D6']]},
  polipropilen:  {name:'Полипропилен', colors:[['ПП-001','Белый','#F5F6F2'],['ПП-002','Чёрный','#1E1E1E'],['ПП-003','Серый','#90958F'],['ПП-004','Красный','#BE3E34'],['ПП-005','Синий','#2F5080'],['ПП-006','Голубой','#82AECF'],['ПП-007','Зелёный','#3F8050'],['ПП-008','Салатовый','#93C26B'],['ПП-009','Жёлтый','#E7C63D'],['ПП-010','Оранжевый','#DA7D33'],['ПП-011','Малиновый','#B4436B'],['ПП-012','Бордовый','#742B35'],['ПП-013','Бежевый','#CDB692'],['ПП-014','Коричневый','#6E4C33'],['ПП-015','Фиолетовый','#715C92'],['ПП-016','Голубой неон','#67D2E0']]}
};

const HOME_COLOR_MAPS = [
  ...[1,2,3,4,5,6].map((n, i) => ({
    title:'Полиэфирная нить',
    sheet:'Лист ' + (i + 1) + ' из 6',
    src:'./assets/images/color-map-poliefir-0' + n + '.jpg'
  })),
  ...[1,2,3].map((n, i) => ({
    title:'Хлопок',
    sheet:'Лист ' + (i + 1) + ' из 3',
    src:'./assets/images/color-map-hlopok-0' + n + '.jpg'
  })),
  {
    title:'Полипропилен',
    sheet:'Цветовая карта',
    src:'./assets/images/color-map-polipropilen-01.jpg'
  }
];

const SOLUTIONS = [
  {slug:'obuvnoe-proizvodstvo', name:'Обувное производство', text:'Шнурки для обуви: круглые и плоские, хлопковые и полиэфирные, вощёные.', products:['poliefir-kruglye','poliefir-ploskie','hlopok-voshchenye']},
  {slug:'odezhda-i-tekstil', name:'Одежда и текстиль', text:'Шнуры и шнурки для худи, спортивной и специальной одежды.', products:['poliefir-kruglyj','hlopok-ploskij','poliefir-vitoj']},
  {slug:'pakety-i-upakovka', name:'Пакеты и упаковка', text:'Ручки для бумажных и подарочных пакетов, шнуры для упаковки.', products:['polipropilen-ploskie','polipropilen-kruglye','hlopok-vitye']},
  {slug:'galantereya-i-aksessuary', name:'Галантерея и аксессуары', text:'Шнуры для сумок, аксессуаров и производственных задач.', products:['polipropilen-kruglyj','polipropilen-vitoj','hlopok-ploskij']},
  {slug:'specodezhda', name:'Специальная одежда', text:'Шнурки и шнуры для спецодежды и рабочей обуви.', products:['poliefir-ploskie','poliefir-kruglye','poliefir-ploskij']},
  {slug:'dekor-i-rukodelie', name:'Декор и рукоделие', text:'Витые и вощёные шнуры, шнуры с метанитом.', products:['hlopok-vitoj','hlopok-voshchenyj-kruglyj','polipropilen-s-metanitom']}
];

const PROCESS = [
  {t:'Заявка, фото или ТЗ', d:'Принимаем заявку с параметрами, фотографией или техническим заданием.', who:'Клиент: формирует запрос'},
  {t:'Уточнение параметров', d:'Согласовываем материал, форму, размер, цвет, длину, наконечники, объём.', who:'Клиент: отвечает на вопросы'},
  {t:'Расчёт стоимости и срока', d:'Готовим коммерческое предложение по согласованным параметрам.', who:'Клиент: получает КП'},
  {t:'Согласование цвета и образца', d:'При необходимости — согласование по цветовой карте и физическому образцу.', who:'Клиент: подтверждает образец'},
  {t:'Утверждение и оплата', d:'Фиксируем спецификацию. Оплата — 100% предоплата по счёту.', who:'Клиент: оплачивает счёт'},
  {t:'Производство и контроль', d:'Изготавливаем партию, контролируем согласованные параметры.', who:'Клиент: получает информацию о готовности'},
  {t:'Упаковка и доставка', d:'Упаковываем и передаём в транспортную компанию. До терминала — бесплатно.', who:'Клиент: получает партию'}
];

const FAQ_HOME = [
  ['Какой минимальный заказ?','Минимальная сумма общего заказа — от 6 000 ₽. Это не минимальный тираж конкретного изделия: минимальная партия каждой позиции зависит от материала, размеров и параметров и уточняется при расчёте.'],
  ['Чем минимальная сумма отличается от минимального тиража?','6 000 ₽ — минимальная сумма всего заказа целиком. В один заказ можно включить несколько позиций. Минимальный тираж конкретного изделия рассчитывается отдельно и зависит от параметров.'],
  ['Можно ли изготовить изделие по образцу?','Да. Отправьте фотографию, эскиз или физический образец — специалист производства подберёт материал, плетение и исполнение под ваш образец.'],
  ['Что отправить, если нет технического задания?','Достаточно фотографии изделия, примера или описания задачи: назначение, примерный размер, цвет, объём. Поможем сформировать спецификацию.'],
  ['Как подобрать материал?','Подскажем по назначению изделия и условиям использования: хлопок — натуральный, полиэфир — износостойкий, полипропилен — лёгкий и влагостойкий, метанит — декоративный металлизированный эффект.'],
  ['Как согласовать цвет?','По цветовым картам полиэфира, хлопка и полипропилена — более 200 цветов. Можно указать код цвета, желаемый Pantone как ориентир или прислать образец.'],
  ['Почему цвет на экране может отличаться?','Отображение цвета зависит от экрана и настроек. Для окончательного согласования используйте номер цветовой карты и физический образец.'],
  ['Можно ли заказать нестандартную длину?','Да, длина и размеры подбираются под параметры заказа. Укажите требуемые значения в форме расчёта.'],
  ['Какие наконечники и фиксаторы доступны?','Пластиковые и металлические наконечники и фиксаторы. Конкретные варианты подбираются под изделие и согласуются при расчёте.'],
  ['Можно ли получить образцы?','Да, доступны образцы цветовых карт, материалов и готовых изделий. Условия подготовки и отправки зависят от выбранного изделия — специалист сообщит вариант после запроса.'],
  ['Бесплатны ли образцы?','Условия предоставления образцов зависят от типа образца и партии. Уточняются после получения запроса.'],
  ['От чего зависит стоимость?','От материала, размеров, длины, типа наконечников, цвета, объёма партии и способа упаковки. Точную стоимость считаем после согласования параметров.'],
  ['Как рассчитывается срок производства?','Срок зависит от изделия, объёма и загрузки производства. Сообщаем в коммерческом предложении после уточнения параметров.'],
  ['Как повторить предыдущий заказ?','На странице «Повтор заказа» укажите номер заказа, счёта или артикул — восстановим сохранённую спецификацию изделия.'],
  ['Как упаковывается продукция?','Способ упаковки согласовывается под изделие и объём партии: намотка, связки, пакеты, короба.'],
  ['Куда выполняется доставка?','По России, Казахстану, Беларуси и Армении. Доставка до терминала транспортной компании — бесплатно, далее — по тарифам перевозчика.'],
  ['Какие документы предоставляются?','Закрывающие документы предоставляются после согласования — уточните состав при оформлении заказа.'],
  ['Работаете ли вы с НДС?','[НУЖНО УТОЧНИТЬ] — условия налогообложения уточняйте у специалиста при расчёте.'],
  ['Как рассматриваются рекламации?','Параметры и контроль партии согласовываются до запуска производства. Порядок предъявления претензий — на странице «Качество и документы».'],
  ['Возьмёте ли небольшую партию?','Минимальная сумма заказа — 6 000 ₽. Возможность изготовления небольшой партии конкретного изделия зависит от его параметров и уточняется при расчёте.']
];

const ARTICLES = [
  {slug:'kak-vybrat-material-shnurka', title:'Как выбрать материал шнурка: хлопок, полиэфир или полипропилен', date:'2026-09-10', upd:'2026-09-10', excerpt:'Сравниваем три основных материала по износостойкости, внешнему виду и назначению.', sections:[['Хлопок','Натуральный материал: мягкий, приятный на ощупь, хорошо «дышит». Подходит для обуви и одежды, где важен натуральный состав. Менее устойчив к влаге и истиранию, чем синтетика.'],['Полиэфир (полиэстер)','Синтетический материал с высокой износостойкостью и стойкостью цвета. Ровное плетение, минимальная усадка. Универсальный выбор для обуви, одежды и упаковки.'],['Полипропилен','Лёгкий материал, устойчивый к влаге. Часто используется для шнуров, ручек и декоративных задач. Яркая палитра цветов.']], table:[['Свойство','Хлопок','Полиэфир','Полипропилен'],['Натуральность','да','нет','нет'],['Износостойкость','средняя','высокая','средняя'],['Влагостойкость','низкая','высокая','высокая'],['Типичное применение','обувь, одежда','обувь, одежда, упаковка','шнуры, ручки, декор']], faq:[['Можно сочетать материалы в одном изделии?','Да, например в двухцветном плетении. Варианты согласовываются при расчёте.'],['Как проверить материал на практике?','Запросите образцы — подберёте материал на ощупь и в применении.']]},
  {slug:'kruglyj-ili-ploskij-shnur', title:'Круглый или плоский шнур: что выбрать для изделия', date:'2026-08-22', upd:'2026-09-05', excerpt:'Разбираемся, когда нужен круглый, плоский или витой шнур и от чего зависит выбор.', sections:[['Круглое сечение','Классика для шнурков и шнуров: равномерное сечение по всей длине, аккуратно смотрится с наконечниками.'],['Плоское сечение','Ложится ровно на поверхность, удобно для швейных операций и отделки. Характерный внешний вид для спортивной обуви и одежды.'],['Витое плетение','Фактурная поверхность, визуальный объём. Часто используется для декора и упаковки.']], table:[['Форма','Сильные стороны','Типичное применение'],['Круглая','равномерность, прочность','обувь, шнуры'],['Плоская','удобство вшивания, лёжка','одежда, отделка'],['Витая','фактура, декоративность','упаковка, декор']], faq:[['Влияет ли форма на стоимость?','Да, вместе с материалом и диаметром. Точный расчёт — по параметрам заказа.']]},
  {slug:'kak-podgotovit-tz', title:'Как подготовить техническое задание на шнурки или шнуры', date:'2026-07-30', upd:'2026-09-01', excerpt:'Чек-лист параметров, которые нужно указать, чтобы получить точный расчёт с первого раза.', sections:[['Обязательные параметры','Вид изделия, материал, форма (круглый / плоский / витой), размер (диаметр или ширина), длина, цвет, количество.'],['Дополнительные параметры','Тип наконечника и его материал, вощение, наполнитель, способ упаковки, требования к растяжению.'],['Если ТЗ нет','Достаточно фотографии образца и описания задачи — поможем формализовать параметры.']], table:[['Параметр','Пример значения'],['Вид изделия','плоские шнурки'],['Материал','полиэфир'],['Размер','ширина 10 мм'],['Длина','120 см'],['Цвет','ПЭ-006 Синий'],['Наконечник','пластиковый, прозрачный'],['Количество','10 000 шт.']], faq:[['Можно ли отправить образец вместо ТЗ?','Да, физический образец или его фотография — рабочий вариант для старта.']]}
];

/* ============ УТИЛИТЫ ============ */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function preventHeadingOrphans(root = document) {
  const shortWords = /(^|[\s(«„"])(а|и|но|в|во|к|ко|с|со|у|о|об|обо|от|до|по|за|на|над|под|при|про|для|без|из|изо)\s+(?=\S)/giu;
  root.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
    const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => {
      node.nodeValue = node.nodeValue.replace(shortWords, '$1$2\u00A0');
    });
  });
}
const catBySlug = s => CATS.find(c => c.slug === s);
const productBySlug = s => PRODUCTS.find(p => p.slugFull === s || p.slug === s);
const money = v => v;
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2800); }
function track(ev, data){ try { const log = JSON.parse(localStorage.getItem('shnurka_analytics') || '[]'); log.push({ev, data: data || {}, ts: Date.now(), page: location.hash}); localStorage.setItem('shnurka_analytics', JSON.stringify(log.slice(-500))); } catch(e){} }

/* Список для расчёта */
const Quote = {
  key: 'shnurka_quote_v1',
  all(){ try { return JSON.parse(localStorage.getItem(this.key) || '[]'); } catch(e){ return []; } },
  save(l){ localStorage.setItem(this.key, JSON.stringify(l)); renderQuoteChip(); },
  add(item){ const l = this.all(); const ex = l.find(i => i.slug === item.slug && i.note === item.note); if (ex) { ex.qty = item.qty || ex.qty; } else l.push(item); this.save(l); },
  remove(slug){ this.save(this.all().filter(i => i.slug !== slug)); },
  clear(){ this.save([]); },
  count(){ return this.all().length; }
};
function renderQuoteChip(){ $$('.quote-chip .cnt').forEach(e => e.textContent = Quote.count()); }

/* Выбранные цвета */
const ColorSel = {
  key: 'shnurka_colors_v1',
  all(){ try { return JSON.parse(localStorage.getItem(this.key) || '[]'); } catch(e){ return []; } },
  toggle(c){ let l = this.all(); const i = l.findIndex(x => x.code === c.code); if (i >= 0) l.splice(i, 1); else l.push(c); localStorage.setItem(this.key, JSON.stringify(l)); return i < 0; },
  clear(){ localStorage.removeItem(this.key); }
};

/* Плейсхолдер-изображение (SVG-паттерн плетения) */
function phSVG(label, dark){
  const bg = dark ? '#141a16' : '#eef2ee';
  return `<svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Заглушка: ${esc(label)}">
    <rect width="400" height="300" fill="${bg}"/>
    ${[0,1,2,3,4,5].map(i=>`<path d="M-20 ${40+i*48} Q 100 ${8+i*48} 200 ${40+i*48} T 420 ${40+i*48}" fill="none" stroke="#48B96A" stroke-opacity="${0.16 + (i%2)*0.12}" stroke-width="7" stroke-linecap="round"/>`).join('')}
    ${[0,1,2,3,4,5].map(i=>`<path d="M-20 ${64+i*48} Q 100 ${96+i*48} 200 ${64+i*48} T 420 ${64+i*48}" fill="none" stroke="#18482A" stroke-opacity="0.14" stroke-width="5" stroke-linecap="round"/>`).join('')}
  </svg>`;
}
function phBlock(label, dark){ return `<div class="card-img ${dark ? 'ph-weave' : 'ph-light'}">${phSVG(label, dark)}<span class="ph-label">Заменить фото: ${esc(label)}</span></div>`; }
const CATEGORY_IMAGES = {
  'shnurki': './assets/images/category-shoelaces.jpg',
  'shnury': './assets/images/category-cords.jpg',
  'ruchki-dlya-upakovki': './assets/images/category-packaging.jpg',
  'rezinki-i-narezka': './assets/images/category-elastic.jpg'
};
const PRODUCT_IMAGES = {
  'shnury/polipropilen-kruglyj': './assets/images/product-polipropilen-kruglyj.jpg',
  'shnury/polipropilen-vitoj': './assets/images/product-polipropilen-vitoj.jpg',
  'shnury/polipropilen-s-metanitom': './assets/images/product-polipropilen-s-metanitom.jpg',
  'shnury/poliefir-kruglyj': './assets/images/product-poliefir-kruglyj.jpg',
  'shnury/poliefir-vitoj': './assets/images/product-poliefir-vitoj.jpg',
  'shnury/hlopok-kruglyj': './assets/images/product-hlopok-kruglyj.jpg',
  'shnury/hlopok-vitoj': './assets/images/product-hlopok-vitoj.jpg',
  'shnury/hlopok-ploskij': './assets/images/product-hlopok-ploskij.jpg',
  'shnury/hlopok-voshchenyj-kruglyj': './assets/images/product-hlopok-voshchenyj-kruglyj.jpg',
  'shnury/hlopok-voshchenyj-ploskij': './assets/images/product-hlopok-voshchenyj-ploskij.jpg',
  'shnury/metanit-vitoj': './assets/images/product-metanit-vitoj.jpg',
  'shnurki/poliefir-ploskie-dvuhtsvetnye': './assets/images/product-shnurki-poliefir-ploskie-dvuhtsvetnye.jpg',
  'ruchki-dlya-upakovki/polipropilen-ploskie': './assets/images/product-ruchki-polipropilen-ploskie.jpg',
  'ruchki-dlya-upakovki/polipropilen-vyazanye-plastik': './assets/images/product-ruchki-polipropilen-vyazanye-plastik.jpg',
  'ruchki-dlya-upakovki/polipropilen-metanit-kruglye': './assets/images/product-ruchki-polipropilen-metanit-kruglye.jpg',
  'ruchki-dlya-upakovki/polipropilen-kruglye': './assets/images/product-ruchki-polipropilen-kruglye.jpg',
  'ruchki-dlya-upakovki/polipropilen-vitye-metall': './assets/images/product-ruchki-polipropilen-vitye-metall.jpg',
  'ruchki-dlya-upakovki/polipropilen-vitye': './assets/images/product-ruchki-polipropilen-vitye.jpg',
  'ruchki-dlya-upakovki/poliefir-ploskie': './assets/images/product-ruchki-poliefir-ploskie.jpg',
  'ruchki-dlya-upakovki/poliefir-vitye': './assets/images/product-ruchki-poliefir-vitye.jpg',
  'ruchki-dlya-upakovki/hlopok-kruglye': './assets/images/product-ruchki-hlopok-kruglye.jpg',
  'ruchki-dlya-upakovki/hlopok-vitye': './assets/images/product-ruchki-hlopok-vitye.jpg',
  'ruchki-dlya-upakovki/hlopok-ploskie': './assets/images/product-ruchki-hlopok-ploskie.jpg',
  'ruchki-dlya-upakovki/metanit-vitye': './assets/images/product-ruchki-metanit-vitye.jpg',
  'ruchki-dlya-upakovki/metanit-kruglye': './assets/images/product-ruchki-metanit-kruglye.jpg',
  'rezinki-i-narezka/rezinka-dlya-masok-2mm': './assets/images/product-rezinka-dlya-masok-2mm.png',
  'rezinki-i-narezka/shlyapnaya-rezinka-metall': './assets/images/product-shlyapnaya-rezinka-metall.jpg',
  'rezinki-i-narezka/goryachaya-narezka-atlasnyh-lent': './assets/images/product-goryachaya-narezka-atlasnyh-lent.jpg'
};
function productImage(cat, alt, eager, slugFull){
  const src = PRODUCT_IMAGES[slugFull] || CATEGORY_IMAGES[cat] || CATEGORY_IMAGES.shnury;
  return `<img src="${src}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

/* ============ ШАПКА / ФУТЕР ============ */
function logoMark(){ return `<img class="logo-mark" src="./assets/images/logo-mark.png" alt="" aria-hidden="true">`; }

function renderHeader(){
  $('#header-root').innerHTML = `
  <div class="topbar">
    <div class="container">
      <div class="topbar-info">
        <span>Собственное производство в Зеленограде</span>
        <span class="tb-sep">•</span>
        <a href="tel:${SITE.phoneMainHref}" data-track="click_phone">${SITE.phoneMain}</a>
        <span class="tb-sep">•</span>
        <a href="mailto:${SITE.email}" data-track="click_email">${SITE.email}</a>
      </div>
      <div class="topbar-actions">
        <a href="#/repeat-order/">Повторить заказ</a>
        <a class="quote-chip" href="#/raschet-zakaza/" title="Список для расчёта">Список расчёта <span class="cnt">${Quote.count()}</span></a>
        <a class="btn btn-accent btn-sm" href="#/raschet-zakaza/" data-track="open_quote">Получить расчёт</a>
      </div>
    </div>
  </div>
  <header class="site-header" id="site-header">
    <div class="container header-main">
      <a class="logo" href="#/" aria-label="Шнурка.ру — на главную">${logoMark()}<span>Шнурка<span class="logo-tld">.ру</span></span></a>
      <nav class="main-nav" aria-label="Основное меню">
        <a href="#/catalog/">Каталог</a>
        <a href="#/cvetovye-karty/">Цветовые карты</a>
        <a href="#/delivery-payment/">Доставка и оплата</a>
        <a href="#/about/">О компании</a>
        <a href="#/contacts/">Контакты</a>
      </nav>
      <div class="header-actions">
        <a class="icon-btn nav-toggle" href="#" data-action="nav-toggle" aria-label="Открыть меню">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </a>
      </div>
    </div>
  </header>
  <div class="mobile-menu" id="mobile-menu" aria-label="Мобильное меню">
    <button class="icon-btn mm-close" data-action="nav-close" aria-label="Закрыть меню"><svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
    <div style="height:56px"></div>
    <a href="#/catalog/">Каталог</a>
    <a href="#/cvetovye-karty/">Цветовые карты</a>
    <a href="#/proizvodstvo-na-zakaz/">Индивидуальное изготовление</a>
    <a href="#/quality/">Качество и документы</a>
    <a href="#/obrazcy/">Запросить образцы</a>
    <a href="#/repeat-order/">Повторить заказ</a>
    <a href="#/delivery-payment/">Доставка и оплата</a>
    <a href="#/articles/">Статьи</a>
    <a href="#/about/">О компании</a>
    <a href="#/contacts/">Контакты</a>
    <div style="margin-top:22px;display:flex;flex-direction:column;gap:10px">
      <a class="btn btn-accent" href="#/raschet-zakaza/">Получить расчёт партии</a>
      <a class="btn btn-ghost" href="tel:${SITE.phoneMainHref}">${SITE.phoneMain}</a>
    </div>
  </div>`;
}

function renderFooter(){
  $('#footer-root').innerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="logo footer-logo" href="#/" aria-label="Шнурка.ру — на главную">${logoMark()}<span>Шнурка<span class="logo-tld">.ру</span></span></a>
          <p style="font-size:14px;max-width:300px;margin:14px 0 18px">Производство шнурков, шнуров и ручек для упаковки. Собственное производство в Зеленограде, опыт более ${SITE.experienceYears.replace('+','')} лет.</p>
          <a class="btn btn-ghost btn-sm footer-repeat" href="#/repeat-order/">Повторить заказ</a>
        </div>
        <div>
          <h5>Каталог</h5>
          ${CATS.map(c => `<a href="#/catalog/${c.slug}/">${c.name}</a>`).join('')}
          <a href="#/catalog/">Весь каталог</a>
        </div>
        <div>
          <h5>Компания</h5>
          <a href="#/quality/">Качество и документы</a>
          <a href="#/cvetovye-karty/">Цветовые карты</a>
          <a href="#/articles/">Статьи</a>
          <a href="#/about/">О компании</a>
        </div>
        <div>
          <h5>Контакты</h5>
          <a href="tel:${SITE.phoneMainHref}" data-track="click_phone">${SITE.phoneMain}</a>
          <a href="tel:${SITE.phoneAltHref}">${SITE.phoneAlt}</a>
          <a href="mailto:${SITE.email}" data-track="click_email">${SITE.email}</a>
          <p style="font-size:13.5px;margin-top:10px;line-height:1.55">${esc(SITE.address)}</p>
          <p style="font-size:13.5px;margin-top:10px">Доставка: ${SITE.geo}</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Шнурка.ру — производитель шнурков и шнуров</span>
        <span style="display:flex;gap:18px;flex-wrap:wrap">
          <a href="#/privacy/">Политика конфиденциальности</a>
          <a href="#/personal-data-consent/">Согласие на обработку данных</a>
          <a href="#/delivery-payment/">Доставка и оплата</a>
        </span>
      </div>
    </div>
  </footer>`;
}

/* ============ ОБЩИЕ КОМПОНЕНТЫ ============ */
function productCard(p, listView){
  return `<article class="p-card">
    <button class="card-img product-popup-trigger" data-action="product-popup" data-slug="${p.slugFull}" aria-label="Подробнее: ${esc(p.name)}">${productImage(p.cat, p.name, false, p.slugFull)}</button>
    <div class="p-body">
      <h3><button class="product-title-button" data-action="product-popup" data-slug="${p.slugFull}">${esc(p.name)}</button></h3>
      <div class="card-actions">
        <button class="btn btn-outline btn-sm" data-action="product-popup" data-slug="${p.slugFull}">Подробнее</button>
      </div>
    </div>
  </article>`;
}

function openProductPopup(slug){
  const p = productBySlug(slug);
  if (!p) return;
  const description = p.description || 'Описание товара будет добавлено после согласования.';
  const features = p.features?.length ? `<div class="product-popup-features"><h3>Особенности</h3><ul>${p.features.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>` : '';
  $('#modal-overlay').innerHTML = `<div class="modal product-modal" role="dialog" aria-modal="true" aria-labelledby="product-popup-title">
    <button class="modal-close" data-action="w-close" aria-label="Закрыть">✕</button>
    <div class="product-modal-grid">
      <div class="product-popup-image">${productImage(p.cat, p.name, true, p.slugFull)}</div>
      <div class="product-popup-content">
        <h2 id="product-popup-title">${esc(p.name)}</h2>
        <p class="product-popup-description">${esc(description)}</p>
        ${features}
        <button class="btn btn-accent" data-action="add-quote" data-slug="${p.slugFull}" data-track="product_added_to_quote">Добавить в расчёт</button>
      </div>
    </div>
  </div>`;
  $('#modal-overlay').classList.add('open', 'product-open');
  document.body.style.overflow = 'hidden';
}

function openColorMap(index){
  const map = HOME_COLOR_MAPS[Number(index)];
  if (!map) return;
  $('#modal-overlay').innerHTML = `<div class="modal color-map-modal" role="dialog" aria-modal="true" aria-labelledby="color-map-popup-title">
    <button class="modal-close" data-action="w-close" aria-label="Закрыть">✕</button>
    <h2 id="color-map-popup-title">${esc(map.title)} — ${esc(map.sheet)}</h2>
    <img src="${map.src}" alt="${esc(map.title)}, ${esc(map.sheet)}">
  </div>`;
  $('#modal-overlay').classList.add('open', 'color-map-open');
  document.body.style.overflow = 'hidden';
}

function faqHTML(items){
  return `<div class="faq">${items.map((f, i) => `<div class="faq-item">
    <button class="faq-q" data-action="faq" aria-expanded="false"><span>${esc(f[0])}</span><span class="fx">+</span></button>
    <div class="faq-a"><div>${esc(f[1])}</div></div>
  </div>`).join('')}</div>`;
}

function quoteMiniForm(prefill){
  return `<form class="form-grid" data-form="quick-quote" novalidate>
    <div class="field">
      <label for="qq-what">Что требуется <span class="req">*</span></label>
      <select id="qq-what" name="what" required>
        <option value="">— Выберите —</option>
        ${CATS.map(c => `<option ${prefill === c.slug ? 'selected' : ''} value="${c.slug}">${c.name}</option>`).join('')}
        <option value=" unsure">Не уверен / нужна консультация</option>
      </select>
      <span class="err-msg">Выберите вид изделия</span>
    </div>
    <div class="field">
      <label for="qq-qty">Примерное количество или метраж <span class="req">*</span></label>
      <input id="qq-qty" name="qty" type="text" placeholder="например, 10 000 шт. или 5 000 м" required>
      <span class="err-msg">Укажите примерный объём</span>
    </div>
    <div class="field">
      <label for="qq-phone">Телефон <span class="req">*</span></label>
      <input id="qq-phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required>
      <span class="err-msg">Укажите телефон</span>
    </div>
    <div class="field">
      <label for="qq-email">Email</label>
      <input id="qq-email" name="email" type="email" placeholder="company@mail.ru">
      <span class="err-msg">Проверьте формат email</span>
    </div>
    <div class="field full consent">
      <input type="checkbox" name="consent" id="qq-consent" required>
      <label for="qq-consent">Согласен на обработку персональных данных в соответствии с <a href="#/personal-data-consent/" style="text-decoration:underline">согласием</a> <span class="req">*</span></label>
    </div>
    <input class="hp" type="text" name="website" tabindex="-1" autocomplete="off">
    <div class="field full" style="flex-direction:row;gap:14px;align-items:center;flex-wrap:wrap">
      <button class="btn btn-accent" type="submit" data-track="quote_step_started">Продолжить расчёт</button>
      <span class="muted small">Нет готового ТЗ? Прикрепите фотографию, эскиз или пример изделия в <a href="#/raschet-zakaza/" style="text-decoration:underline">подробной форме</a> — поможем сформировать спецификацию.</span>
    </div>
    <div class="form-ok full" style="grid-column:1/-1"></div>
  </form>`;
}

/* ============ ГЛАВНАЯ ============ */
function pageHome(){
  const popular = ['poliefir-ploskie','hlopok-voshchenye','polipropilen-kruglye','poliefir-vitoj'].map(productBySlug);
  return `
  <section class="hero">
    <div class="container">
      <div>
        <span class="eyebrow">Прямой производитель · Зеленоград</span>
        <h1><span class="hero-title-line">Производим</span><span class="hero-title-line">шнуры, шнурки</span><span class="hero-title-line">ручки для упаковки</span><span class="hero-title-line hl">под ваш тираж</span></h1>
        <p class="lead">Подберём материал, форму, плетение, размер, цвет, длину и наконечник. Собственное производство в Зеленограде, поставки по России, Казахстану, Беларуси и Армении.</p>
        <div class="hero-cta">
          <a class="btn btn-accent" href="#/raschet-zakaza/" data-track="open_quote">Получить расчёт партии</a>
          <a class="btn btn-ghost" href="#/obrazcy/" data-track="sample_request">Запросить образцы</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="./assets/images/hero-production.jpg" alt="Производство плетёных шнуров на оборудовании" fetchpriority="high" decoding="async">
      </div>
    </div>
    <div class="trust-strip">
      <div class="container">
        <div class="trust-item"><span class="ti-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg></span><div><b>Минимальный заказ<br>от ${SITE.minOrder}</b><span>для всего заказа.</span></div></div>
        <div class="trust-item"><span class="ti-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18"/></svg></span><div><b>Более ${SITE.colorsCount.replace('+','')} цветов</b><span>цветовые карты полиэфира, хлопка и полипропилена</span></div></div>
        <div class="trust-item"><span class="ti-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10m6 10V4m6 16v-7m4 7H2"/></svg></span><div><b>Изготовление по параметрам</b><span>материал, форма, размер, цвет, длина, наконечники</span></div></div>
        <div class="trust-item"><span class="ti-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg></span><div><b>Доставка до терминала ТК — 0 ₽</b><span>${SITE.carriers.join(' · ')}</span></div></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Каталог</span><h2>Что нужно изготовить?</h2></div>
      <div class="grid grid-4 home-categories">
        ${CATS.map(c => `<article class="card category-card">
          <div class="card-img">${productImage(c.slug, c.name, true)}</div>
          <h3>${c.name}</h3>
          <p>${c.short}.</p>
          <div class="tags">${MATERIALS.slice(0,4).map(m => `<span class="tag">${m}</span>`).join('')}</div>
          <div class="card-actions">
            <a class="btn btn-outline btn-sm" href="#/catalog/">Подробнее</a>
          </div>
        </article>`).join('')}
      </div>
      <div style="text-align:center;margin-top:32px">
        <a class="btn btn-dark" href="#/catalog/">Смотреть весь каталог</a>
      </div>
    </div>
  </section>

  <section class="quiz-cover">
    <div class="container quiz-cover-inner">
      <span class="eyebrow">Расчёт стоимости</span>
      <h2>Заполните форму, и мы рассчитаем ваш заказ</h2>
      <p>Ответьте на несколько вопросов о продукции, параметрах и объёме. Если чего-то не знаете — пропустите или выберите помощь специалиста.</p>
      <div class="quiz-cover-meta">
        <span>6 вопросов</span><span>Можно пропускать неизвестные параметры</span><span>Без оплаты на сайте</span>
      </div>
      <button class="btn btn-accent quiz-start" data-action="wizard-start" data-mode="help" data-track="quote_step_started">Начать подбор</button>
    </div>
  </section>

  <section class="section gray tight home-optional">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Популярные решения</span><h2>Запрашиваемые позиции каталога</h2><p>Цены не публикуются: стоимость каждой партии рассчитывается по параметрам.</p></div>
      <div class="grid grid-4 p-list">${popular.map(p => productCard(p)).join('')}</div>
      <div style="text-align:center;margin-top:32px"><a class="btn btn-outline" href="#/catalog/">Весь каталог</a></div>
    </div>
  </section>

  <section class="section dark">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Индивидуальное изготовление</span><h2>Изготовим изделие по вашим параметрам</h2><p>Укажите назначение, материал, форму, размер, цвет, длину, тип наконечника и объём партии. Нет точных параметров — отправьте фотографию или образец, поможем подобрать исполнение.</p></div>
      <div class="custom-slider">
        <button class="custom-slider-arrow prev" data-action="custom-slide" data-dir="-1" aria-label="Предыдущая карточка">←</button>
        <div class="custom-slider-viewport" id="custom-slider-viewport">
          <div class="custom-slider-track">
            ${[['Изделие','шнурки, шнуры, ручки, резинки, нарезка'],['Материал','хлопок, полиэфир, полипропилен, нейлон, метанит'],['Форма и плетение','круглое, плоское, витое; с наполнителем и без'],['Цвет','по цветовым картам; Pantone — как ориентир'],['Размер и длина','диаметр, ширина, длина — под задачу'],['Наконечники','пластиковые и металлические'],['Упаковка','намотка, связки, пакеты, короба'],['Партия','от минимальной суммы заказа 6 000 ₽']].map(c => `<div class="step"><b>${c[0]}</b><span>${c[1]}</span></div>`).join('')}
          </div>
        </div>
        <button class="custom-slider-arrow next" data-action="custom-slide" data-dir="1" aria-label="Следующая карточка">→</button>
      </div>
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:34px">
        <a class="btn btn-accent" href="#/proizvodstvo-na-zakaz/">Собрать спецификацию</a>
        <a class="btn btn-ghost" href="#/obrazcy/">Запросить реальные образцы цветов</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Цветовые карты</span><h2>Выберите цвет по карте или отправьте образец</h2><p>Более 200 цветов в картах полиэфира, хлопка и полипропилена. Можно ознакомиться с доступными оттенками перед отправкой запроса.</p></div>
      <div class="color-map-slider">
        <button class="color-map-arrow prev" data-action="color-map-slide" data-dir="-1" aria-label="Предыдущая цветовая карта">←</button>
        <div class="color-map-slider-viewport" id="color-map-slider-viewport">
          <div class="color-map-slider-track">
            ${HOME_COLOR_MAPS.map((map, i) => `<article class="color-map-card">
              <button class="color-map-image" data-action="color-map-open" data-index="${i}" aria-label="Увеличить: ${map.title}, ${map.sheet}"><img src="${map.src}" alt="${map.title}, ${map.sheet}" loading="lazy"></button>
              <h3>${map.title}</h3><p>${map.sheet}</p>
            </article>`).join('')}
          </div>
        </div>
        <button class="color-map-arrow next" data-action="color-map-slide" data-dir="1" aria-label="Следующая цветовая карта">→</button>
      </div>
    </div>
  </section>

  <section class="section gray tight home-optional">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Возможности</span><h2>Что учитываем при изготовлении партии</h2></div>
      <div class="chips">
        ${['Хлопковые, полиэфирные, полипропиленовые, нейлоновые и металлизированные варианты','Круглое, плоское и витое исполнение','Однотонное и двухцветное плетение','С наполнителем и без','Пластиковые и металлические наконечники и фиксаторы','Вощение хлопковых шнурков','Изготовление по образцу заказчика','Согласование цвета до запуска','Горячая нарезка лент и шнуров','Варианты упаковки','Повторение согласованной спецификации'].map(c => `<span class="chip">${c}</span>`).join('')}
      </div>
    </div>
  </section>

  <section class="section dark">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Процесс</span><h2>Как проходит заказ: <span class="mobile-title-line">7 этапов</span></h2><p>Прозрачная схема: что делает производство, что нужно от вас и какой результат вы получаете на каждом шаге.</p></div>
      <div class="steps">
        ${PROCESS.map(s => `<div class="step"><b>${s.t}</b><span>${s.d}</span><div class="who">${s.who}</div></div>`).join('')}
      </div>
      <p class="small" style="color:#8b968f;margin-top:22px">Оплата — ${SITE.payment.charAt(0).toLowerCase() + SITE.payment.slice(1)}.</p>
    </div>
  </section>

  <section class="section gray home-optional" id="solutions">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Подбор по задаче</span><h2>Подберём изделие под вашу задачу</h2><p>Основные направления, для которых производим шнуры, шнурки и ручки.</p></div>
      <div class="grid grid-3 home-solutions">
        ${SOLUTIONS.map((s, i) => `<article class="card solution-card">
          <span class="solution-index">${String(i + 1).padStart(2, '0')}</span>
          <h3 style="margin-top:0">${s.name}</h3>
          <p>${s.text}</p>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="section home-optional">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Контроль качества</span><h2>Контролируем параметры согласованной партии</h2><p>Не обещаем «0% брака» — согласовываем параметры и порядок контроля до запуска производства и сверяем партию с утверждённым образцом.</p></div>
      <div class="grid grid-3">
        ${[['Параметры до старта','Материал, форма, размер, длина, цвет и тип наконечников фиксируются в спецификации до запуска партии.'],['Сверка с образцом','Цвет и исполнение сверяются с согласованным образцом или номером цветовой карты.'],['Повторяемость','Сохранённая спецификация позволяет повторить партию с теми же параметрами.']].map(c => `<div class="card"><h3 style="margin-top:0">${c[0]}</h3><p>${c[1]}</p></div>`).join('')}
      </div>
      <div class="badge-warn" style="margin-top:26px">Параметры и контроль согласовываются до запуска партии. Состав проверок для конкретного изделия — на странице <a href="#/quality/" style="text-decoration:underline">«Качество и документы»</a>.</div>
    </div>
  </section>

  <section class="section tight home-optional">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Доставка и оплата</span><h2>Условия без мелкого шрифта</h2></div>
      <div class="grid grid-3">
        ${[[`Минимальный заказ — ${SITE.minOrder}`,'Минимальная сумма общего заказа. В один заказ можно включить несколько позиций.'],['100% предоплата','Оплата по счёту после согласования спецификации и коммерческого предложения.'],['География поставки', SITE.geo + '. Доставка до терминала транспортной компании — бесплатно, далее — по тарифам перевозчика.']].map(c => `<div class="card"><h3 style="margin-top:0">${c[0]}</h3><p>${c[1]}</p></div>`).join('')}
      </div>
      <p class="small muted" style="margin-top:16px">Транспортные компании: ${SITE.carriers.join(', ')}.</p>
      <div style="margin-top:22px"><a class="btn btn-outline" href="#/delivery-payment/">Подробнее о доставке и оплате</a></div>
    </div>
  </section>

  <section class="section gray">
    <div class="container">
      <div class="section-head"><span class="eyebrow">FAQ</span><h2>Частые вопросы</h2></div>
      <div class="home-faq-narrow">${faqHTML(FAQ_HOME.slice(0, 10))}</div>
    </div>
  </section>

  <section class="section dark">
    <div class="container" style="text-align:center;max-width:760px">
      <span class="eyebrow" style="justify-content:center">Следующий шаг</span>
      <h2 style="font-size:clamp(26px,3vw,38px);font-weight:800;letter-spacing:-.02em;margin-bottom:14px">Получите расчёт партии по вашим параметрам</h2>
      <p style="color:#aeb8b1;margin-bottom:30px">Укажите вид изделия, примерный объём и задачу. Если есть образец, фотография, чертёж или техническое задание — приложите их к заявке.</p>
      <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
        <a class="btn btn-accent" href="#/raschet-zakaza/">Получить стоимость и срок</a>
        <a class="btn btn-ghost" href="tel:${SITE.phoneMainHref}" data-track="click_phone">${SITE.phoneMain}</a>
      </div>
      <p class="small" style="color:#8b968f;margin-top:18px">Или напишите: <a href="mailto:${SITE.email}" style="color:var(--accent)" data-track="click_email">${SITE.email}</a> · <a href="#/raschet-zakaza/" style="color:var(--accent)">подробный технический запрос</a></p>
    </div>
  </section>`;
}

function swatchGrid(mapKey, limit){
  const map = COLOR_MAPS[mapKey];
  const sel = ColorSel.all();
  return map.colors.slice(0, limit || map.colors.length).map(c => {
    const isSel = sel.some(x => x.code === c[0]);
    return `<button class="swatch ${isSel ? 'sel' : ''}" data-action="color-select" data-code="${c[0]}" data-name="${esc(c[1])}" data-hex="${c[2]}" data-map="${map.name}" data-track="color_selected" aria-pressed="${isSel}">
      <span class="sw" style="background:${c[2]};display:block"></span>
      <span class="sw-info"><b>${esc(c[1])}</b><span>${c[0]}</span></span>
    </button>`;
  }).join('');
}
function renderSelectedColors(){
  const sel = ColorSel.all();
  const html = sel.length
    ? sel.map(c => `<span class="tag" style="display:inline-flex;align-items:center;gap:8px"><span style="width:14px;height:14px;border-radius:4px;background:${c.hex};border:1px solid rgba(0,0,0,.15);display:inline-block"></span>${esc(c.name)} · ${c.code} <button data-action="color-remove" data-code="${c.code}" style="background:none;border:none;font-weight:700;cursor:pointer;color:inherit" aria-label="Убрать">×</button></span>`).join('')
    : '';
  $$('.selected-colors').forEach(el => el.innerHTML = html);
  const btns = $$('.selected-colors + *');
  return sel.length;
}

/* ============ КАТАЛОГ ============ */
const catalogState = { q: '', cats: [], mats: [], sort: 'name' };

function pageCatalog(catSlug){
  const cat = catSlug ? catBySlug(catSlug) : null;
  catalogState.cats = catSlug ? [catSlug] : []; catalogState.q = ''; catalogState.mats = [];
  const title = cat ? cat.name : 'Каталог продукции';
  const desc = cat ? cat.purpose : 'Шнурки, шнуры, ручки для упаковки, резинки и услуги нарезки. Все позиции — от производителя, цена рассчитывается по параметрам.';
  return `
  <section class="page-head"><div class="container">
    <nav class="crumbs" aria-label="Хлебные крошки"><a href="#/">Главная</a> / <a href="#/catalog/">Каталог</a>${cat ? ' / <span>' + esc(cat.name) + '</span>' : ''}</nav>
    <h1>${title}</h1><p>${desc}</p>
  </div></section>
  <section class="section tight"><div class="container">
    <div class="catalog-layout">
      <aside class="filters" aria-label="Фильтры">
        <div class="f-group">
          <h4>Поиск по каталогу</h4>
          <div class="field"><input type="search" id="f-search" placeholder="Название, материал…" data-catalog-search aria-label="Поиск по каталогу"></div>
        </div>
        <div class="f-group"><h4>Категория</h4>
          ${CATS.map(c => `<label class="f-check"><input type="checkbox" data-filter="cats" value="${c.slug}" ${catalogState.cats.includes(c.slug) ? 'checked' : ''}>${c.name}</label>`).join('')}
        </div>
        <div class="f-group"><h4>Материал</h4>
          ${MATERIALS.map(m => `<label class="f-check"><input type="checkbox" data-filter="mats" value="${m}">${m[0].toUpperCase() + m.slice(1)}</label>`).join('')}
        </div>
        <button class="btn btn-outline btn-sm" data-action="clear-filters" style="width:100%">Сбросить фильтры</button>
      </aside>
      <div>
        <div class="catalog-toolbar">
          <span class="count" id="catalog-count"></span>
          <span style="flex:1"></span>
          <label class="small muted" for="f-sort">Сортировка:</label>
          <select id="f-sort" data-catalog-sort>
            <option value="name">По названию</option>
            <option value="material">По материалу</option>
          </select>
          <div class="view-toggle" role="group" aria-label="Вид списка">
            <button class="on" data-action="view" data-view="grid" aria-label="Плитка">▦</button>
            <button data-action="view" data-view="list" aria-label="Список">☰</button>
          </div>
        </div>
        <div class="active-filters" id="active-filters"></div>
        <div class="grid grid-3 p-list" id="catalog-list"></div>
      </div>
    </div>
  </div></section>`;
}

function applyCatalogFilters(){
  let list = PRODUCTS.slice();
  if (catalogState.cats.length) list = list.filter(p => catalogState.cats.includes(p.cat));
  if (catalogState.q) { const q = catalogState.q.toLowerCase(); list = list.filter(p => (p.name + ' ' + p.material + ' ' + p.purpose + ' ' + p.form).toLowerCase().includes(q)); }
  if (catalogState.mats.length) list = list.filter(p => catalogState.mats.some(m => p.material.includes(m)));
  list = list.slice().sort((a, b) => catalogState.sort === 'material' ? a.material.localeCompare(b.material, 'ru') : a.name.localeCompare(b.name, 'ru'));
  const el = $('#catalog-list'); if (!el) return;
  $('#catalog-count').textContent = 'Найдено позиций: ' + list.length;
  const af = [];
  if (catalogState.q) af.push(['поиск: «' + catalogState.q + '»', null]);
  catalogState.cats.forEach(c => { const cat = catBySlug(c); af.push(['категория: ' + (cat ? cat.name : c), 'cats:' + c]); });
  catalogState.mats.forEach(m => af.push(['материал: ' + m, 'mats:' + m]));
  $('#active-filters').innerHTML = af.map(a => `<span class="af">${esc(a[0])}${a[1] ? `<button data-action="remove-filter" data-key="${a[1]}" aria-label="Убрать фильтр">×</button>` : ''}</span>`).join('');
  el.innerHTML = list.length ? list.map(p => productCard(p)).join('') :
    `<div class="empty-state" style="grid-column:1/-1"><h3 style="margin-bottom:8px">Ничего не найдено</h3><p>Попробуйте изменить фильтры или <a href="#/raschet-zakaza/" style="text-decoration:underline">отправить запрос</a> — изготовим по индивидуальным параметрам.</p></div>`;
}

/* ============ КАРТОЧКА ПРОДУКТА ============ */
function pageProduct(slugFull){
  const p = productBySlug(slugFull);
  if (!p) return page404();
  const cat = catBySlug(p.cat);
  const chars = [
    ['Материал', p.material], ['Форма', p.form], ['Плетение', p.twist],
    p.tips ? ['Наконечники', p.tips] : null,
    p.fix ? ['Фиксаторы', p.fix] : null,
    ['Цвета', 'по цветовым картам (' + SITE.colorsCount.replace('+','') + '+ цветов)'],
    ['Двухцветное исполнение', p.twist === 'двухцветное' ? 'да' : (p.cat === 'shnurki' || p.cat === 'shnury' ? 'возможно — по запросу' : null)],
    ['Диаметр / ширина', null], ['Длина', null],
    ['Минимальная сумма заказа', SITE.minOrder],
    ['Минимальный тираж', null],
    ['Типовой срок', null]
  ].filter(r => r && r[1]);
  const charsHidden = ['Диаметр / ширина', 'Длина', 'Минимальный тираж', 'Типовой срок'];
  const related = PRODUCTS.filter(x => x.cat === p.cat && x.slug !== p.slug).slice(0, 4);
  const artArticles = ARTICLES.slice(0, 2);
  return `
  <section class="page-head"><div class="container">
    <nav class="crumbs"><a href="#/">Главная</a> / <a href="#/catalog/">Каталог</a> / <a href="#/catalog/${p.cat}/">${cat.name}</a> / <span>${esc(p.name)}</span></nav>
    <h1>${esc(p.name)}</h1><p>${esc(p.desc)}</p>
  </div></section>
  <section class="section tight"><div class="container">
    <div class="two-col" style="grid-template-columns:1fr 1fr">
      <div>
        <div class="card-img" style="aspect-ratio:4/3;border-radius:var(--radius);border:1px solid var(--border)">${phSVG(p.name, false)}<span class="ph-label">Заменить: общий вид изделия</span></div>
        <div class="grid grid-4" style="gap:12px;margin-top:12px">
          ${['Фактура крупно','Сечение / профиль','Наконечник','Применение'].map(l => `<div class="card-img" style="aspect-ratio:1">${phSVG(l, false)}<span class="ph-label" style="font-size:10px">${l}</span></div>`).join('')}
        </div>
      </div>
      <div>
        <p style="margin-bottom:20px">${esc(p.purpose)}. Параметры изготовления подбираются под задачу и согласовываются до запуска партии.</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:26px">
          <button class="btn btn-accent" data-action="add-quote" data-slug="${p.slugFull}" data-track="product_added_to_quote">Добавить в расчёт</button>
          <a class="btn btn-outline" href="#/obrazcy/" data-track="sample_request">Запросить образец</a>
          <a class="btn btn-dark" href="#/contacts/">Задать вопрос по изделию</a>
        </div>
        <div class="badge-warn">Стоимость рассчитывается по параметрам партии. Чем точнее вводные — тем точнее расчёт с первого раза.</div>
      </div>
    </div>

    <h3 class="sub">Характеристики</h3>
    <table class="chars"><tbody>
      ${chars.map(r => `<tr><th scope="row">${r[0]}</th><td>${esc(r[1])}</td></tr>`).join('')}
      ${charsHidden.map(h => `<tr><th scope="row">${h}</th><td><span class="muted">${NEED}</span></td></tr>`).join('')}
    </tbody></table>

    <h3 class="sub">Варианты исполнения</h3>
    <div class="chips">${['материал','цвет','длина','размер','тип наконечника','цвет наконечника','вощение','упаковка'].map(v => `<span class="chip">меняется: ${v}</span>`).join('')}</div>

    <h3 class="sub">От чего зависит стоимость</h3>
    <div class="grid grid-3">
      ${[['Материал и размер','Тип нити, диаметр или ширина, длина изделия.'],['Объём партии','Чем больше тираж, тем ниже себестоимость единицы.'],['Исполнение','Наконечники, вощение, двухцветное плетение, упаковка.']].map(c => `<div class="card"><h3 style="margin-top:0">${c[0]}</h3><p>${c[1]}</p></div>`).join('')}
    </div>

    <h3 class="sub">Производство и контроль</h3>
    <p class="muted" style="max-width:760px">Партия изготавливается на собственном производстве в Зеленограде. Параметры и порядок контроля согласовываются до запуска; цвет сверяется с согласованным образцом или номером цветовой карты.</p>

    <h3 class="sub">Вопросы по изделию</h3>
    ${faqHTML([
      ['Как быстро получить расчёт по этой позиции?','Добавьте изделие в расчёт и укажите параметры партии — специалист подготовит коммерческое предложение.'],
      ['Можно получить образец именно этого изделия?','Да, запросите образец на отдельной странице. Условия подготовки и отправки зависят от изделия и сообщаются после запроса.'],
      ['Можно ли повторить заказ с теми же параметрами?','Да. Сохранённая спецификация позволяет повторить партию. Раздел «Повтор заказа».']
    ])}

    <h3 class="sub">Похожие товары</h3>
    <div class="grid grid-4 p-list">${related.map(x => productCard(x)).join('')}</div>

    <h3 class="sub">Полезные статьи</h3>
    <div class="grid grid-2">${artArticles.map(a => `<a class="card" href="#/articles/${a.slug}/"><h3 style="margin-top:0">${esc(a.title)}</h3><p>${esc(a.excerpt)}</p></a>`).join('')}</div>

    <div class="card" style="margin-top:40px;background:var(--bg);border:none;color:#fff;flex-direction:row;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap">
      <div><h3 style="margin-top:0;color:#fff">Нужен расчёт по «${esc(p.name)}»?</h3><p style="flex-grow:0">Укажите параметры партии — ответим со стоимостью и сроком.</p></div>
      <a class="btn btn-accent" href="#/raschet-zakaza/" data-track="open_quote">Получить расчёт</a>
    </div>
  </div></section>`;
}

/* ============ ЦВЕТОВЫЕ КАРТЫ ============ */
function pageColors(){
  const groups = ['Полиэфирная нить','Хлопок','Полипропилен'];
  return `
  <section class="page-head"><div class="container">
    <nav class="crumbs"><a href="#/">Главная</a> / <span>Цветовые карты</span></nav>
    <h1>Цветовые карты</h1><p>Более ${SITE.colorsCount.replace('+','')} цветов для изделий из полиэфира, хлопка и полипропилена.</p>
  </div></section>
  <section class="section tight"><div class="container">
    <div class="color-warn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:1px"><path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4m0 3v.5"/></svg><div><b>Отображение цвета зависит от экрана.</b> Для окончательного согласования используйте номер цветовой карты и физический образец. Желаемый Pantone можно указать как ориентир или прикрепить образец — точное совпадение не заявляется.</div></div>
    ${groups.map(group => {
      const maps = HOME_COLOR_MAPS.map((map, index) => ({...map, index})).filter(map => map.title === group);
      return `<section class="color-maps-page-section">
        <div class="section-head"><h2>${group}</h2><p>${maps.length === 1 ? 'Цветовая карта' : maps.length === 3 ? '3 листа цветовой карты' : maps.length + ' листов цветовой карты'}</p></div>
        <div class="color-maps-page-grid">
          ${maps.map(map => `<article class="color-map-card page-color-map-card">
            <button class="color-map-image" data-action="color-map-open" data-index="${map.index}" aria-label="Увеличить: ${map.title}, ${map.sheet}"><img src="${map.src}" alt="${map.title}, ${map.sheet}" loading="lazy"></button>
            <h3>${map.title}</h3><p>${map.sheet}</p>
          </article>`).join('')}
        </div>
      </section>`;
    }).join('')}
    <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:42px">
      <a class="btn btn-accent" href="#/raschet-zakaza/" data-track="open_quote">Получить расчёт</a>
      <a class="btn btn-outline" href="#/obrazcy/" data-track="sample_request">Запросить физический образец</a>
    </div>
  </div></section>`;
}
function selectedColorsHTML(){
  const sel = ColorSel.all();
  if (!sel.length) return '<span class="muted small">Пока не выбран ни один оттенок. Нажмите на образец, чтобы добавить его.</span>';
  return sel.map(c => `<span class="tag" style="display:inline-flex;align-items:center;gap:8px"><span style="width:14px;height:14px;border-radius:4px;background:${c.hex};border:1px solid rgba(0,0,0,.15);display:inline-block"></span>${esc(c.name)} · ${c.code} <button data-action="color-remove" data-code="${c.code}" style="background:none;border:none;font-weight:700;cursor:pointer;color:inherit" aria-label="Убрать ${esc(c.name)}">×</button></span>`).join('');
}

/* ============ СТАТИЧЕСКИЕ СТРАНИЦЫ ============ */
function simplePage(title, crumb, body, wide){
  return `
  <section class="page-head"><div class="container">
    <nav class="crumbs"><a href="#/">Главная</a> / <span>${crumb}</span></nav>
    <h1>${title}</h1>
  </div></section>
  <section class="section tight"><div class="container"${wide ? '' : ' style="max-width:920px"'}>${body}</div></section>`;
}

/* ============ СПИСОК ДЛЯ РАСЧЁТА + КОНФИГУРАТОР ============ */
let wizard = null;
function pageQuote(){
  const list = Quote.all();
  const colors = ColorSel.all();
  return `
  <section class="page-head"><div class="container">
    <nav class="crumbs"><a href="#/">Главная</a> / <span>Расчёт заказа</span></nav>
    <h1>Расчёт партии</h1><p>Многошаговый конфигуратор: от параметров изделия до отправки запроса. Данные сохраняются между шагами.</p>
  </div></section>
  <section class="section tight"><div class="container">
    <div class="two-col" style="grid-template-columns:1.25fr .75fr">
      <div>
        <div class="card" style="padding:30px">
          <h2 style="font-size:22px;margin-bottom:6px">Новая позиция</h2>
          <p class="muted small" style="margin-bottom:20px">Знаете параметры — укажите сами. Нет — ответьте на простые вопросы о задаче, поможем с подбором.</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px">
            <button class="btn btn-accent" data-action="wizard-start" data-mode="known" data-track="quote_step_started">Знаю нужные параметры</button>
            <button class="btn btn-outline" data-action="wizard-start" data-mode="help" data-track="quote_step_started">Нужна помощь с подбором</button>
          </div>
          <hr style="border:none;border-top:1px solid var(--border);margin:22px 0">
          <h3 style="font-size:17px;margin-bottom:14px">Или быстрая заявка</h3>
          ${quoteMiniForm('')}
        </div>
      </div>
      <aside>
        <div class="card" style="padding:24px;position:sticky;top:110px">
          <h3 style="margin-top:0">Список для расчёта <span class="tag" style="margin-left:6px">${list.length}</span></h3>
          <div id="quote-list">${quoteListHTML()}</div>
          ${colors.length ? `<h3 style="font-size:15px;margin:18px 0 8px">Выбранные цвета</h3><div class="selected-colors" style="margin:0">${selectedColorsHTML()}</div>` : ''}
          <div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap">
            <button class="btn btn-dark btn-sm" data-action="quote-clear" ${list.length ? '' : 'disabled'}>Очистить</button>
          </div>
          <p class="small muted" style="margin-top:14px">Это не корзина: оплаты здесь нет. Список превращается в единый запрос коммерческого предложения.</p>
        </div>
      </aside>
    </div>
  </div></section>`;
}
function quoteListHTML(){
  const list = Quote.all();
  if (!list.length) return '<p class="muted small">Пока пусто. Добавьте позиции из каталога или соберите параметры в конфигураторе.</p>';
  return list.map(i => `<div style="display:flex;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);align-items:center">
    <div><b style="font-size:14px">${esc(i.name)}</b><div class="small muted">${esc(i.note || '')}</div></div>
    <div style="display:flex;align-items:center;gap:10px">
      <input type="number" min="1" value="${i.qty || 1}" style="width:72px;padding:6px 8px;border:1.5px solid var(--border);border-radius:8px" data-action-qty="${i.slug}" aria-label="Количество">
      <button class="icon-btn" style="color:var(--err)" data-action="quote-remove" data-slug="${i.slug}" aria-label="Удалить"><svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13h8l1-13"/></svg></button>
    </div>
  </div>`).join('');
}

/* Мастер конфигуратора (модальное окно) */
const WIZ_STEPS = ['Продукция','Задача','Материал','Размеры','Цвет','Объём','Доставка','Контакт'];
function openWizard(mode, prefill){
  wizard = { step: 0, mode: mode || 'known', data: Object.assign({ items: [], files: [], wphone: '', wemail: '' }, prefill || {}) };
  $('#modal-overlay').classList.remove('product-open', 'color-map-open');
  renderWizard();
  $('#modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  track('quote_step_started', { mode: wizard.mode });
}
function closeWizard(){ $('#modal-overlay').classList.remove('open', 'product-open', 'color-map-open'); document.body.style.overflow = ''; wizard = null; }
function wField(label, name, type, opts, required, ph){
  const val = wizard.data[name] || '';
  if (type === 'select') return `<div class="field"><label>${label}${required ? ' <span class="req">*</span>' : ''}</label><select name="${name}" ${required ? 'data-wreq' : ''}><option value="">— Выберите —</option>${opts.map(o => `<option ${val === o[0] ? 'selected' : ''} value="${esc(o[0])}">${esc(o[1])}</option>`).join('')}</select><span class="err-msg">Заполните поле</span></div>`;
  if (type === 'textarea') return `<div class="field full"><label>${label}</label><textarea name="${name}" rows="3" placeholder="${ph || ''}">${esc(val)}</textarea></div>`;
  return `<div class="field"><label>${label}${required ? ' <span class="req">*</span>' : ''}</label><input name="${name}" type="${type}" value="${esc(val)}" placeholder="${ph || ''}" ${required ? 'data-wreq' : ''}><span class="err-msg">Заполните поле</span></div>`;
}
function wizardStepHTML(){
  const d = wizard.data, s = wizard.step;
  const selected = d.items || [];
  let inner = '';
  if (s === 0){
    const products = [['shnury','Шнуры'],['shnurki','Шнурки для обуви'],['ruchki-dlya-upakovki','Ручки для подарочной упаковки'],['other','Другое: резинка, нарезка или другая продукция'],['help','Пока не знаю — нужна консультация']];
    inner = `<h2>Выберите необходимую продукцию</h2><p class="muted" style="margin-bottom:24px">Можно отметить несколько вариантов.</p><div class="grid grid-2 quiz-options">${products.map(o => `<label class="card quiz-option ${selected.includes(o[0])?'selected':''}"><input type="checkbox" data-witem="${o[0]}" ${selected.includes(o[0])?'checked':''}><b>${o[1]}</b></label>`).join('')}</div>`;
  } else if (s === 1){
    inner = `<h2>Для какой задачи или какого изделия?</h2><div class="form-grid quiz-single-field">${wField('Расскажите, где будет использоваться продукция', 'taskOther', 'textarea', null, true, 'Например: ручки для подарочных пакетов или шнур для худи')}</div>`;
  } else if (s === 2){
    const materials = [['хлопок','Хлопок'],['полиэфир','Полиэфир'],['полипропилен','Полипропилен'],['other','Другой материал'],['help','Не знаю — помогите подобрать']];
    inner = `<h2>Какой материал нужен?</h2><p class="muted" style="margin-bottom:24px">Можно отметить несколько вариантов.</p><div class="grid grid-3 quiz-options">${materials.map(o => `<label class="card quiz-option ${(d.materials||[]).includes(o[0])?'selected':''}"><span class="quiz-photo-slot">Фото материала</span><input type="checkbox" data-wmaterial="${o[0]}" ${(d.materials||[]).includes(o[0])?'checked':''}><b>${o[1]}</b></label>`).join('')}</div><div class="form-grid" style="margin-top:18px">${wField('Комментарий к материалу', 'materialOther', 'text', null, false, 'Укажите другой материал или требования')}</div>`;
  } else if (s === 3){
    const cord = selected.includes('shnury') || selected.includes('other');
    const lace = selected.includes('shnurki');
    const handle = selected.includes('ruchki-dlya-upakovki');
    inner = `<h2>Какие размеры нужны?</h2><p class="muted" style="margin-bottom:24px">Можно указать примерные размеры или прикрепить фото/образец. Если не знаете — пропустите.</p><div class="form-grid">${cord?wField('Диаметр шнура, мм','diameter','text',null,false,'например, 5 мм'):''}${cord?wField('Профиль шнура','profile','select',[['round','Круглый'],['flat','Плоский']]):''}${lace?wField('Ширина шнурка, мм','width','text',null,false,'например, 10 мм'):''}${lace?wField('Толщина, мм','thickness','text',null,false,'если известна'):''}${handle?wField('Длина или размеры ручки','handleSize','text',null,false,'если применимо'):''}${wField('Комментарий к размерам','sizeComment','textarea',null,false,'Другие параметры')}</div>${fileFieldHTML('Прикрепить фото или образец')}`;
  } else if (s === 4){
    inner = `<h2>Какой цвет нужен?</h2><p class="muted" style="margin-bottom:24px">Укажите желаемый цвет, точный код из цветовой карты или загрузите пример — мы подберём цвет.</p><div class="form-grid quiz-single-field">${wField('Цвет или код карты','color','textarea',null,false,'Например: тёмно-зелёный или код поставщика')}</div><div class="color-map-slots">${['Карта шнуров','Карта шнурков','Карта лент','Дополнительная карта'].map((t,i)=>`<button type="button" class="color-map-slot" disabled><span>Изображение ${i+1}</span><b>${t}</b><small>будет добавлено</small></button>`).join('')}</div><div class="quiz-checks"><label><input type="checkbox" data-wcolorflag="sample" ${(d.colorFlags||[]).includes('sample')?'checked':''}> Нужен подбор по образцу</label><label><input type="checkbox" data-wcolorflag="unknown" ${(d.colorFlags||[]).includes('unknown')?'checked':''}> Цвет пока не выбран</label></div>${fileFieldHTML('Прикрепить фото или файл')}`;
  } else if (s === 5){
    const volumes=['до 500','500–1 000','1 000–5 000','более 5 000'];
    inner = `<h2>Какой объём планируете заказать?</h2><p class="muted" style="margin-bottom:24px">Если объём пока примерный, укажите ориентир.</p><div class="grid grid-2 quiz-options">${volumes.map(v=>`<button class="card quiz-option ${d.volume===v?'selected':''}" data-wpick="volume" data-val="${v}"><b>${v}</b></button>`).join('')}</div>${wField('Комментарий к объёму','volumeComment','text',null,false,'Можно указать единицы: шт., пары или метры')}`;
  } else if (s === 6){
    const deadlines=['Как можно скорее','В течение месяца','Позже','Срок пока не определён'];
    inner = `<h2>Когда и куда нужно доставить?</h2><h3>Когда нужен заказ?</h3><div class="grid grid-2 quiz-options">${deadlines.map(v=>`<button class="card quiz-option ${d.deadline===v?'selected':''}" data-wpick="deadline" data-val="${v}"><b>${v}</b></button>`).join('')}</div><div class="form-grid" style="margin-top:22px">${wField('Город и страна доставки','city','text',null,true,'Например: Москва, Россия')}</div>`;
  } else {
    inner = `<h2>Контакт для расчёта</h2><div class="form-grid">${wField('Имя','person','text',null,true,'Как к вам обращаться')}${wField('Компания','company','text',null,false,'необязательно')}${wField('Телефон','wphone','tel',null,true,'+7 (___) ___-__-__')}${wField('Email или удобный способ связи','contactWay','text',null,true,'Почта, Telegram или MAX')}${wField('Комментарий','wcomment','textarea',null,false,'Дополнительная информация')}</div><label class="consent"><input type="checkbox" id="w-consent" data-wreq-consent><span>Согласен на обработку персональных данных и принимаю <a href="#/privacy/" style="text-decoration:underline">политику конфиденциальности</a> <span class="req">*</span></span></label><span class="err-msg" id="w-consent-err" style="display:none;color:var(--err);font-size:12.5px">Поставьте галочку согласия</span>`;
  }
  const stepper = `<div class="wizard-steps">${WIZ_STEPS.map((t, i) => `<span class="${i === s ? 'on' : ''}">${i + 1}. ${t}</span>`).join('')}</div>`;
  const nav = `<div class="wizard-nav">
    <button class="btn btn-outline" data-action="w-prev" ${s === 0 ? 'disabled' : ''}>← Назад</button>
    ${s < WIZ_STEPS.length - 1
      ? `<button class="btn btn-accent" data-action="w-next">Далее →</button>`
      : `<button class="btn btn-accent" data-action="w-submit" data-track="quote_submitted">Получить расчёт</button>`}
  </div>`;
  $('#modal-overlay').innerHTML = `<div class="modal" role="document">
    <button class="modal-close" data-action="w-close" aria-label="Закрыть">✕</button>
    ${stepper}${inner}${nav}
    <p class="small muted" style="margin-top:18px">Ответы сохраняются между шагами. Отправку в CRM подключим после согласования.</p>
  </div>`;
}
function fileFieldHTML(label){ return `<label class="file-drop" for="w-files">${label}<br><span class="small">JPG, PNG, PDF, DOCX или XLSX</span><input id="w-files" type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.docx,.xlsx" style="display:none" data-wfiles></label><div class="file-list" id="w-file-list">${(wizard.data.files||[]).map((f,i)=>`<span>${esc(f)} <button type="button" data-wfile-del="${i}">×</button></span>`).join('')}</div>`; }
function wizardCollect(){
  const d = wizard.data;
  $$('#modal-overlay [name]').forEach(el => { if (el.type !== 'checkbox') d[el.name] = el.value.trim(); });
  d.items = $$('#modal-overlay [data-witem]:checked').map(el => el.dataset.witem);
  if (wizard.step === 2) d.materials = $$('#modal-overlay [data-wmaterial]:checked').map(el => el.dataset.wmaterial);
  if (wizard.step === 4) d.colorFlags = $$('#modal-overlay [data-wcolorflag]:checked').map(el => el.dataset.wcolorflag);
  return d;
}
function wizardValidate(){
  let ok = true;
  const d = wizard.data;
  $$('#modal-overlay [data-wreq]').forEach(el => {
    const f = el.closest('.field');
    const bad = !el.value.trim();
    if (f) f.classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  if (wizard.step === 2 && !(d.materials || []).length) { toast('Выберите материал или вариант «не знаю»'); ok = false; }
  if (wizard.step === 5 && !d.volume) { toast('Выберите примерный объём'); ok = false; }
  if (wizard.step === 6 && !d.deadline) { toast('Выберите желаемый срок'); ok = false; }
  if (wizard.step === 7) {
    const c = $('#w-consent');
    if (!c || !c.checked) { $('#w-consent-err').style.display = 'block'; ok = false; } else $('#w-consent-err').style.display = 'none';
  }
  return ok;
}
function submitWizard(){
  const d = wizard.data;
  const ref = 'SH-' + String(Date.now()).slice(-6);
  const card = {
    category: (d.items || []).join(', '), application: d.taskOther || '', type: d.profile || '',
    material: (d.materials || []).join(', '), size: [d.diameter, d.width, d.thickness, d.handleSize].filter(Boolean).join('; '),
    color: d.color || (d.colorFlags || []).join(', '), circulation: [d.volume, d.volumeComment].filter(Boolean).join('; '),
    variants: d.variantCount || '', deadline: d.deadline || '', deliveryCity: d.city || '',
    commentOrFile: [d.sizeComment, d.wcomment, (d.files || []).join(', ')].filter(Boolean).join('; '),
    contact: [d.person, d.company, d.wphone, d.contactWay].filter(Boolean).join(', ')
  };
  const sub = { ref, type: 'quote', data: d, card, colors: ColorSel.all(), quoteList: Quote.all(), ts: new Date().toISOString(), page: location.hash };
  try { const all = JSON.parse(localStorage.getItem('shnurka_submissions') || '[]'); all.push(sub); localStorage.setItem('shnurka_submissions', JSON.stringify(all)); } catch(e){}
  sessionStorage.setItem('shnurka_last_ref', ref);
  Quote.clear(); ColorSel.clear();
  track('quote_submitted', { ref });
  closeWizard();
  location.hash = '#/thank-you/';
}

/* ============ ПРОЧИЕ СТРАНИЦЫ ============ */
function pageSamples(){
  return simplePage('Запрос образцов', 'Образцы', `
    <div class="badge-warn" style="margin-bottom:24px">Условия подготовки и отправки образцов зависят от выбранного изделия. После получения запроса специалист сообщит доступный вариант. Бесплатность образцов заранее не заявляется.</div>
    <div class="grid grid-3" style="margin-bottom:30px">
      ${['Цветовая карта','Складской образец материала','Образец готового изделия','Индивидуальный прототип','Предсерийный образец'].map(t => `<div class="card"><h3 style="margin-top:0">${t}</h3><p>Подтверждается при обработке запроса.</p></div>`).join('')}
    </div>
    <div class="card" style="padding:30px">
      <form class="form-grid" data-form="samples" data-track-ok="sample_request" novalidate>
        ${fField('Вид образца', 'sampleType', 'select', ['Цветовая карта','Образец материала','Образец изделия','Прототип','Предсерийный образец'], true)}
        ${fField('Продукция', 'product', 'text', null, true, 'например, плоские полиэфирные шнурки')}
        ${fField('Материал', 'material', 'text', null, false)}
        ${fField('Цвет / код карты', 'color', 'text', null, false)}
        ${fField('Назначение', 'purpose', 'text', null, false)}
        ${fField('Количество образцов', 'sampleQty', 'text', null, false, 'например, 3–5')}
        ${fField('Компания', 'company', 'text', null, true)}
        ${fField('Имя', 'person', 'text', null, true)}
        ${fField('Телефон', 'phone', 'tel', null, false, '+7 (___) ___-__-__')}
        ${fField('Email', 'email', 'email', null, false)}
        ${fField('Город и адрес', 'addr', 'text', null, true)}
        ${fField('Комментарий', 'comment', 'textarea', null, false)}
        <div class="field full"><label>Файл (фото изделия, эскиз)</label><input type="file" name="file" accept=".jpg,.jpeg,.png,.pdf"></div>
        ${consentBlock('sm')}
        <div class="field full"><button class="btn btn-accent" type="submit">Отправить запрос на образцы</button></div>
        <div class="form-ok full" style="grid-column:1/-1"></div>
      </form>
    </div>`);
}
function fField(label, name, type, opts, required, ph){
  if (type === 'select') return `<div class="field"><label>${label}${required ? ' <span class="req">*</span>' : ''}</label><select name="${name}" ${required ? 'required' : ''}><option value="">— Выберите —</option>${opts.map(o => `<option>${o}</option>`).join('')}</select><span class="err-msg">Заполните поле</span></div>`;
  if (type === 'textarea') return `<div class="field full"><label>${label}</label><textarea name="${name}" rows="3" placeholder="${ph || ''}"></textarea></div>`;
  return `<div class="field"><label>${label}${required ? ' <span class="req">*</span>' : ''}</label><input name="${name}" type="${type}" placeholder="${ph || ''}" ${required ? 'required' : ''}><span class="err-msg">${type === 'email' ? 'Проверьте формат email' : 'Заполните поле'}</span></div>`;
}
function consentBlock(id){
  return `<div class="field full consent"><input type="checkbox" name="consent" id="${id}-consent" required><label for="${id}-consent">Согласен на обработку персональных данных в соответствии с <a href="#/personal-data-consent/" style="text-decoration:underline">согласием</a> <span class="req">*</span></label></div><input class="hp" type="text" name="website" tabindex="-1" autocomplete="off">`;
}
function pageCustom(){
  return simplePage('Индивидуальное изготовление', 'Индивидуальное изготовление', `
    <p style="font-size:16.5px;margin-bottom:8px">Укажите назначение, материал, форму, размер, цвет, длину, тип наконечника и объём партии. Если точных параметров нет — отправьте фотографию или образец: поможем подобрать подходящее исполнение.</p>
    <p class="small muted" style="margin-bottom:26px">Это не калькулятор точной цены. После выбора параметров запрос уходит специалисту — стоимость и срок сообщаются в коммерческом предложении.</p>
    <div class="card" style="padding:30px;margin-bottom:26px">
      <h3 style="margin-top:0;margin-bottom:18px">Конструктор изделия</h3>
      <div class="form-grid">
        ${fField('Изделие', 'what', 'select', ['Шнурки','Шнуры','Ручки для упаковки','Резинка','Горячая нарезка','Несколько позиций'], true)}
        ${fField('Материал', 'material', 'select', MATERIALS.map(m => m[0].toUpperCase() + m.slice(1)), false)}
        ${fField('Форма', 'form', 'select', ['Круглая','Плоская','Витая'], false)}
        ${fField('Цвет / код карты', 'color', 'text', null, false, 'например, ХБ-006')}
        ${fField('Размер (диаметр / ширина)', 'size', 'text', null, false)}
        ${fField('Длина', 'length', 'text', null, false)}
        ${fField('Наконечник', 'tip', 'select', ['Пластиковый','Металлический','Без наконечника'], false)}
        ${fField('Примерный объём', 'qty', 'text', null, false, 'например, 5 000 шт.')}
      </div>
      <div style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <button class="btn btn-accent" data-action="custom-to-wizard" data-track="open_quote">Получить стоимость и срок</button>
        <a class="btn btn-outline" href="#/obrazcy/">Запросить образцы цветов</a>
      </div>
    </div>
    ${faqHTML([
      ['Что можно изменить под заказ?','Материал, форму, плетение, размер, длину, цвет, тип наконечника, вощение, способ нарезки и упаковки.'],
      ['Что делать, если нет точных параметров?','Отправьте фото или образец — специалист производства предложит подходящее исполнение.'],
      ['Есть ли ограничения?','Да, они зависят от материала и оборудования. Честно сообщим, если выбранная комбинация параметров недоступна, и предложим ближайший рабочий вариант.']
    ])}`);
}
function pageQuality(){
  return simplePage('Качество и документы', 'Качество', `
    <div class="badge-warn" style="margin-bottom:24px">Параметры и контроль согласовываются до запуска партии. Ниже — только те операции, которые подтверждены; остальные активируются после уточнения у производства.</div>
    <h3 class="sub" style="margin-top:0">Проверки партии</h3>
    <div class="grid grid-3">
      ${[['Подтверждено', ['Визуальный контроль плетения','Сверка цвета с согласованным образцом / картой','Контроль упаковки и комплектности']],['Требует подтверждения', ['Измерение диаметра / ширины','Проверка длины отрезков','Проверка фиксации наконечника','Сохранение образца-эталона']],['Не заявляется', ['Испытания на прочность, истирание, растяжение','Лабораторные протоколы','Гарантия «0% брака»']]].map(g => `<div class="card"><span class="tag" style="align-self:flex-start">${g[0]}</span><ul style="margin:12px 0 0 18px;font-size:14.5px;color:var(--muted)">${g[1].map(x => `<li style="margin-bottom:6px">${x}</li>`).join('')}</ul></div>`).join('')}
    </div>
    <h3 class="sub">Документы</h3>
    <p class="muted" style="margin-bottom:20px">Библиотека документов подготовлена в структуре CMS. Сертификаты, декларации и протоколы публикуются только после предоставления реальных файлов. Реквизиты компании — на странице <a href="#/about/" style="text-decoration:underline">«О компании»</a>.</p>
    <h3 class="sub">Рекламации</h3>
    <p class="muted">Порядок предъявления претензий согласовывается при оформлении заказа (состав обязательных проверок, сроки, форма претензии). Точная процедура — [НУЖНО УТОЧНИТЬ] и не публикуется до подтверждения.</p>`);
}
function pageDelivery(){
  return simplePage('Доставка и оплата', 'Доставка и оплата', `
    <div class="grid grid-2" style="margin-bottom:26px">
      <div class="card"><h3 style="margin-top:0">Минимальный заказ — от ${SITE.minOrder}</h3><p>Минимальная сумма общего заказа. Минимальный тираж конкретного изделия зависит от параметров.</p></div>
      <div class="card"><h3 style="margin-top:0">100% предоплата</h3><p>Оплата по счёту после согласования спецификации и коммерческого предложения.</p></div>
    </div>
    <h3 class="sub" style="margin-top:0">Порядок работы</h3>
    <ol style="margin:0 0 26px 22px;font-size:15.5px;line-height:1.9">
      <li>Заявка и уточнение параметров</li>
      <li>Расчёт стоимости и срока, коммерческое предложение</li>
      <li>Согласование спецификации (при необходимости — цвета и образца)</li>
      <li>Счёт на 100% предоплату</li>
      <li>Производство и контроль партии</li>
      <li>Упаковка и передача перевозчику</li>
      <li>Доставка до терминала транспортной компании — бесплатно; дальнейшая перевозка оплачивается по тарифам перевозчика</li>
    </ol>
    <h3 class="sub">География и перевозчики</h3>
    <p style="margin-bottom:10px">Поставки: ${SITE.geo}.</p>
    <div class="chips" style="margin-bottom:26px">${SITE.carriers.map(c => `<span class="chip">${c}</span>`).join('')}</div>
    <p class="small muted" style="margin-bottom:26px">Самовывоз — [НУЖНО УТОЧНИТЬ]. Список транспортных компаний вынесен в единую настройку SITE.carriers и подставляется на все страницы автоматически.</p>
    <h3 class="sub">Документы и претензии</h3>
    <p class="muted" style="margin-bottom:26px">Состав закрывающих документов согласовывается при оформлении заказа. Порядок предъявления претензий — на странице <a href="#/quality/" style="text-decoration:underline">«Качество и документы»</a>.</p>
    <h3 class="sub">Вопросы и ответы</h3>
    ${faqHTML(FAQ_HOME)}`, true);
}
function pageAbout(){
  return simplePage('О компании', 'О компании', `
    <div class="about-intro">
      <h2>Мы — компания «Шнурка.ру»</h2>
      <p>Мы делаем шнурки для одежды и обуви, а также верёвочные ручки для подарочных пакетов. Придуманные ещё в далёком 1790 году, шнурки до сих пор пользуются популярностью и остаются востребованными при покупке обуви, одежды, аксессуаров и других вещей.</p>
    </div>

    <h3 class="sub">Что мы производим</h3>
    <p class="about-section-lead">Клиенты могут приобрести большое количество видов шнурков и шнуров:</p>
    <ul class="about-products-list">
      <li><strong>Хлопчатобумажные</strong><span>Предназначены в основном для обуви, так как не развязываются при ходьбе. Сделаны из натурального материала.</span></li>
      <li><strong>Полиэфирные</strong><span>Используются в предметах гардероба и даже в сфере строительства.</span></li>
      <li><strong>Галантерейные</strong><span>Созданы для одежды и текстиля.</span></li>
      <li><strong>Полипропиленовые</strong><span>Подразделяются на вязаные и плетёные.</span></li>
      <li><strong>Льняные</strong><span>Универсальны и часто используются не только для обуви, но и для хозяйственных нужд.</span></li>
      <li><strong>Шнурки с наконечниками</strong><span>Эглеты могут быть пластиковыми или металлическими и делают шнурки удобными в использовании.</span></li>
      <li><strong>Шнуры для ручек сумок</strong><span>Предназначены для подарочных пакетов и упаковки.</span></li>
    </ul>

    <h3 class="sub">Почему выбирают нас?</h3>
    <div class="grid grid-3 about-benefits">
      <article class="card"><span class="about-benefit-number">01</span><h4>Опытная команда</h4><p>Слаженная команда специалистов с богатым опытом.</p></article>
      <article class="card"><span class="about-benefit-number">02</span><h4>Стабильное качество</h4><p>Стабильно превосходное качество изготавливаемой продукции.</p></article>
      <article class="card"><span class="about-benefit-number">03</span><h4>Решение задач</h4><p>Умеем находить решения для разных задач и отвечать на вопросы клиентов.</p></article>
    </div>

    <h3 class="sub">Отзывы</h3>
    <div class="grid grid-3 reviews-grid">
      <article class="card review-card"><blockquote>Работаю с компанией «Шнурка.ру» уже достаточно долго — более двух лет. Обратился по рекомендации партнёров. В Ростове достаточно своих производителей, но эта компания проверена годами. Ценю своё время и нервы, поэтому заказываю здесь. Владимир ни разу не подвёл. Производитель ответственный. За качество можно не переживать — проверено лично!</blockquote><p class="review-author"><strong>Сергей</strong><span>Ростов-на-Дону</span></p></article>
      <article class="card review-card"><blockquote>Выражаю благодарность компании «Шнурка.ру» за долгосрочное плодотворное сотрудничество. Заказываю шнурки с наконечниками для производства подарочной упаковки. Хочу выделить цену, которая выгоднее, чем у многих производителей, и сроки выполнения: с учётом доставки получаю заказ за 3–4 дня. Про качество говорить нет смысла — вы сами всё поймёте.</blockquote><p class="review-author"><strong>Александр</strong><span>Москва</span></p></article>
      <article class="card review-card"><blockquote>У меня салон-ателье по пошиву верхней одежды: шуб, пальто, курток. Заказывать приходится постоянно. Заказы часто получаются очень сложными и разноплановыми с учётом специфики. Выполнение на высшем уровне. «Шнурка.ру» выручали уже не раз, поэтому смело рекомендую!</blockquote><p class="review-author"><strong>Оксана</strong><span>Саратов</span></p></article>
    </div>

    <h3 class="sub">Реквизиты</h3>
    <table class="chars"><tbody>
      <tr><th scope="row">Адрес производства</th><td>${esc(SITE.address)}</td></tr>
      <tr><th scope="row">Email</th><td><a href="mailto:${SITE.email}">${SITE.email}</a></td></tr>
      <tr><th scope="row">Телефоны</th><td><a href="tel:${SITE.phoneMainHref}">${SITE.phoneMain}</a> · <a href="tel:${SITE.phoneAltHref}">${SITE.phoneAlt}</a></td></tr>
      <tr><th scope="row">Юридические реквизиты</th><td><span class="muted">${NEED} — заполнить перед публикацией</span></td></tr>
      <tr><th scope="row">Режим работы</th><td><span class="muted">${NEED}</span></td></tr>
    </tbody></table>`, true);
}
function pageContacts(){
  return simplePage('Контакты', 'Контакты', `
    <div class="two-col">
      <div>
        <div class="card" style="padding:28px;margin-bottom:18px">
          <h3 style="margin-top:0">Связаться</h3>
          <p style="font-size:17px;margin-bottom:6px"><a href="tel:${SITE.phoneMainHref}" data-track="click_phone" style="font-weight:700">${SITE.phoneMain}</a></p>
          <p style="font-size:17px;margin-bottom:6px"><a href="tel:${SITE.phoneAltHref}">${SITE.phoneAlt}</a></p>
          <p style="margin-bottom:16px"><a href="mailto:${SITE.email}" data-track="click_email">${SITE.email}</a></p>
          <p class="muted small">Телефон +7 (499) 734-96-39 встречается на старом сайте — публикуется после подтверждения. График работы — уточняется.</p>
        </div>
        <div class="card" style="padding:28px">
          <h3 style="margin-top:0">Производство</h3>
          <p>${esc(SITE.address)}</p>
          <p class="small muted" style="margin-top:10px">Маршрут: откройте адрес в картах. Кнопка маршрута добавляется после подтверждения точки на карте.</p>
        </div>
      </div>
      <div class="card" style="padding:28px">
        <h3 style="margin-top:0">Написать нам</h3>
        <form class="form-grid" data-form="contact" novalidate>
          ${fField('Имя', 'person', 'text', null, true)}
          ${fField('Компания', 'company', 'text', null, false)}
          ${fField('Телефон', 'phone', 'tel', null, false)}
          ${fField('Email', 'email', 'email', null, false)}
          ${fField('Сообщение', 'message', 'textarea', null, true)}
          ${consentBlock('ct')}
          <div class="field full"><button class="btn btn-accent" type="submit">Отправить сообщение</button></div>
          <div class="form-ok full" style="grid-column:1/-1"></div>
        </form>
      </div>
    </div>`, true);
}
function pageRepeat(){
  return simplePage('Повтор заказа', 'Повтор заказа', `
    <p style="margin-bottom:20px">Укажите реквизиты прошлого заказа — восстановим сохранённую спецификацию: материал, плетение, форму, размер, цвет, наконечник, упаковку и версию согласования.</p>
    <div class="card" style="padding:30px;max-width:720px">
      <form class="form-grid" data-form="repeat" data-track-ok="repeat_order_submitted" novalidate>
        ${fField('Номер прошлого заказа', 'orderNo', 'text', null, false, 'например, SH-123456')}
        ${fField('Номер счёта', 'invoiceNo', 'text', null, false)}
        ${fField('Артикул изделия', 'article', 'text', null, false)}
        ${fField('Компания', 'company', 'text', null, true)}
        ${fField('Телефон или email из прошлого заказа', 'contact', 'text', null, true, 'чтобы найти спецификацию')}
        ${fField('Что меняем?', 'changeType', 'select', ['Повторить без изменений','Внести изменения','Новый объём'], true)}
        ${fField('Новый объём', 'newQty', 'text', null, false)}
        ${fField('Требуемая дата', 'date', 'text', null, false)}
        ${fField('Комментарий', 'comment', 'textarea', null, false)}
        ${consentBlock('rp')}
        <div class="field full"><button class="btn btn-accent" type="submit" data-track="repeat_order_started">Найти спецификацию и повторить</button></div>
        <div class="form-ok full" style="grid-column:1/-1"></div>
      </form>
    </div>`);
}
function pageArticles(){
  return simplePage('Статьи', 'Статьи', `
    <p style="margin-bottom:26px">Практические материалы о выборе шнурков, шнуров и ручек для производства. Каждая статья — с таблицами, FAQ и ссылками на каталог.</p>
    <div class="grid grid-3">${ARTICLES.map(a => `<a class="card" href="#/articles/${a.slug}/"><span class="tag" style="align-self:flex-start">обновлено: ${a.upd}</span><h3>${esc(a.title)}</h3><p>${esc(a.excerpt)}</p></a>`).join('')}</div>`);
}
function pageArticle(slug){
  const a = ARTICLES.find(x => x.slug === slug);
  if (!a) return page404();
  return simplePage(a.title, 'Статьи', `
    <article class="article-body">
      <p class="small muted">Опубликовано: ${a.date} · Обновлено: ${a.upd}</p>
      <div class="toc"><b>Содержание</b><ol style="margin:8px 0 0 20px">${a.sections.map((s, i) => `<li><a href="#sec-${i}">${esc(s[0])}</a></li>`).join('')}</ol></div>
      ${a.sections.map((s, i) => `<h2 id="sec-${i}">${esc(s[0])}</h2><p>${esc(s[1])}</p>`).join('')}
      <h2>Сравнительная таблица</h2>
      <table class="chars"><tbody>${a.table.map((r, i) => `<tr>${r.map((c, j) => j === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>
      ${phBlock('иллюстрация к статье', false)}
      <h2>FAQ</h2>
      ${faqHTML(a.faq)}
      <div class="card" style="margin-top:30px;background:var(--bg);border:none;color:#fff;flex-direction:row;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap">
        <h3 style="margin:0;color:#fff">Нужна помощь с выбором?</h3>
        <a class="btn btn-accent" href="#/raschet-zakaza/" data-track="open_quote">Получить расчёт</a>
      </div>
    </article>`);
}
function pageThankYou(){
  const ref = sessionStorage.getItem('shnurka_last_ref') || '—';
  return `<section class="section" style="min-height:60vh;display:flex;align-items:center"><div class="container" style="max-width:680px;text-align:center">
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#48B96A" stroke-width="1.6" style="margin:0 auto 18px"><circle cx="12" cy="12" r="10"/><path d="M8 12.5l2.6 2.6L16 9.5"/></svg>
    <h1 style="font-size:32px;letter-spacing:-.02em;margin-bottom:12px">Заявка принята</h1>
    <p class="muted" style="margin-bottom:8px">Номер обращения: <b class="mono">${esc(ref)}</b></p>
    <p class="muted" style="margin-bottom:26px">Сохраните номер для связи. Специалист свяжется с вами для уточнения параметров. Срочные вопросы — по телефону <a href="tel:${SITE.phoneMainHref}" style="text-decoration:underline">${SITE.phoneMain}</a>.</p>
    <div class="badge-warn" style="text-align:left;margin-bottom:26px"><b>Демо-режим прототипа:</b> заявка сохранена локально в вашем браузере (localStorage) и не отправлена на сервер. В боевой версии здесь работает интеграция с почтой / CRM webhook.</div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-outline" onclick="window.print()">Сохранить / распечатать спецификацию</button>
      <a class="btn btn-dark" href="#/catalog/">Вернуться в каталог</a>
    </div>
  </div></section>`;
}
function page404(){
  return `<section class="section" style="min-height:60vh;display:flex;align-items:center"><div class="container" style="max-width:640px;text-align:center">
    <p class="mono" style="font-size:64px;color:var(--accent);font-weight:600">404</p>
    <h1 style="font-size:30px;margin-bottom:12px">Страница не найдена</h1>
    <p class="muted" style="margin-bottom:26px">Возможно, страница переехала. Проверьте каталог или вернитесь на главную.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap"><a class="btn btn-accent" href="#/">На главную</a><a class="btn btn-outline" href="#/catalog/">Каталог</a></div>
  </div></section>`;
}
function pagePrivacy(){
  return simplePage('Политика конфиденциальности', 'Политика конфиденциальности', `
    <p class="muted" style="margin-bottom:16px">[Требует проверки юристом перед публикацией]</p>
    <p style="margin-bottom:14px">Настоящая политика описывает порядок обработки персональных данных посетителей сайта «Шнурка.ру».</p>
    <p style="margin-bottom:14px">Через формы сайта обрабатываются: имя, контакты компании, телефон, email, содержание заявки и приложенные файлы. Данные используются только для подготовки коммерческого предложения и связи по заявке.</p>
    <p style="margin-bottom:14px">Передача третьим лицам осуществляется только в случаях, предусмотренных законодательством РФ. Вы можете запросить уточнение или удаление своих данных, написав на <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>`);
}
function pageConsent(){
  return simplePage('Согласие на обработку персональных данных', 'Согласие', `
    <p class="muted" style="margin-bottom:16px">[Требует проверки юристом перед публикацией]</p>
    <p style="margin-bottom:14px">Отправляя форму на сайте, я подтверждаю согласие на обработку моих персональных данных (имя, телефон, email, наименование компании, содержание заявки и приложенные файлы) в целях подготовки коммерческого предложения и обратной связи.</p>
    <p style="margin-bottom:14px">Согласие действует до достижения целей обработки либо до его отзыва. Отзыв возможен письмом на <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>`);
}
function pageSearch(q){
  const qn = (q || '').toLowerCase();
  const res = qn ? PRODUCTS.filter(p => (p.name + ' ' + p.material + ' ' + p.purpose).toLowerCase().includes(qn)) : [];
  return `<section class="page-head"><div class="container"><nav class="crumbs"><a href="#/">Главная</a> / <span>Поиск</span></nav><h1>Поиск: «${esc(q || '')}»</h1><p>Найдено позиций: ${res.length}</p></div></section>
  <section class="section tight"><div class="container"><div class="grid grid-4 p-list">${res.map(p => productCard(p)).join('') || '<div class="empty-state" style="grid-column:1/-1"><p>По запросу ничего не найдено. Попробуйте другие слова: «шнурок», «хлопок», «ручка», «витой».</p></div>'}</div></div></section>`;
}

/* ============ РОУТЕР ============ */
function router(){
  const raw = (location.hash || '#/').replace(/^#\/?/, '');
  const seg = raw.split('/').filter(Boolean).map(decodeURIComponent);
  const app = $('#app');
  let html = '', after = null;
  const r = seg[0] || '';
  if (r === '') { html = pageHome(); after = initHome; }
  else if (r === 'catalog') {
    if (seg[1]) { html = pageCatalog(seg[1]); } else { html = pageCatalog(); }
    after = applyCatalogFilters;
  }
  else if (r === 'product' && seg[1]) html = pageProduct(seg.slice(1).join('/'));
  else if (r === 'solutions') { location.hash = '#/'; return; }
  else if (r === 'raschet-zakaza') { html = pageQuote(); }
  else if (r === 'obrazcy') html = pageSamples();
  else if (r === 'cvetovye-karty') html = pageColors();
  else if (r === 'proizvodstvo-na-zakaz') html = pageCustom();
  else if (r === 'production') { location.hash = '#/'; return; }
  else if (r === 'quality') html = pageQuality();
  else if (r === 'portfolio') { location.hash = '#/'; return; }
  else if (r === 'delivery-payment') html = pageDelivery();
  else if (r === 'about') html = pageAbout();
  else if (r === 'contacts') html = pageContacts();
  else if (r === 'repeat-order') html = pageRepeat();
  else if (r === 'articles') html = seg[1] ? pageArticle(seg[1]) : pageArticles();
  else if (r === 'privacy') html = pagePrivacy();
  else if (r === 'personal-data-consent') html = pageConsent();
  else if (r === 'thank-you') html = pageThankYou();
  else if (r === 'search') html = pageSearch(seg[1]);
  else html = page404();
  app.innerHTML = html;
  window.scrollTo(0, 0);
  renderSelectedColors();
  renderQuoteChip();
  if (after) after();
  preventHeadingOrphans(app);
  $$('.main-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href === '#/' + r + '/' || (r === '' && href === '#/'));
  });
}

/* ============ ОБРАБОТЧИКИ ============ */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-action],[data-track],a[href^="tel:"],a[href^="mailto:"]');
  if (t && t.dataset.track) track(t.dataset.track, { el: t.textContent.trim().slice(0, 60) });
  const mobileMenuLink = e.target.closest('#mobile-menu a');
  if (mobileMenuLink) $('#mobile-menu').classList.remove('open');
  const el = e.target.closest('[data-action],[data-wpick]');
  if (!el) return;
  const a = el.dataset.action;
  if (a === 'nav-toggle') { e.preventDefault(); $('#mobile-menu').classList.add('open'); }
  else if (a === 'nav-close') { $('#mobile-menu').classList.remove('open'); }
  else if (a === 'faq') {
    const item = el.closest('.faq-item');
    const ans = item.querySelector('.faq-a');
    const open = item.classList.toggle('open');
    el.setAttribute('aria-expanded', open);
    ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '0';
  }
  else if (a === 'add-quote') {
    const p = productBySlug(el.dataset.slug);
    if (p) { Quote.add({ slug: p.slugFull, name: p.name, qty: 1, note: p.material + ' · ' + p.form }); toast('«' + p.name + '» добавлено в список расчёта'); if (el.closest('.product-modal')) closeWizard(); }
  }
  else if (a === 'product-popup') { openProductPopup(el.dataset.slug); }
  else if (a === 'color-map-open') { openColorMap(el.dataset.index); }
  else if (a === 'calc-cat') { openWizard('known', { items: [el.dataset.cat] }); }
  else if (a === 'quote-remove') { Quote.remove(el.dataset.slug); refreshQuoteUI(); }
  else if (a === 'quote-clear') { Quote.clear(); refreshQuoteUI(); }
  else if (a === 'color-select') {
    const added = ColorSel.toggle({ code: el.dataset.code, name: el.dataset.name, hex: el.dataset.hex, map: el.dataset.map });
    el.classList.toggle('sel', added);
    el.setAttribute('aria-pressed', added);
    renderSelectedColors();
    const sc = $('#sel-count'); if (sc) sc.textContent = ColorSel.all().length;
    toast(added ? 'Оттенок «' + el.dataset.name + '» добавлен в запрос' : 'Оттенок убран из запроса');
  }
  else if (a === 'color-remove') { ColorSel.toggle({ code: el.dataset.code }); renderSelectedColors(); router(); }
  else if (a === 'colors-clear') { ColorSel.clear(); renderSelectedColors(); router(); }
  else if (a === 'view') {
    $$('.view-toggle button').forEach(b => b.classList.toggle('on', b === el));
    const list = $('#catalog-list'); if (list) list.classList.toggle('list-view', el.dataset.view === 'list');
  }
  else if (a === 'clear-filters') {
    catalogState.cats = []; catalogState.mats = []; catalogState.q = '';
    const s = $('#f-search'); if (s) s.value = '';
    $$('.filters input[type=checkbox]').forEach(c => c.checked = false);
    applyCatalogFilters();
  }
  else if (a === 'remove-filter') {
    const [k, v] = el.dataset.key.split(':');
    catalogState[k] = catalogState[k].filter(x => x !== v);
    const cb = $$('.filters input[data-filter="' + k + '"]').find ? null : null;
    document.querySelectorAll('.filters input[data-filter="' + k + '"]').forEach(c => { if (c.value === v) c.checked = false; });
    applyCatalogFilters();
  }
  else if (a === 'wizard-start') { openWizard(el.dataset.mode); }
  else if (a === 'custom-slide') {
    const viewport = $('#custom-slider-viewport');
    const card = viewport && viewport.querySelector('.step');
    if (viewport && card) viewport.scrollBy({ left: Number(el.dataset.dir) * (card.getBoundingClientRect().width + 16), behavior: 'smooth' });
  }
  else if (a === 'color-map-slide') {
    const viewport = $('#color-map-slider-viewport');
    const card = viewport && viewport.querySelector('.color-map-card');
    if (viewport && card) viewport.scrollBy({ left: Number(el.dataset.dir) * (card.getBoundingClientRect().width + 18), behavior: 'smooth' });
  }
  else if (a === 'custom-to-wizard') {
    const card = el.closest('.card');
    const gv = n => { const i = card.querySelector('[name="' + n + '"]'); return i ? i.value.trim() : ''; };
    const it = gv('what');
    const catMap = { 'Шнурки': 'shnurki', 'Шнуры': 'shnury', 'Ручки для упаковки': 'ruchki-dlya-upakovki', 'Резинка': 'rezinki-i-narezka', 'Горячая нарезка': 'rezinki-i-narezka', 'Несколько позиций': 'unsure' };
    openWizard('known', { items: catMap[it] ? [catMap[it]] : [], material: (gv('material') || '').toLowerCase(), form: gv('form'), size: gv('size'), length: gv('length'), color: gv('color'), tip: ({ 'Пластиковый': 'plastic', 'Металлический': 'metal', 'Без наконечника': 'none' })[gv('tip')], qty: gv('qty') });
  }
  else if (a === 'w-close') { closeWizard(); }
  else if (a === 'w-prev') { wizardCollect(); if (wizard.step > 0) { wizard.step--; renderWizard(); } }
  else if (a === 'w-next') {
    wizardCollect();
    if (wizard.step === 0 && !(wizard.data.items || []).length) { toast('Выберите хотя бы одну позицию'); return; }
    if (!wizardValidate()) return;
    track('quote_step_completed', { step: WIZ_STEPS[wizard.step] });
    wizard.step++;
    renderWizard();
  }
  else if (a === 'w-submit') {
    wizardCollect();
    if (!wizardValidate()) return;
    submitWizard();
  }
  else if (el.dataset.wpick) { wizard.data[el.dataset.wpick] = el.dataset.val; renderWizard(); }
});
document.addEventListener('change', e => {
  const el = e.target;
  if (el.dataset.filter) {
    const key = el.dataset.filter;
    catalogState[key] = Array.from(document.querySelectorAll('input[data-filter="' + key + '"]:checked')).map(c => c.value);
    applyCatalogFilters();
  }
  if (el.dataset.catalogSearch !== undefined) {}
  if (el.id === 'f-sort') { catalogState.sort = el.value; applyCatalogFilters(); }
  if (el.dataset.wfiles !== undefined || el.id === 'w-files') {
    wizardCollect();
    wizard.data.files = Array.from(el.files || []).map(f => f.name);
    if (wizard.data.files.length) track('file_uploaded');
    const fl = $('#w-file-list');
    if (fl) fl.innerHTML = wizard.data.files.map((f, i) => `<span>${esc(f)}</span>`).join('');
  }
  if (el.dataset.witem !== undefined || el.dataset.wmaterial !== undefined || el.dataset.wcolorflag !== undefined) { wizardCollect(); renderWizard(); }
  if (el.dataset.actionQty !== undefined) {
    const l = Quote.all(); const it = l.find(i => i.slug === el.dataset.actionQty);
    if (it) { it.qty = parseInt(el.value, 10) || 1; Quote.save(l); }
  }
});
document.addEventListener('input', e => {
  if (e.target.id === 'f-search') { catalogState.q = e.target.value.trim(); applyCatalogFilters(); }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('#modal-overlay').classList.contains('open')) closeWizard(); });
$('#modal-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeWizard(); });
window.addEventListener('scroll', () => { const h = $('#site-header'); if (h) h.classList.toggle('scrolled', window.scrollY > 8); }, { passive: true });

function refreshQuoteUI(){
  const box = $('#quote-list'); if (box) box.innerHTML = quoteListHTML();
  renderQuoteChip();
}
function initHome(){
  renderSelectedColors();
  const sc = $('#sel-count'); if (sc) sc.textContent = ColorSel.all().length;
}

/* ============ ОБРАБОТКА ФОРМ ============ */
function validateForm(form){
  let ok = true;
  $$('[required]', form).forEach(el => {
    const wrap = el.closest('.field') || el.closest('.consent');
    let bad = false;
    if (el.type === 'checkbox') bad = !el.checked;
    else if (el.type === 'email') bad = el.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
    else bad = !el.value.trim();
    if (el.type === 'email' && !el.value.trim() && !el.required) bad = false;
    if (wrap && wrap.classList) wrap.classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  return ok;
}
document.addEventListener('submit', e => {
  const form = e.target.closest('form[data-form]');
  if (!form) return;
  e.preventDefault();
  if (form.querySelector('.hp') && form.querySelector('.hp').value) return; /* honeypot */
  const btn = form.querySelector('button[type="submit"]');
  if (btn) btn.disabled = true;
  if (!validateForm(form)) {
    if (btn) btn.disabled = false;
    toast('Проверьте выделенные поля');
    const firstBad = form.querySelector('.invalid input, .invalid select, .consent.invalid input');
    if (firstBad) firstBad.focus();
    return;
  }
  const fd = new FormData(form);
  const data = {};
  fd.forEach((v, k) => { if (k !== 'website' && k !== 'consent') data[k] = v; });
  const ref = 'SH-' + String(Date.now()).slice(-6);
  try { const all = JSON.parse(localStorage.getItem('shnurka_submissions') || '[]'); all.push({ ref, type: form.dataset.form, data, ts: new Date().toISOString(), page: location.hash, utm: JSON.parse(sessionStorage.getItem('shnurka_utm') || '{}') }); localStorage.setItem('shnurka_submissions', JSON.stringify(all)); } catch(err){}
  sessionStorage.setItem('shnurka_last_ref', ref);
  if (form.dataset.trackOk) track(form.dataset.trackOk, { ref });
  track('quote_submitted', { ref, form: form.dataset.form });
  const okBox = form.querySelector('.form-ok');
  if (okBox) { okBox.innerHTML = '<b>Заявка сохранена.</b> Номер обращения: <b class="mono">' + ref + '</b>. Демо-режим: данные не уходят на сервер. Сейчас вы будете переведены на страницу подтверждения.'; okBox.classList.add('show'); }
  setTimeout(() => { location.hash = '#/thank-you/'; }, 1400);
});

/* UTM-метки — сохраняем при первом входе */
(function(){
  try {
    const p = new URLSearchParams(location.search);
    const utm = {};
    ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','yclid'].forEach(k => { if (p.get(k)) utm[k] = p.get(k); });
    if (Object.keys(utm).length) sessionStorage.setItem('shnurka_utm', JSON.stringify(utm));
  } catch(e){}
})();

/* ============ ИНИЦИАЛИЗАЦИЯ ============ */
renderHeader();
renderFooter();
window.addEventListener('hashchange', router);
router();
