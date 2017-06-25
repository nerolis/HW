const profile = {
  firstName: '', 
  lastName: '', 
    setName: function(name) {
    let splitName = (n) => {
    let nameArray = n.split(' ');
  this.firstName = nameArray[0];
  this.secondName = nameArray[1];
  }
	splitName(name)
 }
                 
}
profile.setName('yet chto');
console.log(profile.firstName);