function createClub(age){
  return age >= 18 ?
    (name) => {return 'Yes, ' + name;} :
    (name) => {return 'No, ' + name;};
}

  let clubEnter = [];
  for (let i = 0, x = 50; i < x; i++) {
    clubEnter[i] = createClub(i);
  }

  console.log(clubEnter[18] ('Enter'));
  console.log(clubEnter[17] ('Go away, too young'));
