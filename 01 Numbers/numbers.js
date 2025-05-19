//Part 1: Number Facts
let number = 3;
let url = "http://numbersapi.com"


// 1: Get a fact about your favorite number 
$.getJSON(`${url}/${number}?json`).then(data => {console.log(data);});

// 2: Get data on multiple numbers in a single request
let numbers = [3,5,7]
$.getJSON(`${url}/${numbers}?json`).then(data => {console.log(data);});

// 3: Use the API to get 4 facts on your favorite number. 
// Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${url}/${number}?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });