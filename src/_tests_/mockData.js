const MOVIES = [{
  id: 3,
  title: 'The Incredible Hulk',
  genre: 'Action',
  runtime: 112,
  year: '2008-06-13',
  created_at: '2021-08-16T16:26:28.275Z',
  updated_at: '2021-08-23T02:26:03.698Z',
  poster: 'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg',
  director: 'Louis Leterrier',
  photo: 'https://m.media-amazon.com/images/M/MV5BMjAwMDI0NTIyOF5BMl5BanBnXkFtZTYwODcyMzk0._V1_.jpg',
  plot: 'Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.',
  favourites: [{
    id: 40, user_id: 1, movie_id: 3, created_at: '2021-08-26T19:29:27.144Z', updated_at: '2021-08-26T19:29:27.144Z',
  }],
}, {
  id: 9, title: 'Thor: The Dark World', genre: 'Action', runtime: 112, year: '2013-11-08', created_at: '2021-08-23T14:01:25.273Z', updated_at: '2021-08-23T14:01:25.273Z', poster: 'https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg', director: 'Alan Taylor', photo: 'https://m.media-amazon.com/images/M/MV5BMjEyMDg3OTgyMl5BMl5BanBnXkFtZTYwNjEyNzIz._V1_.jpg', plot: 'When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.', favourites: [],
}, {
  id: 42,
  title: 'Alien',
  genre: 'Horror',
  runtime: 117,
  year: '1979-09-06',
  created_at: '2021-08-26T19:37:07.045Z',
  updated_at: '2021-08-26T19:37:07.045Z',
  poster: 'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  director: 'Ridley Scott',
  photo: 'https://m.media-amazon.com/images/M/MV5BMGJkOGM5OWEtNDYxMy00Njg4LWExNjAtY2ZlNWNlNzVhNDk4XkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_.jpg',
  plot: 'After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.',
  favourites: [{
    id: 41, user_id: 1, movie_id: 42, created_at: '2021-08-26T19:38:55.791Z', updated_at: '2021-08-26T19:38:55.791Z',
  }],
}, {
  id: 2,
  title: 'Iron Man',
  genre: 'Action',
  runtime: 126,
  year: '2008-05-02',
  created_at: '2021-08-16T16:25:29.854Z',
  updated_at: '2021-08-23T00:26:21.576Z',
  poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg',
  director: 'Jon Favreau',
  photo: 'https://m.media-amazon.com/images/M/MV5BNjcwNzg4MjktNDNlMC00M2U1LWJmMjgtZTVkMmI4MDI2MTVmXkEyXkFqcGdeQXVyMjI4MDI0NTM@._V1_.jpg',
  plot: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
  favourites: [{
    id: 1, user_id: 1, movie_id: 2, created_at: '2021-08-23T14:19:43.234Z', updated_at: '2021-08-23T14:19:43.234Z',
  }],
}, {
  id: 4, title: 'Iron Man 2', genre: 'Action', runtime: 125, year: '2010-05-07', created_at: '2021-08-16T16:44:52.103Z', updated_at: '2021-08-23T00:33:42.161Z', poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg', director: 'Jon Favreau', photo: 'https://m.media-amazon.com/images/M/MV5BNjcwNzg4MjktNDNlMC00M2U1LWJmMjgtZTVkMmI4MDI2MTVmXkEyXkFqcGdeQXVyMjI4MDI0NTM@._V1_.jpg', plot: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.", favourites: [],
}, {
  id: 5, title: 'Thor', genre: 'Action', runtime: 114, year: '2011-05-06', created_at: '2021-08-16T16:46:59.976Z', updated_at: '2021-08-23T00:40:22.399Z', poster: 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg', director: 'Kenneth Branagh', photo: 'https://m.media-amazon.com/images/M/MV5BMjI0NTQ4Mjk5Ml5BMl5BanBnXkFtZTcwMDc1NjkzNw@@._V1_.jpg', plot: 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.', favourites: [],
}, {
  id: 6, title: 'Captain America: The First Avenger', genre: 'Action', runtime: 124, year: '2011-07-22', created_at: '2021-08-16T16:48:30.515Z', updated_at: '2021-08-23T00:44:24.334Z', poster: 'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_.jpg', director: 'Joe Johnston', photo: 'https://m.media-amazon.com/images/M/MV5BNzcxNDQwNzgxNV5BMl5BanBnXkFtZTYwNTQ1MTA0._V1_.jpg', plot: 'Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.', favourites: [],
}, {
  id: 7,
  title: 'The Avengers',
  genre: 'Action',
  runtime: 143,
  year: '2012-05-04',
  created_at: '2021-08-23T00:50:23.935Z',
  updated_at: '2021-08-23T00:53:33.369Z',
  poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  director: 'Joss Whedon',
  photo: 'https://m.media-amazon.com/images/M/MV5BMTg5MzQ0MDA4MF5BMl5BanBnXkFtZTcwNzUwOTk4OQ@@._V1_.jpg',
  plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  favourites: [{
    id: 4, user_id: 1, movie_id: 7, created_at: '2021-08-26T16:37:13.700Z', updated_at: '2021-08-26T16:37:13.700Z',
  }],
}, {
  id: 8, title: 'Iron Man 3', genre: 'Action', runtime: 131, year: '2013-05-03', created_at: '2021-08-23T02:22:29.697Z', updated_at: '2021-08-23T02:22:29.697Z', poster: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg', director: 'Shane Black', photo: 'https://m.media-amazon.com/images/M/MV5BMTM2ODI3NzkyNl5BMl5BanBnXkFtZTYwMDQ3OTYz._V1_.jpg', plot: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.", favourites: [],
}];

