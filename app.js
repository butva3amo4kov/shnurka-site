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
  {slug:'rezinki-i-narezka', name:'Резинки и нарезка', short:'Шляпная и масочная резинка, горячая нарезка', purpose:'Головные уборы, медицинские изделия, отделка'}
];

const MATERIALS = ['хлопок', 'полиэфир', 'полипропилен', 'нейлон', 'метанит'];

function P(slug, cat, name, o){ return Object.assign({slug, cat, name, status:'По запросу', slugFull: cat + '/' + slug}, o); }

const PRODUCTS = [
  /* --- Шнурки --- */
  P('kruglye-poliefirnye','shnurki','Круглые полиэфирные шнурки',{material:'полиэфир',form:'круглый',twist:'однотонное',purpose:'Обувь, одежда, аксессуары',tips:'пластиковые, металлические',desc:'Круглые шнурки из полиэфирной нити. Ровное плетение, стойкость цвета, варианты наконечников.'}),
  P('ploskie-poliefirnye','shnurki','Плоские полиэфирные шнурки',{material:'полиэфир',form:'плоский',twist:'однотонное',purpose:'Обувь, спортивная одежда',tips:'пластиковые, металлические',desc:'Плоские полиэфирные шнурки для обуви и одежды. Ширина и длина — под параметры заказа.'}),
  P('ploskie-dvuhtsvetnye','shnurki','Плоские двухцветные шнурки',{material:'полиэфир',form:'плоский',twist:'двухцветное',purpose:'Обувь, брендовая одежда',tips:'пластиковые, металлические',desc:'Плоские шнурки в двухцветном исполнении. Сочетание цветов согласовывается по цветовой карте.'}),
  P('ploskie-hlopkovye','shnurki','Плоские хлопчатобумажные шнурки',{material:'хлопок',form:'плоский',twist:'однотонное',purpose:'Обувь, одежда, текстиль',tips:'пластиковые, металлические',desc:'Плоские шнурки из хлопчатобумажной нити. Натуральный материал, мягкая фактура.'}),
  P('kruglye-hlopkovye','shnurki','Круглые хлопчатобумажные шнурки',{material:'хлопок',form:'круглый',twist:'однотонное',purpose:'Обувь, одежда',tips:'пластиковые, металлические',desc:'Круглые хлопковые шнурки. Натуральный состав, различные диаметры — по параметрам заказа.'}),
  P('voshchenye-hlopkovye','shnurki','Вощёные хлопчатобумажные шнурки',{material:'хлопок',form:'круглый',twist:'вощёное',purpose:'Обувь, аксессуары',tips:'пластиковые, металлические',desc:'Хлопковые шнурки с вощением. Плотная фактура, характерный блеск, устойчивость к истиранию.'}),
  /* --- Шнуры --- */
  P('vityj-poliefirnyj','shnyury'.replace('y','u'),'Витой полиэфирный шнур',{material:'полиэфир',form:'витой',twist:'витое',purpose:'Одежда, галантерея, упаковка',desc:'Витой шнур из полиэфира. Поставка метражом или отрезками.'}),
  P('kruglyj-polipropilenovyj','shnury','Круглый полипропиленовый шнур',{material:'полипропилен',form:'круглый',twist:'однотонное',purpose:'Швейные производства, декор',desc:'Круглый шнур из полипропилена. Лёгкий, устойчивый к влаге.'}),
  P('ploskij-hlopkovyj','shnury','Плоский хлопчатобумажный шнур',{material:'хлопок',form:'плоский',twist:'однотонное',purpose:'Одежда, текстиль, упаковка',desc:'Плоский хлопковый шнур. Натуральный материал для швейных и упаковочных задач.'}),
  P('vityj-polipropilenovyj','shnury','Витой полипропиленовый шнур',{material:'полипропилен',form:'витой',twist:'витое',purpose:'Упаковка, декор, галантерея',desc:'Витой полипропиленовый шнур. Яркая цветовая карта.'}),
  P('kruglyj-poliefirnyj','shnury','Круглый полиэфирный шнур',{material:'полиэфир',form:'круглый',twist:'однотонное',purpose:'Одежда, аксессуары, обувь',desc:'Круглый полиэфирный шнур. Ровное плетение, стабильный диаметр.'}),
  P('ploskij-poliefirnyj','shnury','Плоский полиэфирный шнур',{material:'полиэфир',form:'плоский',twist:'однотонное',purpose:'Одежда, упаковка, отделка',desc:'Плоский полиэфирный шнур. Ширина подбирается под задачу.'}),
  P('kruglyj-hlopkovyj','shnury','Круглый хлопчатобумажный шнур',{material:'хлопок',form:'круглый',twist:'однотонное',purpose:'Одежда, текстиль',desc:'Круглый хлопковый шнур. Натуральный состав.'}),
  P('vityj-hlopkovyj','shnury','Витой хлопчатобумажный шнур',{material:'хлопок',form:'витой',twist:'витое',purpose:'Одежда, декор, рукоделие',desc:'Витой хлопковый шнур. Фактурное плетение.'}),
  P('kruglyj-voshchenyj','shnury','Круглый вощёный хлопчатобумажный шнур',{material:'хлопок',form:'круглый',twist:'вощёное',purpose:'Обувь, аксессуары, упаковка',desc:'Круглый шнур из хлопка с вощением.'}),
  P('ploskij-voshchenyj','shnury','Плоский вощёный хлопчатобумажный шнур',{material:'хлопок',form:'плоский',twist:'вощёное',purpose:'Обувь, аксессуары',desc:'Плоский вощёный шнур. Плотная структура.'}),
  P('polipropilenovyj-s-metanitom','shnury','Полипропиленовый шнур с метанитом',{material:'полипропилен, метанит',form:'круглый',twist:'однотонное',purpose:'Декор, упаковка, отделка',desc:'Шнур с металлизированной нитью (метанит). Декоративный эффект без утяжеления.'}),
  P('vityj-iz-metanita','shnury','Витой шнур из метанита',{material:'метанит',form:'витой',twist:'витое',purpose:'Декор, упаковка, праздничная продукция',desc:'Витой шнур из металлизированной нити. Блестящая фактура.'}),
  /* --- Ручки для упаковки --- */
  P('kruglye-ruchki','ruchki-dlya-upakovki','Круглые ручки для пакетов',{material:'полиэфир, полипропилен',form:'круглая',twist:'однотонное',purpose:'Бумажные и подарочные пакеты, коробки',fix:'пластиковые, металлические',desc:'Круглые шнуровые ручки для упаковки. С фиксаторами под тип крепления пакета.'}),
  P('ploskie-ruchki','ruchki-dlya-upakovki','Плоские ручки для пакетов',{material:'хлопок, полиэфир',form:'плоская',twist:'однотонное',purpose:'Пакеты, коробки, премиальная упаковка',fix:'пластиковые, металлические',desc:'Плоские ручки из хлопка или полиэфира. Для подарочной и бумажной упаковки.'}),
  P('vitye-ruchki','ruchki-dlya-upakovki','Витые ручки для пакетов',{material:'полипропилен',form:'витая',twist:'витое',purpose:'Подарочные пакеты, сумки',fix:'пластиковые, металлические',desc:'Витые ручки с выраженной фактурой плетения.'}),
  P('ruchki-s-plastikovymi-fiksatorami','ruchki-dlya-upakovki','Ручки с пластиковыми фиксаторами',{material:'полиэфир, полипропилен',form:'круглая, плоская',twist:'однотонное',purpose:'Пакеты и сумки с пластиковым креплением',fix:'пластиковые',desc:'Ручки в сборе с пластиковыми фиксаторами. Цвет фиксатора согласовывается.'}),
  P('ruchki-s-metallicheskimi-fiksatorami','ruchki-dlya-upakovki','Ручки с металлическими фиксаторами',{material:'хлопок, полиэфир',form:'круглая, плоская',twist:'однотонное',purpose:'Премиальная и подарочная упаковка',fix:'металлические',desc:'Ручки с металлическими фиксаторами для премиального сегмента упаковки.'}),
  P('ruchki-s-metanitom','ruchki-dlya-upakovki','Ручки с метанитом',{material:'метанит, полипропилен',form:'круглая, витая',twist:'однотонное',purpose:'Праздничная и подарочная упаковка',fix:'пластиковые, металлические',desc:'Ручки с металлизированной нитью. Декоративный блеск для подарочной упаковки.'}),
  /* --- Резинки и нарезка --- */
  P('shlyapnaya-rezinka','rezinki-i-narezka','Шляпная резинка',{material:'подбирается под задачу',form:'круглая',twist:'—',purpose:'Головные уборы',desc:'Резинка для крепления головных уборов. Диаметр и растяжение — по параметрам.'}),
  P('shlyapnaya-rezinka-s-plastikom','rezinki-i-narezka','Шляпная резинка с пластиковым фиксатором',{material:'подбирается под задачу',form:'круглая',twist:'—',purpose:'Головные уборы',fix:'пластиковые',desc:'Шляпная резинка в сборе с пластиковым регулятором.'}),
  P('shlyapnaya-rezinka-s-metallom','rezinki-i-narezka','Шляпная резинка с металлическим фиксатором',{material:'подбирается под задачу',form:'круглая',twist:'—',purpose:'Головные уборы',fix:'металлические',desc:'Шляпная резинка с металлическим регулятором.'}),
  P('masochnaya-rezinka-2mm','rezinki-i-narezka','Масочная резинка 2 мм',{material:'подбирается под задачу',form:'круглая',twist:'—',purpose:'Медицинские изделия, маски',desc:'Круглая резинка диаметром 2 мм для масок и медицинских изделий. Поставка метражом.'}),
  P('narezka-atlasnyh-lent','rezinki-i-narezka','Горячая нарезка атласных лент',{material:'атласная лента',form:'плоская',twist:'—',purpose:'Отделка, упаковка, декор',desc:'Горячая нарезка атласных лент на отрезки заданной длины. Ровный срез без осыпания.'}),
  P('narezka-shnurov','rezinki-i-narezka','Горячая нарезка шнуров',{material:'полиэфир, полипропилен, синтетические шнуры',form:'круглый, плоский',twist:'—',purpose:'Швейные производства, упаковка',desc:'Горячая нарезка шнуров, кроме хлопковых, на отрезки заданной длины.'})
];

