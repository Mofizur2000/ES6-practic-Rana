const person = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'kochu khet', phone: '01741791093',  friends:['Tom handks', 'Tom cruze', 'Rana', 'Rubel']};

const { phone, gfName, address, salary } = person;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);

const friends = ['salman', 'skib', 'sleman', 'sumia']
const [ cotoFriend, nextFriend, ...restFriends ] = friends;
console.log(restFriends);