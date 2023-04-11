import Team from '../team';
import Character from '../character';

test('check adding character to the team', () => {
  const newTeam = new Team();
  const character = new Character('Ilya', 'Magician');
  newTeam.add(character);
  const recieved = newTeam.members;
  const expected = new Set([{
    name: 'Ilya',
    type: 'Magician',
    health: 100,
    level: 1,
  }]);
  expect(recieved).toEqual(expected);
});

test('check adding character double', () => {
  const newTeam = new Team();
  const character = new Character('Ilya', 'Magician');
  newTeam.add(character);
  expect(() => { newTeam.add(character); }).toThrow(new Error('Unable to add character twice'));
});

test('check adding two characters to the team', () => {
  const newTeam = new Team();
  const character1 = new Character('Ilya', 'Magician');
  const character2 = new Character('Ivan', 'Daemon');
  newTeam.addAll(character1, character2);
  const recieved = newTeam.members;
  const expected = new Set([{
    name: 'Ilya',
    type: 'Magician',
    health: 100,
    level: 1,
  },
  {
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
  },
  ]);
  expect(recieved).toEqual(expected);
});

test('check adding characters to the team with doubles', () => {
  const newTeam = new Team();
  const character1 = new Character('Ilya', 'Magician');
  const character2 = new Character('Ivan', 'Daemon');
  newTeam.addAll(character1, character2, character1);
  const recieved = newTeam.members;
  const expected = new Set([{
    name: 'Ilya',
    type: 'Magician',
    health: 100,
    level: 1,
  },
  {
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
  },
  ]);
  expect(recieved).toEqual(expected);
});

test('check toArray function', () => {
  const newTeam = new Team();
  const character1 = new Character('Ilya', 'Magician');
  const character2 = new Character('Ivan', 'Daemon');
  newTeam.addAll(character1, character2);
  const recieved = newTeam.toArray();
  const expected = [{
    name: 'Ilya',
    type: 'Magician',
    health: 100,
    level: 1,
  },
  {
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
  },
  ];
  expect(recieved).toEqual(expected);
});