/* Цветовые карты — заглушки, заменить реальными картами */
const COLOR_MAPS = {
  poliefir:      {name:'Полиэфир', colors:[['ПЭ-001','Белый','#F4F4EF'],['ПЭ-002','Чёрный','#1B1B1B'],['ПЭ-003','Серый','#8A8F8B'],['ПЭ-004','Красный','#B33A32'],['ПЭ-005','Тёмно-красный','#7A2320'],['ПЭ-006','Синий','#2C4C7C'],['ПЭ-007','Тёмно-синий','#1F3453'],['ПЭ-008','Голубой','#7FA8C9'],['ПЭ-009','Зелёный','#3E7A4E'],['ПЭ-010','Тёмно-зелёный','#234A30'],['ПЭ-011','Жёлтый','#E4C33B'],['ПЭ-012','Оранжевый','#D57932'],['ПЭ-013','Бежевый','#C9B48F'],['ПЭ-014','Коричневый','#6B4A32'],['ПЭ-015','Розовый','#D98CA0'],['ПЭ-016','Фиолетовый','#6E5A8E']]},
  hlopok:        {name:'Хлопок', colors:[['ХБ-001','Белый','#F6F5EE'],['ХБ-002','Молочный','#EFE8D5'],['ХБ-003','Чёрный','#22211F'],['ХБ-004','Серый','#969B96'],['ХБ-005','Красный','#A93A31'],['ХБ-006','Синий','#33517E'],['ХБ-007','Джинс','#4E6E96'],['ХБ-008','Зелёный','#46784F'],['ХБ-009','Оливковый','#75704B'],['ХБ-010','Жёлтый','#DEC15A'],['ХБ-011','Горчичный','#B99338'],['ХБ-012','Бежевый','#CDBB98'],['ХБ-013','Коричневый','#6E4E38'],['ХБ-014','Кофейный','#8A6A4E'],['ХБ-015','Розовый','#D9A2AE'],['ХБ-016','Голубой','#A5C3D6']]},
  polipropilen:  {name:'Полипропилен', colors:[['ПП-001','Белый','#F5F6F2'],['ПП-002','Чёрный','#1E1E1E'],['ПП-003','Серый','#90958F'],['ПП-004','Красный','#BE3E34'],['ПП-005','Синий','#2F5080'],['ПП-006','Голубой','#82AECF'],['ПП-007','Зелёный','#3F8050'],['ПП-008','Салатовый','#93C26B'],['ПП-009','Жёлтый','#E7C63D'],['ПП-010','Оранжевый','#DA7D33'],['ПП-011','Малиновый','#B4436B'],['ПП-012','Бордовый','#742B35'],['ПП-013','Бежевый','#CDB692'],['ПП-014','Коричневый','#6E4C33'],['ПП-015','Фиолетовый','#715C92'],['ПП-016','Голубой неон','#67D2E0']]}
};

