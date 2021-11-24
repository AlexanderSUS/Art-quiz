const images = [
  {
    author: {
      ru: 'павел Федотов',
      en: 'pavel Fedotov',
    },
    picture: {
      ru: 'Сватовство майора',
      en: "major's matchmaking",
    },
    year: '1852',
    imagenum: '0',
  },
  {
    author: {
      ru: 'эдгар Дега',
      en: 'edgar Degas',
    },
    picture: {
      ru: 'Голубые танцовщицы',
      en: 'blue dancers',
    },
    year: '1897',
    imagenum: '1',
  },
  {
    author: {
      ru: 'веронезе',
      en: 'veronese',
    },
    picture: {
      ru: 'Пир в доме Левия',
      en: "feast at Levi's house",
    },
    year: '1563',
    imagenum: '2',
  },
  {
    author: {
      ru: 'илья Репин',
      en: 'ilya Repin',
    },
    picture: {
      ru: 'Иван Грозный и сын его Иван',
      en: 'ivan the Terrible and his son Ivan',
    },
    year: '1885',
    imagenum: '3',
  },
  {
    author: {
      ru: 'константин Маковский',
      en: 'konstantin Makovsky',
    },
    picture: {
      ru: 'Портрет графини Софьи',
      en: 'portrait of Countess Sophia',
    },
    year: '1890',
    imagenum: '4',
  },
  {
    author: {
      ru: 'василий Перов',
      en: 'vasily Perov',
    },
    picture: {
      ru: 'Приезд гувернантки в купеческий дом',
      en: 'arrival of the governess to the merchant house',
    },
    year: '1866',
    imagenum: '5',
  },
  {
    author: {
      ru: 'микеланджело',
    },
    picture: {
      ru: 'Сотворение Адама',
      en: 'creation of Adam',
    },
    year: '1511',
    imagenum: '6',
  },
  {
    author: {
      ru: 'пьер Огюст Ренуар',
      en: 'pierre Auguste Renoir',
    },
    picture: {
      ru: 'Прогулка в Булонском лесу',
      en: 'walk in the Bois de Boulogne',
    },
    year: '1873',
    imagenum: '7',
  },
  {
    author: {
      ru: 'ян Вермеер',
      en: 'jan Vermeer',
    },
    picture: {
      ru: 'Хозяйка и служанка',
      en: 'mistress and maid',
    },
    year: '1667',
    imagenum: '8',
  },
  {
    author: {
      ru: 'василий Поленов',
      en: 'vasily Polenov',
    },
    picture: {
      ru: 'Московский дворик',
      en: 'moscow courtyard',
    },
    year: '1877',
    imagenum: '9',
  },
  {
    author: {
      ru: 'фёдор Васильев',
      en: 'fedor Vasiliev',
    },
    picture: {
      ru: 'Мокрый луг',
      en: 'wet meadow',
    },
    year: '1872',
    imagenum: '10',
  },
  {
    author: {
      ru: 'илья Репин',
      en: 'ilya Repin',
    },
    picture: {
      ru: 'Проводы новобранца',
      en: 'seeing off the recruit',
    },
    year: '1879',
    imagenum: '11',
  },
  {
    author: {
      ru: 'веронезе',
      en: 'veronese',
    },
    picture: {
      ru: 'Марс и Венера',
      en: 'mars and Venus',
    },
    year: '1560',
    imagenum: '12',
  },
  {
    author: {
      ru: 'виктор Васнецов',
      en: 'viktor Vasnetsov',
    },
    picture: {
      ru: 'Аленушка',
      en: 'alyonushka',
    },
    year: '1881',
    imagenum: '13',
  },
  {
    author: {
      ru: 'клод Лоррен',
      en: 'claude Lorrain',
    },
    picture: {
      ru: 'Отплытие святой Урсулы',
      en: 'the departure of Saint Ursula',
    },
    year: '1614',
    imagenum: '14',
  },
  {
    author: {
      ru: 'илья Репин',
      en: 'ilya Repin',
    },
    picture: {
      ru: 'Вечорници',
      en: 'vespers',
    },
    year: '1881',
    imagenum: '15',
  },
  {
    author: {
      ru: 'жан Фрагонар',
      en: 'jean Fragonard',
    },
    picture: {
      ru: 'Качели',
      en: 'swing',
    },
    year: '1767',
    imagenum: '16',
  },
  {
    author: {
      ru: 'архип Куинджи',
      en: 'arkhip Kuindzhi',
    },
    picture: {
      ru: 'Берёзовая роща',
      en: 'birch grove',
    },
    year: '1879',
    imagenum: '17',
  },
  {
    author: {
      ru: 'пабло Пикассо',
      en: 'pablo Picasso',
    },
    picture: {
      ru: 'Герника',
      en: 'guernica',
    },
    year: '1937',
    imagenum: '18',
  },
  {
    author: {
      ru: 'поль Гоген',
      en: 'paul Gauguin',
    },
    picture: {
      ru: 'Откуда мы пришли? Кто мы? Куда мы идём?',
      en: 'where did we come from? Who are we? Where are we going?',
    },
    year: '1898',
    imagenum: '19',
  },
  {
    author: {
      ru: 'бартоломео Мурильо',
      en: 'bartolomeo Murillo',
    },
    picture: {
      ru: 'Мадонна с четками',
      en: 'madonna with a rosary',
    },
    year: '1655',
    imagenum: '20',
  },
  {
    author: {
      ru: 'питер Брейгель',
      en: 'pieter Bruegel',
    },
    picture: {
      ru: 'Фламандские пословицы',
      en: 'flemish proverbs',
    },
    year: '1559',
    imagenum: '21',
  },
  {
    author: {
      ru: 'ян ван Эйк',
      en: 'jan van Eyck',
    },
    picture: {
      ru: 'Портрет четы Арнольфини',
      en: 'portrait of the Arnolfini couple',
    },
    year: '1434',
    imagenum: '22',
  },
  {
    author: {
      ru: 'питер Брейгель',
      en: 'pieter Bruegel',
    },
    picture: {
      ru: 'Избиение младенцев',
      en: 'beating up babies',
    },
    year: '1567',
    imagenum: '23',
  },
  {
    author: {
      ru: 'константин Маковский',
      en: 'konstantin Makovsky',
    },
    picture: {
      ru: 'Дети, бегущие от грозы',
      en: 'children running from a thunderstorm',
    },
    year: '1872',
    imagenum: '24',
  },
  {
    author: {
      ru: 'рембрандт',
      en: 'rembrandt',
    },
    picture: {
      ru: 'Даная',
      en: 'danae',
    },
    year: '1647',
    imagenum: '25',
  },
  {
    author: {
      ru: 'рафаэль',
      en: 'raphael',
    },
    picture: {
      ru: 'Мадонна в кресле',
      en: 'madonna in the chair',
    },
    year: '1514',
    imagenum: '26',
  },
  {
    author: {
      ru: 'василий Суриков',
      en: 'vasily Surikov',
    },
    picture: {
      ru: 'Взятие снежного городка',
      en: 'taking a snow town',
    },
    year: '1891',
    imagenum: '27',
  },
  {
    author: {
      ru: 'иван Шишкин',
      en: 'ivan Shishkin',
    },
    picture: {
      ru: 'Ручей в берёзовом лесу',
      en: 'a stream in a birch forest',
    },
    year: '1883',
    imagenum: '28',
  },
  {
    author: {
      ru: 'василий Суриков',
      en: 'vasily Surikov',
    },
    picture: {
      ru: 'Покорение Сибири Ермаком Тимофеевичем',
      en: 'the conquest of Siberia by Ermak Timofeevich',
    },
    year: '1895',
    imagenum: '29',
  },
  {
    author: {
      ru: 'владимир Боровиковский',
      en: 'vladimir Borovikovsky',
    },
    picture: {
      ru: 'Портрет Лопухиной',
      en: 'portrait of Lopukhina',
    },
    year: '1797',
    imagenum: '30',
  },
  {
    author: {
      ru: 'рене Магритт',
      en: 'rene Magritte',
    },
    picture: {
      ru: 'Сын человеческий',
      en: 'son of man',
    },
    year: '1964',
    imagenum: '31',
  },
  {
    author: {
      ru: 'веласкес',
      en: 'velasquez',
    },
    picture: {
      ru: 'Венера с зеркалом',
      en: 'venus with a mirror',
    },
    year: '1651',
    imagenum: '32',
  },
  {
    author: {
      ru: 'иван Богданов',
      en: 'ivan Bogdanov',
    },
    picture: {
      ru: 'За расчётом',
      en: 'for the calculation',
    },
    year: '1890',
    imagenum: '33',
  },
  {
    author: {
      ru: 'рембрандт',
      en: 'rembrandt',
    },
    picture: {
      ru: 'Христос и грешница',
      en: 'christ and the sinner',
    },
    year: '1644',
    imagenum: '34',
  },
  {
    author: {
      ru: 'джон Уильям Уотерхаус',
      en: 'john William Waterhouse',
    },
    picture: {
      ru: 'Волшебница Шалот',
      en: 'sorceress Shallot',
    },
    year: '1888',
    imagenum: '35',
  },
  {
    author: {
      ru: 'пьер Огюст Ренуар',
      en: 'pierre Auguste Renoir',
    },
    picture: {
      ru: 'Большие купальщицы',
      en: 'big bathers',
    },
    year: '1887',
    imagenum: '36',
  },
  {
    author: {
      ru: 'бартоломео Мурильо',
      en: 'bartolomeo Murillo',
    },
    picture: {
      ru: 'Мальчик с собакой',
      en: 'boy with a dog',
    },
    year: '1650',
    imagenum: '37',
  },
  {
    author: {
      ru: 'василий Перов',
      en: 'vasily Perov',
    },
    picture: {
      ru: 'Тройка',
      en: 'three',
    },
    year: '1866',
    imagenum: '38',
  },
  {
    author: {
      ru: 'николай Богданов-Бельский',
      en: 'nikolay Bogdanov-Belsky',
    },
    picture: {
      ru: 'Устный счёт',
      en: 'verbal invoice',
    },
    year: '1895',
    imagenum: '39',
  },
  {
    author: {
      ru: 'виктор Васнецов',
      en: 'viktor Vasnetsov',
    },
    picture: {
      ru: 'Три царевны подземного царства',
      en: 'three princesses of the underworld',
    },
    year: '1884',
    imagenum: '40',
  },
  {
    author: {
      ru: 'анри Матисс',
      en: 'henri Matisse',
    },
    picture: {
      ru: 'Танец',
      en: 'dance',
    },
    year: '1910',
    imagenum: '41',
  },
  {
    author: {
      ru: 'эдвард Мунк',
      en: 'edvard Munch',
    },
    picture: {
      ru: 'Мадонна',
      en: 'madonna',
    },
    year: '1894',
    imagenum: '42',
  },
  {
    author: {
      ru: 'марк Шагал',
      en: 'marc Chagall',
    },
    picture: {
      ru: 'Прогулка',
      en: 'walk',
    },
    year: '1918',
    imagenum: '43',
  },
  {
    author: {
      ru: 'василий Перов',
      en: 'vasily Perov',
    },
    picture: {
      ru: 'Сельский крестный ход на Пасхе',
      en: 'rural procession at Easter',
    },
    year: '1861',
    imagenum: '44',
  },
  {
    author: {
      ru: 'иероним Босх',
      en: 'hieronymus Bosch',
    },
    picture: {
      ru: 'Страшный суд',
      en: 'the Last Judgment',
    },
    year: '1504',
    imagenum: '45',
  },
  {
    author: {
      ru: 'карл Лемох',
      en: 'karl Lemokh',
    },
    picture: {
      ru: 'Варька',
      en: 'varka',
    },
    year: '1893',
    imagenum: '46',
  },
  {
    author: {
      ru: 'жан Фрагонар',
      en: 'jean Fragonard',
    },
    picture: {
      ru: 'Поцелуй украдкой',
      en: 'secret kiss',
    },
    year: '1788',
    imagenum: '47',
  },
  {
    author: {
      ru: 'франсуа Буше',
      en: 'francois Boucher',
    },
    picture: {
      ru: 'Венера, утешающая Амура',
      en: 'venus Consoling Cupid',
    },
    year: '1751',
    imagenum: '48',
  },
  {
    author: {
      ru: 'иван Шишкин',
      en: 'ivan Shishkin',
    },
    picture: {
      ru: 'Корабельная роща',
      en: 'ship Grove',
    },
    year: '1898',
    imagenum: '49',
  },
  {
    author: {
      ru: 'густав Климт',
      en: 'gustav Klimt',
    },
    picture: {
      ru: 'Золотая Адель',
      en: 'golden Adele',
    },
    year: '1907',
    imagenum: '50',
  },
  {
    author: {
      ru: 'виктор Васнецов',
      en: 'viktor Vasnetsov',
    },
    picture: {
      ru: 'Богатыри',
      en: 'heroes',
    },
    year: '1898',
    imagenum: '51',
  },
  {
    author: {
      ru: 'вильгельм фон Каульбах',
      en: 'wilhelm von Kaulbach',
    },
    picture: {
      ru: 'Разрушение Иерусалима',
      en: 'destruction of Jerusalem',
    },
    year: '1846',
    imagenum: '52',
  },
  {
    author: {
      ru: 'веронезе',
      en: 'veronese',
    },
    picture: {
      ru: 'Брак в Кане Галилейской',
      en: 'marriage at Cana of Galilee',
    },
    year: '1562',
    imagenum: '53',
  },
  {
    author: {
      ru: 'андрей Рублев',
      en: 'andrey Rublev',
    },
    picture: {
      ru: 'Троица',
      en: 'trinity',
    },
    year: '1411',
    imagenum: '54',
  },
  {
    author: {
      ru: 'василий Суриков',
      en: 'vasily Surikov',
    },
    picture: {
      ru: 'Утро стрелецкой казни',
      en: "morning of the Strelets' execution",
    },
    year: '1881',
    imagenum: '55',
  },
  {
    author: {
      ru: 'тициан',
      en: 'titian',
    },
    picture: {
      ru: 'Вакханалия',
      en: 'bacchanalia',
    },
    year: '1526',
    imagenum: '56',
  },
  {
    author: {
      ru: 'веласкес',
      en: 'velasquez',
    },
    picture: {
      ru: 'Вилла Медичи в Риме. Полдень',
      en: 'villa Medici in Rome. Noon',
    },
    year: '1630',
    imagenum: '57',
  },
  {
    author: {
      ru: 'эдуард Мане',
      en: 'edouard Manet',
    },
    picture: {
      ru: 'Ланч на траве',
      en: 'lunch on the grass',
    },
    year: '1863',
    imagenum: '58',
  },
  {
    author: {
      ru: 'сальвадор Дали',
      en: 'salvador Dali',
    },
    picture: {
      ru: 'Постоянство памяти',
      en: 'persistence of memory',
    },
    year: '1931',
    imagenum: '59',
  },
  {
    author: {
      ru: 'пьер Огюст Ренуар',
      en: 'pierre Auguste Renoir',
    },
    picture: {
      ru: 'Две девушки',
      en: 'two girls',
    },
    year: '1892',
    imagenum: '60',
  },
  {
    author: {
      ru: 'александр Маковский',
      en: 'alexander Makovsky',
    },
    picture: {
      ru: 'Надоела',
      en: 'tired',
    },
    year: '1897',
    imagenum: '61',
  },
  {
    author: {
      ru: 'веласкес',
      en: 'velasquez',
    },
    picture: {
      ru: 'Менины',
      en: 'meninas',
    },
    year: '1656',
    imagenum: '62',
  },
  {
    author: {
      ru: 'антонис ван Дейк',
      en: 'anthony van Dyck',
    },
    picture: {
      ru: 'Самсон и Далила',
      en: 'samson and Delilah',
    },
    year: '1628',
    imagenum: '63',
  },
  {
    author: {
      ru: 'пабло Пикассо',
      en: 'pablo Picasso',
    },
    picture: {
      ru: 'Девочка на шаре',
      en: 'girl on the ball',
    },
    year: '1905',
    imagenum: '64',
  },
  {
    author: {
      ru: 'джованни Беллини',
      en: 'giovanni Bellini',
    },
    picture: {
      ru: 'Пир богов',
      en: 'feast of the Gods',
    },
    year: '1514',
    imagenum: '65',
  },
  {
    author: {
      ru: 'леонардо да Винчи',
      en: 'leonardo da Vinci',
    },
    picture: {
      ru: 'Дама с горностаем',
      en: 'lady with an ermine',
    },
    year: '1490',
    imagenum: '66',
  },
  {
    author: {
      ru: 'веласкес',
      en: 'velasquez',
    },
    picture: {
      ru: 'Бахус',
      en: 'bacchus',
    },
    year: '1628',
    imagenum: '67',
  },
  {
    author: {
      ru: 'бартоломео Мурильо',
      en: 'bartolomeo Murillo',
    },
    picture: {
      ru: 'Непорочное зачатие',
      en: 'immaculate Conception',
    },
    year: '1678',
    imagenum: '68',
  },
  {
    author: {
      ru: 'теодор Жерико',
      en: 'theodore Gericault',
    },
    picture: {
      ru: 'Плот "Медузы"',
      en: 'the Raft "Medusa"',
    },
    year: '1819',
    imagenum: '69',
  },
  {
    author: {
      ru: 'иван Шишкин',
      en: 'ivan Shishkin',
    },
    picture: {
      ru: 'Утро в сосновом лесу',
      en: 'morning in a pine forest',
    },
    year: '1889',
    imagenum: '70',
  },
  {
    author: {
      ru: 'жан Этьен Лиотар',
      en: 'jean Etienne Lyotard',
    },
    picture: {
      ru: 'Шоколадница',
      en: 'chocolate girl',
    },
    year: '1745',
    imagenum: '71',
  },
  {
    author: {
      ru: 'рембрандт',
      en: 'rembrandt',
    },
    picture: {
      ru: 'Автопортрет с Саскией',
      en: 'self-portrait with Saskia',
    },
    year: '1635',
    imagenum: '72',
  },
  {
    author: {
      ru: 'илья Репин',
      en: 'ilya Repin',
    },
    picture: {
      ru: 'Крестный ход',
      en: 'religious procession',
    },
    year: '1883',
    imagenum: '73',
  },
  {
    author: {
      ru: 'алексей Венецианов',
      en: 'alexey Venetsianov',
    },
    picture: {
      ru: 'Спящий пастушок',
      en: 'sleeping shepherd boy',
    },
    year: '1826',
    imagenum: '74',
  },
  {
    author: {
      ru: 'иван Богданов',
      en: 'ivan Bogdanov',
    },
    picture: {
      ru: 'Новичок',
      en: 'newbie',
    },
    year: '1893',
    imagenum: '75',
  },
  {
    author: {
      ru: 'анри де Тулуз-Лотрек',
      en: 'henri de Toulouse-Lautrec',
    },
    picture: {
      ru: 'Угол Мулен де ла Галет',
      en: 'corner of the Moulin de la Galette',
    },
    year: '1892',
    imagenum: '76',
  },
  {
    author: {
      ru: 'тициан',
      en: 'titian',
    },
    picture: {
      ru: 'Кающаяся Марина Магдалина',
      en: 'penitent Marina Magdalene',
    },
    year: '1565',
    imagenum: '77',
  },
  {
    author: {
      ru: 'веласкес',
      en: 'velasquez',
    },
    picture: {
      ru: 'Инфанта Маргарита',
      en: 'infanta Margarita',
    },
    year: '1654',
    imagenum: '78',
  },
  {
    author: {
      ru: 'тициан',
      en: 'titian',
    },
    picture: {
      ru: 'Динарий Кесаря',
      en: 'denarius Caesar',
    },
    year: '1516',
    imagenum: '79',
  },
  {
    author: {
      ru: 'карл Брюллов',
      en: 'karl Bryullov',
    },
    picture: {
      ru: 'Всадница',
      en: 'horsewoman',
    },
    year: '1832',
    imagenum: '80',
  },
  {
    author: {
      ru: 'василий Верещагин',
      en: 'vasily Vereshchagin',
    },
    picture: {
      ru: 'Апофеоз войны',
      en: 'the Apotheosis of War',
    },
    year: '1817',
    imagenum: '81',
  },
  {
    author: {
      ru: 'леонардо да Винчи',
      en: 'leonardo da Vinci',
    },
    picture: {
      ru: 'Благовещение',
      en: 'annunciation',
    },
    year: '1475',
    imagenum: '82',
  },
  {
    author: {
      ru: 'алексей Саврасов',
      en: 'alexey Savrasov',
    },
    picture: {
      ru: 'Грачи прилетели',
      en: 'the Rooks Have Arrived',
    },
    year: '1871',
    imagenum: '83',
  },
  {
    author: {
      ru: 'тициан',
      en: 'titian',
    },
    picture: {
      ru: 'Любовь земная и Любовь небесная',
      en: 'earthly Love and Heavenly Love',
    },
    year: '1516',
    imagenum: '84',
  },
  {
    author: {
      ru: 'жан Батист Грёз',
      en: 'jean Baptiste Greuze',
    },
    picture: {
      ru: 'Деревенская помолвка',
      en: 'villageengagement',
    },
    year: '1761',
    imagenum: '85',
  },
  {
    author: {
      ru: 'пабло Пикассо',
      en: 'pablo Picasso',
    },
    picture: {
      ru: 'Авиньонские девицы',
      en: 'the girls of Avignon',
    },
    year: '1907',
    imagenum: '86',
  },
  {
    author: {
      ru: 'илья Репин',
      en: 'ilya Repin',
    },
    picture: {
      ru: 'Бурлаки на Волге',
      en: 'barge haulers on the Volga',
    },
    year: '1873',
    imagenum: '87',
  },
  {
    author: {
      ru: 'михаил Нестеров',
      en: 'mikhail Nesterov',
    },
    picture: {
      ru: 'Видение отроку Варфоломею',
      en: 'vision to the youth Bartholomew',
    },
    year: '1890',
    imagenum: '88',
  },
  {
    author: {
      ru: 'рафаэль',
      en: 'raphael',
    },
    picture: {
      ru: 'Мадонна Бельведерская',
      en: 'madonna of the Belvedere',
    },
    year: '1506',
    imagenum: '89',
  },
  {
    author: {
      ru: 'василий тропинин',
      en: 'vasily tropinin',
    },
    picture: {
      ru: 'Девушка с горшком роз',
      en: 'girl with a pot of roses',
    },
    year: '1850',
    imagenum: '90',
  },
  {
    author: {
      ru: 'караваджо',
      en: 'caravaggio',
    },
    picture: {
      ru: 'Лютнист',
      en: 'lute player',
    },
    year: '1596',
    imagenum: '91',
  },
  {
    author: {
      ru: 'василий Перов',
      en: 'vasily Perov',
    },
    picture: {
      ru: 'Охотники на привале',
      en: 'hunters at rest',
    },
    year: '1871',
    imagenum: '92',
  },
  {
    author: {
      ru: 'леонардо да Винчи',
      en: 'leonardo da Vinci',
    },
    picture: {
      ru: 'Тайная вечеря',
      en: 'the Last Supper',
    },
    year: '1498',
    imagenum: '93',
  },
  {
    author: {
      ru: 'жан Батист Грёз',
      en: 'jean Baptiste Greuze',
    },
    picture: {
      ru: 'Избалованное дитя',
      en: 'spoiled child',
    },
    year: '1765',
    imagenum: '94',
  },
  {
    author: {
      ru: 'адольф Вильям Бугро',
      en: 'adolphe William Bouguereau',
    },
    picture: {
      ru: 'Волна',
      en: 'wave',
    },
    year: '1896',
    imagenum: '95',
  },
  {
    author: {
      ru: 'кузьма Петров-Водкин',
      en: 'kuzma Petrov-Vodkin',
    },
    picture: {
      ru: 'Купание красного коня',
      en: 'bathing a red horse',
    },
    year: '1912',
    imagenum: '96',
  },
  {
    author: {
      ru: 'густав Климт',
      en: 'gustav Klimt',
    },
    picture: {
      ru: 'Поцелуй',
      en: 'kiss',
    },
    year: '1908',
    imagenum: '97',
  },
  {
    author: {
      ru: 'иван Шишкин',
      en: 'ivan Shishkin',
    },
    picture: {
      ru: 'Рожь',
      en: 'rye',
    },
    year: '1878',
    imagenum: '98',
  },
  {
    author: {
      ru: 'жан-Леон Жером',
      en: 'jean-Leon Gerome',
    },
    picture: {
      ru: 'Бой гладиаторов',
      en: 'fight of gladiators',
    },
    year: '1872',
    imagenum: '99',
  },
  {
    author: {
      ru: 'василий Суриков',
      en: 'vasily Surikov',
    },
    picture: {
      ru: 'Боярыня Морозова',
      en: 'boyarynya Morozova',
    },
    year: '1887',
    imagenum: '100',
  },
  {
    author: {
      ru: 'исаак Левитан',
      en: 'isaac Levitan',
    },
    picture: {
      ru: 'Над вечным покоем',
      en: 'over eternal rest',
    },
    year: '1894',
    imagenum: '101',
  },
  {
    author: {
      ru: 'гейнсборо',
      en: 'gainsborough',
    },
    picture: {
      ru: 'Дама в голубом',
      en: 'lady in blue',
    },
    year: '1780',
    imagenum: '102',
  },
  {
    author: {
      ru: 'алексей Венецианов',
      en: 'alexey Venetsianov',
    },
    picture: {
      ru: 'На пашне. Весна',
      en: 'on arable land. Spring',
    },
    year: '1820',
    imagenum: '103',
  },
  {
    author: {
      ru: 'тициан',
      en: 'titian',
    },
    picture: {
      ru: 'Саломея',
      en: 'salome',
    },
    year: '1515',
    imagenum: '104',
  },
  {
    author: {
      ru: 'василий Кандинский',
      en: 'wassily Kandinsky',
    },
    picture: {
      ru: 'Композиция VIII',
      en: 'composition VIII',
    },
    year: '1923',
    imagenum: '105',
  },
  {
    author: {
      ru: 'василий Поленов',
      en: 'vasily Polenov',
    },
    picture: {
      ru: 'В парке',
      en: 'in the park',
    },
    year: '1874',
    imagenum: '106',
  },
  {
    author: {
      ru: 'луи Лагрене',
      en: 'louis Lagrenet',
    },
    picture: {
      ru: 'Марс и Венера',
      en: 'mars and Venus',
    },
    year: '1770',
    imagenum: '107',
  },
  {
    author: {
      ru: 'сальвадор Дали',
      en: 'salvador Dali',
    },
    picture: {
      ru: 'Сон, вызванный полётом пчелы вокруг граната, за секунду до пробуждения',
      en: 'a dream caused by the flight of a bee around a pomegranate, a second before waking up',
    },
    year: '1944',
    imagenum: '108',
  },
  {
    author: {
      ru: 'ян Вермеер',
      en: 'jan Vermeer',
    },
    picture: {
      ru: 'Девушка с жемчужной серёжкой',
      en: 'girl with a pearl earring',
    },
    year: '1665',
    imagenum: '109',
  },
  {
    author: {
      ru: 'анри Руссо',
      en: 'henri Rousseau',
    },
    picture: {
      ru: 'Спящая цыганка',
      en: 'sleeping gypsy',
    },
    year: '1897',
    imagenum: '110',
  },
  {
    author: {
      ru: 'василий Поленов',
      en: 'vasily Polenov',
    },
    picture: {
      ru: 'Переправа через реку',
      en: 'crossing the river',
    },
    year: '1872',
    imagenum: '111',
  },
  {
    author: {
      ru: 'эдвард Мунк',
      en: 'edvard Munch',
    },
    picture: {
      ru: 'Крик',
      en: 'scream',
    },
    year: '1893',
    imagenum: '112',
  },
  {
    author: {
      ru: 'карл Брюллов',
      en: 'karl Bryullov',
    },
    picture: {
      ru: 'Последний день Помпеи',
      en: 'the last day of Pompeii',
    },
    year: '1833',
    imagenum: '113',
  },
  {
    author: {
      ru: 'илья Репин',
      en: 'ilya Repin',
    },
    picture: {
      ru: 'Летний пейзаж',
      en: 'summer landscape',
    },
    year: '1879',
    imagenum: '114',
  },
  {
    author: {
      ru: 'ян Вермеер',
      en: 'jan Vermeer',
    },
    picture: {
      ru: 'Молочница',
      en: 'thrush',
    },
    year: '1660',
    imagenum: '115',
  },
  {
    author: {
      ru: 'иван Айвазовский',
      en: 'ivan Aivazovsky',
    },
    picture: {
      ru: 'Девятый вал',
      en: 'the Ninth Wave',
    },
    year: '1850',
    imagenum: '116',
  },
  {
    author: {
      ru: 'винсент ван Гог',
      en: 'vincent van Gogh',
    },
    picture: {
      ru: 'Подсолнухи',
      en: 'sunflowers',
    },
    year: '1888',
    imagenum: '117',
  },
  {
    author: {
      ru: 'валентин Серов',
      en: 'valentin Serov',
    },
    picture: {
      ru: 'Девочка с персиками',
      en: 'girl with peaches',
    },
    year: '1887',
    imagenum: '118',
  },
  {
    author: {
      ru: 'караваджо',
      en: 'caravaggio',
    },
    picture: {
      ru: 'Обращение Савла',
      en: 'conversion of Saul',
    },
    year: '1601',
    imagenum: '119',
  },
  {
    author: {
      ru: 'альбрехт Дюрер',
      en: 'albrecht Durer',
    },
    picture: {
      ru: 'Праздник венков из роз',
      en: 'rose Wreath Festival',
    },
    year: '1506',
    imagenum: '120',
  },
  {
    author: {
      ru: 'эль Греко',
      en: 'el greco',
    },
    picture: {
      ru: 'Изгнание торгующих из храма',
      en: 'the expulsion of the merchants from the temple',
    },
    year: '1600',
    imagenum: '121',
  },
  {
    author: {
      ru: 'илья Репин',
      en: 'ilya Repin',
    },
    picture: {
      ru: 'Приготовление к экзамену',
      en: 'preparing for the exam',
    },
    year: '1864',
    imagenum: '122',
  },
  {
    author: {
      ru: 'исаак Левитан',
      en: 'isaac Levitan',
    },
    picture: {
      ru: 'Март',
      en: 'march',
    },
    year: '1895',
    imagenum: '123',
  },
  {
    author: {
      ru: 'адольф Вильям Бугро',
      en: 'adolphe William Bouguereau',
    },
    picture: {
      ru: 'Девушка и Амур',
      en: 'girl and Cupid',
    },
    year: '1880',
    imagenum: '124',
  },
  {
    author: {
      ru: 'леонардо да Винчи',
      en: 'leonardo da Vinci',
    },
    picture: {
      ru: 'Мадонна Литта',
      en: 'madonna Litta',
    },
    year: '1491',
    imagenum: '125',
  },
  {
    author: {
      ru: 'казимир Малевич',
      en: 'kazimir Malevich',
    },
    picture: {
      ru: 'Черный квадрат',
      en: 'black square',
    },
    year: '1915',
    imagenum: '126',
  },
  {
    author: {
      ru: 'эль Греко',
      en: 'el greco',
    },
    picture: {
      ru: 'Апостолы Петр и Павел',
      en: 'apostles Peter and Paul',
    },
    year: '1592',
    imagenum: '127',
  },
  {
    author: {
      ru: 'виктор Васнецов',
      en: 'viktor Vasnetsov',
    },
    picture: {
      ru: 'Витязь на распутье',
      en: 'a knight at the Crossroads',
    },
    year: '1878',
    imagenum: '128',
  },
  {
    author: {
      ru: 'константин Маковский',
      en: 'konstantin Makovsky',
    },
    picture: {
      ru: 'Боярский свадебный пир',
      en: 'boyarsky wedding feast',
    },
    year: '1883',
    imagenum: '129',
  },
  {
    author: {
      ru: 'эжен Делакруа',
      en: 'eugene Delacroix',
    },
    picture: {
      ru: 'Свобода, ведущая народ',
      en: 'freedom leading the people',
    },
    year: '1830',
    imagenum: '130',
  },
  {
    author: {
      ru: 'василий Поленов',
      en: 'vasily Polenov',
    },
    picture: {
      ru: 'Бабушкин сад',
      en: "grandma's Garden",
    },
    year: '1878',
    imagenum: '131',
  },
  {
    author: {
      ru: 'анри Матисс',
      en: 'henri Matisse',
    },
    picture: {
      ru: 'Семейный портрет',
      en: 'family portrait',
    },
    year: '1911',
    imagenum: '132',
  },
  {
    author: {
      ru: 'константин Маковский',
      en: 'konstantin Makovsky',
    },
    picture: {
      ru: 'Гадание',
      en: 'fortune telling',
    },
    year: '1890',
    imagenum: '133',
  },
  {
    author: {
      ru: 'пьер Огюст Ренуар',
      en: 'pierre Auguste Renoir',
    },
    picture: {
      ru: 'Мост в Шату',
      en: 'bridge to Shatu',
    },
    year: '1875',
    imagenum: '134',
  },
  {
    author: {
      ru: 'сандро Боттичелли',
      en: 'sandro Botticelli',
    },
    picture: {
      ru: 'Весна',
      en: 'spring',
    },
    year: '1482',
    imagenum: '135',
  },
  {
    author: {
      ru: 'пьер Огюст Ренуар',
      en: 'pierre Auguste Renoir',
    },
    picture: {
      ru: 'Зонтики',
      en: 'umbrellas',
    },
    year: '1886',
    imagenum: '136',
  },
  {
    author: {
      ru: 'гюстав Курбе',
      en: 'gustave Courbet',
    },
    picture: {
      ru: 'Мастерская художника',
      en: 'workshop of the artist',
    },
    year: '1855',
    imagenum: '137',
  },
  {
    author: {
      ru: 'василий Поленов',
      en: 'vasily Polenov',
    },
    picture: {
      ru: 'Деревня Окулова гора',
      en: 'village Okulova Gora',
    },
    year: '1860',
    imagenum: '138',
  },
  {
    author: {
      ru: 'константин Маковский',
      en: 'konstantin Makovsky',
    },
    picture: {
      ru: 'Перемещение ковра Мухаммеда из Мекки в Каир',
      en: 'moving the carpet of Muhammad from Mecca to Cairo',
    },
    year: '1875',
    imagenum: '139',
  },
  {
    author: {
      ru: 'пьер Огюст Ренуар',
      en: 'pierre Auguste Renoir',
    },
    picture: {
      ru: 'Бал в Мулен де ла Галетт',
      en: 'ball at the Moulin de la Galette',
    },
    year: '1876',
    imagenum: '140',
  },
  {
    author: {
      ru: 'иван Крамской',
      en: 'ivan Kramskoy',
    },
    picture: {
      ru: 'Неизвестная',
      en: 'unknown',
    },
    year: '1883',
    imagenum: '141',
  },
  {
    author: {
      ru: 'веласкес',
      en: 'velasquez',
    },
    picture: {
      ru: 'Кузница вулкана',
      en: 'forge of the volcano',
    },
    year: '1630',
    imagenum: '142',
  },
  {
    author: {
      ru: 'илья Репин',
      en: 'ilya Repin',
    },
    picture: {
      ru: 'Запорожцы',
      en: 'cossacks',
    },
    year: '1891',
    imagenum: '143',
  },
  {
    author: {
      ru: 'рафаэль',
      en: 'raphael',
    },
    picture: {
      ru: 'Дама с единорогом',
      en: 'lady with a unicorn',
    },
    year: '1506',
    imagenum: '144',
  },
  {
    author: {
      ru: 'александр Иванов',
      en: 'alexander Ivanov',
    },
    picture: {
      ru: 'Явление Христа народу',
      en: 'the appearance of Christ to the people',
    },
    year: '1857',
    imagenum: '145',
  },
  {
    author: {
      ru: 'эдуард Мане',
      en: 'edouard Manet',
    },
    picture: {
      ru: 'Женщина с кувшином',
      en: 'woman with a jug',
    },
    year: '1858',
    imagenum: '146',
  },
  {
    author: {
      ru: 'тициан',
      en: 'titian',
    },
    picture: {
      ru: 'Конный портрет Карла V',
      en: 'equestrian portrait of Charles V',
    },
    year: '1548',
    imagenum: '147',
  },
  {
    author: {
      ru: 'пьер Огюст Ренуар',
      en: 'pierre Auguste Renoir',
    },
    picture: {
      ru: 'Завтрак гребцов',
      en: 'breakfast of the rowers',
    },
    year: '1881',
    imagenum: '148',
  },
  {
    author: {
      ru: 'карл Брюллов',
      en: 'karl Bryullov',
    },
    picture: {
      ru: 'Итальянский полдень',
      en: 'italian noon',
    },
    year: '1827',
    imagenum: '149',
  },
  {
    author: {
      ru: 'виктор Васнецов',
      en: 'viktor Vasnetsov',
    },
    picture: {
      ru: 'Царь Иван Васильевич Грозный',
      en: 'tsar Ivan Vasilyevich the Terrible',
    },
    year: '1896',
    imagenum: '150',
  },
  {
    author: {
      ru: 'питер Брейгель',
      en: 'pieter Bruegel',
    },
    picture: {
      ru: 'Охотники на снегу',
      en: 'hunters in the Snow',
    },
    year: '1565',
    imagenum: '151',
  },
  {
    author: {
      ru: 'виктор Васнецов',
      en: 'viktor Vasnetsov',
    },
    picture: {
      ru: 'Ковер-самолёт',
      en: 'flying carpet',
    },
    year: '1880',
    imagenum: '152',
  },
  {
    author: {
      ru: 'марк Шагал',
      en: 'marc Chagall',
    },
    picture: {
      ru: 'Я и деревня',
      en: 'me and the village',
    },
    year: '1911',
    imagenum: '153',
  },
  {
    author: {
      ru: 'леонардо да Винчи',
      en: 'leonardo da Vinci',
    },
    picture: {
      ru: 'Мона Лиза',
      en: 'mona Lisa',
    },
    year: '1505',
    imagenum: '154',
  },
  {
    author: {
      ru: 'франческо Баккьякка',
      en: 'francesco Bacchiacca',
    },
    picture: {
      ru: 'Мадонна с младенцем',
      en: 'madonna and Child',
    },
    year: '1520',
    imagenum: '155',
  },
  {
    author: {
      ru: 'жак-Луи Давид',
      en: 'jacques-Louis David',
    },
    picture: {
      ru: 'Клятва Горациев',
      en: 'oath of the Horace',
    },
    year: '1784',
    imagenum: '156',
  },
  {
    author: {
      ru: 'альбрехт Дюрер',
      en: 'albrecht Durer',
    },
    picture: {
      ru: 'Адам и Ева',
      en: 'adam and Eve',
    },
    year: '1507',
    imagenum: '157',
  },
  {
    author: {
      ru: 'бартоломео Мурильо',
      en: 'bartolomeo Murillo',
    },
    picture: {
      ru: 'Явление и дар Богородицы',
      en: 'the appearance and gift of the Mother of God',
    },
    year: '1655',
    imagenum: '158',
  },
  {
    author: {
      ru: 'василий Перов',
      en: 'vasily Perov',
    },
    picture: {
      ru: 'Птицелов',
      en: 'birds',
    },
    year: '1870',
    imagenum: '159',
  },
  {
    author: {
      ru: 'караваджо',
      en: 'caravaggio',
    },
    picture: {
      ru: 'Отдых на пути в Египет',
      en: 'rest on the Flight to Egypt',
    },
    year: '1596',
    imagenum: '160',
  },
  {
    author: {
      ru: 'франциско Гоя',
      en: 'francisco Goya',
    },
    picture: {
      ru: 'Расстрел повстанцев',
      en: 'shooting of the rebels',
    },
    year: '1808',
    imagenum: '161',
  },
  {
    author: {
      ru: 'рафаэль',
      en: 'raphael',
    },
    picture: {
      ru: 'Триумф Галатеи',
      en: 'triumph of Galatea',
    },
    year: '1512',
    imagenum: '162',
  },
  {
    author: {
      ru: 'михаил Врубель',
      en: 'mikhail Vrubel',
    },
    picture: {
      ru: 'Демон сидящий',
      en: 'demon sitting',
    },
    year: '1890',
    imagenum: '163',
  },
  {
    author: {
      ru: 'винсент ван Гог',
      en: 'vincent van Gogh',
    },
    picture: {
      ru: 'Ирисы',
      en: 'irises',
    },
    year: '1889',
    imagenum: '164',
  },
  {
    author: {
      ru: 'поль Деларош',
      en: 'paul Delaroche',
    },
    picture: {
      ru: 'Казнь Джейн Грей',
      en: 'execution of Jane Gray',
    },
    year: '1833',
    imagenum: '165',
  },
  {
    author: {
      ru: 'джон Констебл',
      en: 'john Constable',
    },
    picture: {
      ru: 'Вид на собор в Солсбери из епископского сада',
      en: 'view of the Cathedral in Salisbury from the episcopal garden',
    },
    year: '1823',
    imagenum: '166',
  },
  {
    author: {
      ru: 'винсент ван Гог',
      en: 'vincent van Gogh',
    },
    picture: {
      ru: 'Звёздная ночь',
      en: 'starry Night',
    },
    year: '1889',
    imagenum: '167',
  },
  {
    author: {
      ru: 'франсуа Буше',
      en: 'francois Boucher',
    },
    picture: {
      ru: 'Четыре сезона - Весна',
      en: 'four seasons - Spring',
    },
    year: '1755',
    imagenum: '168',
  },
  {
    author: {
      ru: 'рафаэль',
      en: 'raphael',
    },
    picture: {
      ru: 'Мадонна с розой',
      en: 'madonna with a Rose',
    },
    year: '1518',
    imagenum: '169',
  },
  {
    author: {
      ru: 'василий Тропинин',
      en: 'vasily Tropinin',
    },
    picture: {
      ru: 'Кружевница',
      en: 'lacemaker',
    },
    year: '1823',
    imagenum: '170',
  },
  {
    author: {
      ru: 'рембрандт',
      en: 'rembrandt',
    },
    picture: {
      ru: 'Пир Вальтасара',
      en: 'feast of Valthasar',
    },
    year: '1635',
    imagenum: '171',
  },
  {
    author: {
      ru: 'василий Суриков',
      en: 'vasily Surikov',
    },
    picture: {
      ru: 'Переход Суворова через Альпы',
      en: 'the passage of Suvorov through the Alps',
    },
    year: '1899',
    imagenum: '172',
  },
  {
    author: {
      ru: 'исаак Левитан',
      en: 'isaac Levitan',
    },
    picture: {
      ru: 'Золотая осень',
      en: 'golden Autumn',
    },
    year: '1895',
    imagenum: '173',
  },
  {
    author: {
      ru: 'архип Куинджи',
      en: 'arkhip Kuindzhi',
    },
    picture: {
      ru: 'На острове Валааме',
      en: 'on the island of Valaam',
    },
    year: '1873',
    imagenum: '174',
  },
  {
    author: {
      ru: 'веласкес',
      en: 'velasquez',
    },
    picture: {
      ru: 'Сдача Бреды',
      en: 'delivery of Delirium',
    },
    year: '1635',
    imagenum: '175',
  },
  {
    author: {
      ru: 'илья Репин',
      en: 'ilya Repin',
    },
    picture: {
      ru: 'Не ждали',
      en: "didn't expect",
    },
    year: '1888',
    imagenum: '176',
  },
  {
    author: {
      ru: 'франсуа Буше',
      en: 'francois Boucher',
    },
    picture: {
      ru: 'Купание Дианы',
      en: 'bathing Diana',
    },
    year: '1742',
    imagenum: '177',
  },
  {
    author: {
      ru: 'марианна Верёвкина',
      en: 'marianna Verevkina',
    },
    picture: {
      ru: 'Муравейник',
      en: 'anthill',
    },
    year: '1916',
    imagenum: '178',
  },
  {
    author: {
      ru: 'пьер Огюст Ренуар',
      en: 'pierre Auguste Renoir',
    },
    picture: {
      ru: 'Портрет Жанны Самари',
      en: 'portrait of Jeanne Samary',
    },
    year: '1877',
    imagenum: '179',
  },
  {
    author: {
      ru: 'илья Репин',
      en: 'ilya Repin',
    },
    picture: {
      ru: 'Садко',
      en: 'sadko',
    },
    year: '1876',
    imagenum: '180',
  },
  {
    author: {
      ru: 'архип Куинджи',
      en: 'arkhip Kuindzhi',
    },
    picture: {
      ru: 'Лунная ночь на Днепре',
      en: 'moonlit night on the Dnieper',
    },
    year: '1880',
    imagenum: '181',
  },
  {
    author: {
      ru: 'веласкес',
      en: 'velasquez',
    },
    picture: {
      ru: 'Поклонение волхвов',
      en: 'adoration of the Magi',
    },
    year: '1619',
    imagenum: '182',
  },
  {
    author: {
      ru: 'николай Богданов-Бельский',
      en: 'nikolay Bogdanov-Belsky',
    },
    picture: {
      ru: 'У дверей школы',
      en: 'at the door of the school',
    },
    year: '1897',
    imagenum: '183',
  },
  {
    author: {
      ru: 'иероним Босх',
      en: 'hieronymus Bosch',
    },
    picture: {
      ru: 'Сад земных наслаждений',
      en: 'the Garden of Earthly Delights',
    },
    year: '1510',
    imagenum: '184',
  },
  {
    author: {
      ru: 'корреджо',
      en: 'correggio',
    },
    picture: {
      ru: 'Даная',
      en: 'danae',
    },
    year: '1530',
    imagenum: '185',
  },
  {
    author: {
      ru: 'питер Пауль Рубенс',
      en: 'peter Paul Rubens',
    },
    picture: {
      ru: 'Похищение дочерей Левкиппа',
      en: 'abduction of the daughters of Leucippus',
    },
    year: '1618',
    imagenum: '186',
  },
  {
    author: {
      ru: 'жан Энгр',
      en: 'jean Ingres',
    },
    picture: {
      ru: 'Большая одалиска',
      en: 'big odalisque',
    },
    year: '1814',
    imagenum: '187',
  },
  {
    author: {
      ru: 'рафаэль',
      en: 'raphael',
    },
    picture: {
      ru: 'Сикстинская Мадонна',
      en: 'sistine Madonna',
    },
    year: '1520',
    imagenum: '188',
  },
  {
    author: {
      ru: 'рембрандт',
      en: 'rembrandt',
    },
    picture: {
      ru: 'Похищение Европы',
      en: 'the Abduction of Europa',
    },
    year: '1632',
    imagenum: '189',
  },
  {
    author: {
      ru: 'питер Пауль Рубенс',
      en: 'peter Paul Rubens',
    },
    picture: {
      ru: 'Похищение Орфии Бореем',
      en: 'the abduction of Orphia by Boreas',
    },
    year: '1615',
    imagenum: '190',
  },
  {
    author: {
      ru: 'архип Куинджи',
      en: 'arkhip Kuindzhi',
    },
    picture: {
      ru: 'Украинская ночь',
      en: 'ukrainian night',
    },
    year: '1876',
    imagenum: '191',
  },
  {
    author: {
      ru: 'эдгар Дега',
      en: 'edgar Degas',
    },
    picture: {
      ru: 'Танцовщицы у станка',
      en: 'dancers at the barre',
    },
    year: '1877',
    imagenum: '192',
  },
  {
    author: {
      ru: 'алексей Венецианов',
      en: 'alexey Venetsianov',
    },
    picture: {
      ru: 'На жатве. Лето',
      en: 'at the harvest. Summer',
    },
    year: '1827',
    imagenum: '193',
  },
  {
    author: {
      ru: 'пьер Огюст Ренуар',
      en: 'pierre Auguste Renoir',
    },
    picture: {
      ru: 'Две сестры',
      en: 'two sisters',
    },
    year: '1881',
    imagenum: '194',
  },
  {
    author: {
      ru: 'рембрандт',
      en: 'rembrandt',
    },
    picture: {
      ru: 'Ночной дозор',
      en: 'night Watch',
    },
    year: '1642',
    imagenum: '195',
  },
  {
    author: {
      ru: 'эдуар Мане',
      en: 'edouard Manet',
    },
    picture: {
      ru: 'Бар в «Фоли-Бержер»',
      en: 'bar at the Folies Bergère',
    },
    year: '1882',
    imagenum: '196',
  },
  {
    author: {
      ru: 'никола Пуссен',
      en: 'nicolas Poussin',
    },
    picture: {
      ru: 'Пейзаж с Полифемом',
      en: 'landscape with Polyphemus',
    },
    year: '1649',
    imagenum: '197',
  },
  {
    author: {
      ru: 'питер Брейгель',
      en: 'pieter Bruegel',
    },
    picture: {
      ru: 'Притча о слепых',
      en: 'the parable of the blind',
    },
    year: '1568',
    imagenum: '198',
  },
  {
    author: {
      ru: 'виктор Васнецов',
      en: 'viktor Vasnetsov',
    },
    picture: {
      ru: 'Иван-царевич на Сером Волке',
      en: 'ivan Tsarevich on the Gray Wolf',
    },
    year: '1888',
    imagenum: '199',
  },
  {
    author: {
      ru: 'сандро Боттичелли',
      en: 'sandro Botticelli',
    },
    picture: {
      ru: 'Рождение Венеры',
      en: 'the Birth of Venus',
    },
    year: '1486',
    imagenum: '200',
  },
  {
    author: {
      ru: 'леонардо да Винчи',
      en: 'leonardo da Vinci',
    },
    picture: {
      ru: 'Мадонна в скалах',
      en: 'madonna of the Rocks',
    },
    year: '1486',
    imagenum: '201',
  },
  {
    author: {
      ru: 'аксели Галлен-Каллела',
      en: 'axeli Gallen-Kallela',
    },
    picture: {
      ru: 'Любовники',
      en: 'lovers',
    },
    year: '1916',
    imagenum: '202',
  },
  {
    author: {
      ru: 'винсент Ван Гог',
      en: 'vincent Van Gogh',
    },
    picture: {
      ru: 'Автопортрет с перевязанным ухом',
      en: 'self-portrait with bandaged ear',
    },
    year: '1889',
    imagenum: '203',
  },
  {
    author: {
      ru: 'клод Моне',
      en: 'claude Monet',
    },
    picture: {
      ru: 'Впечатление. Восходящее солнце',
      en: 'impression. Rising Sun',
    },
    year: '1882',
    imagenum: '204',
  },
  {
    author: {
      ru: 'рембрандт',
      en: 'rembrandt',
    },
    picture: {
      ru: 'Возвращение блудного сына',
      en: 'return of the prodigal son',
    },
    year: '1662',
    imagenum: '205',
  },
  {
    author: {
      ru: 'караваджо',
      en: 'caravaggio',
    },
    picture: {
      ru: 'Больной вакх',
      en: 'sick Bacchus',
    },
    year: '1593',
    imagenum: '206',
  },
  {
    author: {
      ru: 'иван Айвазовский',
      en: 'ivan Aivazovsky',
    },
    picture: {
      ru: 'Лунная дорожка',
      en: 'moon path',
    },
    year: '1886',
    imagenum: '207',
  },
  {
    author: {
      ru: 'винсент Ван Гог',
      en: 'vincent Van Gogh',
    },
    picture: {
      ru: 'Пшеничное поле с кипарисами',
      en: 'wheat field with cypresses',
    },
    year: '1889',
    imagenum: '208',
  },
  {
    author: {
      ru: 'аксели Галлен-Каллела',
      en: 'axeli Gallen-Kallela',
    },
    picture: {
      ru: 'Мальчик и ворона',
      en: 'boy and Crow',
    },
    year: '1884',
    imagenum: '209',
  },
  {
    author: {
      ru: 'ян Вермеер',
      en: 'jan Vermeer',
    },
    picture: {
      ru: 'Астроном',
      en: 'astronomer',
    },
    year: '1668',
    imagenum: '210',
  },
  {
    author: {
      ru: 'питер Пауль Рубенс',
      en: 'peter Paul Rubens',
    },
    picture: {
      ru: 'Союз Земли и Воды',
      en: 'union of Earth and Water',
    },
    year: '1618',
    imagenum: '211',
  },
  {
    author: {
      ru: 'клод Моне',
      en: 'claude Monet',
    },
    picture: {
      ru: 'Стог сена в Живерни',
      en: 'haystack at Giverny',
    },
    year: '1886',
    imagenum: '212',
  },
  {
    author: {
      ru: 'жан Фрагонар',
      en: 'jean Fragonard',
    },
    picture: {
      ru: 'Задвижка',
      en: 'gate valve',
    },
    year: '1777',
    imagenum: '213',
  },
  {
    author: {
      ru: 'марианна Верёвкина',
      en: 'marianna Verevkina',
    },
    picture: {
      ru: 'Осень, школа',
      en: 'autumn, school',
    },
    year: '1907',
    imagenum: '214',
  },
  {
    author: {
      ru: 'винсент Ван Гог',
      en: 'vincent Van Gogh',
    },
    picture: {
      ru: 'Ночное кафе в Арле',
      en: 'night cafe in Arles',
    },
    year: '1888',
    imagenum: '215',
  },
  {
    author: {
      ru: 'клод Моне',
      en: 'claude Monet',
    },
    picture: {
      ru: 'Пруд с кувшинками',
      en: 'a pond with water lilies',
    },
    year: '1899',
    imagenum: '216',
  },
  {
    author: {
      ru: 'иван Айвазовский',
      en: 'ivan Aivazovsky',
    },
    picture: {
      ru: 'Буря',
      en: 'storm',
    },
    year: '1868',
    imagenum: '217',
  },
  {
    author: {
      ru: 'ян Вермеер',
      en: 'jan Vermeer',
    },
    picture: {
      ru: 'Кружевница',
      en: 'lacemaker',
    },
    year: '1671',
    imagenum: '218',
  },
  {
    author: {
      ru: 'карл Брюллов',
      en: 'karl Bryullov',
    },
    picture: {
      ru: 'Автопортрет',
      en: 'self-portrait',
    },
    year: '1848',
    imagenum: '219',
  },
  {
    author: {
      ru: 'питер Брейгель',
      en: 'pieter Bruegel',
    },
    picture: {
      ru: 'Вавилонская башня',
      en: 'the Tower of Babel',
    },
    year: '1563',
    imagenum: '220',
  },
  {
    author: {
      ru: 'поль Гоген',
      en: 'paul Gauguin',
    },
    picture: {
      ru: 'Кафе в Арле',
      en: 'cafe in Arles',
    },
    year: '1888',
    imagenum: '221',
  },
  {
    author: {
      ru: 'иван Шишкин',
      en: 'ivan Shishkin',
    },
    picture: {
      ru: 'Сосновый бор',
      en: 'pine Forest',
    },
    year: '1895',
    imagenum: '222',
  },
  {
    author: {
      ru: 'клод Моне',
      en: 'claude Monet',
    },
    picture: {
      ru: 'Завтрак на траве',
      en: 'breakfast on the grass',
    },
    year: '1865',
    imagenum: '223',
  },
  {
    author: {
      ru: 'рафаэль',
      en: 'raphael',
    },
    picture: {
      ru: 'Святой Георгий и дракон',
      en: 'saint George and the dragon',
    },
    year: '1506',
    imagenum: '224',
  },
  {
    author: {
      ru: 'пабло Пикассо',
      en: 'pablo Picasso',
    },
    picture: {
      ru: 'Любительница абсента',
      en: 'absinthe Drinker',
    },
    year: '1901',
    imagenum: '225',
  },
  {
    author: {
      ru: 'эдгар Дега',
      en: 'edgar Degas',
    },
    picture: {
      ru: 'Перед репетицией',
      en: 'before rehearsal',
    },
    year: '1880',
    imagenum: '226',
  },
  {
    author: {
      ru: 'николай Рерих',
      en: 'nicholas Roerich',
    },
    picture: {
      ru: 'Помни!',
      en: 'remember!',
    },
    year: '1924',
    imagenum: '227',
  },
  {
    author: {
      ru: 'илья Репин',
      en: 'ilya Repin',
    },
    picture: {
      ru: 'Стрекоза',
      en: 'dragonfly',
    },
    year: '1884',
    imagenum: '228',
  },
  {
    author: {
      ru: 'клод Моне',
      en: 'claude Monet',
    },
    picture: {
      ru: 'Мост Ватерлоо, туман',
      en: 'waterloo Bridge, fog',
    },
    year: '1903',
    imagenum: '229',
  },
  {
    author: {
      ru: 'исаак Левитан',
      en: 'isaac Levitan',
    },
    picture: {
      ru: 'Весна – большая вода',
      en: 'spring is big water',
    },
    year: '1897',
    imagenum: '230',
  },
  {
    author: {
      ru: 'аксели Галлен-Каллела',
      en: 'axeli Gallen-Kallela',
    },
    picture: {
      ru: 'Первый урок',
      en: 'first lesson',
    },
    year: '1889',
    imagenum: '231',
  },
  {
    author: {
      ru: 'иван Айвазовский',
      en: 'ivan Aivazovsky',
    },
    picture: {
      ru: 'Буря на море',
      en: 'storm at sea',
    },
    year: '1873',
    imagenum: '232',
  },
  {
    author: {
      ru: 'эдгар Дега',
      en: 'edgar Degas',
    },
    picture: {
      ru: 'Балетный класс',
      en: 'ballet class',
    },
    year: '1874',
    imagenum: '233',
  },
  {
    author: {
      ru: 'николай Рерих',
      en: 'nicholas Roerich',
    },
    picture: {
      ru: 'Горная обитель',
      en: 'mountain abode',
    },
    year: '1933',
    imagenum: '234',
  },
  {
    author: {
      ru: 'леонардо да Винчи',
      en: 'leonardo da Vinci',
    },
    picture: {
      ru: 'Святая Анна с Мадонной',
      en: 'saint Anna with Madonna',
    },
    year: '1510',
    imagenum: '235',
  },
  {
    author: {
      ru: 'эль Греко',
      en: 'el greco',
    },
    picture: {
      ru: 'Мальчик, зажигающий свечу',
      en: 'boy lighting a candle',
    },
    year: '1572',
    imagenum: '236',
  },
  {
    author: {
      ru: 'пабло Пикассо',
      en: 'pablo Picasso',
    },
    picture: {
      ru: 'Дружба',
      en: 'friendship',
    },
    year: '1908',
    imagenum: '237',
  },
  {
    author: {
      ru: 'аксели Галлен-Каллела',
      en: 'axeli Gallen-Kallela',
    },
    picture: {
      ru: 'Девушка на ветру',
      en: 'girl in the Wind',
    },
    year: '1893',
    imagenum: '238',
  },
  {
    author: {
      ru: 'иван Айвазовский',
      en: 'ivan Aivazovsky',
    },
    picture: {
      ru: 'Волна',
      en: 'wave',
    },
    year: '1889',
    imagenum: '239',
  },
  {
    author: {
      ru: 'эжен Делакруа',
      en: 'eugene Delacroix',
    },
    picture: {
      ru: 'Автопортрет',
      en: 'self-portrait',
    },
    year: '1837',
    imagenum: '240',
  },
];

export default images;
