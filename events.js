document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const phoneno = document.getElementById('phoneno').value.trim();
    
    // if (isNaN(age)) {
    //   alert("Age must be a number not  alphabets!");
    //   return;
    // }
    // if (isNaN(phoneno)) {
    //     alert("PhoneNumber  is must be a number not alphabets!");
    //     return;
    //   }
      alert('Name: ' + name);
      alert('Email: ' + email);
      alert('Age: ' + age);
      alert('Phone No: ' + phoneno);
      alert('Country: ' + country);
      alert('City: ' + city);
      alert('Gender: ' + gender);
      alert('Message:\n' + message);
      alert('Your data has been saved successfully! ✅');
 
    // Optionally, reset the form
    this.reset();
  });
  const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');

// Country and cities data
const countryCityData = {
  Pakistan: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad'],
  USA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
  India: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'],
  UK: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow'],
  Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
  Canada: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
  Germany: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt'],
  France: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice'],
  Japan: ['Tokyo', 'Osaka', 'Kyoto', 'Nagoya', 'Sapporo'],
  China: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu'],
  Brazil: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza'],
  Mexico: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana'],
  Russia: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Nizhny Novgorod'],
  SouthAfrica: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'],
  Italy: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo'],
  Spain: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza'],
  Netherlands: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven'],
  Turkey: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Adana'],
  SouthKorea: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'],
  SaudiArabia: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam'],
  Argentina: ['Buenos Aires', 'Cordoba', 'Rosario', 'Mendoza', 'La Plata'],
  Sweden: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås'],
  Norway: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Drammen'],
  NewZealand: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga'],
  Egypt: ['Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said']
};

// Populate country dropdown
function populateCountries() {
  for (let country in countryCityData) {
    let option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  }
  // Set default country to Pakistan
  countrySelect.value = 'Pakistan';
  populateCities('Pakistan');
}

// Populate cities dropdown based on selected country
function populateCities(country) {
  citySelect.innerHTML = '';
  const cities = countryCityData[country];
  cities.forEach(city => {
    let option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
  if (country === 'Pakistan') {
    citySelect.value = 'Karachi'; 
  }
}

// On country change, update cities
countrySelect.addEventListener('change', () => {
  populateCities(countrySelect.value);
});

// Validation on blur event for name, email, age
function validateName() {
  const name = this.value.trim();
  if (name === '') {
    alert('Name cannot be empty!');
  }
}

function validateEmail() {
  const email = this.value.trim();
  if (email === '') {
    alert('Email cannot be empty!');
  } else if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email!');
  }
}

function validateAge() {
  const age = this.value.trim();
  if (age === '') {
    alert('Age cannot be empty!');
  } else if (isNaN(age)) {
    alert('Age must be a number!');
  }
}

// Attach blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('age').addEventListener('blur', validateAge);

document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = document.getElementById('age').value.trim();
  const phoneno = document.getElementById('phoneno').value.trim();
  const country = countrySelect.value.trim();
  const city = citySelect.value .trim();
  const gender = document.getElementById('gender').value .trim();
  const message = document.getElementById('message').value.trim();

//   if (!name || !email || !age || !phoneno || !country || !city || !gender || !message) {
//     alert('Please fill in all required fields!');
//     return;
//   }

  if (isNaN(age)) {
    alert('Age must be a number!');
    return;
  }

  if (isNaN(phoneno)) {
    alert('Phone number must be numeric!');
    return;
  }

  if (message.split('\n').length > 5) {
    alert('Message too long, max 5 lines allowed!');
    return;
  }



  // Reset country and cities to default after reset
  countrySelect.value = 'Pakistan';
  populateCities('Pakistan');
});
  
// Initialize countries on page load
populateCountries();
