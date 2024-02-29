export { contactsExport }

function contactsExport () {

  const div = document.getElementById('content')
  const contentWrap = document.createElement('div')
  // sets the div to have an id.
  contentWrap.id = 'wrapper'
  div.appendChild(contentWrap)

  // header for restaurant
  const dinerDiv = document.createElement('div')
  dinerDiv.id = 'diner-name'
  contentWrap.appendChild(dinerDiv)
  // Contact us text.
  const header = document.createElement('h1')
  header.textContent = 'Contact Us'
  dinerDiv.append(header)

  /// MAIN BODY CONTENT ///////////

  // contact div for Boss.
  const contactInfo1 = document.createElement('div')
  contactInfo1.id = 'contact-div'
  contentWrap.appendChild(contactInfo1)
  // contact wrapper
  const contactInfoWrapper = document.createElement('div')
  contactInfo1.appendChild(contactInfoWrapper)
  // contact text
  const contact1 = document.createElement('h1')
  contact1.textContent = 'The Boss'
  contactInfoWrapper.appendChild(contact1)
  // div for pic and info
  const infoPic = document.createElement('div')
  contactInfoWrapper.appendChild(infoPic)
  const informationDiv = document.createElement('div')
  const person1 = document.createElement('p')
  person1.textContent = 'The Josh'
  informationDiv.append(person1)
  const email1 = document.createElement('p')
  email1.textContent = 'whatsit2ya@gmail.com'
  informationDiv.append(email1)
  const phone1 = document.createElement('div')
  phone1.textContent = '551-808-8008'
  informationDiv.append(phone1)
  const profilePic = document.createElement('div')
  const pic = document.createElement('img')
  pic.src = '/src/images/The-Manager.jpg' // src calls the img with javaScript
  profilePic.append(pic)
  infoPic.append(informationDiv, profilePic)

  // contact div for manager
  const contactInfo2 = document.createElement('div')
  contactInfo2.id = 'manager'
  contentWrap.appendChild(contactInfo2)
  // contact text
  const contact2 = document.createElement('h1')
  contact2.textContent = 'The Manager'
  // contact 2 wrapper
  const contactInfo2Wrapper = document.createElement('div')
  contactInfo2.appendChild(contactInfo2Wrapper)
  // info and pic div
  const infoPic2 = document.createElement('div')
  contactInfo2Wrapper.append(contact2)
  contactInfo2Wrapper.append(infoPic2)
  const informationDiv2 = document.createElement('div')
  contactInfo2Wrapper.append(informationDiv2)
  const person2 = document.createElement('p')
  person2.textContent = 'Bill'
  informationDiv2.append(person2)
  const email2 = document.createElement('p')
  email2.textContent = 'Stopcallingme@gmail.com'
  informationDiv2.append(email2)
  const phone2 = document.createElement('p')
  phone2.textContent = '555-112-5555'
  informationDiv2.append(phone2)
  const profilePic2 = document.createElement('div')
  const pic2 = document.createElement('img')
  pic2.src = '/src/images/The-Guy.jpeg'
  profilePic2.append(pic2)
  infoPic2.append(informationDiv2, profilePic2)

  // Hiriing manager
  const contactInfo3 = document.createElement('div')
  contactInfo3.id = 'hire-manager'
  contentWrap.appendChild(contactInfo3)
  const contact3 = document.createElement('h1')
  contact3.textContent = 'Hiring Manager'
  contactInfo3.appendChild(contact3)
  const contactInfo3Wrapper = document.createElement('div')
  contactInfo3.appendChild(contactInfo3Wrapper)
  // info and pic div
  const infoPic3 = document.createElement('div')
  contactInfo3Wrapper.append(contact3)
  contactInfo3Wrapper.append(infoPic3)
  const informationDiv3 = document.createElement('div')
  contactInfo3Wrapper.append(informationDiv3)
  const person3 = document.createElement('p')
  person3.textContent = 'The Serg'
  informationDiv3.append(person3)
  const email3 = document.createElement('p')
  email3.textContent = 'Stopcallingme@gmail.com'
  informationDiv3.append(email3)
  const phone3 = document.createElement('p')
  phone3.textContent = '555-112-5555'
  informationDiv3.append(phone3)
  const profilePic3 = document.createElement('div')
  const pic3 = document.createElement('img')
  pic3.src = '/src/images/The-Serg.jpeg'
  profilePic3.append(pic3)
  infoPic3.append(informationDiv3, profilePic3)

  /// MAIN BODY COONTENT /////////
  // footer div.
  const footer = document.createElement('div')
  footer.id = 'footer'
  div.appendChild(footer)
  const icon = document.createElement('p')
  icon.textContent = 'Background image was found on wallpapers.com'
  footer.append(icon)

  // CSS STYLING SECTION

  // main div css styling.
  div.style.cssText = `
    text-align:center;
    height:150vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius: 10px 0px 10px 0px;
    `

  // wrapper css.
  contentWrap.style.cssText = `
    background:url(/src/images/space-background.jpg);
    width: 90%;
    display: flex;
    flex-direction: column;
    height: 95%;
    margin: auto;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px 0px 10px 0px;
    margin: 10px;
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

  // contact div
  document.getElementById('contact-div').style.cssText = `
    width: 350px;
    margin-left: 40%;
    height: 280px;
    background-color: gray;
    border-radius: 10px 0px 10px 0px;
    border: 5px solid black;
    `

  document.getElementById('manager').style.cssText = `
    width: 350px;
    height: 280px;
    margin-right: 40%;
    background-color: gray;
    border-radius: 10px 0px 10px 0px;
    border: 5px solid black;
    `

  document.getElementById('hire-manager').style.cssText = `
    width: 350px;
    height: 280px;
    margin-left: 40%;
    background-color: gray;
    border-radius: 10px 0px 10px 0px;
    border: 5px solid black;
    `

  // contact profile pic

  pic.style.cssText = `
    width: 125px;
    height: 150px;
    `

  pic2.style.cssText = `
    width: 125px;
    height: 150px;
    `

  pic3.style.cssText = `
    width: 125px;
    height: 150px;
    `

  infoPic.style.cssText = `
    display: flex;
    justify-content: space-around;
    align-items: center;
    `

  infoPic2.style.cssText = `
    display: flex;
    justify-content: space-around;
    align-items: center;
    `

  infoPic3.style.cssText = `
    display: flex;
    justify-content: space-around;
    align-items: center;
    `
}
