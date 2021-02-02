const ages = [10, 20, 12, 15,18];
const ages2 = [30, 10, 15];
const ages3 = [10, 15,20];
// const allAges = ages.concat(ages2).concat([10]).concat(ages3);
const allAges = [...ages, ...ages2, ...ages3,5];
console.log(allAges);


const business = 550;
const minister = 1000;
const shochib = 800;
const maximum = Math.max(business, minister, shochib);
console.log(maximum);

const takapoisha = [500,800, 50,700];
const maximum2 = Math.max(...takapoisha);
console.log(maximum2);
