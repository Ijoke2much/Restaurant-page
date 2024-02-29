
const name = 'test import works';

const navigationDiv = function()  {
  // Navigation div
  const nav = document.createElement('div')
  nav.id = 'navigation'
  // makes navigation div as the first child.
  // prepend
 const div = document.getElementById('content');
 div.append(nav);
  
  const home = document.createElement('button')
  home.id = 'btnHome'
  home.textContent = 'home';

  const menu = document.createElement('button')
  menu.id = 'btnMenu'
  menu.textContent = 'Menu'

  const contact = document.createElement('button')
  contact.id = 'btnContact'
  contact.textContent = 'Contact'

  nav.append(home, menu, contact)

  // nav css
  nav.style.cssText = `
  width:100%;
  background-color:purple;
  height:5%;
  display:flex;
  justify-content:space-evenly;
  `;

  document.body.style.cssText = `
  background: url(/src/images/space-background.jpg);
  `;

  // buttons css
  document.getElementById('btnHome').style.cssText = `
  color:black;
  width:150px;
  height:50px;
  `;

  document.getElementById('btnMenu').style.cssText = `
  color:red;
  width:150px;
  height:50px;
  `;

  document.getElementById('btnContact').style.cssText = `
  color:red;
  width:150px;
  height:50px;
  `;

};

function handleButtonClick(renderFunction) {
  //Removes Existing Wrapper div if it Exists
  const existingWrappers = document.getElementById('wrapper');
  const existingFooters = document.getElementById("footer");
  if (existingWrappers && existingFooters){
    existingWrappers.remove();
    existingFooters.remove();
  }
  renderFunction();
  //Load new JS scriptbased on click button

}

export { name, navigationDiv, handleButtonClick };