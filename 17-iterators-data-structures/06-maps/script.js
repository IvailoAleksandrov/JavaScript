

const peopleMap = new Map();
peopleMap.set('brad', { phone: '555-555-5555', email: 'brad@gmail.com' });
peopleMap.set('jack', { phone: '555-555-5555', email: 'jack@gmail.com' });
peopleMap.set('jill', { phone: '555-555-5555', email: 'jill@gmail.com' });

peopleMap.forEach((person) => console.log(person.email));

console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const iterator = peopleMap.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);
