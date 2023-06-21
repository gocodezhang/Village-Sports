const teams = [
  {
    id: 123,
    name: 'Red Rockets 🚀',
    members: ['Fred', 'Joe', 'Bob', 'Sally'],
    events: [
      {
        name: 'Group Practice',
        location: 'Southcourt Fields',
        date: 'June 27 2023',
        time: '12:30PM',
      },
      {
        name: 'Scrimmage vs Royal Ravens',
        location: 'Cascade Stadium',
        date: 'July 6 2023',
        time: '3:00PM',
      },
      {
        name: 'After Scrim Dinner',
        location: "Winger's Wings & Things",
        date: 'July 6 2023',
        time: '6:00PM',
      },
    ],
    announcements: [
      {
        id: 89,
        text: "Starting in July the Southcourt Fields will be under a landscaping remodel, so we'll be moving our regular practice location to the fields by Kinder Elementary",
        createdAt: 'Mon, 12 Jun 2023 14:00:00 GMT',
      },
      {
        id: 312,
        text: "We're collecting group buy-ins ($10/person) for the After Scrim Dinner. Get those to the Team Captain by Friday, June 30th",
        createdAt: 'Mon, 12 Jun 2023 10:00:00 GMT',
      },
    ],
  },
  {
    id: 125,
    name: 'Oursenal',
    members: ['Ole', 'Mart', 'Jesus', 'Kieran'],
    events: [
      {
        name: 'Game Day',
        location: 'Cascade Stadium',
        date: 'July 7, 2023',
        time: '3:00PM',
      },
      {
        name: 'Practice',
        location: 'Indoor spot',
        date: 'July 10, 2023',
        time: '6:00PM',
      },
    ],
    announcements: [
      {
        id: 23,
        text: 'Granit and Buka are leaving us. We need another mid. Tell your friends!',
        createdAt: 'Wed, 14 Jun 2023 20:00:00 GMT',
      },
    ],
  },
  {
    id: 126,
    name: 'Royal Ravens',
    members: ['Amy', 'Alex', 'Rachel', 'Maggie', 'Karen', 'Jessica', 'Yolanda', 'Maria'],
    events: [
      {
        name: 'Scrimmage vs Red Rockets',
        location: 'Cascade Stadium',
        date: 'July 6, 2023',
        time: '3:00PM',
      },
      {
        name: 'Girls Night',
        location: "Karen's Chateau",
        date: 'July 6, 2023',
        time: '9:00PM',
      },
    ],
    announcements: [
      {
        id: 230,
        text: "Rachel got our league's Golden Boot award! Celebrating on July 6.",
        createdAt: 'Wed, 14 Jun 2023 20:00:00 GMT',
      },
    ],
  },
  {
    id: 134,
    name: 'Frost Kings 👑',
    members: ['William', 'Matt', 'James', 'Alexander', 'Kelvin'],
    events: [
      {
        name: 'Game vs Icebreakers',
        location: 'Glacier Arena',
        date: 'Sat Jun 17 2023',
        time: '7:00PM',
      },
      {
        name: 'Give-and-go Drills',
        location: 'Blizzard Bay Rink',
        date: 'Jun 20 2023',
        time: '5:15PM',
      },
      {
        name: 'Open Rink Mingle',
        location: 'Blizzard Bay Rink',
        date: 'Jun 28 2023',
        time: '3:30PM',
      },
    ],
    announcements: [
      {
        id: 8,
        text: "Attention all members of the Frost King hockey team! We are thrilled to announce our upcoming game against the Icebreakers this Saturday, June 17th at 7PM. Our team has been training hard, refining our skills, and strategizing to come out strong and secure the victory. We're ready to showcase our teamwork, determination, and love for the game.",
        createdAt: 'Tue, 13 Jun 2023 20:00:00 GMT',
      },
    ],
  },
  {
    id: 1355,
    name: 'Icebreakers',
    members: ['Van', 'Ian', 'Mack', 'Michael', 'Matt', 'Matthew', 'Matias'],
    events: [
      {
        name: 'Game vs Frost Kings',
        location: 'Glacier Arena',
        date: 'June 17, 2023',
        time: '7:00PM',
      },
      {
        name: 'Freeskate',
        location: 'Blizzard Bay Rink',
        date: 'June 20, 2023',
        time: '3:00PM',
      },
    ],
    announcements: [
      {
        id: 10,
        text: "Michael's collar bone is broken from last week's game. Collecting funds to help with his medical bills.",
        createdAt: 'Wed, 14 Jun 2023 20:00:00 GMT',
      },
    ],
  },
  {
    id: 1356,
    name: 'Absolute Zero',
    members: ['Anders', 'Bose', 'Albert', 'Maxwell', 'Ludwig'],
    events: [
      {
        name: 'Experimental Drills',
        location: 'Galloway',
        date: 'June 19, 2023',
        time: '10:00AM',
      },
    ],
    announcements: [
    ],
  },
  {
    id: 11,
    name: 'Nebula Nexus (LoL)',
    members: ['David', 'Ryan', 'Tyler', 'Chris', 'Thomas', 'Josh', 'Tobi'],
    events: [
      {
        name: 'NALCS Watch Party',
        location: "Josh's House",
        date: 'July 14, 2023',
        time: '11:30AM',
      },
      {
        name: 'ARAM with the FAM',
        location: "Summoner's Rift",
        date: 'July 16, 2023',
        time: '8:00PM',
      },
      {
        name: 'Jg Callout Drills',
        location: "Summoner's Rift",
        date: 'July 16, 2023',
        time: '9:45PM',
      },
    ],
    announcements: [
      {
        id: 765,
        text: "Due to popular demand, we are pleased to announce the formation of our brand-new TFT team, Fortune's Fury. Stay tuned for further updates",
        createdAt: 'Tue, 13 Jun 2023 10:00:00 GMT',
      },
    ],
  },
  {
    id: 12,
    name: 'Toxic',
    members: ['Dota', 'Fox', 'Chen', 'Mag', 'Sandy', 'Jamal'],
    events: [
      {
        name: 'Team Bonding',
        location: 'The Fox Box',
        date: 'June 22, 2023',
        time: '8:30PM',
      },
      {
        name: 'Chain Queue',
        location: "Summoner's Rift",
        date: 'July 24, 2023',
        time: '7:00AM',
      },
    ],
    announcements: [
      {
        id: 76,
        text: 'BYO for Team Bonding',
        createdAt: 'Wed, 14 Jun 2023 20:00:00 GMT',
      },
    ],
  },
];

export default teams;
