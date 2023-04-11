import Character from './character';
import Team from './team';

const character = new Character('Ilya', 'Magician');

const newTeam = new Team();

newTeam.add(character);
console.log(newTeam.members);
