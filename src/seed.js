export function seedDatabase(firebase) {
    const users = [
      {
        userId: '69ZMzs3ouFQc82Uhfbsf0vorEI52',
        username: 'ayush',
        fullName: 'Ayush Singh',
        emailAddress: 'ayushsingh@handsome.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'tanmay',
        fullName: 'Tanmay Arora',
        emailAddress: 'tanmay@photography.com',
        following: [],
        followers: ['69ZMzs3ouFQc82Uhfbsf0vorEI52'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'Manav',
        fullName: 'Manav Vaishy',
        emailAddress: 'manav@dali.com',
        following: [],
        followers: ['69ZMzs3ouFQc82Uhfbsf0vorEI52'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'Archie',
        fullName: 'Archie Andrews',
        emailAddress: 'arch@riverdale.com',
        following: [],
        followers: ['69ZMzs3ouFQc82Uhfbsf0vorEI52'],
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'Manav',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'Tanmay',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }