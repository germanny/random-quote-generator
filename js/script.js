/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/



/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
  {
    quote: 'It\'s the possibility of having a dream come true that makes life interesting.',
    source: 'Paulo Coelho',
    citation: 'The Alchemist',
    year: 1988,
  },
  {
    quote: 'There is no greater agony than bearing an untold story inside you.',
    source: 'Maya Angelou',
    citation: 'I Know Why the Caged Bird Sings',
  },
  {
    quote: 'And so we beat on, boats against the current, borne back ceaselessly into the past.',
    source: 'F. Scott Fitzgerald',
    citation: 'The Great Gatsby',
    year: 1925,
  },
  {
    quote: 'It was times like these when I thought my father, who hated guns and had never been to any wars, was the bravest man who ever lived.',
    source: 'Harper Lee',
    citation: 'To Kill A Mockingbird',
    year: 1960,
  },
  {
    quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You\'re on your own. And you know what you know. And YOU are the one who\'ll decide where to go...',
    source: 'Dr. Seuss',
    citation: 'Oh, The Places You\'ll Go!',
  },
  {
    quote: 'Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches.',
    source: 'William Goldman',
    citation: 'The Princess Bride',
    year: 1973,
  },
  {
    quote: 'Love is the longing for the half of ourselves we have lost.',
    source: 'Milan Kundera',
    citation: 'The Unbearable Lightness of Being',
  },
  {
    quote: 'We\’ve all got both light and dark inside us. What matters is the part we choose to act on. That\’s who we really are.',
    source: 'J. K. Rowling',
    citation: 'Harry Potter and the Order of the Phoenix',
  },
  {
    quote: 'Get busy living or get busy dying.',
    source: 'Stephen King',
    citation: 'The Shawshank Redemption',
    year: 1982,
  },
  {
    quote: 'All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost.',
    source: 'J. R. R. Tolkien',
    citation: 'The Fellowship of the Ring',
    year: 1954,
  },
  {
    quote: 'My advice is, never do tomorrow what you can do today. Procrastination is the thief of time.',
    source: 'Charles Dickens',
    citation: 'David Copperfield',
    year: 1850,
  },
];


/***
 * `getRandomQuote` function
 * @param {array} quotes - The array of objects containing quote, source, citation (optional), and year (optional).
 * @returns {object} One object from the quotesArray chosen at random.

***/
function getRandomQuote(quotes) {
  // if quotesArray is empty, return nothing
  if (!quotes) {
    return;
  }

  // generate random number
  const randomNumber = Math.floor(Math.random() * quotes.length);

  // return object at index [randomNumber]
  return quotes[randomNumber];
}


/***
 * `printQuote` function
 * @returns {string} The HTML string to display the quote.
***/
function printQuote() {
  // generate a random quote (apparently `quotes` is gleened from global scope
  const randomQuote = getRandomQuote(quotes);

  // start the html string variable
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  // add citation if it exists in the object
  if (randomQuote.citation) {
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }

  // add year if it exists in the object
  if (randomQuote.year) {
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }

  // cheeky tag closer
  html += '</p>';

  // add the html string to the container and return it
  return document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
