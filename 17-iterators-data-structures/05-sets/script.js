const set = new Set([1,2,3,4,5]);
set.add(9);
console.log(set);
console.log(set.has(5));
set.delete(5);
console.log(set);
const array = Array.from(set);
console.log(array);
const set2 = new Set(array); 
console.log('Set Size:', set.size,typeof set2);
console.log(set.values());
for (const item of set) {
  console.log(item + " TDI");
};
const iterator = set.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
set.clear();

console.log(set);