const SOLUTIONS = [
  {slug:'obuvnoe-proizvodstvo', name:'Обувное производство', text:'Шнурки для обуви: круглые и плоские, хлопковые и полиэфирные, вощёные, с наконечниками под ваш тип обуви.', products:['kruglye-poliefirnye','ploskie-poliefirnye','voshchenye-hlopkovye']},
  {slug:'odezhda-i-tekstil', name:'Одежда и текстиль', text:'Шнуры и шнурки для худи, спортивной и специальной одежды: круглые, плоские, витые, с наполнителем и без.', products:['kruglyj-poliefirnyj','ploskie-hlopkovye','vityj-poliefirnyj']},
  {slug:'pakety-i-upakovka', name:'Пакеты и упаковка', text:'Ручки для бумажных и подарочных пакетов, шнуры для упаковки и отделки коробок.', products:['kruglye-ruchki','ploskie-ruchki','vityj-hlopkovyj']},
  {slug:'podarochnaya-upakovka', name:'Подарочная упаковка', text:'Ручки с металлическими фиксаторами, шнуры с метанитом, атласные ленты в нарезке — для премиальной упаковки.', products:['ruchki-s-metallicheskimi-fiksatorami','ruchki-s-metanitom','narezka-atlasnyh-lent']},
  {slug:'galantereya-i-aksessuary', name:'Галантерея и аксессуары', text:'Шнуры для сумок, аксессуаров и декоративных изделий. Метражом и в отрезках.', products:['kruglyj-polipropilenovyj','vityj-polipropilenovyj','ploskij-hlopkovyj']},
  {slug:'promo-i-merch', name:'Промо и мерч', text:'Шнурки и шнуры для промопродукции и корпоративных подарков, в том числе двухцветные исполнения.', products:['ploskie-dvuhtsvetnye','kruglye-poliefirnye','vityj-iz-metanita']},
  {slug:'specodezhda', name:'Специальная одежда', text:'Шнурки и шнуры для спецодежды и рабочей обуви. Подбор материала под условия эксплуатации — по запросу.', products:['ploskie-poliefirnye','kruglye-poliefirnye','ploskij-poliefirnyj']},
  {slug:'dekor-i-rukodelie', name:'Декор и рукоделие', text:'Витые и вощёные шнуры, шнуры с метанитом для творческих и декоративных задач.', products:['vityj-hlopkovyj','kruglyj-voshchenyj','polipropilenovyj-s-metanitom']}
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

const WORKS = [
  {id:1, title:'Плоские полиэфирные шнурки для обувного бренда', cat:'shnurki', industry:'Обувное производство', material:'полиэфир', form:'плоский', params:{Материал:'полиэфир', Форма:'плоская', Цвет:'по карте полиэфира'}},
  {id:2, title:'Ручки для подарочных пакетов с металлическими фиксаторами', cat:'ruchki-dlya-upakovki', industry:'Производство упаковки', material:'хлопок', form:'плоская', params:{Материал:'хлопок', Фиксатор:'металлический', Назначение:'подарочные пакеты'}},
  {id:3, title:'Витой шнур с метанитом для новогодней упаковки', cat:'shnury', industry:'Производство упаковки', material:'метанит', form:'витой', params:{Материал:'метанит', Форма:'витая', Сезонность:'новогодняя коллекция'}}
];

/* ============ УТИЛИТЫ ============ */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
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
function productImage(cat, alt, eager){
  const src = CATEGORY_IMAGES[cat] || CATEGORY_IMAGES.shnury;
  return `<img src="${src}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

/* ============ ШАПКА / ФУТЕР ============ */
function logoSVG(){ return `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true"><rect width="34" height="34" rx="9" fill="#18482A"/><path d="M6 12 Q 12 7 17 12 T 28 12" stroke="#48B96A" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M6 19 Q 12 14 17 19 T 28 19" stroke="#DDF3E3" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M6 26 Q 12 21 17 26 T 28 26" stroke="#48B96A" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`; }

function renderHeader(){
  $('#header-root').innerHTML = `
  <div class="topbar">
    <div class="container">
      <span>Собственное производство в Зеленограде</span>
      <span class="tb-sep">•</span>
      <a href="tel:${SITE.phoneMainHref}" data-track="click_phone">${SITE.phoneMain}</a>
      <span class="tb-sep">•</span>
      <a href="mailto:${SITE.email}" data-track="click_email">${SITE.email}</a>
      <span style="margin-left:auto"></span>
      <a href="#/repeat-order/">Повторить заказ</a>
    </div>
  </div>
  <header class="site-header" id="site-header">
    <div class="container header-main">
      <a class="logo" href="#/">${logoSVG()}<span>Шнурка<span class="logo-tld">.ру</span></span></a>
      <nav class="main-nav" aria-label="Основное меню">
        <div class="mega-wrap">
          <a href="#/catalog/" aria-haspopup="true">Каталог ▾</a>
          <div class="mega" role="menu">
            ${CATS.map(c => `<div><h4><a href="#/catalog/${c.slug}/">${c.name}</a></h4>${PRODUCTS.filter(p => p.cat === c.slug).slice(0, 4).map(p => `<a href="#/product/${p.slugFull}/">${esc(p.name)}</a>`).join('')}</div>`).join('')}
            <a class="mega-all" href="#/catalog/">Весь каталог →</a>
          </div>
        </div>
        <a href="#/solutions/">Решения</a>
        <a href="#/production/">Производство</a>
        <a href="#/cvetovye-karty/">Цветовые карты</a>
        <a href="#/portfolio/">Портфолио</a>
        <a href="#/delivery-payment/">Доставка и оплата</a>
        <a href="#/about/">О компании</a>
        <a href="#/contacts/">Контакты</a>
      </nav>
      <div class="header-actions">
        <a class="quote-chip" href="#/raschet-zakaza/" title="Список для расчёта">Список расчёта <span class="cnt">${Quote.count()}</span></a>
        <a class="btn btn-accent btn-sm" href="#/raschet-zakaza/" data-track="open_quote">Получить расчёт</a>
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
    ${CATS.map(c => `<div class="mm-sub"><a href="#/catalog/${c.slug}/">— ${c.name}</a></div>`).join('')}
    <a href="#/solutions/">Решения</a>
    <a href="#/cvetovye-karty/">Цветовые карты</a>
    <a href="#/proizvodstvo-na-zakaz/">Индивидуальное изготовление</a>
    <a href="#/production/">Производство</a>
    <a href="#/quality/">Качество и документы</a>
    <a href="#/portfolio/">Портфолио</a>
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
          <a class="logo" href="#/" style="margin-bottom:16px">${logoSVG()}<span>Шнурка<span class="logo-tld">.ру</span></span></a>
          <p style="font-size:14px;max-width:300px;margin:14px 0 18px">Производство шнурков, шнуров и ручек для упаковки. Собственное производство в Зеленограде, опыт более ${SITE.experienceYears.replace('+','')} лет.</p>
          <a class="btn btn-ghost btn-sm" href="#/repeat-order/">Повторить заказ</a>
        </div>
        <div>
          <h5>Каталог</h5>
          ${CATS.map(c => `<a href="#/catalog/${c.slug}/">${c.name}</a>`).join('')}
          <a href="#/catalog/">Весь каталог</a>
        </div>
        <div>
          <h5>Компания</h5>
          <a href="#/solutions/">Решения по отраслям</a>
          <a href="#/production/">Производство</a>
          <a href="#/quality/">Качество и документы</a>
          <a href="#/cvetovye-karty/">Цветовые карты</a>
          <a href="#/portfolio/">Портфолио</a>
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
    <a class="card-img" href="#/product/${p.slugFull}/" aria-label="${esc(p.name)}">${productImage(p.cat, p.name)}</a>
    <div class="p-body">
      <span class="p-status">${p.status}</span>
      <h3><a href="#/product/${p.slugFull}/">${esc(p.name)}</a></h3>
      <div class="p-meta">${esc(p.material)} · ${esc(p.form)}</div>
      <p class="p-purpose">${esc(p.purpose)}</p>
      <div class="card-actions">
        <a class="btn btn-outline btn-sm" href="#/product/${p.slugFull}/">Подробнее</a>
        <button class="btn btn-dark btn-sm" data-action="add-quote" data-slug="${p.slugFull}" data-track="product_added_to_quote">В расчёт</button>
      </div>
    </div>
  </article>`;
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
  const popular = ['ploskie-poliefirnye','voshchenye-hlopkovye','kruglye-ruchki','vityj-poliefirnyj'].map(productBySlug);
  return `
  <section class="hero">
    <div class="container">
      <div>
        <span class="eyebrow">Прямой производитель · Зеленоград</span>
        <h1>Производим шнуры, шнурки и ручки для упаковки <span class="hl">под ваш тираж</span></h1>
        <p class="lead">Подберём материал, форму, плетение, размер, цвет, длину и наконечник. Собственное производство в Зеленограде, поставки по России, Казахстану, Беларуси и Армении.</p>
        <div class="hero-cta">
          <a class="btn btn-accent" href="#/raschet-zakaza/" data-track="open_quote">Получить расчёт партии</a>
          <a class="btn btn-ghost" href="#/obrazcy/" data-track="sample_request">Запросить образцы</a>
          <a class="text-link" href="#/catalog/">Смотреть каталог →</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="./assets/images/hero-production.jpg" alt="Производство плетёных шнуров на оборудовании" fetchpriority="high" decoding="async">
      </div>
    </div>
    <div class="trust-strip">
      <div class="container">
        <div class="trust-item"><span class="ti-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg></span><div><b>Минимальный заказ — от ${SITE.minOrder}</b><span><span class="tip">Это минимальная сумма общего заказа<span class="tip-box">Минимальный тираж конкретного изделия зависит от параметров и рассчитывается отдельно.</span></span>, а не тираж каждой позиции</span></div></div>
        <div class="trust-item"><span class="ti-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18"/></svg></span><div><b>Более ${SITE.colorsCount.replace('+','')} цветов</b><span>цветовые карты полиэфира, хлопка и полипропилена</span></div></div>
        <div class="trust-item"><span class="ti-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10m6 10V4m6 16v-7m4 7H2"/></svg></span><div><b>Изготовление по параметрам</b><span>материал, форма, размер, цвет, длина, наконечники</span></div></div>
        <div class="trust-item"><span class="ti-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg></span><div><b>Доставка до терминала ТК — 0 ₽</b><span>${SITE.carriers.join(' · ')}</span></div></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Каталог</span><h2>Что нужно изготовить?</h2><p>Четыре направления производства. Выберите категорию — она подставится в форму расчёта.</p></div>
      <div class="grid grid-4 home-categories">
        ${CATS.map((c, i) => `<article class="card category-card">
          <span class="category-index">0${i + 1}</span>
          <div class="card-img">${productImage(c.slug, c.name, true)}</div>
          <h3>${c.name}</h3>
          <p>${c.short}.</p>
          <div class="tags">${MATERIALS.slice(0,4).map(m => `<span class="tag">${m}</span>`).join('')}</div>
          <div class="card-actions">
            <a class="btn btn-outline btn-sm" href="#/catalog/${c.slug}/">Смотреть варианты</a>
            <button class="btn btn-dark btn-sm" data-action="calc-cat" data-cat="${c.slug}" data-track="open_quote">Рассчитать партию</button>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="section gray home-optional">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Подбор по задаче</span><h2>Подберём изделие под вашу задачу</h2><p>Отраслевые страницы с готовыми товарными решениями — без лишней переписки.</p></div>
      <div class="grid grid-4 home-solutions">
        ${SOLUTIONS.map((s, i) => `<a class="card solution-card" href="#/solutions/${s.slug}/">
          <span class="solution-index">${String(i + 1).padStart(2, '0')}</span>
          <h3 style="margin-top:0">${s.name}</h3>
          <p>${s.text}</p>
          <span style="color:var(--green-deep);font-weight:600;font-size:14px;margin-top:14px">Смотреть решения →</span>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="two-col quick-quote-layout">
        <div class="section-head" style="margin-bottom:0">
          <span class="eyebrow">Быстрый расчёт</span>
          <h2>Начните с трёх полей</h2>
          <p>Не размещаем огромную форму на первом экране. Укажите базовые параметры — продолжим в многошаговом конфигураторе, всё сохранится.</p>
          <ul style="margin:18px 0 0 20px;color:var(--muted);font-size:15px">
            <li>ответ специалиста производства;</li>
            <li>расчёт стоимости и срока по спецификации;</li>
            <li>возможность приложить ТЗ, фото или образец.</li>
          </ul>
        </div>
        <div class="card" style="padding:30px">${quoteMiniForm('')}</div>
      </div>
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
      <div class="grid grid-4">
        ${['Изделие','Материал','Форма и плетение','Цвет'].map((t,i) => `<div class="step" style="background:transparent"><b>${t}</b><span>${['шнурки, шнуры, ручки, резинки, нарезка','хлопок, полиэфир, полипропилен, нейлон, метанит','круглое, плоское, витое; с наполнителем и без','по цветовым картам; Pantone — как ориентир'][i]}</span></div>`).join('')}
        ${['Размер и длина','Наконечники','Упаковка','Партия'].map((t,i) => `<div class="step" style="background:transparent"><b>${t}</b><span>${['диаметр, ширина, длина — под задачу','пластиковые и металлические','намотка, связки, пакеты, короба','от минимальной суммы заказа 6 000 ₽'][i]}</span></div>`).join('')}
      </div>
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:34px">
        <a class="btn btn-accent" href="#/proizvodstvo-na-zakaz/">Собрать спецификацию</a>
        <a class="btn btn-ghost" href="#/cvetovye-karty/">Выбрать цвет по карте</a>
      </div>
      <p class="small" style="color:#8b968f;margin-top:18px">Это не калькулятор точной цены. Итоговую стоимость и срок сообщает специалист после проверки параметров.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Цветовые карты</span><h2>Выберите цвет по карте или отправьте образец</h2><p>Более ${SITE.colorsCount.replace('+','')} цветов в трёх картах. Можно выбрать несколько оттенков и добавить их в запрос.</p></div>
      <div class="color-tabs">${Object.keys(COLOR_MAPS).map((k, i) => `<button class="${i === 0 ? 'on' : ''}" data-action="color-tab" data-tab="${k}">${COLOR_MAPS[k].name}</button>`).join('')}</div>
      <div class="swatches" id="home-swatches">${swatchGrid('poliefir', 8)}</div>
      <div class="color-warn" style="margin-top:22px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:1px"><path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4m0 3v.5"/></svg><div><b>Важно:</b> отображение цвета зависит от экрана. Для окончательного согласования используйте номер цветовой карты и физический образец. Точное попадание в Pantone не заявляется — укажите его как ориентир.</div></div>
      <div class="selected-colors" id="home-selected"></div>
      <div style="display:flex;gap:14px;flex-wrap:wrap">
        <a class="btn btn-outline" href="#/cvetovye-karty/">Открыть полные карты</a>
        <a class="btn btn-dark" href="#/obrazcy/" data-track="sample_request">Запросить физический образец</a>
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
      <div class="section-head"><span class="eyebrow">Процесс</span><h2>Как проходит заказ: 7 этапов</h2><p>Прозрачная схема: что делает производство, что нужно от вас и какой результат вы получаете на каждом шаге.</p></div>
      <div class="steps">
        ${PROCESS.map(s => `<div class="step"><b>${s.t}</b><span>${s.d}</span><div class="who">${s.who}</div></div>`).join('')}
      </div>
      <p class="small" style="color:#8b968f;margin-top:22px">Оплата — ${SITE.payment.charAt(0).toLowerCase() + SITE.payment.slice(1)}.</p>
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

  <section class="section gray tight home-optional">
    <div class="container">
      <div class="section-head"><span class="eyebrow">Портфолио</span><h2>Выполненные изделия</h2><p>Публикуем только подтверждённые работы. Параметры позиций без исходных данных скрыты — не выдумываем.</p></div>
      <div class="grid grid-3">${WORKS.map(w => workCard(w)).join('')}</div>
      <div style="text-align:center;margin-top:32px"><a class="btn btn-outline" href="#/portfolio/">Все работы</a></div>
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
      ${faqHTML(FAQ_HOME.slice(0, 10))}
      <div style="margin-top:22px"><a class="btn btn-outline" href="#/delivery-payment/">Все вопросы — на странице доставки и в каталоге</a></div>
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

function workCard(w){
  return `<article class="card work-card">
    <div class="card-img">${productImage(w.cat, w.title)}</div>
    <h3>${esc(w.title)}</h3>
    <div class="w-params">
      ${Object.entries(w.params).map(([k, v]) => `<div><span>${esc(k)}:</span><b>${esc(v)}</b></div>`).join('')}
      <div><span>Объём партии:</span><span class="work-hidden">нет подтверждённых данных</span></div>
    </div>
  </article>`;
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
const catalogState = { q: '', mats: [], forms: [], cat: '', sort: 'name' };

function pageCatalog(catSlug){
  const cat = catSlug ? catBySlug(catSlug) : null;
  catalogState.cat = catSlug || ''; catalogState.q = ''; catalogState.mats = []; catalogState.forms = [];
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
        <div class="f-group"><h4>Материал</h4>
          ${MATERIALS.map(m => `<label class="f-check"><input type="checkbox" data-filter="mats" value="${m}">${m[0].toUpperCase() + m.slice(1)}</label>`).join('')}
        </div>
        <div class="f-group"><h4>Форма</h4>
          ${['круглый','плоский','витой'].map(f => `<label class="f-check"><input type="checkbox" data-filter="forms" value="${f}">${f[0].toUpperCase() + f.slice(1)}</label>`).join('')}
        </div>
        <div class="f-group"><h4>Наличие</h4>
          <p class="small muted">Статусы «в наличии» и «под заказ» включаются в CMS после подтверждения складских данных.</p>
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
  let list = PRODUCTS.filter(p => !catalogState.cat || p.cat === catalogState.cat);
  if (catalogState.q) { const q = catalogState.q.toLowerCase(); list = list.filter(p => (p.name + ' ' + p.material + ' ' + p.purpose + ' ' + p.form).toLowerCase().includes(q)); }
  if (catalogState.mats.length) list = list.filter(p => catalogState.mats.some(m => p.material.includes(m)));
  if (catalogState.forms.length) list = list.filter(p => catalogState.forms.includes(p.form));
  list = list.slice().sort((a, b) => catalogState.sort === 'material' ? a.material.localeCompare(b.material, 'ru') : a.name.localeCompare(b.name, 'ru'));
  const el = $('#catalog-list'); if (!el) return;
  $('#catalog-count').textContent = 'Найдено позиций: ' + list.length;
  const af = [];
  if (catalogState.q) af.push(['поиск: «' + catalogState.q + '»', null]);
  catalogState.mats.forEach(m => af.push(['материал: ' + m, 'mats:' + m]));
  catalogState.forms.forEach(f => af.push(['форма: ' + f, 'forms:' + f]));
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
    ['Типовой срок', null],
    ['Наличие', p.status]
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
        <span class="p-status">${p.status}</span>
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
let activeColorTab = 'poliefir';
function pageColors(){
  const sel = ColorSel.all();
  return `
  <section class="page-head"><div class="container">
    <nav class="crumbs"><a href="#/">Главная</a> / <span>Цветовые карты</span></nav>
    <h1>Цветовые карты</h1><p>Более ${SITE.colorsCount.replace('+','')} цветов. Выберите оттенки, сравните и добавьте их в запрос на расчёт.</p>
  </div></section>
  <section class="section tight"><div class="container">
    <div class="color-tabs">${Object.keys(COLOR_MAPS).map(k => `<button class="${k === activeColorTab ? 'on' : ''}" data-action="color-tab" data-tab="${k}">${COLOR_MAPS[k].name}</button>`).join('')}</div>
    <div class="color-warn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:1px"><path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4m0 3v.5"/></svg><div><b>Отображение цвета зависит от экрана.</b> Для окончательного согласования используйте номер цветовой карты и физический образец. Желаемый Pantone можно указать как ориентир или прикрепить образец — точное совпадение не заявляется.</div></div>
    <div class="swatches" id="color-grid">${swatchGrid(activeColorTab)}</div>
    <h3 class="sub">Выбранные оттенки (<span id="sel-count">${sel.length}</span>)</h3>
    <div class="selected-colors" id="page-selected">${selectedColorsHTML()}</div>
    <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:14px">
      <a class="btn btn-accent" href="#/raschet-zakaza/" data-track="open_quote">Добавить оттенки в запрос</a>
      <button class="btn btn-outline" data-action="colors-clear">Очистить выбор</button>
      <a class="btn btn-dark" href="#/obrazcy/" data-track="sample_request">Запросить физический образец</a>
    </div>
    <p class="small muted" style="margin-top:26px">Карты на этой странице — демонстрационные заглушки. Перед публикацией замените реальными цветовыми картами производства.</p>
  </div></section>`;
}
function selectedColorsHTML(){
  const sel = ColorSel.all();
  if (!sel.length) return '<span class="muted small">Пока не выбран ни один оттенок. Нажмите на образец, чтобы добавить его.</span>';
  return sel.map(c => `<span class="tag" style="display:inline-flex;align-items:center;gap:8px"><span style="width:14px;height:14px;border-radius:4px;background:${c.hex};border:1px solid rgba(0,0,0,.15);display:inline-block"></span>${esc(c.name)} · ${c.code} <button data-action="color-remove" data-code="${c.code}" style="background:none;border:none;font-weight:700;cursor:pointer;color:inherit" aria-label="Убрать ${esc(c.name)}">×</button></span>`).join('');
}

/* ============ РЕШЕНИЯ ============ */
function pageSolutions(){
  return `
  <section class="page-head"><div class="container">
    <nav class="crumbs"><a href="#/">Главная</a> / <span>Решения</span></nav>
    <h1>Решения по задачам и отраслям</h1><p>Подбор изделий под конкретное производственное применение. Отраслевые страницы созданы только там, где ассортимент реально закрывает задачу.</p>
  </div></section>
  <section class="section tight"><div class="container">
    <div class="grid grid-3">${SOLUTIONS.map(s => `<a class="card" href="#/solutions/${s.slug}/"><h3 style="margin-top:0">${s.name}</h3><p>${s.text}</p><span style="color:var(--green-deep);font-weight:600;font-size:14px;margin-top:12px">Смотреть решение →</span></a>`).join('')}</div>
  </div></section>`;
}
function pageSolution(slug){
  const s = SOLUTIONS.find(x => x.slug === slug);
  if (!s) return page404();
  const prods = s.products.map(productBySlug).filter(Boolean);
  return `
  <section class="page-head"><div class="container">
    <nav class="crumbs"><a href="#/">Главная</a> / <a href="#/solutions/">Решения</a> / <span>${s.name}</span></nav>
    <h1>${s.name}</h1><p>${s.text}</p>
  </div></section>
  <section class="section tight"><div class="container">
    <div class="section-head" style="margin-bottom:26px"><h2 style="font-size:24px">Подходящие изделия</h2></div>
    <div class="grid grid-3 p-list">${prods.map(p => productCard(p)).join('')}</div>
    <div class="card" style="margin-top:40px;background:var(--bg);border:none;color:#fff;flex-direction:row;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap">
      <h3 style="margin:0;color:#fff">Не нашли подходящий вариант?</h3>
      <a class="btn btn-accent" href="#/raschet-zakaza/" data-track="open_quote">Получить консультацию и расчёт</a>
    </div>
  </div></section>`;
}

/* ============ СТАТИЧЕСКИЕ СТРАНИЦЫ ============ */
function simplePage(title, crumb, body){
  return `
  <section class="page-head"><div class="container">
    <nav class="crumbs"><a href="#/">Главная</a> / <span>${crumb}</span></nav>
    <h1>${title}</h1>
  </div></section>
  <section class="section tight"><div class="container" style="max-width:920px">${body}</div></section>`;
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
const WIZ_STEPS = ['Изделие','Задача','Параметры','Партия','Файлы','Контакты','Сводка'];
function openWizard(mode, prefill){
  wizard = { step: 0, mode: mode || 'known', data: Object.assign({ items: [], files: [] }, prefill || {}) };
  renderWizard();
  $('#modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  track('quote_step_started', { mode: wizard.mode });
}
function closeWizard(){ $('#modal-overlay').classList.remove('open'); document.body.style.overflow = ''; wizard = null; }
function wField(label, name, type, opts, required, ph){
  const val = wizard.data[name] || '';
  if (type === 'select') return `<div class="field"><label>${label}${required ? ' <span class="req">*</span>' : ''}</label><select name="${name}" ${required ? 'data-wreq' : ''}><option value="">— Выберите —</option>${opts.map(o => `<option ${val === o[0] ? 'selected' : ''} value="${esc(o[0])}">${esc(o[1])}</option>`).join('')}</select><span class="err-msg">Заполните поле</span></div>`;
  if (type === 'textarea') return `<div class="field full"><label>${label}</label><textarea name="${name}" rows="3" placeholder="${ph || ''}">${esc(val)}</textarea></div>`;
  return `<div class="field"><label>${label}${required ? ' <span class="req">*</span>' : ''}</label><input name="${name}" type="${type}" value="${esc(val)}" placeholder="${ph || ''}" ${required ? 'data-wreq' : ''}><span class="err-msg">Заполните поле</span></div>`;
}
function wizardStepHTML(){
  const d = wizard.data, s = wizard.step;
  let inner = '';
  if (s === 0){
    inner = `<h2 style="font-size:22px;margin-bottom:4px">Что требуется изготовить?</h2><p class="muted small" style="margin-bottom:20px">Можно выбрать несколько позиций — каждая попадёт в список расчёта.</p>
    <div class="grid grid-2" style="gap:12px">
      ${CATS.map(c => `<label class="card" style="padding:16px;flex-direction:row;align-items:center;gap:12px;cursor:pointer;${(d.items||[]).includes(c.slug) ? 'border-color:var(--accent);background:var(--green-light)' : ''}"><input type="checkbox" data-witem="${c.slug}" ${(d.items||[]).includes(c.slug) ? 'checked' : ''} style="width:18px;height:18px;accent-color:var(--green-deep)"><b>${c.name}</b></label>`).join('')}
      <label class="card" style="padding:16px;flex-direction:row;align-items:center;gap:12px;cursor:pointer;${(d.items||[]).includes('unsure') ? 'border-color:var(--accent);background:var(--green-light)' : ''}"><input type="checkbox" data-witem="unsure" ${(d.items||[]).includes('unsure') ? 'checked' : ''} style="width:18px;height:18px;accent-color:var(--green-deep)"><b>Не уверен — нужна консультация</b></label>
    </div>`;
  } else if (s === 1){
    inner = `<h2 style="font-size:22px;margin-bottom:16px">Какая задача у изделия?</h2>
    <div class="grid grid-3" style="gap:10px">${['Обувь','Одежда','Пакет','Коробка','Аксессуар','Промопродукция','Упаковка','Декор','Другое'].map(t => `<button class="chip" data-wpick="task" data-val="${t}" style="cursor:pointer;${d.task === t ? 'background:var(--green-deep);color:#fff;border-color:var(--green-deep)' : ''}">${t}</button>`).join('')}</div>
    <p class="small muted" style="margin-top:14px">Ответ помогает предложить подходящие материалы и исполнение.</p>`;
  } else if (s === 2){
    inner = `<h2 style="font-size:22px;margin-bottom:16px">Параметры изделия</h2>
    <p class="small muted" style="margin-bottom:16px">Заполните что знаете — остальное уточним вместе. Неподтверждённые опции (логотип, брендирование) отключены.</p>
    <div class="form-grid">
      ${wField('Материал', 'material', 'select', MATERIALS.map(m => [m, m[0].toUpperCase() + m.slice(1)]))}
      ${wField('Форма', 'form', 'select', [['round','Круглая'],['flat','Плоская'],['twist','Витая']])}
      ${wField('Диаметр / ширина', 'size', 'text', null, false, 'например, 5 мм или 10 мм')}
      ${wField('Длина одного изделия', 'length', 'text', null, false, 'например, 120 см')}
      ${wField('Основной цвет / код карты', 'color', 'text', null, false, 'например, ПЭ-006 или «синий»')}
      ${wField('Желаемый Pantone (как ориентир)', 'pantone', 'text', null, false, 'например, 19-4052 TCX')}
      ${wField('Тип наконечника', 'tip', 'select', [['plastic','Пластиковый'],['metal','Металлический'],['none','Без наконечника']])}
      ${wField('Вощение', 'wax', 'select', [['no','Нет'],['yes','Да (для хлопка)']])}
      ${wField('Комментарий к цвету', 'colorNote', 'textarea', null, false, 'например, тёплый оттенок, ближе к образцу')}
    </div>`;
  } else if (s === 3){
    inner = `<h2 style="font-size:22px;margin-bottom:16px">Партия и логистика</h2>
    <div class="form-grid">
      ${wField('Количество', 'qty', 'text', null, true, 'например, 10 000 шт. или 3 000 м')}
      ${wField('Единица измерения', 'unit', 'select', [['pcs','шт. / пары'],['m','метры'],['kg','килограммы']], true)}
      ${wField('Желаемый срок', 'deadline', 'text', null, false, 'например, к 15 ноября')}
      ${wField('Город доставки', 'city', 'text', null, false, 'например, Москва')}
      ${wField('Способ получения', 'delivery', 'select', [['tk','Транспортная компания'],['pickup','Самовывоз (уточняется)']])}
      ${wField('Нужен образец?', 'sample', 'select', [['no','Нет'],['yes','Да, до запуска партии']])}
      ${wField('Индивидуальная упаковка?', 'pack', 'select', [['no','Нет'],['yes','Да, обсудить варианты']])}
      ${wField('Комментарий', 'wcomment', 'textarea', null, false, 'Особые требования, условия использования изделия…')}
    </div>`;
  } else if (s === 4){
    inner = `<h2 style="font-size:22px;margin-bottom:16px">Файлы</h2>
    <p class="small muted" style="margin-bottom:16px">Прикрепите фотографию, эскиз, чертёж, ТЗ, брендбук или таблицу. Форматы: JPG, PNG, PDF, DOCX, XLSX. Максимум 10 МБ на файл.</p>
    <label class="file-drop" for="w-files">Нажмите, чтобы выбрать файлы<br><span class="small">или перетащите их сюда</span>
      <input id="w-files" type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.docx,.xlsx" style="display:none" data-wfiles>
    </label>
    <div class="file-list" id="w-file-list">${(d.files || []).map((f, i) => `<span>${esc(f)} <button type="button" data-wfile-del="${i}" style="background:none;border:none;cursor:pointer;font-weight:700;color:inherit">×</button></span>`).join('')}</div>`;
  } else if (s === 5){
    inner = `<h2 style="font-size:22px;margin-bottom:16px">Контакты</h2>
    <p class="small muted" style="margin-bottom:16px">Телефон или email — хотя бы одно поле обязательно.</p>
    <div class="form-grid">
      ${wField('Компания', 'company', 'text', null, false, 'ООО «…»')}
      ${wField('ИНН', 'inn', 'text', null, false, 'необязательно')}
      ${wField('Имя', 'person', 'text', null, true, 'Контактное лицо')}
      ${wField('Должность', 'role', 'text', null, false, 'необязательно')}
      ${wField('Телефон', 'wphone', 'tel', null, false, '+7 (___) ___-__-__')}
      ${wField('Email', 'wemail', 'email', null, false, 'company@mail.ru')}
      ${wField('Предпочтительный способ связи', 'contactPref', 'select', [['phone','Телефон'],['email','Email'],['any','Любой']])}
    </div>`;
  } else {
    const rows = [
      ['Позиции', (d.items || []).map(i => i === 'unsure' ? 'консультация' : (catBySlug(i) ? catBySlug(i).name : i)).join(', ') || '—'],
      ['Задача', d.task || '—'], ['Материал', d.material || '—'], ['Форма', d.form || '—'],
      ['Размер / длина', [d.size, d.length].filter(Boolean).join(' / ') || '—'],
      ['Цвет', [d.color, d.pantone ? 'Pantone: ' + d.pantone : ''].filter(Boolean).join('; ') || '—'],
      ['Наконечник', d.tip || '—'], ['Количество', (d.qty || '—') + ' ' + (d.unit || '')],
      ['Город', d.city || '—'], ['Файлы', (d.files || []).join(', ') || '—'],
      ['Контакт', [d.person, d.company, d.wphone, d.wemail].filter(Boolean).join(', ') || '—']
    ];
    inner = `<h2 style="font-size:22px;margin-bottom:16px">Проверьте данные перед отправкой</h2>
    <div class="summary-box">${rows.map(r => `<div><span>${r[0]}</span><b>${esc(r[1])}</b></div>`).join('')}</div>
    <label class="consent" style="margin-bottom:6px"><input type="checkbox" id="w-consent" data-wreq-consent><span>Согласен на обработку персональных данных в соответствии с <a href="#/personal-data-consent/" style="text-decoration:underline">согласием</a> <span class="req">*</span></span></label>
    <span class="err-msg" id="w-consent-err" style="display:none;color:var(--err);font-size:12.5px">Поставьте галочку согласия</span>`;
  }
  const stepper = `<div class="wizard-steps">${WIZ_STEPS.map((t, i) => `<span class="${i === s ? 'on' : ''}">${i + 1}. ${t}</span>`).join('')}</div>`;
  const nav = `<div class="wizard-nav">
    <button class="btn btn-outline" data-action="w-prev" ${s === 0 ? 'disabled' : ''}>← Назад</button>
    ${s < WIZ_STEPS.length - 1
      ? `<button class="btn btn-accent" data-action="w-next">Далее →</button>`
      : `<button class="btn btn-accent" data-action="w-submit" data-track="quote_submitted">Отправить запрос на расчёт</button>`}
  </div>`;
  $('#modal-overlay').innerHTML = `<div class="modal" role="document">
    <button class="modal-close" data-action="w-close" aria-label="Закрыть">✕</button>
    ${stepper}${inner}${nav}
    <p class="small muted" style="margin-top:18px">Демо-режим: отправка сохраняет заявку локально в браузере. Для боевого сайта подключите бэкенд / CRM webhook (настройки в коде, переменная INTEGRATIONS).</p>
  </div>`;
}
function wizardCollect(){
  const d = wizard.data;
  $$('#modal-overlay [name]').forEach(el => { if (el.type !== 'checkbox') d[el.name] = el.value.trim(); });
  d.items = $$('#modal-overlay [data-witem]:checked').map(el => el.dataset.witem);
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
  if (wizard.step === 5 && !d.wphone.trim() && !d.wemail.trim()) {
    [['wphone'], ['wemail']].forEach(([n]) => { const el = $('#modal-overlay [name="' + n + '"]'); if (el && el.closest('.field')) el.closest('.field').classList.add('invalid'); });
    toast('Укажите телефон или email'); ok = false;
  }
  if (wizard.step === 6) {
    const c = $('#w-consent');
    if (!c || !c.checked) { $('#w-consent-err').style.display = 'block'; ok = false; } else $('#w-consent-err').style.display = 'none';
  }
  return ok;
}
function submitWizard(){
  const d = wizard.data;
  const ref = 'SH-' + String(Date.now()).slice(-6);
  const sub = { ref, type: 'quote', data: d, colors: ColorSel.all(), quoteList: Quote.all(), ts: new Date().toISOString(), page: location.hash };
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
        <a class="btn btn-outline" href="#/cvetovye-karty/">Сначала выбрать цвет</a>
      </div>
    </div>
    ${faqHTML([
      ['Что можно изменить под заказ?','Материал, форму, плетение, размер, длину, цвет, тип наконечника, вощение, способ нарезки и упаковки.'],
      ['Что делать, если нет точных параметров?','Отправьте фото или образец — специалист производства предложит подходящее исполнение.'],
      ['Есть ли ограничения?','Да, они зависят от материала и оборудования. Честно сообщим, если выбранная комбинация параметров недоступна, и предложим ближайший рабочий вариант.']
    ])}`);
}
function pageProduction(){
  return simplePage('Производство и оборудование', 'Производство', `
    <p style="font-size:16.5px;max-width:760px;margin-bottom:28px">Собственное производство в Зеленограде. Этапы: подготовка сырья → плетение / вязание → нарезка → установка наконечников и фиксаторов → контроль → упаковка → отгрузка. Ниже — плейсхолдеры для реальных фото цеха и станков: модели оборудования и производительность не приводятся до подтверждения.</p>
    <div class="grid grid-3">
      ${['Плетение / вязание','Нарезка','Установка наконечников','Контроль партии','Упаковка','Отгрузка'].map(t => `<div class="card">${phBlock('участок: ' + t.toLowerCase(), false)}<h3>${t}</h3><p>Подтверждается фотоматериалами производства.</p></div>`).join('')}
    </div>
    <div class="card" style="margin-top:30px;background:var(--bg);border:none;color:#fff;flex-direction:row;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap">
      <h3 style="margin:0;color:#fff">Хотите посмотреть производство или обсудить партию?</h3>
      <div style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-accent" href="#/raschet-zakaza/">Получить расчёт</a><a class="btn btn-ghost" href="#/contacts/">Контакты</a></div>
    </div>`);
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
function pagePortfolio(){
  return simplePage('Портфолио выполненных работ', 'Портфолио', `
    <p style="margin-bottom:26px">Публикуем только подтверждённые работы. Параметры, по которым нет исходных данных, скрыты — не выдумываем цифры и клиентов.</p>
    <div class="grid grid-3">${WORKS.map(w => workCard(w)).join('')}</div>
    <p class="small muted" style="margin-top:26px">Фильтры по типу изделия, материалу, форме и сфере применения включаются по мере наполнения портфолио подтверждёнными кейсами.</p>`);
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
    ${faqHTML(FAQ_HOME)}`);
}
function pageAbout(){
  return simplePage('О компании', 'О компании', `
    <div class="two-col">
      <div>
        <p style="font-size:16.5px;margin-bottom:16px">«Шнурка.ру» — прямой B2B-производитель шнурков, шнуров и ручек для упаковки. Собственное производство находится в Зеленограде (Москва). Опыт работы — более ${SITE.experienceYears.replace('+','')} лет (значение редактируется в настройках сайта).</p>
        <p style="margin-bottom:16px">Специализация: производство шнурков и шнуров из хлопка, полиэфира (полиэстера), полипропилена, нейлона и метанита; ручки для подарочной и бумажной упаковки; отдельные виды резинок; горячая нарезка лент и шнуров; изготовление по параметрам заказчика.</p>
        <p class="muted">Мы не розничный магазин и не перепродавец: основной сценарий сайта — расчёт и производство B2B-партий.</p>
      </div>
      <div class="card">${phBlock('фото производства / коллектива', false)}<p style="margin-top:14px">Замените фотографией реального производства.</p></div>
    </div>
    <h3 class="sub">Реквизиты</h3>
    <table class="chars"><tbody>
      <tr><th scope="row">Адрес производства</th><td>${esc(SITE.address)}</td></tr>
      <tr><th scope="row">Email</th><td><a href="mailto:${SITE.email}">${SITE.email}</a></td></tr>
      <tr><th scope="row">Телефоны</th><td><a href="tel:${SITE.phoneMainHref}">${SITE.phoneMain}</a> · <a href="tel:${SITE.phoneAltHref}">${SITE.phoneAlt}</a></td></tr>
      <tr><th scope="row">Юридические реквизиты</th><td><span class="muted">${NEED} — заполнить перед публикацией</span></td></tr>
      <tr><th scope="row">Режим работы</th><td><span class="muted">${NEED}</span></td></tr>
    </tbody></table>`);
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
    </div>`);
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
  else if (r === 'product' && seg[1]) html = pageProduct(seg[1]);
  else if (r === 'solutions') html = seg[1] ? pageSolution(seg[1]) : pageSolutions();
  else if (r === 'raschet-zakaza') { html = pageQuote(); }
  else if (r === 'obrazcy') html = pageSamples();
  else if (r === 'cvetovye-karty') { html = pageColors(); }
  else if (r === 'proizvodstvo-na-zakaz') html = pageCustom();
  else if (r === 'production') html = pageProduction();
  else if (r === 'quality') html = pageQuality();
  else if (r === 'portfolio') html = pagePortfolio();
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
  $$('.main-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href === '#/' + r + '/' || (r === '' && href === '#/'));
  });
}

/* ============ ОБРАБОТЧИКИ ============ */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-action],[data-track],a[href^="tel:"],a[href^="mailto:"]');
  if (t && t.dataset.track) track(t.dataset.track, { el: t.textContent.trim().slice(0, 60) });
  const el = e.target.closest('[data-action]');
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
    if (p) { Quote.add({ slug: p.slugFull, name: p.name, qty: 1, note: p.material + ' · ' + p.form }); toast('«' + p.name + '» добавлено в список расчёта'); }
  }
  else if (a === 'calc-cat') { openWizard('known', { items: [el.dataset.cat] }); }
  else if (a === 'quote-remove') { Quote.remove(el.dataset.slug); refreshQuoteUI(); }
  else if (a === 'quote-clear') { Quote.clear(); refreshQuoteUI(); }
  else if (a === 'color-tab') {
    activeColorTab = el.dataset.tab;
    $$('.color-tabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === activeColorTab));
    const grid = $('#color-grid') || $('#home-swatches');
    if (grid) { grid.innerHTML = swatchGrid(activeColorTab, grid.id === 'home-swatches' ? 8 : undefined); }
  }
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
    catalogState.mats = []; catalogState.forms = []; catalogState.q = '';
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
  if (el.dataset.witem !== undefined) { wizardCollect(); renderWizard(); }
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
