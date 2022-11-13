document.getElementById('last-modify').innerHTML = (document.lastModified);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

const requestURL = 'data.JSON';
const cards = document.querySelector('.cards');

function displayCompanies(companies) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let logo = document.createElement('img');
  let website = document.createElement('p');

  h2.textContent = `${companies.name}`;
  p1.textContent = `${companies.address}`;
  p2.textContent = `${companies.phoneNumber}`;
  p3.textContent = `Membership Level: ${companies.memberLevel}`
  website.textContent = `${companies.website}`
  // Build the image attributes by using the setAttribute method
  // for the src, alt, and loading attribute values.
  // (Fill in the blank with the appropriate variable).
  logo.setAttribute('src', companies.logo);
  logo.setAttribute('alt', `Logo for ${companies.name}`);
  logo.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(website);
  card.appendChild(logo);
  card.appendChild(p3);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    const companies = jsonObject['companies'];
    //console.table(jsonObject);
    companies.forEach(displayCompanies);
});