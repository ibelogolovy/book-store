
export default class BookstoreService {
  data = [
    { id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage:'https://images-na.ssl-images-amazon.com/images/I/418luIKZeyL._SY346_.jpg'
    },
    { id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 32,
      coverImage:'https://images-na.ssl-images-amazon.com/images/I/81r%2B-ItFqdL.__SL440_PJku-sticker-v7,TopRight,0,-44AC_SR201,266_OU1_.jpg'
    },
    { id: 3,
      title: 'Teardrop Shot',
      author: 'Tijan',
      price: 4.79,
      coverImage:'https://images-na.ssl-images-amazon.com/images/I/51eX1kregyL.jpg'
    },
    { id: 4,
      title: 'I\'ll Never Tell',
      author: 'Catherine McKenzie ',
      price: 5.99,
      coverImage:'https://images-na.ssl-images-amazon.com/images/I/41N6Ggq3dBL._SY346_.jpg'
    },
    { id: 5,
      title: 'Along the Broken Bay',
      author: 'Flora J. Solomon',
      price: 5.99,
      coverImage:'https://images-na.ssl-images-amazon.com/images/I/51B7QHdxjrL.jpg'
    },
    { id: 6,
      title: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      price: 5.05,
      coverImage:'https://images-na.ssl-images-amazon.com/images/I/51j5p18mJNL.jpg'
    },
    { id: 7,
      title: 'The Handmaid\'s Tale',
      author: 'Margaret Atwood',
      price: 5.99,
      coverImage:'https://images-na.ssl-images-amazon.com/images/I/41aPpkv7ZjL.jpg'
    }
  ];

  dataExtension = [
    { id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      images:[
        { id: 1, url:'https://images-na.ssl-images-amazon.com/images/I/418luIKZeyL._SY346_.jpg' }
      ],
      description: 'One of the biggest challenges for organizations that have adopted microservice architecture is the lack of architectural, operational, and organizational standardization. After splitting a monolithic application or building a microservice ecosystem from scratch, many engineers are left wondering what\'s next. In this practical book, author Susan Fowler presents a set of microservice standards in depth, drawing from her experience standardizing over a thousand microservices at Uber. You wll learn how to design microservices that are stable, reliable, scalable, fault tolerant, performant, monitored, documented, and prepared for any catastrophe',
    },
    { id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      images:[
        { id: 1, url:'https://images-na.ssl-images-amazon.com/images/I/81r%2B-ItFqdL.__SL440_PJku-sticker-v7,TopRight,0,-44AC_SR201,266_OU1_.jpg' }
      ],
      price: 32,
    },
    { id: 3,
      title: 'Teardrop Shot',
      author: 'Tijan',
      price: 4.79,
      images:[
        { id: 1, url:'https://images-na.ssl-images-amazon.com/images/I/81r%2B-ItFqdL.__SL440_PJku-sticker-v7,TopRight,0,-44AC_SR201,266_OU1_.jpg' }
      ]
    }
  ]

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        // if (Math.random() > 0.75) {
        //   reject(new Error('Something bad happened!'));
        // } else resolve(this.data);
        resolve(this.data)
      }, 700);
    });
  }

  getBook(bookId) {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{

        let filtered = this.dataExtension.filter(({ id }) => id === bookId);

        if (filtered.length > 0) {
          resolve(filtered[0]);
        } else {
          reject(new Error('Can not find book!'));
        }
      }, 700);
    });
  }
}
