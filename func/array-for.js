var createGreeting (age) => {
  return age> 18 ?
    (name) => {return 'Yes, ' + name;} :
    (name) => {return 'No, ' + name;};
}

  let greetings = [];
  for (let i = 0, x = 50; i < x; i++) {
    greetings(i) = createGreeting(i);
  }

  console.log(greetings[24] ('Enter'));
  console.log(greetings[12] ('Go away'));
