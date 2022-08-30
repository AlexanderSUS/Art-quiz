const images = [
  {
    author: {
      ru: 'Павел Федотов',
      en: 'Pavel Fedotov',
    },
    picture: {
      ru: 'Сватовство майора',
      en: "Major's matchmaking",
    },
    year: '1852',
    imageNum: '0',
  },
  {
    author: {
      ru: 'Эдгар Дега',
      en: 'Edgar Degas',
    },
    picture: {
      ru: 'Голубые танцовщицы',
      en: 'Blue dancers',
    },
    year: '1897',
    imageNum: '1',
  },
  {
    author: {
      ru: 'Веронезе',
      en: 'Veronese',
    },
    picture: {
      ru: 'Пир в доме Левия',
      en: "Feast at Levi's house",
    },
    year: '1563',
    imageNum: '2',
  },
  {
    author: {
      ru: 'Илья Репин',
      en: 'Ilya Repin',
    },
    picture: {
      ru: 'Иван Грозный и сын его Иван',
      en: 'Ivan the Terrible and his son Ivan',
    },
    year: '1885',
    imageNum: '3',
  },
  {
    author: {
      ru: 'Константин Маковский',
      en: 'Konstantin Makovsky',
    },
    picture: {
      ru: 'Портрет графини Софьи',
      en: 'Portrait of Countess Sophia',
    },
    year: '1890',
    imageNum: '4',
  },
  {
    author: {
      ru: 'Василий Перов',
      en: 'Vasily Perov',
    },
    picture: {
      ru: 'Приезд гувернантки в купеческий дом',
      en: 'Arrival of the governess to the merchant house',
    },
    year: '1866',
    imageNum: '5',
  },
  {
    author: {
      ru: 'Микеланджело',
    },
    picture: {
      ru: 'Сотворение Адама',
      en: 'Creation of Adam',
    },
    year: '1511',
    imageNum: '6',
  },
  {
    author: {
      ru: 'Пьер Огюст Ренуар',
      en: 'Pierre Auguste Renoir',
    },
    picture: {
      ru: 'Прогулка в Булонском лесу',
      en: 'Walk in the Bois de Boulogne',
    },
    year: '1873',
    imageNum: '7',
  },
  {
    author: {
      ru: 'Ян Вермеер',
      en: 'Jan Vermeer',
    },
    picture: {
      ru: 'Хозяйка и служанка',
      en: 'Mistress and maid',
    },
    year: '1667',
    imageNum: '8',
  },
  {
    author: {
      ru: 'Василий Поленов',
      en: 'Vasily Polenov',
    },
    picture: {
      ru: 'Московский дворик',
      en: 'Moscow courtyard',
    },
    year: '1877',
    imageNum: '9',
  },
  {
    author: {
      ru: 'Фёдор Васильев',
      en: 'Fedor Vasiliev',
    },
    picture: {
      ru: 'Мокрый луг',
      en: 'Wet meadow',
    },
    year: '1872',
    imageNum: '10',
  },
  {
    author: {
      ru: 'Илья Репин',
      en: 'Ilya Repin',
    },
    picture: {
      ru: 'Проводы новобранца',
      en: 'Seeing off the recruit',
    },
    year: '1879',
    imageNum: '11',
  },
  {
    author: {
      ru: 'Веронезе',
      en: 'Veronese',
    },
    picture: {
      ru: 'Марс и Венера',
      en: 'Mars and Venus',
    },
    year: '1560',
    imageNum: '12',
  },
  {
    author: {
      ru: 'Виктор Васнецов',
      en: 'Viktor Vasnetsov',
    },
    picture: {
      ru: 'Аленушка',
      en: 'Alyonushka',
    },
    year: '1881',
    imageNum: '13',
  },
  {
    author: {
      ru: 'Клод Лоррен',
      en: 'Claude Lorrain',
    },
    picture: {
      ru: 'Отплытие святой Урсулы',
      en: 'The departure of Saint Ursula',
    },
    year: '1614',
    imageNum: '14',
  },
  {
    author: {
      ru: 'Илья Репин',
      en: 'Ilya Repin',
    },
    picture: {
      ru: 'Вечорници',
      en: 'Vespers',
    },
    year: '1881',
    imageNum: '15',
  },
  {
    author: {
      ru: 'Жан Фрагонар',
      en: 'Jean Fragonard',
    },
    picture: {
      ru: 'Качели',
      en: 'Swing',
    },
    year: '1767',
    imageNum: '16',
  },
  {
    author: {
      ru: 'Архип Куинджи',
      en: 'Arkhip Kuindzhi',
    },
    picture: {
      ru: 'Берёзовая роща',
      en: 'Birch grove',
    },
    year: '1879',
    imageNum: '17',
  },
  {
    author: {
      ru: 'Пабло Пикассо',
      en: 'Pablo Picasso',
    },
    picture: {
      ru: 'Герника',
      en: 'Guernica',
    },
    year: '1937',
    imageNum: '18',
  },
  {
    author: {
      ru: 'Поль Гоген',
      en: 'Paul Gauguin',
    },
    picture: {
      ru: 'Откуда мы пришли? Кто мы? Куда мы идём?',
      en: 'Where did we come from? Who are we? Where are we going?',
    },
    year: '1898',
    imageNum: '19',
  },
  {
    author: {
      ru: 'Бартоломео Мурильо',
      en: 'Bartolomeo Murillo',
    },
    picture: {
      ru: 'Мадонна с четками',
      en: 'Madonna with a rosary',
    },
    year: '1655',
    imageNum: '20',
  },
  {
    author: {
      ru: 'Питер Брейгель',
      en: 'Pieter Bruegel',
    },
    picture: {
      ru: 'Фламандские пословицы',
      en: 'Flemish proverbs',
    },
    year: '1559',
    imageNum: '21',
  },
  {
    author: {
      ru: 'Ян ван Эйк',
      en: 'Jan van Eyck',
    },
    picture: {
      ru: 'Портрет четы Арнольфини',
      en: 'Portrait of the Arnolfini couple',
    },
    year: '1434',
    imageNum: '22',
  },
  {
    author: {
      ru: 'Питер Брейгель',
      en: 'Pieter Bruegel',
    },
    picture: {
      ru: 'Избиение младенцев',
      en: 'Beating up babies',
    },
    year: '1567',
    imageNum: '23',
  },
  {
    author: {
      ru: 'Константин Маковский',
      en: 'Konstantin Makovsky',
    },
    picture: {
      ru: 'Дети, бегущие от грозы',
      en: 'Children running from a thunderstorm',
    },
    year: '1872',
    imageNum: '24',
  },
  {
    author: {
      ru: 'Рембрандт',
      en: 'Rembrandt',
    },
    picture: {
      ru: 'Даная',
      en: 'Danae',
    },
    year: '1647',
    imageNum: '25',
  },
  {
    author: {
      ru: 'Рафаэль',
      en: 'Raphael',
    },
    picture: {
      ru: 'Мадонна в кресле',
      en: 'Madonna in the chair',
    },
    year: '1514',
    imageNum: '26',
  },
  {
    author: {
      ru: 'Василий Суриков',
      en: 'Vasily Surikov',
    },
    picture: {
      ru: 'Взятие снежного городка',
      en: 'Taking a snow town',
    },
    year: '1891',
    imageNum: '27',
  },
  {
    author: {
      ru: 'Иван Шишкин',
      en: 'Ivan Shishkin',
    },
    picture: {
      ru: 'Ручей в берёзовом лесу',
      en: 'A stream in a birch forest',
    },
    year: '1883',
    imageNum: '28',
  },
  {
    author: {
      ru: 'Василий Суриков',
      en: 'Vasily Surikov',
    },
    picture: {
      ru: 'Покорение Сибири Ермаком Тимофеевичем',
      en: 'The conquest of Siberia by Ermak Timofeevich',
    },
    year: '1895',
    imageNum: '29',
  },
  {
    author: {
      ru: 'Владимир Боровиковский',
      en: 'Vladimir Borovikovsky',
    },
    picture: {
      ru: 'Портрет Лопухиной',
      en: 'Portrait of Lopukhina',
    },
    year: '1797',
    imageNum: '30',
  },
  {
    author: {
      ru: 'Рене Магритт',
      en: 'Rene Magritte',
    },
    picture: {
      ru: 'Сын человеческий',
      en: 'Son of man',
    },
    year: '1964',
    imageNum: '31',
  },
  {
    author: {
      ru: 'Веласкес',
      en: 'Velasquez',
    },
    picture: {
      ru: 'Венера с зеркалом',
      en: 'Venus with a mirror',
    },
    year: '1651',
    imageNum: '32',
  },
  {
    author: {
      ru: 'Иван Богданов',
      en: 'Ivan Bogdanov',
    },
    picture: {
      ru: 'За расчётом',
      en: 'For the calculation',
    },
    year: '1890',
    imageNum: '33',
  },
  {
    author: {
      ru: 'Рембрандт',
      en: 'Rembrandt',
    },
    picture: {
      ru: 'Христос и грешница',
      en: 'Christ and the sinner',
    },
    year: '1644',
    imageNum: '34',
  },
  {
    author: {
      ru: 'Джон Уильям Уотерхаус',
      en: 'John William Waterhouse',
    },
    picture: {
      ru: 'Волшебница Шалот',
      en: 'Sorceress Shallot',
    },
    year: '1888',
    imageNum: '35',
  },
  {
    author: {
      ru: 'Пьер Огюст Ренуар',
      en: 'Pierre Auguste Renoir',
    },
    picture: {
      ru: 'Большие купальщицы',
      en: 'Big bathers',
    },
    year: '1887',
    imageNum: '36',
  },
  {
    author: {
      ru: 'Бартоломео Мурильо',
      en: 'Bartolomeo Murillo',
    },
    picture: {
      ru: 'Мальчик с собакой',
      en: 'Boy with a dog',
    },
    year: '1650',
    imageNum: '37',
  },
  {
    author: {
      ru: 'Василий Перов',
      en: 'Vasily Perov',
    },
    picture: {
      ru: 'Тройка',
      en: 'Three',
    },
    year: '1866',
    imageNum: '38',
  },
  {
    author: {
      ru: 'Николай Богданов-Бельский',
      en: 'Nikolay Bogdanov-Belsky',
    },
    picture: {
      ru: 'Устный счёт',
      en: 'Verbal invoice',
    },
    year: '1895',
    imageNum: '39',
  },
  {
    author: {
      ru: 'Виктор Васнецов',
      en: 'Viktor Vasnetsov',
    },
    picture: {
      ru: 'Три царевны подземного царства',
      en: 'Three princesses of the underworld',
    },
    year: '1884',
    imageNum: '40',
  },
  {
    author: {
      ru: 'Анри Матисс',
      en: 'Henri Matisse',
    },
    picture: {
      ru: 'Танец',
      en: 'Dance',
    },
    year: '1910',
    imageNum: '41',
  },
  {
    author: {
      ru: 'Эдвард Мунк',
      en: 'Edvard Munch',
    },
    picture: {
      ru: 'Мадонна',
      en: 'Madonna',
    },
    year: '1894',
    imageNum: '42',
  },
  {
    author: {
      ru: 'Марк Шагал',
      en: 'Marc Chagall',
    },
    picture: {
      ru: 'Прогулка',
      en: 'Walk',
    },
    year: '1918',
    imageNum: '43',
  },
  {
    author: {
      ru: 'Василий Перов',
      en: 'Vasily Perov',
    },
    picture: {
      ru: 'Сельский крестный ход на Пасхе',
      en: 'Rural procession at Easter',
    },
    year: '1861',
    imageNum: '44',
  },
  {
    author: {
      ru: 'Иероним Босх',
      en: 'Hieronymus Bosch',
    },
    picture: {
      ru: 'Страшный суд',
      en: 'The Last Judgment',
    },
    year: '1504',
    imageNum: '45',
  },
  {
    author: {
      ru: 'Карл Лемох',
      en: 'Karl Lemokh',
    },
    picture: {
      ru: 'Варька',
      en: 'Varka',
    },
    year: '1893',
    imageNum: '46',
  },
  {
    author: {
      ru: 'Жан Фрагонар',
      en: 'Jean Fragonard',
    },
    picture: {
      ru: 'Поцелуй украдкой',
      en: 'Secret kiss',
    },
    year: '1788',
    imageNum: '47',
  },
  {
    author: {
      ru: 'Франсуа Буше',
      en: 'Francois Boucher',
    },
    picture: {
      ru: 'Венера, утешающая Амура',
      en: 'Venus Consoling Cupid',
    },
    year: '1751',
    imageNum: '48',
  },
  {
    author: {
      ru: 'Иван Шишкин',
      en: 'Ivan Shishkin',
    },
    picture: {
      ru: 'Корабельная роща',
      en: 'Ship Grove',
    },
    year: '1898',
    imageNum: '49',
  },
  {
    author: {
      ru: 'Густав Климт',
      en: 'Gustav Klimt',
    },
    picture: {
      ru: 'Золотая Адель',
      en: 'Golden Adele',
    },
    year: '1907',
    imageNum: '50',
  },
  {
    author: {
      ru: 'Виктор Васнецов',
      en: 'Viktor Vasnetsov',
    },
    picture: {
      ru: 'Богатыри',
      en: 'Heroes',
    },
    year: '1898',
    imageNum: '51',
  },
  {
    author: {
      ru: 'Вильгельм фон Каульбах',
      en: 'Wilhelm von Kaulbach',
    },
    picture: {
      ru: 'Разрушение Иерусалима',
      en: 'Destruction of Jerusalem',
    },
    year: '1846',
    imageNum: '52',
  },
  {
    author: {
      ru: 'Веронезе',
      en: 'Veronese',
    },
    picture: {
      ru: 'Брак в Кане Галилейской',
      en: 'Marriage at Cana of Galilee',
    },
    year: '1562',
    imageNum: '53',
  },
  {
    author: {
      ru: 'Андрей Рублев',
      en: 'Andrey Rublev',
    },
    picture: {
      ru: 'Троица',
      en: 'Trinity',
    },
    year: '1411',
    imageNum: '54',
  },
  {
    author: {
      ru: 'Василий Суриков',
      en: 'Vasily Surikov',
    },
    picture: {
      ru: 'Утро стрелецкой казни',
      en: "Morning of the Strelets' execution",
    },
    year: '1881',
    imageNum: '55',
  },
  {
    author: {
      ru: 'Тициан',
      en: 'Titian',
    },
    picture: {
      ru: 'Вакханалия',
      en: 'Bacchanalia',
    },
    year: '1526',
    imageNum: '56',
  },
  {
    author: {
      ru: 'Веласкес',
      en: 'Velasquez',
    },
    picture: {
      ru: 'Вилла Медичи в Риме. Полдень',
      en: 'Villa Medici in Rome. Noon',
    },
    year: '1630',
    imageNum: '57',
  },
  {
    author: {
      ru: 'Эдуард Мане',
      en: 'Edouard Manet',
    },
    picture: {
      ru: 'Ланч на траве',
      en: 'Lunch on the grass',
    },
    year: '1863',
    imageNum: '58',
  },
  {
    author: {
      ru: 'Сальвадор Дали',
      en: 'Salvador Dali',
    },
    picture: {
      ru: 'Постоянство памяти',
      en: 'Persistence of memory',
    },
    year: '1931',
    imageNum: '59',
  },
  {
    author: {
      ru: 'Пьер Огюст Ренуар',
      en: 'Pierre Auguste Renoir',
    },
    picture: {
      ru: 'Две девушки',
      en: 'Two girls',
    },
    year: '1892',
    imageNum: '60',
  },
  {
    author: {
      ru: 'Александр Маковский',
      en: 'Alexander Makovsky',
    },
    picture: {
      ru: 'Надоела',
      en: 'Tired',
    },
    year: '1897',
    imageNum: '61',
  },
  {
    author: {
      ru: 'Веласкес',
      en: 'Velasquez',
    },
    picture: {
      ru: 'Менины',
      en: 'Meninas',
    },
    year: '1656',
    imageNum: '62',
  },
  {
    author: {
      ru: 'Антонис ван Дейк',
      en: 'Anthony van Dyck',
    },
    picture: {
      ru: 'Самсон и Далила',
      en: 'Samson and Delilah',
    },
    year: '1628',
    imageNum: '63',
  },
  {
    author: {
      ru: 'Пабло Пикассо',
      en: 'Pablo Picasso',
    },
    picture: {
      ru: 'Девочка на шаре',
      en: 'Girl on the ball',
    },
    year: '1905',
    imageNum: '64',
  },
  {
    author: {
      ru: 'Джованни Беллини',
      en: 'Giovanni Bellini',
    },
    picture: {
      ru: 'Пир богов',
      en: 'Feast of the Gods',
    },
    year: '1514',
    imageNum: '65',
  },
  {
    author: {
      ru: 'Леонардо да Винчи',
      en: 'Leonardo da Vinci',
    },
    picture: {
      ru: 'Дама с горностаем',
      en: 'Lady with an ermine',
    },
    year: '1490',
    imageNum: '66',
  },
  {
    author: {
      ru: 'Веласкес',
      en: 'Velasquez',
    },
    picture: {
      ru: 'Бахус',
      en: 'Bacchus',
    },
    year: '1628',
    imageNum: '67',
  },
  {
    author: {
      ru: 'Бартоломео Мурильо',
      en: 'Bartolomeo Murillo',
    },
    picture: {
      ru: 'Непорочное зачатие',
      en: 'Immaculate Conception',
    },
    year: '1678',
    imageNum: '68',
  },
  {
    author: {
      ru: 'Теодор Жерико',
      en: 'Theodore Gericault',
    },
    picture: {
      ru: 'Плот "Медузы"',
      en: 'The Raft "Medusa"',
    },
    year: '1819',
    imageNum: '69',
  },
  {
    author: {
      ru: 'Иван Шишкин',
      en: 'Ivan Shishkin',
    },
    picture: {
      ru: 'Утро в сосновом лесу',
      en: 'Morning in a pine forest',
    },
    year: '1889',
    imageNum: '70',
  },
  {
    author: {
      ru: 'Жан Этьен Лиотар',
      en: 'Jean Etienne Lyotard',
    },
    picture: {
      ru: 'Шоколадница',
      en: 'Chocolate girl',
    },
    year: '1745',
    imageNum: '71',
  },
  {
    author: {
      ru: 'Рембрандт',
      en: 'Rembrandt',
    },
    picture: {
      ru: 'Автопортрет с Саскией',
      en: 'Self-portrait with Saskia',
    },
    year: '1635',
    imageNum: '72',
  },
  {
    author: {
      ru: 'Илья Репин',
      en: 'Ilya Repin',
    },
    picture: {
      ru: 'Крестный ход',
      en: 'Religious procession',
    },
    year: '1883',
    imageNum: '73',
  },
  {
    author: {
      ru: 'Алексей Венецианов',
      en: 'Alexey Venetsianov',
    },
    picture: {
      ru: 'Спящий пастушок',
      en: 'Sleeping shepherd boy',
    },
    year: '1826',
    imageNum: '74',
  },
  {
    author: {
      ru: 'Иван Богданов',
      en: 'Ivan Bogdanov',
    },
    picture: {
      ru: 'Новичок',
      en: 'Newbie',
    },
    year: '1893',
    imageNum: '75',
  },
  {
    author: {
      ru: 'Анри де Тулуз-Лотрек',
      en: 'Henri de Toulouse-Lautrec',
    },
    picture: {
      ru: 'Угол Мулен де ла Галет',
      en: 'Corner of the Moulin de la Galette',
    },
    year: '1892',
    imageNum: '76',
  },
  {
    author: {
      ru: 'Тициан',
      en: 'Titian',
    },
    picture: {
      ru: 'Кающаяся Марина Магдалина',
      en: 'Penitent Marina Magdalene',
    },
    year: '1565',
    imageNum: '77',
  },
  {
    author: {
      ru: 'Веласкес',
      en: 'Velasquez',
    },
    picture: {
      ru: 'Инфанта Маргарита',
      en: 'Infanta Margarita',
    },
    year: '1654',
    imageNum: '78',
  },
  {
    author: {
      ru: 'Тициан',
      en: 'Titian',
    },
    picture: {
      ru: 'Динарий Кесаря',
      en: 'Denarius Caesar',
    },
    year: '1516',
    imageNum: '79',
  },
  {
    author: {
      ru: 'Карл Брюллов',
      en: 'Karl Bryullov',
    },
    picture: {
      ru: 'Всадница',
      en: 'Horsewoman',
    },
    year: '1832',
    imageNum: '80',
  },
  {
    author: {
      ru: 'Василий Верещагин',
      en: 'Vasily Vereshchagin',
    },
    picture: {
      ru: 'Апофеоз войны',
      en: 'The Apotheosis of War',
    },
    year: '1817',
    imageNum: '81',
  },
  {
    author: {
      ru: 'Леонардо да Винчи',
      en: 'Leonardo da Vinci',
    },
    picture: {
      ru: 'Благовещение',
      en: 'Annunciation',
    },
    year: '1475',
    imageNum: '82',
  },
  {
    author: {
      ru: 'Алексей Саврасов',
      en: 'Alexey Savrasov',
    },
    picture: {
      ru: 'Грачи прилетели',
      en: 'The Rooks Have Arrived',
    },
    year: '1871',
    imageNum: '83',
  },
  {
    author: {
      ru: 'Тициан',
      en: 'Titian',
    },
    picture: {
      ru: 'Любовь земная и Любовь небесная',
      en: 'Earthly Love and Heavenly Love',
    },
    year: '1516',
    imageNum: '84',
  },
  {
    author: {
      ru: 'Жан Батист Грёз',
      en: 'Jean Baptiste Greuze',
    },
    picture: {
      ru: 'Деревенская помолвка',
      en: 'Villageengagement',
    },
    year: '1761',
    imageNum: '85',
  },
  {
    author: {
      ru: 'Пабло Пикассо',
      en: 'Pablo Picasso',
    },
    picture: {
      ru: 'Авиньонские девицы',
      en: 'The girls of Avignon',
    },
    year: '1907',
    imageNum: '86',
  },
  {
    author: {
      ru: 'Илья Репин',
      en: 'Ilya Repin',
    },
    picture: {
      ru: 'Бурлаки на Волге',
      en: 'Barge haulers on the Volga',
    },
    year: '1873',
    imageNum: '87',
  },
  {
    author: {
      ru: 'Михаил Нестеров',
      en: 'Mikhail Nesterov',
    },
    picture: {
      ru: 'Видение отроку Варфоломею',
      en: 'Vision to the youth Bartholomew',
    },
    year: '1890',
    imageNum: '88',
  },
  {
    author: {
      ru: 'Рафаэль',
      en: 'Raphael',
    },
    picture: {
      ru: 'Мадонна Бельведерская',
      en: 'Madonna of the Belvedere',
    },
    year: '1506',
    imageNum: '89',
  },
  {
    author: {
      ru: 'Василий тропинин',
      en: 'Vasily tropinin',
    },
    picture: {
      ru: 'Девушка с горшком роз',
      en: 'Girl with a pot of roses',
    },
    year: '1850',
    imageNum: '90',
  },
  {
    author: {
      ru: 'Караваджо',
      en: 'Caravaggio',
    },
    picture: {
      ru: 'Лютнист',
      en: 'Lute player',
    },
    year: '1596',
    imageNum: '91',
  },
  {
    author: {
      ru: 'Василий Перов',
      en: 'Vasily Perov',
    },
    picture: {
      ru: 'Охотники на привале',
      en: 'Hunters at rest',
    },
    year: '1871',
    imageNum: '92',
  },
  {
    author: {
      ru: 'Леонардо да Винчи',
      en: 'Leonardo da Vinci',
    },
    picture: {
      ru: 'Тайная вечеря',
      en: 'The Last Supper',
    },
    year: '1498',
    imageNum: '93',
  },
  {
    author: {
      ru: 'Жан Батист Грёз',
      en: 'Jean Baptiste Greuze',
    },
    picture: {
      ru: 'Избалованное дитя',
      en: 'Spoiled child',
    },
    year: '1765',
    imageNum: '94',
  },
  {
    author: {
      ru: 'Адольф Вильям Бугро',
      en: 'Adolphe William Bouguereau',
    },
    picture: {
      ru: 'Волна',
      en: 'Wave',
    },
    year: '1896',
    imageNum: '95',
  },
  {
    author: {
      ru: 'Кузьма Петров-Водкин',
      en: 'Kuzma Petrov-Vodkin',
    },
    picture: {
      ru: 'Купание красного коня',
      en: 'Bathing a red horse',
    },
    year: '1912',
    imageNum: '96',
  },
  {
    author: {
      ru: 'Густав Климт',
      en: 'Gustav Klimt',
    },
    picture: {
      ru: 'Поцелуй',
      en: 'Kiss',
    },
    year: '1908',
    imageNum: '97',
  },
  {
    author: {
      ru: 'Иван Шишкин',
      en: 'Ivan Shishkin',
    },
    picture: {
      ru: 'Рожь',
      en: 'Rye',
    },
    year: '1878',
    imageNum: '98',
  },
  {
    author: {
      ru: 'Жан-Леон Жером',
      en: 'Jean-Leon Gerome',
    },
    picture: {
      ru: 'Бой гладиаторов',
      en: 'Fight of gladiators',
    },
    year: '1872',
    imageNum: '99',
  },
  {
    author: {
      ru: 'Василий Суриков',
      en: 'Vasily Surikov',
    },
    picture: {
      ru: 'Боярыня Морозова',
      en: 'Boyarynya Morozova',
    },
    year: '1887',
    imageNum: '100',
  },
  {
    author: {
      ru: 'Исаак Левитан',
      en: 'Isaac Levitan',
    },
    picture: {
      ru: 'Над вечным покоем',
      en: 'Over eternal rest',
    },
    year: '1894',
    imageNum: '101',
  },
  {
    author: {
      ru: 'Гейнсборо',
      en: 'Gainsborough',
    },
    picture: {
      ru: 'Дама в голубом',
      en: 'Lady in blue',
    },
    year: '1780',
    imageNum: '102',
  },
  {
    author: {
      ru: 'Алексей Венецианов',
      en: 'Alexey Venetsianov',
    },
    picture: {
      ru: 'На пашне. Весна',
      en: 'On arable land. Spring',
    },
    year: '1820',
    imageNum: '103',
  },
  {
    author: {
      ru: 'Тициан',
      en: 'Titian',
    },
    picture: {
      ru: 'Саломея',
      en: 'Salome',
    },
    year: '1515',
    imageNum: '104',
  },
  {
    author: {
      ru: 'Василий Кандинский',
      en: 'Wassily Kandinsky',
    },
    picture: {
      ru: 'Композиция VIII',
      en: 'Composition VIII',
    },
    year: '1923',
    imageNum: '105',
  },
  {
    author: {
      ru: 'Василий Поленов',
      en: 'Vasily Polenov',
    },
    picture: {
      ru: 'В парке',
      en: 'In the park',
    },
    year: '1874',
    imageNum: '106',
  },
  {
    author: {
      ru: 'Луи Лагрене',
      en: 'Louis Lagrenet',
    },
    picture: {
      ru: 'Марс и Венера',
      en: 'Mars and Venus',
    },
    year: '1770',
    imageNum: '107',
  },
  {
    author: {
      ru: 'Сальвадор Дали',
      en: 'Salvador Dali',
    },
    picture: {
      ru: 'Сон, вызванный полётом пчелы вокруг граната, за секунду до пробуждения',
      en: 'A dream caused by the flight of a bee around a pomegranate, a second before waking up',
    },
    year: '1944',
    imageNum: '108',
  },
  {
    author: {
      ru: 'Ян Вермеер',
      en: 'Jan Vermeer',
    },
    picture: {
      ru: 'Девушка с жемчужной серёжкой',
      en: 'Girl with a pearl earring',
    },
    year: '1665',
    imageNum: '109',
  },
  {
    author: {
      ru: 'Анри Руссо',
      en: 'Henri Rousseau',
    },
    picture: {
      ru: 'Спящая цыганка',
      en: 'Sleeping gypsy',
    },
    year: '1897',
    imageNum: '110',
  },
  {
    author: {
      ru: 'Василий Поленов',
      en: 'Vasily Polenov',
    },
    picture: {
      ru: 'Переправа через реку',
      en: 'Crossing the river',
    },
    year: '1872',
    imageNum: '111',
  },
  {
    author: {
      ru: 'Эдвард Мунк',
      en: 'Edvard Munch',
    },
    picture: {
      ru: 'Крик',
      en: 'Scream',
    },
    year: '1893',
    imageNum: '112',
  },
  {
    author: {
      ru: 'Карл Брюллов',
      en: 'Karl Bryullov',
    },
    picture: {
      ru: 'Последний день Помпеи',
      en: 'The last day of Pompeii',
    },
    year: '1833',
    imageNum: '113',
  },
  {
    author: {
      ru: 'Илья Репин',
      en: 'Ilya Repin',
    },
    picture: {
      ru: 'Летний пейзаж',
      en: 'Summer landscape',
    },
    year: '1879',
    imageNum: '114',
  },
  {
    author: {
      ru: 'Ян Вермеер',
      en: 'Jan Vermeer',
    },
    picture: {
      ru: 'Молочница',
      en: 'Thrush',
    },
    year: '1660',
    imageNum: '115',
  },
  {
    author: {
      ru: 'Иван Айвазовский',
      en: 'Ivan Aivazovsky',
    },
    picture: {
      ru: 'Девятый вал',
      en: 'The Ninth Wave',
    },
    year: '1850',
    imageNum: '116',
  },
  {
    author: {
      ru: 'Винсент ван Гог',
      en: 'Vincent van Gogh',
    },
    picture: {
      ru: 'Подсолнухи',
      en: 'Sunflowers',
    },
    year: '1888',
    imageNum: '117',
  },
  {
    author: {
      ru: 'Валентин Серов',
      en: 'Valentin Serov',
    },
    picture: {
      ru: 'Девочка с персиками',
      en: 'Girl with peaches',
    },
    year: '1887',
    imageNum: '118',
  },
  {
    author: {
      ru: 'Караваджо',
      en: 'Caravaggio',
    },
    picture: {
      ru: 'Обращение Савла',
      en: 'Conversion of Saul',
    },
    year: '1601',
    imageNum: '119',
  },
  {
    author: {
      ru: 'Альбрехт Дюрер',
      en: 'Albrecht Durer',
    },
    picture: {
      ru: 'Праздник венков из роз',
      en: 'Rose Wreath Festival',
    },
    year: '1506',
    imageNum: '120',
  },
  {
    author: {
      ru: 'Эль Греко',
      en: 'El greco',
    },
    picture: {
      ru: 'Изгнание торгующих из храма',
      en: 'The expulsion of the merchants from the temple',
    },
    year: '1600',
    imageNum: '121',
  },
  {
    author: {
      ru: 'Илья Репин',
      en: 'Ilya Repin',
    },
    picture: {
      ru: 'Приготовление к экзамену',
      en: 'Preparing for the exam',
    },
    year: '1864',
    imageNum: '122',
  },
  {
    author: {
      ru: 'Исаак Левитан',
      en: 'Isaac Levitan',
    },
    picture: {
      ru: 'Март',
      en: 'March',
    },
    year: '1895',
    imageNum: '123',
  },
  {
    author: {
      ru: 'Адольф Вильям Бугро',
      en: 'Adolphe William Bouguereau',
    },
    picture: {
      ru: 'Девушка и Амур',
      en: 'Girl and Cupid',
    },
    year: '1880',
    imageNum: '124',
  },
  {
    author: {
      ru: 'Леонардо да Винчи',
      en: 'Leonardo da Vinci',
    },
    picture: {
      ru: 'Мадонна Литта',
      en: 'Madonna Litta',
    },
    year: '1491',
    imageNum: '125',
  },
  {
    author: {
      ru: 'Казимир Малевич',
      en: 'Kazimir Malevich',
    },
    picture: {
      ru: 'Черный квадрат',
      en: 'Black square',
    },
    year: '1915',
    imageNum: '126',
  },
  {
    author: {
      ru: 'Эль Греко',
      en: 'El greco',
    },
    picture: {
      ru: 'Апостолы Петр и Павел',
      en: 'Apostles Peter and Paul',
    },
    year: '1592',
    imageNum: '127',
  },
  {
    author: {
      ru: 'Виктор Васнецов',
      en: 'Viktor Vasnetsov',
    },
    picture: {
      ru: 'Витязь на распутье',
      en: 'A knight at the Crossroads',
    },
    year: '1878',
    imageNum: '128',
  },
  {
    author: {
      ru: 'Константин Маковский',
      en: 'Konstantin Makovsky',
    },
    picture: {
      ru: 'Боярский свадебный пир',
      en: 'Boyarsky wedding feast',
    },
    year: '1883',
    imageNum: '129',
  },
  {
    author: {
      ru: 'Эжен Делакруа',
      en: 'Eugene Delacroix',
    },
    picture: {
      ru: 'Свобода, ведущая народ',
      en: 'Freedom leading the people',
    },
    year: '1830',
    imageNum: '130',
  },
  {
    author: {
      ru: 'Василий Поленов',
      en: 'Vasily Polenov',
    },
    picture: {
      ru: 'Бабушкин сад',
      en: "Grandma's Garden",
    },
    year: '1878',
    imageNum: '131',
  },
  {
    author: {
      ru: 'Анри Матисс',
      en: 'Henri Matisse',
    },
    picture: {
      ru: 'Семейный портрет',
      en: 'Family portrait',
    },
    year: '1911',
    imageNum: '132',
  },
  {
    author: {
      ru: 'Константин Маковский',
      en: 'Konstantin Makovsky',
    },
    picture: {
      ru: 'Гадание',
      en: 'Fortune telling',
    },
    year: '1890',
    imageNum: '133',
  },
  {
    author: {
      ru: 'Пьер Огюст Ренуар',
      en: 'Pierre Auguste Renoir',
    },
    picture: {
      ru: 'Мост в Шату',
      en: 'Bridge to Shatu',
    },
    year: '1875',
    imageNum: '134',
  },
  {
    author: {
      ru: 'Сандро Боттичелли',
      en: 'Sandro Botticelli',
    },
    picture: {
      ru: 'Весна',
      en: 'Spring',
    },
    year: '1482',
    imageNum: '135',
  },
  {
    author: {
      ru: 'Пьер Огюст Ренуар',
      en: 'Pierre Auguste Renoir',
    },
    picture: {
      ru: 'Зонтики',
      en: 'Umbrellas',
    },
    year: '1886',
    imageNum: '136',
  },
  {
    author: {
      ru: 'Гюстав Курбе',
      en: 'Gustave Courbet',
    },
    picture: {
      ru: 'Мастерская художника',
      en: 'Workshop of the artist',
    },
    year: '1855',
    imageNum: '137',
  },
  {
    author: {
      ru: 'Василий Поленов',
      en: 'Vasily Polenov',
    },
    picture: {
      ru: 'Деревня Окулова гора',
      en: 'Village Okulova Gora',
    },
    year: '1860',
    imageNum: '138',
  },
  {
    author: {
      ru: 'Константин Маковский',
      en: 'Konstantin Makovsky',
    },
    picture: {
      ru: 'Перемещение ковра Мухаммеда из Мекки в Каир',
      en: 'Moving the carpet of Muhammad from Mecca to Cairo',
    },
    year: '1875',
    imageNum: '139',
  },
  {
    author: {
      ru: 'Пьер Огюст Ренуар',
      en: 'Pierre Auguste Renoir',
    },
    picture: {
      ru: 'Бал в Мулен де ла Галетт',
      en: 'Ball at the Moulin de la Galette',
    },
    year: '1876',
    imageNum: '140',
  },
  {
    author: {
      ru: 'Иван Крамской',
      en: 'Ivan Kramskoy',
    },
    picture: {
      ru: 'Неизвестная',
      en: 'Unknown',
    },
    year: '1883',
    imageNum: '141',
  },
  {
    author: {
      ru: 'Веласкес',
      en: 'Velasquez',
    },
    picture: {
      ru: 'Кузница вулкана',
      en: 'Forge of the volcano',
    },
    year: '1630',
    imageNum: '142',
  },
  {
    author: {
      ru: 'Илья Репин',
      en: 'Ilya Repin',
    },
    picture: {
      ru: 'Запорожцы',
      en: 'Cossacks',
    },
    year: '1891',
    imageNum: '143',
  },
  {
    author: {
      ru: 'Рафаэль',
      en: 'Raphael',
    },
    picture: {
      ru: 'Дама с единорогом',
      en: 'Lady with a unicorn',
    },
    year: '1506',
    imageNum: '144',
  },
  {
    author: {
      ru: 'Александр Иванов',
      en: 'Alexander Ivanov',
    },
    picture: {
      ru: 'Явление Христа народу',
      en: 'The appearance of Christ to the people',
    },
    year: '1857',
    imageNum: '145',
  },
  {
    author: {
      ru: 'Эдуард Мане',
      en: 'Edouard Manet',
    },
    picture: {
      ru: 'Женщина с кувшином',
      en: 'Woman with a jug',
    },
    year: '1858',
    imageNum: '146',
  },
  {
    author: {
      ru: 'Тициан',
      en: 'Titian',
    },
    picture: {
      ru: 'Конный портрет Карла V',
      en: 'Equestrian portrait of Charles V',
    },
    year: '1548',
    imageNum: '147',
  },
  {
    author: {
      ru: 'Пьер Огюст Ренуар',
      en: 'Pierre Auguste Renoir',
    },
    picture: {
      ru: 'Завтрак гребцов',
      en: 'Breakfast of the rowers',
    },
    year: '1881',
    imageNum: '148',
  },
  {
    author: {
      ru: 'Карл Брюллов',
      en: 'Karl Bryullov',
    },
    picture: {
      ru: 'Итальянский полдень',
      en: 'Italian noon',
    },
    year: '1827',
    imageNum: '149',
  },
  {
    author: {
      ru: 'Виктор Васнецов',
      en: 'Viktor Vasnetsov',
    },
    picture: {
      ru: 'Царь Иван Васильевич Грозный',
      en: 'Tsar Ivan Vasilyevich the Terrible',
    },
    year: '1896',
    imageNum: '150',
  },
  {
    author: {
      ru: 'Питер Брейгель',
      en: 'Pieter Bruegel',
    },
    picture: {
      ru: 'Охотники на снегу',
      en: 'Hunters in the Snow',
    },
    year: '1565',
    imageNum: '151',
  },
  {
    author: {
      ru: 'Виктор Васнецов',
      en: 'Viktor Vasnetsov',
    },
    picture: {
      ru: 'Ковер-самолёт',
      en: 'Flying carpet',
    },
    year: '1880',
    imageNum: '152',
  },
  {
    author: {
      ru: 'Марк Шагал',
      en: 'Marc Chagall',
    },
    picture: {
      ru: 'Я и деревня',
      en: 'Me and the village',
    },
    year: '1911',
    imageNum: '153',
  },
  {
    author: {
      ru: 'Леонардо да Винчи',
      en: 'Leonardo da Vinci',
    },
    picture: {
      ru: 'Мона Лиза',
      en: 'Mona Lisa',
    },
    year: '1505',
    imageNum: '154',
  },
  {
    author: {
      ru: 'Франческо Баккьякка',
      en: 'Francesco Bacchiacca',
    },
    picture: {
      ru: 'Мадонна с младенцем',
      en: 'Madonna and Child',
    },
    year: '1520',
    imageNum: '155',
  },
  {
    author: {
      ru: 'Жак-Луи Давид',
      en: 'Jacques-Louis David',
    },
    picture: {
      ru: 'Клятва Горациев',
      en: 'Oath of the Horace',
    },
    year: '1784',
    imageNum: '156',
  },
  {
    author: {
      ru: 'Альбрехт Дюрер',
      en: 'Albrecht Durer',
    },
    picture: {
      ru: 'Адам и Ева',
      en: 'Adam and Eve',
    },
    year: '1507',
    imageNum: '157',
  },
  {
    author: {
      ru: 'Бартоломео Мурильо',
      en: 'Bartolomeo Murillo',
    },
    picture: {
      ru: 'Явление и дар Богородицы',
      en: 'The appearance and gift of the Mother of God',
    },
    year: '1655',
    imageNum: '158',
  },
  {
    author: {
      ru: 'Василий Перов',
      en: 'Vasily Perov',
    },
    picture: {
      ru: 'Птицелов',
      en: 'Birds',
    },
    year: '1870',
    imageNum: '159',
  },
  {
    author: {
      ru: 'Караваджо',
      en: 'Caravaggio',
    },
    picture: {
      ru: 'Отдых на пути в Египет',
      en: 'Rest on the Flight to Egypt',
    },
    year: '1596',
    imageNum: '160',
  },
  {
    author: {
      ru: 'Франциско Гоя',
      en: 'Francisco Goya',
    },
    picture: {
      ru: 'Расстрел повстанцев',
      en: 'Shooting of the rebels',
    },
    year: '1808',
    imageNum: '161',
  },
  {
    author: {
      ru: 'Рафаэль',
      en: 'Raphael',
    },
    picture: {
      ru: 'Триумф Галатеи',
      en: 'Triumph of Galatea',
    },
    year: '1512',
    imageNum: '162',
  },
  {
    author: {
      ru: 'Михаил Врубель',
      en: 'Mikhail Vrubel',
    },
    picture: {
      ru: 'Демон сидящий',
      en: 'Demon sitting',
    },
    year: '1890',
    imageNum: '163',
  },
  {
    author: {
      ru: 'Винсент ван Гог',
      en: 'Vincent van Gogh',
    },
    picture: {
      ru: 'Ирисы',
      en: 'Irises',
    },
    year: '1889',
    imageNum: '164',
  },
  {
    author: {
      ru: 'Поль Деларош',
      en: 'Paul Delaroche',
    },
    picture: {
      ru: 'Казнь Джейн Грей',
      en: 'Execution of Jane Gray',
    },
    year: '1833',
    imageNum: '165',
  },
  {
    author: {
      ru: 'Джон Констебл',
      en: 'John Constable',
    },
    picture: {
      ru: 'Вид на собор в Солсбери из епископского сада',
      en: 'View of the Cathedral in Salisbury from the episcopal garden',
    },
    year: '1823',
    imageNum: '166',
  },
  {
    author: {
      ru: 'Винсент ван Гог',
      en: 'Vincent van Gogh',
    },
    picture: {
      ru: 'Звёздная ночь',
      en: 'Starry Night',
    },
    year: '1889',
    imageNum: '167',
  },
  {
    author: {
      ru: 'Франсуа Буше',
      en: 'Francois Boucher',
    },
    picture: {
      ru: 'Четыре сезона - Весна',
      en: 'Four seasons - Spring',
    },
    year: '1755',
    imageNum: '168',
  },
  {
    author: {
      ru: 'Рафаэль',
      en: 'Raphael',
    },
    picture: {
      ru: 'Мадонна с розой',
      en: 'Madonna with a Rose',
    },
    year: '1518',
    imageNum: '169',
  },
  {
    author: {
      ru: 'Василий Тропинин',
      en: 'Vasily Tropinin',
    },
    picture: {
      ru: 'Кружевница',
      en: 'Lacemaker',
    },
    year: '1823',
    imageNum: '170',
  },
  {
    author: {
      ru: 'Рембрандт',
      en: 'Rembrandt',
    },
    picture: {
      ru: 'Пир Вальтасара',
      en: 'Feast of Valthasar',
    },
    year: '1635',
    imageNum: '171',
  },
  {
    author: {
      ru: 'Василий Суриков',
      en: 'Vasily Surikov',
    },
    picture: {
      ru: 'Переход Суворова через Альпы',
      en: 'The passage of Suvorov through the Alps',
    },
    year: '1899',
    imageNum: '172',
  },
  {
    author: {
      ru: 'Исаак Левитан',
      en: 'Isaac Levitan',
    },
    picture: {
      ru: 'Золотая осень',
      en: 'Golden Autumn',
    },
    year: '1895',
    imageNum: '173',
  },
  {
    author: {
      ru: 'Архип Куинджи',
      en: 'Arkhip Kuindzhi',
    },
    picture: {
      ru: 'На острове Валааме',
      en: 'On the island of Valaam',
    },
    year: '1873',
    imageNum: '174',
  },
  {
    author: {
      ru: 'Веласкес',
      en: 'Velasquez',
    },
    picture: {
      ru: 'Сдача Бреды',
      en: 'Delivery of Delirium',
    },
    year: '1635',
    imageNum: '175',
  },
  {
    author: {
      ru: 'Илья Репин',
      en: 'Ilya Repin',
    },
    picture: {
      ru: 'Не ждали',
      en: "Didn't expect",
    },
    year: '1888',
    imageNum: '176',
  },
  {
    author: {
      ru: 'Франсуа Буше',
      en: 'Francois Boucher',
    },
    picture: {
      ru: 'Купание Дианы',
      en: 'Bathing Diana',
    },
    year: '1742',
    imageNum: '177',
  },
  {
    author: {
      ru: 'Марианна Верёвкина',
      en: 'Marianna Verevkina',
    },
    picture: {
      ru: 'Муравейник',
      en: 'Anthill',
    },
    year: '1916',
    imageNum: '178',
  },
  {
    author: {
      ru: 'Пьер Огюст Ренуар',
      en: 'Pierre Auguste Renoir',
    },
    picture: {
      ru: 'Портрет Жанны Самари',
      en: 'Portrait of Jeanne Samary',
    },
    year: '1877',
    imageNum: '179',
  },
  {
    author: {
      ru: 'Илья Репин',
      en: 'Ilya Repin',
    },
    picture: {
      ru: 'Садко',
      en: 'Sadko',
    },
    year: '1876',
    imageNum: '180',
  },
  {
    author: {
      ru: 'Архип Куинджи',
      en: 'Arkhip Kuindzhi',
    },
    picture: {
      ru: 'Лунная ночь на Днепре',
      en: 'Moonlit night on the Dnieper',
    },
    year: '1880',
    imageNum: '181',
  },
  {
    author: {
      ru: 'Веласкес',
      en: 'Velasquez',
    },
    picture: {
      ru: 'Поклонение волхвов',
      en: 'Adoration of the Magi',
    },
    year: '1619',
    imageNum: '182',
  },
  {
    author: {
      ru: 'Николай Богданов-Бельский',
      en: 'Nikolay Bogdanov-Belsky',
    },
    picture: {
      ru: 'У дверей школы',
      en: 'At the door of the school',
    },
    year: '1897',
    imageNum: '183',
  },
  {
    author: {
      ru: 'Иероним Босх',
      en: 'Hieronymus Bosch',
    },
    picture: {
      ru: 'Сад земных наслаждений',
      en: 'The Garden of Earthly Delights',
    },
    year: '1510',
    imageNum: '184',
  },
  {
    author: {
      ru: 'Корреджо',
      en: 'Correggio',
    },
    picture: {
      ru: 'Даная',
      en: 'Danae',
    },
    year: '1530',
    imageNum: '185',
  },
  {
    author: {
      ru: 'Питер Пауль Рубенс',
      en: 'Peter Paul Rubens',
    },
    picture: {
      ru: 'Похищение дочерей Левкиппа',
      en: 'Abduction of the daughters of Leucippus',
    },
    year: '1618',
    imageNum: '186',
  },
  {
    author: {
      ru: 'Жан Энгр',
      en: 'Jean Ingres',
    },
    picture: {
      ru: 'Большая одалиска',
      en: 'Big odalisque',
    },
    year: '1814',
    imageNum: '187',
  },
  {
    author: {
      ru: 'Рафаэль',
      en: 'Raphael',
    },
    picture: {
      ru: 'Сикстинская Мадонна',
      en: 'Sistine Madonna',
    },
    year: '1520',
    imageNum: '188',
  },
  {
    author: {
      ru: 'Рембрандт',
      en: 'Rembrandt',
    },
    picture: {
      ru: 'Похищение Европы',
      en: 'The Abduction of Europa',
    },
    year: '1632',
    imageNum: '189',
  },
  {
    author: {
      ru: 'Питер Пауль Рубенс',
      en: 'Peter Paul Rubens',
    },
    picture: {
      ru: 'Похищение Орфии Бореем',
      en: 'The abduction of Orphia by Boreas',
    },
    year: '1615',
    imageNum: '190',
  },
  {
    author: {
      ru: 'Архип Куинджи',
      en: 'Arkhip Kuindzhi',
    },
    picture: {
      ru: 'Украинская ночь',
      en: 'Ukrainian night',
    },
    year: '1876',
    imageNum: '191',
  },
  {
    author: {
      ru: 'Эдгар Дега',
      en: 'Edgar Degas',
    },
    picture: {
      ru: 'Танцовщицы у станка',
      en: 'Dancers at the barre',
    },
    year: '1877',
    imageNum: '192',
  },
  {
    author: {
      ru: 'Алексей Венецианов',
      en: 'Alexey Venetsianov',
    },
    picture: {
      ru: 'На жатве. Лето',
      en: 'At the harvest. Summer',
    },
    year: '1827',
    imageNum: '193',
  },
  {
    author: {
      ru: 'Пьер Огюст Ренуар',
      en: 'Pierre Auguste Renoir',
    },
    picture: {
      ru: 'Две сестры',
      en: 'Two sisters',
    },
    year: '1881',
    imageNum: '194',
  },
  {
    author: {
      ru: 'Рембрандт',
      en: 'Rembrandt',
    },
    picture: {
      ru: 'Ночной дозор',
      en: 'Night Watch',
    },
    year: '1642',
    imageNum: '195',
  },
  {
    author: {
      ru: 'Эдуар Мане',
      en: 'Edouard Manet',
    },
    picture: {
      ru: 'Бар в «Фоли-Бержер»',
      en: 'Bar at the Folies Bergère',
    },
    year: '1882',
    imageNum: '196',
  },
  {
    author: {
      ru: 'Никола Пуссен',
      en: 'Nicolas Poussin',
    },
    picture: {
      ru: 'Пейзаж с Полифемом',
      en: 'Landscape with Polyphemus',
    },
    year: '1649',
    imageNum: '197',
  },
  {
    author: {
      ru: 'Питер Брейгель',
      en: 'Pieter Bruegel',
    },
    picture: {
      ru: 'Притча о слепых',
      en: 'The parable of the blind',
    },
    year: '1568',
    imageNum: '198',
  },
  {
    author: {
      ru: 'Виктор Васнецов',
      en: 'Viktor Vasnetsov',
    },
    picture: {
      ru: 'Иван-царевич на Сером Волке',
      en: 'Ivan Tsarevich on the Gray Wolf',
    },
    year: '1888',
    imageNum: '199',
  },
  {
    author: {
      ru: 'Сандро Боттичелли',
      en: 'Sandro Botticelli',
    },
    picture: {
      ru: 'Рождение Венеры',
      en: 'The Birth of Venus',
    },
    year: '1486',
    imageNum: '200',
  },
  {
    author: {
      ru: 'Леонардо да Винчи',
      en: 'Leonardo da Vinci',
    },
    picture: {
      ru: 'Мадонна в скалах',
      en: 'Madonna of the Rocks',
    },
    year: '1486',
    imageNum: '201',
  },
  {
    author: {
      ru: 'Аксели Галлен-Каллела',
      en: 'Axeli Gallen-Kallela',
    },
    picture: {
      ru: 'Любовники',
      en: 'Lovers',
    },
    year: '1916',
    imageNum: '202',
  },
  {
    author: {
      ru: 'Винсент Ван Гог',
      en: 'Vincent Van Gogh',
    },
    picture: {
      ru: 'Автопортрет с перевязанным ухом',
      en: 'Self-portrait with bandaged ear',
    },
    year: '1889',
    imageNum: '203',
  },
  {
    author: {
      ru: 'Клод Моне',
      en: 'Claude Monet',
    },
    picture: {
      ru: 'Впечатление. Восходящее солнце',
      en: 'Impression. Rising Sun',
    },
    year: '1882',
    imageNum: '204',
  },
  {
    author: {
      ru: 'Рембрандт',
      en: 'Rembrandt',
    },
    picture: {
      ru: 'Возвращение блудного сына',
      en: 'Return of the prodigal son',
    },
    year: '1662',
    imageNum: '205',
  },
  {
    author: {
      ru: 'Караваджо',
      en: 'Caravaggio',
    },
    picture: {
      ru: 'Больной вакх',
      en: 'Sick Bacchus',
    },
    year: '1593',
    imageNum: '206',
  },
  {
    author: {
      ru: 'Иван Айвазовский',
      en: 'Ivan Aivazovsky',
    },
    picture: {
      ru: 'Лунная дорожка',
      en: 'Moon path',
    },
    year: '1886',
    imageNum: '207',
  },
  {
    author: {
      ru: 'Винсент Ван Гог',
      en: 'Vincent Van Gogh',
    },
    picture: {
      ru: 'Пшеничное поле с кипарисами',
      en: 'Wheat field with cypresses',
    },
    year: '1889',
    imageNum: '208',
  },
  {
    author: {
      ru: 'Аксели Галлен-Каллела',
      en: 'Axeli Gallen-Kallela',
    },
    picture: {
      ru: 'Мальчик и ворона',
      en: 'Boy and Crow',
    },
    year: '1884',
    imageNum: '209',
  },
  {
    author: {
      ru: 'Ян Вермеер',
      en: 'Jan Vermeer',
    },
    picture: {
      ru: 'Астроном',
      en: 'Astronomer',
    },
    year: '1668',
    imageNum: '210',
  },
  {
    author: {
      ru: 'Питер Пауль Рубенс',
      en: 'Peter Paul Rubens',
    },
    picture: {
      ru: 'Союз Земли и Воды',
      en: 'Union of Earth and Water',
    },
    year: '1618',
    imageNum: '211',
  },
  {
    author: {
      ru: 'Клод Моне',
      en: 'Claude Monet',
    },
    picture: {
      ru: 'Стог сена в Живерни',
      en: 'Haystack at Giverny',
    },
    year: '1886',
    imageNum: '212',
  },
  {
    author: {
      ru: 'Жан Фрагонар',
      en: 'Jean Fragonard',
    },
    picture: {
      ru: 'Задвижка',
      en: 'Gate valve',
    },
    year: '1777',
    imageNum: '213',
  },
  {
    author: {
      ru: 'Марианна Верёвкина',
      en: 'Marianna Verevkina',
    },
    picture: {
      ru: 'Осень, школа',
      en: 'Autumn, school',
    },
    year: '1907',
    imageNum: '214',
  },
  {
    author: {
      ru: 'Винсент Ван Гог',
      en: 'Vincent Van Gogh',
    },
    picture: {
      ru: 'Ночное кафе в Арле',
      en: 'Night cafe in Arles',
    },
    year: '1888',
    imageNum: '215',
  },
  {
    author: {
      ru: 'Клод Моне',
      en: 'Claude Monet',
    },
    picture: {
      ru: 'Пруд с кувшинками',
      en: 'A pond with water lilies',
    },
    year: '1899',
    imageNum: '216',
  },
  {
    author: {
      ru: 'Иван Айвазовский',
      en: 'Ivan Aivazovsky',
    },
    picture: {
      ru: 'Буря',
      en: 'Storm',
    },
    year: '1868',
    imageNum: '217',
  },
  {
    author: {
      ru: 'Ян Вермеер',
      en: 'Jan Vermeer',
    },
    picture: {
      ru: 'Кружевница',
      en: 'Lacemaker',
    },
    year: '1671',
    imageNum: '218',
  },
  {
    author: {
      ru: 'Карл Брюллов',
      en: 'Karl Bryullov',
    },
    picture: {
      ru: 'Автопортрет',
      en: 'Self-portrait',
    },
    year: '1848',
    imageNum: '219',
  },
  {
    author: {
      ru: 'Питер Брейгель',
      en: 'Pieter Bruegel',
    },
    picture: {
      ru: 'Вавилонская башня',
      en: 'The Tower of Babel',
    },
    year: '1563',
    imageNum: '220',
  },
  {
    author: {
      ru: 'Поль Гоген',
      en: 'Paul Gauguin',
    },
    picture: {
      ru: 'Кафе в Арле',
      en: 'Cafe in Arles',
    },
    year: '1888',
    imageNum: '221',
  },
  {
    author: {
      ru: 'Иван Шишкин',
      en: 'Ivan Shishkin',
    },
    picture: {
      ru: 'Сосновый бор',
      en: 'Pine Forest',
    },
    year: '1895',
    imageNum: '222',
  },
  {
    author: {
      ru: 'Клод Моне',
      en: 'Claude Monet',
    },
    picture: {
      ru: 'Завтрак на траве',
      en: 'Breakfast on the grass',
    },
    year: '1865',
    imageNum: '223',
  },
  {
    author: {
      ru: 'Рафаэль',
      en: 'Raphael',
    },
    picture: {
      ru: 'Святой Георгий и дракон',
      en: 'Saint George and the dragon',
    },
    year: '1506',
    imageNum: '224',
  },
  {
    author: {
      ru: 'Пабло Пикассо',
      en: 'Pablo Picasso',
    },
    picture: {
      ru: 'Любительница абсента',
      en: 'Absinthe Drinker',
    },
    year: '1901',
    imageNum: '225',
  },
  {
    author: {
      ru: 'Эдгар Дега',
      en: 'Edgar Degas',
    },
    picture: {
      ru: 'Перед репетицией',
      en: 'Before rehearsal',
    },
    year: '1880',
    imageNum: '226',
  },
  {
    author: {
      ru: 'Николай Рерих',
      en: 'Nicholas Roerich',
    },
    picture: {
      ru: 'Помни!',
      en: 'Remember!',
    },
    year: '1924',
    imageNum: '227',
  },
  {
    author: {
      ru: 'Илья Репин',
      en: 'Ilya Repin',
    },
    picture: {
      ru: 'Стрекоза',
      en: 'Dragonfly',
    },
    year: '1884',
    imageNum: '228',
  },
  {
    author: {
      ru: 'Клод Моне',
      en: 'Claude Monet',
    },
    picture: {
      ru: 'Мост Ватерлоо, туман',
      en: 'Waterloo Bridge, fog',
    },
    year: '1903',
    imageNum: '229',
  },
  {
    author: {
      ru: 'Исаак Левитан',
      en: 'Isaac Levitan',
    },
    picture: {
      ru: 'Весна – большая вода',
      en: 'Spring is big water',
    },
    year: '1897',
    imageNum: '230',
  },
  {
    author: {
      ru: 'Аксели Галлен-Каллела',
      en: 'Axeli Gallen-Kallela',
    },
    picture: {
      ru: 'Первый урок',
      en: 'First lesson',
    },
    year: '1889',
    imageNum: '231',
  },
  {
    author: {
      ru: 'Иван Айвазовский',
      en: 'Ivan Aivazovsky',
    },
    picture: {
      ru: 'Буря на море',
      en: 'Storm at sea',
    },
    year: '1873',
    imageNum: '232',
  },
  {
    author: {
      ru: 'Эдгар Дега',
      en: 'Edgar Degas',
    },
    picture: {
      ru: 'Балетный класс',
      en: 'Ballet class',
    },
    year: '1874',
    imageNum: '233',
  },
  {
    author: {
      ru: 'Николай Рерих',
      en: 'Nicholas Roerich',
    },
    picture: {
      ru: 'Горная обитель',
      en: 'Mountain abode',
    },
    year: '1933',
    imageNum: '234',
  },
  {
    author: {
      ru: 'Леонардо да Винчи',
      en: 'Leonardo da Vinci',
    },
    picture: {
      ru: 'Святая Анна с Мадонной',
      en: 'Saint Anna with Madonna',
    },
    year: '1510',
    imageNum: '235',
  },
  {
    author: {
      ru: 'Эль Греко',
      en: 'El greco',
    },
    picture: {
      ru: 'Мальчик, зажигающий свечу',
      en: 'Boy lighting a candle',
    },
    year: '1572',
    imageNum: '236',
  },
  {
    author: {
      ru: 'Пабло Пикассо',
      en: 'Pablo Picasso',
    },
    picture: {
      ru: 'Дружба',
      en: 'Friendship',
    },
    year: '1908',
    imageNum: '237',
  },
  {
    author: {
      ru: 'Аксели Галлен-Каллела',
      en: 'Axeli Gallen-Kallela',
    },
    picture: {
      ru: 'Девушка на ветру',
      en: 'Girl in the Wind',
    },
    year: '1893',
    imageNum: '238',
  },
  {
    author: {
      ru: 'Иван Айвазовский',
      en: 'Ivan Aivazovsky',
    },
    picture: {
      ru: 'Волна',
      en: 'Wave',
    },
    year: '1889',
    imageNum: '239',
  },
  {
    author: {
      ru: 'Эжен Делакруа',
      en: 'Eugene Delacroix',
    },
    picture: {
      ru: 'Автопортрет',
      en: 'Self-portrait',
    },
    year: '1837',
    imageNum: '240',
  },
];

export default images;
