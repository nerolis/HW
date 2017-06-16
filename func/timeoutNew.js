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
.then(() => console.log('first two seconds'))
.then(() => chen().then(() => console.log('1 second later...')))
.then(() => yukari().then(() => console.log('5 seconds later...')))
.then(() => ran().then(() => console.log('again, 2 sec later. Can we stop?')))
.then(() => boss().then(() => console.log('BOSS: no, its a hell')));
