async function getUsers() {
    const elie = await $.getJSON('https://api.github.com/users/elie');
    const joel = await $.getJSON('https://api.github.com/users/joelburton');
    const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');
  
    return [elie, matt, joel];
  }

console.log(getUsers());