const FAVOURITES = [{
  id: 3,
  title: 'The Incredible Hulk',
  genre: 'Action',
  runtime: 112,
  year: '2008-06-13',
  created_at: '2021-08-16T16:26:28.275Z',
  updated_at: '2021-08-23T02:26:03.698Z',
  poster: 'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg',
  director: 'Louis Leterrier',
  photo: 'https://m.media-amazon.com/images/M/MV5BMjAwMDI0NTIyOF5BMl5BanBnXkFtZTYwODcyMzk0._V1_.jpg',
  plot: 'Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.',
  favourites: [{
    id: 40, user_id: 1, movie_id: 3, created_at: '2021-08-26T19:29:27.144Z', updated_at: '2021-08-26T19:29:27.144Z',
  }],
}, {
  id: 9, title: 'Thor: The Dark World', genre: 'Action', runtime: 112, year: '2013-11-08', created_at: '2021-08-23T14:01:25.273Z', updated_at: '2021-08-23T14:01:25.273Z', poster: 'https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg', director: 'Alan Taylor', photo: 'https://m.media-amazon.com/images/M/MV5BMjEyMDg3OTgyMl5BMl5BanBnXkFtZTYwNjEyNzIz._V1_.jpg', plot: 'When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.', favourites: [],
}, {
  id: 42,
  title: 'Alien',
  genre: 'Horror',
  runtime: 117,
  year: '1979-09-06',
  created_at: '2021-08-26T19:37:07.045Z',
  updated_at: '2021-08-26T19:37:07.045Z',
  poster: 'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  director: 'Ridley Scott',
  photo: 'https://m.media-amazon.com/images/M/MV5BMGJkOGM5OWEtNDYxMy00Njg4LWExNjAtY2ZlNWNlNzVhNDk4XkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_.jpg',
  plot: 'After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.',
  favourites: [{
    id: 41, user_id: 1, movie_id: 42, created_at: '2021-08-26T19:38:55.791Z', updated_at: '2021-08-26T19:38:55.791Z',
  }],
}, {
  id: 2,
  title: 'Iron Man',
  genre: 'Action',
  runtime: 126,
  year: '2008-05-02',
  created_at: '2021-08-16T16:25:29.854Z',
  updated_at: '2021-08-23T00:26:21.576Z',
  poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg',
  director: 'Jon Favreau',
  photo: 'https://m.media-amazon.com/images/M/MV5BNjcwNzg4MjktNDNlMC00M2U1LWJmMjgtZTVkMmI4MDI2MTVmXkEyXkFqcGdeQXVyMjI4MDI0NTM@._V1_.jpg',
  plot: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
  favourites: [{
    id: 1, user_id: 1, movie_id: 2, created_at: '2021-08-23T14:19:43.234Z', updated_at: '2021-08-23T14:19:43.234Z',
  }],
}, {
  id: 4, title: 'Iron Man 2', genre: 'Action', runtime: 125, year: '2010-05-07', created_at: '2021-08-16T16:44:52.103Z', updated_at: '2021-08-23T00:33:42.161Z', poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg', director: 'Jon Favreau', photo: 'https://m.media-amazon.com/images/M/MV5BNjcwNzg4MjktNDNlMC00M2U1LWJmMjgtZTVkMmI4MDI2MTVmXkEyXkFqcGdeQXVyMjI4MDI0NTM@._V1_.jpg', plot: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.", favourites: [],
}, {
  id: 5, title: 'Thor', genre: 'Action', runtime: 114, year: '2011-05-06', created_at: '2021-08-16T16:46:59.976Z', updated_at: '2021-08-23T00:40:22.399Z', poster: 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg', director: 'Kenneth Branagh', photo: 'https://m.media-amazon.com/images/M/MV5BMjI0NTQ4Mjk5Ml5BMl5BanBnXkFtZTcwMDc1NjkzNw@@._V1_.jpg', plot: 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.', favourites: [],
}, {
  id: 6, title: 'Captain America: The First Avenger', genre: 'Action', runtime: 124, year: '2011-07-22', created_at: '2021-08-16T16:48:30.515Z', updated_at: '2021-08-23T00:44:24.334Z', poster: 'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_.jpg', director: 'Joe Johnston', photo: 'https://m.media-amazon.com/images/M/MV5BNzcxNDQwNzgxNV5BMl5BanBnXkFtZTYwNTQ1MTA0._V1_.jpg', plot: 'Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.', favourites: [],
}, {
  id: 7,
  title: 'The Avengers',
  genre: 'Action',
  runtime: 143,
  year: '2012-05-04',
  created_at: '2021-08-23T00:50:23.935Z',
  updated_at: '2021-08-23T00:53:33.369Z',
  poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  director: 'Joss Whedon',
  photo: 'https://m.media-amazon.com/images/M/MV5BMTg5MzQ0MDA4MF5BMl5BanBnXkFtZTcwNzUwOTk4OQ@@._V1_.jpg',
  plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  favourites: [{
    id: 4, user_id: 1, movie_id: 7, created_at: '2021-08-26T16:37:13.700Z', updated_at: '2021-08-26T16:37:13.700Z',
  }],
}, {
  id: 8, title: 'Iron Man 3', genre: 'Action', runtime: 131, year: '2013-05-03', created_at: '2021-08-23T02:22:29.697Z', updated_at: '2021-08-23T02:22:29.697Z', poster: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg', director: 'Shane Black', photo: 'https://m.media-amazon.com/images/M/MV5BMTM2ODI3NzkyNl5BMl5BanBnXkFtZTYwMDQ3OTYz._V1_.jpg', plot: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.", favourites: [],
}];

export { MOVIES, FAVOURITES };
