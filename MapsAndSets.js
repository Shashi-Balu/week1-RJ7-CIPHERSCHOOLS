let map = new Map();
map.set(1, "Shashi");
map.set(2, "Ritika");
map.set(3, "Simran");

console.log(map);
console.log(map.keys());
console.log(map.has("Ritika"));
console.log(map.values());

let set = new Set();

set.add("Harman");
set.add("Shashi");
set.add("Ritika");

console.log(set);

let arr = [...set];
console.log(arr);
