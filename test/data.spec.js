global.window = global;

require('../src/data');
require('./data.spec.js');
const input2 = [{
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
    'name': 'Bulbasaur'
  }, {
    'num': '002',
    'name': 'Ivysaur'
  }]
}, {
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
}];

describe('sortPoke1', () => {
  it('debería ser una función', () => {
    expect(typeof sortPoke1).toEqual('function');
  });

  it('debería retornar Bulbasaur', () => {
    expect(sortPoke1(input2, 'A-Z')[0].name).toEqual('Bulbasaur');
  });
  it('debería retornar Venusaur', () => {
    expect(sortPoke1(input2, 'Z-A')[0].name).toEqual('Venusaur');
  });
});


describe('sortSpawn', () => {
  it('debería ser una función', () => {
    expect(typeof sortSpawn).toEqual('function');
  });

  it('debería retornar 1.7', () => {
    expect(sortSpawn(input2, 'Ascendente')[0].avg_spawns).toEqual(1.7);
  });
  it('debería retornar 69', () => {
    expect(sortSpawn(input2, 'Descendente')[0].avg_spawns).toEqual(69);
  });
});


describe('filterByType', () => {
  it('debería ser una función', () => {
    expect(typeof filterByType).toEqual('function');
  });

  it('debería retornar Charmander', () => {
    expect(filterByType(input2, 'Fire')[0].name).toEqual('Charmander');
  });
});

describe('filterWeaknesses', () => {
  it('debería ser una función', () => {
    expect(typeof filterWeaknesses).toEqual('function');
  });

  it('debería retornar Charmander', () => {
    expect(filterWeaknesses(input2, 'Water')[0].name).toEqual('Charmander');
  });
});

describe('filterPokByKmEgg', () => {
  it('debería ser una función', () => {
    expect(typeof filterPokByKmEgg).toEqual('function');
  });

  it('debería retornar Bulbasaur ', () => {
    expect(filterPokByKmEgg(input2, '2 km')[0].name).toEqual('Bulbasaur');
  });
  it('debería retornar Charmander', () => {
    expect(filterPokByKmEgg(input2, '2 km')[1].name).toEqual('Charmander');
  });
});

describe('calculatePercentageOfPokeFilteredByKmEgg', () => {
  it('debería ser una función', () => {
    expect(typeof calculatePercentageOfPokeFilteredByKmEgg).toEqual('function');
  });

  it('debería retornar un string 1.32', () => {
    expect(calculatePercentageOfPokeFilteredByKmEgg(filterPokByKmEgg(input2, '2 km'))).toEqual('1.32');
  });
});