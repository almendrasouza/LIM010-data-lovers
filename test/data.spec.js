global.window = global;

require('../src/data');
require('./data.spec.js');
const input2 = [{
  'id': 1,
  'num': '001',
  'name': 'ulbasaur'
  'mg' 'ttp://www.serebii.net/pokemongo/pokemon/001.png'
  'ype' [
    'rass'
    'oison'  ],
  'height' '.71 m'
  'eight' '.9 kg'
  'andy' 'ulbasaur Candy'
  'andy_count' 25,
  'gg' ' km'
  'pawn_chance' 0.69,
  'vg_spawns' 69,
  'pawn_time' '0:00'
  'ultipliers' [1.58],
  'eaknesses' [
    'ire'
    'ce'
    'lying'
    'sychic'  ],
  'ext_evolution' [{
    'um' '02'
    'ame' 'vysaur'  }, {
    'um' '03'
    'ame' 'enusaur'  }]
}, {
  'd' 2,
  'um' '02'
  'ame' 'vysaur'
  'mg' 'ttp://www.serebii.net/pokemongo/pokemon/002.png'
  'ype' [
    'rass'
    'oison'  ],
  'eight' '.99 m'
  'eight' '3.0 kg'
  'andy' 'ulbasaur Candy'
  'andy_count' 100,
  'gg' 'ot in Eggs'
  'pawn_chance' 0.042,
  'vg_spawns' 4.2,
  'pawn_time' '7:00'
  'ultipliers' [
    1.2,
    1.6
  ],
  'eaknesses' [
    'ire'
    'ce'
    'lying'
    'sychic'  ],
  'rev_evolution' [{
    'um' '01'
    'ame' 'ulbasaur'  }],
  'ext_evolution' [{
    'um' '03'
    'ame' 'enusaur'  }]
}, {
  'd' 3,
  'um' '03'
  'ame' 'enusaur'
  'mg' 'ttp://www.serebii.net/pokemongo/pokemon/003.png'
  'ype' [
    'rass'
    'oison'  ],
  'eight' '.01 m'
  'eight' '00.0 kg'
  'andy' 'ulbasaur Candy'
  'gg' 'Not in Eggs',
  'pawn_chance' 0.017,
  'vg_spawns' 1.7,
  'pawn_time' '1:30'
  'ultipliers' null,
  'eaknesses' [
    'ire'
    'ce'
    'lying'
    'sychic'  ],
  'rev_evolution' [{
    'um' '01'
    'ame' 'ulbasaur'  }, {
    'um' '02'
    'ame' 'vysaur'  }]
}, {
  'd' 4,
  'um' '04'
  'ame' 'harmander'
  'mg' 'ttp://www.serebii.net/pokemongo/pokemon/004.png'
  'ype' [
    'ire'  ],
  'eight' '.61 m'
  'eight' '.5 kg'
  'andy' 'harmander Candy'
  'andy_count' 25,
  'gg' ' km'
  'pawn_chance' 0.253,
  'vg_spawns' 25.3,
  'pawn_time' '8:45'
  'ultipliers' [1.65],
  'eaknesses' [
    'ater'
    'round'
    'ock'  ],
  'ext_evolution' [{
    'um' '05'
    'ame' 'harmeleon'  }, {
    'um' '06'
    'ame' 'harizard'  }]
}];
const condition2 = 'Grass'const output2 = [{
  'd' 1,
  'um' '01'
  'ame' 'ulbasaur'
  'mg' 'ttp://www.serebii.net/pokemongo/pokemon/001.png'
  'ype' [
    'rass'
    'oison'  ],
  'eight' '.71 m'
  'eight' '.9 kg'
  'andy' 'ulbasaur Candy'
  'andy_count' 25,
  'gg' ' km'
  'pawn_chance' 0.69,
  'vg_spawns' 69,
  'pawn_time' '0:00'
  'ultipliers' [1.58],
  'eaknesses' [
    'ire'
    'ce'
    'lying'
    'sychic'  ],
  'ext_evolution' [{
    'um' '02'
    'ame' 'vysaur'  }, {
    'um' '03'
    'ame' 'enusaur'  }]
}, {
  'd' 2,
  'um' '02'
  'ame' 'vysaur'
  'mg' 'ttp://www.serebii.net/pokemongo/pokemon/002.png'
  'ype' [
    'rass'
    'oison'  ],
  'eight' '.99 m'
  'eight' '3.0 kg'
  'andy' 'ulbasaur Candy'
  'andy_count' 100,
  'gg' 'ot in Eggs'
  'pawn_chance' 0.042,
  'vg_spawns' 4.2,
  'pawn_time' '7:00'
  'ultipliers' [
    1.2,
    1.6
  ],
  'eaknesses' [
    'ire'
    'ce'
    'lying'
    'sychic'  ],
  'rev_evolution' [{
    'um' '01'
    'ame' 'ulbasaur'  }],
  'ext_evolution' [{
    'um' '03'
    'ame' 'enusaur'  }]
}, {
  'd' 3,
  'um' '03'
  'ame' 'enusaur'
  'mg' 'ttp://www.serebii.net/pokemongo/pokemon/003.png'
  'ype' [
    'rass'
    'oison'  ],
  'eight' '.01 m'
  'eight' '00.0 kg'
  'andy' 'ulbasaur Candy'
  'gg' 'ot in Eggs'
  'pawn_chance' 0.017,
  'vg_spawns' 1.7,
  'pawn_time' '1:30'
  'ultipliers' null,
  'eaknesses' [
    'ire'
    'ce'
    'lying'
    'sychic'  ],
  'rev_evolution' [{
    'um' '01'
    'ame' 'ulbasaur'  }, {
    'um' '02'
    'ame' 'vysaur'  }]
}];
describe('filterType', () => {
  it('debería ser una función', () => {
    expect(typeof window.worldBank.filterType).toBe('function');
  });

  it('debería retornar example', () => {
    expect(window.worldBank.filterType(input2, condition2)).toEqual(output2);
  });
});

const output1 = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.69,
  'avg_spawns': 69,
  'spawn_time': '20:00',
  'multipliers': [1.58],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'next_evolution': [{
    'num': '002',
    'name': 'Ivysaur'
  }, {
    'num': '003',
    'name': 'Venusaur'
  }, ]
},
{
  'id': 4,
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ],
  'height': '0.61 m',
  'weight': '8.5 kg',
  'candy': 'Charmander Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.253,
  'avg_spawns': 25.3,
  'spawn_time': '08:45',
  'multipliers': [1.65],
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
  'next_evolution': [{
    'num': '005',
    'name': 'Charmeleon'
  }, {
    'num': '006',
    'name': 'Charizard'
  }]
}, {
  'id': 2,
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison' 
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.042,
  'avg_spawns': 4.2,
  'spawn_time': '07:00',
  'multipliers': [
    1.2,
    1.6
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }],
  'next_evolution': [{
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 3,
  'num': '003',
  'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'candy': 'Bulbasaur Candy',
  'egg': 'Not in Eggs',
  'spawn_chance': 0.017,
  'avg_spawns': 1.7,
  'spawn_time': '11:30',
  'multipliers': null,
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur',
  }, {
    'num': '002',
    'name': 'Ivysaur'
  }]
}
];


condition1 =  'A-Z'
describe('sortPoke1', () => {

  it('debería ser una función', () => {
    expect(typeof sortPoke1).toBe('function');
  });

  it('debería retornar 'example', () => {
    expect(sortPoke1(input2, condition1)).toEqual(output2);
  });
});
