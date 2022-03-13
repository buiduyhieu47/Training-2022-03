 // this is my first commentlet 
  console.log("Hello World");

// variable practive
  let name = 'Me';
  console.log(name);

  // Cannot be a reserved keyword
  // Should be meaningful
  // Cannot start with a number (1name)
  // Cannot contain a space or hyphen
  // Are case sensitive

  let interestRate = 0.3;
  interestRate = 1;
  console.log(interestRate);


  const maxAge = 99;
  console.log(maxAge);

  // object sample
  let person = {
    name:'Mosh',
    age : 30
  };

  //  dot notation
  person.age = 33;


  // bracket notation
  person['age'] = 35
  //
  let selection ='age';
  person[selection] = 40;

  console.log(person.age);
   
  // array sample
  let selectedColors = ['yellow','black'];
  selectedColors[2] = 'white';
  selectedColors[3] = 3;
  console.log(selectedColors);
  console.log(selectedColors[1]);
  console.log(selectedColors.length);

  // template literals
  var firstName = "Hieu";
  var fullName = "Toi ten la " + firstName;
  //document.getElementById('fullName').innerHTML=fullName;

 const age = 25;
 console.log(`Nam nay toi ${age} tuoi`);