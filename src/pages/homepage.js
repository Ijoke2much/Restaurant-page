
const homepageExport = function() {
  // main div for content
  const div = document.getElementById('content');
  const contentWrap = document.createElement('div');
  // sets the div to have an id.
  contentWrap.id = 'wrapper';
  div.append(contentWrap)

  // header for restaurant
  const dinerDiv = document.createElement('div');
  dinerDiv.id = 'diner-name';
  contentWrap.append(dinerDiv);
  // header text.
  const header = document.createElement('h1');
  header.textContent = 'Astro Diner';
  dinerDiv.append(header);

  // headline for restaurant
  const headlineDiv = document.createElement('div');
  headlineDiv.id = 'headline-div';
  contentWrap.append(headlineDiv);
  const headline = document.createElement('h2');
  headline.textContent = 'Headline: Taking a bit of space into your everyday morning!';
  headlineDiv.append(headline);

  // description for diner
  const descripDiv = document.createElement('div')
  descripDiv.id = 'description-div'
  contentWrap.append(descripDiv)
  const description = document.createElement('h3')
  description.textContent = 'Description: The is a space themed Diner who love to relive some of the clasic spaced theme nastalgia or feeling of a futuristic dream of dining in space!'
  descripDiv.append(description)

  // Hours of Diner
  const hourDiv = document.createElement('div')
  hourDiv.id = 'hour-div'
  contentWrap.append(hourDiv)
  const hours = document.createElement('h3')
  hours.textContent = '24 Hours all Year long!'
  hourDiv.append(hours)

  // location of Diner
  const locateDiv = document.createElement('div')
  locateDiv.id = 'locate-div'
  contentWrap.append(locateDiv)
  const locate = document.createElement('h2')
  const spot = document.createElement('p')
  locate.textContent = 'Location'
  spot.textContent = 'The Land of the Josh'
  locateDiv.append(locate, spot)

  // footer div.
  const footer = document.createElement('div')
  footer.id = 'footer'
  div.append(footer)
  const icon = document.createElement('p')
  icon.textContent = 'Background image was found on wallpapers.com'
  footer.append(icon)

  // CSS STYLING SECTION

  // main div css styling.
  div.style.cssText = `
    text-align:center;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius: 10px 0px 10px 0px;
    `

  // wrapper css.
  contentWrap.style.cssText = `
    background:url(./images/space-background.jpg);
    display: flex;
    flex-direction: column;
    height: 95%;
    margin: auto;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px 0px 10px 0px;
    `

  // footer css
  footer.style.cssText = `
    width:100%;
    background-color:purple;
    height:50px;
    `

  // Footer text css
  icon.style.cssText = `
    color: white;
    `

  // body css
  document.body.style.cssText = `
    margin:0;
    padding:0;
    display:border-box;
    `

  // diner div css
  dinerDiv.style.cssText = `
    border:10px solid purple;
    background-color:orange;
    padding:5px;
    width: 450px;
    border-radius: 40px;
    `

  // headline css
  headlineDiv.style.cssText = `
    border:5px solid purple;
    background-color:orange;
    padding:5px;
    border-radius: 10px 0px 10px 0px;
    margin-right: 45%;
    `

  // description div css
  descripDiv.style.cssText = `
    border:5px solid MediumSlateBlue;
    background-color:MediumOrchid;
    padding:5px;
    border-radius: 10px 0px 10px 0px;
    width: 55%;
    margin-left: 45%;
    `

  // hour div css
  hourDiv.style.cssText = `
    display: flex;
    border: 5px solid purple;
    background-color:orange;
    flex-direction: column;
    align-items: center;
    width: 55%;
    height: 15%;
    justify-content: center;
    border-radius: 10px 0px 10px 0px;
    margin-right: 45%;
    `

  // location div css
  locateDiv.style.cssText = `
    display: flex;
    border: 5px solid MediumSlateBlue;
    background-color:MediumOrchid;
    flex-direction: column;
    align-items: center;
    width: 55%;
    height: 20%;
    border-radius: 10px 0px 10px 0px;
    margin-left: 45%;
    `;
    
    spot.style.margin = 'unset';

  return div;
};

export default homepageExport;
