function validateForm() {
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
  
    if (name === '' || email === '' || age === '') {
      window.prompt('Please fill out all fields.');
      return;
    }
    
    
    if (isNaN(age)) {
      window.alert('Age must be a number.');
      return;
    }
    
   
    if (!/^[a-zA-Z]+$/.test(name)) {
      window.prompt('Please type only letters in the Name field.');
      return;
    }
    
    window.alert('Form submitted successfully!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Age:', age);
  }