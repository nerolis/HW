const ran = () => new Promise((resolve, reject) => {
setTimeout(resolve, 2000);
});

const chen = () => new Promise((resolve, reject) => {
setTimeout(resolve, 1000);
});

const yukari = () => new Promise((resolve, reject) => {
setTimeout(resolve, 5000);
});

const boss = () => new Promise((resolve, reject) => {
setTimeout(resolve, 2000);
});
//  https://www.sitepoint.com/currying-in-functional-javascript/
ran() // initiate
.then(() => chen().then(() => console.log('all'))).then(() => console.log('fin')).then(() => console.log('you sure?'))
.then(() => yukari().then(() => console.log('past another 3 seconds...')))
.then(() => boss().then(() => console.log('YES')));