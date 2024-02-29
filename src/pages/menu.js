export { menuExport }

function menuExport() {

  const div = document.getElementById('content')
  const contentWrap = document.createElement('div')
  // sets the div to have an id.
  contentWrap.id = 'wrapper'
  div.appendChild(contentWrap)

  // header for restaurant
  const dinerDiv = document.createElement('div')
  dinerDiv.id = 'diner-name'
  contentWrap.appendChild(dinerDiv)
  // header text.
  const header = document.createElement('h1')
  header.textContent = 'Astro Diner Menu'
  dinerDiv.append(header)

  // footer div.
  const footer = document.createElement('div')
  footer.id = 'footer'
  div.appendChild(footer)
  const icon = document.createElement('p')
  icon.textContent = 'Background image was found on wallpapers.com'
  footer.append(icon)

  // menu div

  // content
  const menuDiv = document.createElement('div')
  menuDiv.id = 'menu-div'
  contentWrap.append(menuDiv)
  const appetizers = document.createElement('h1')
  appetizers.id = 'appetizers'
  appetizers.textContent = 'Appetizers'
  menuDiv.append(appetizers)

  // first row of divs
  const firstRow = document.createElement('div')
  firstRow.id = 'first-row'
  menuDiv.append(firstRow)
  const entree = document.createElement('h1')
  entree.id = 'entree'
  entree.textContent = 'Entrees'
  menuDiv.append(entree)
  // second row of divs
  const secondRow = document.createElement('div')
  secondRow.id = 'second-row'
  menuDiv.append(secondRow)

  // first menu item
  const firstItem = document.createElement('div')
  firstItem.id = 'first-item'
  const title1 = document.createElement('h3')
  title1.textContent = 'Pasta'
  const image1 = document.createElement('img')
  image1.id = 'image-1'
  image1.src = '/src/images/Fettuccine.jpeg'
  firstItem.append(title1, image1)
  firstRow.append(firstItem)

  // second menu item
  const secondItem = document.createElement('div')
  secondItem.id = 'second-item'
  const title2 = document.createElement('h3')
  title2.textContent = 'Fries'
  const image2 = document.createElement('img')
  image2.id = 'image-2'
  image2.src = '/src/images/fries.jpeg'
  secondItem.append(title2, image2)
  firstRow.append(secondItem)

  // third menu item
  const thirdItem = document.createElement('div')
  thirdItem.id = 'third-item'
  const title3 = document.createElement('h3')
  title3.textContent = 'Chicken'
  const image3 = document.createElement('img')
  image3.id = 'image-3'
  image3.src = '/src/images/chicken.jpeg'
  thirdItem.append(title3, image3)
  firstRow.append(thirdItem)

  // SECOND ROW

  // first Item
  const firstEntree = document.createElement('div')
  const title4 = document.createElement('h3')
  title4.textContent = 'Fries and Eggs'
  const image4 = document.createElement('img')
  image4.id = 'image-4'
  image4.src = '/src/images/fries-eggs.jpeg'
  firstEntree.append(title4, image4)
  secondRow.append(firstEntree)

  // second Item
  const secondEntree = document.createElement('div')
  const title5 = document.createElement('h3')
  title5.textContent = 'chicken and Pasta'
  const image5 = document.createElement('img')
  image5.id = 'image-5'
  image5.src = '/src/images/chicken-pasta.jpeg'
  secondEntree.append(title5, image5)
  secondRow.append(secondEntree)

  // third item
  const thirdEntree = document.createElement('div')
  thirdEntree.id = 'third-entree'
  const title6 = document.createElement('h3')
  title6.textContent = 'Pasta & Meatballs'
  const image6 = document.createElement('img')
  image6.id = 'image-6'
  image6.src = '/src/images/pasta-meatballs.jpeg'
  thirdEntree.append(title6, image6)
  secondRow.append(thirdEntree)

  const beverage = document.createElement('h1')
  beverage.id = 'beverage'
  beverage.textContent = 'Beverages'
  menuDiv.append(beverage)

  // third row
  const thirdRow = document.createElement('div')
  thirdRow.id = 'third-row'
  menuDiv.append(thirdRow)

  // first item
  const firstDrink = document.createElement('div')
  firstDrink.id = 'first-drink'
  const title7 = document.createElement('h3')
  title7.textContent = 'Water'
  const image7 = document.createElement('img')
  image7.id = 'image-7'
  image7.src = '/src/images/water.jpeg'
  firstDrink.append(title7, image7)
  thirdRow.append(firstDrink)

  // second item
  const secondDrink = document.createElement('div')
  secondDrink.id = 'second-drink'
  const title8 = document.createElement('h3')
  title8.textContent = 'Soda'
  const image8 = document.createElement('img')
  image8.id = 'image-8'
  image8.src = '/src/images/soda.jpeg'
  secondDrink.append(title8, image8)
  thirdRow.append(secondDrink)

  // third item
  const thirdDrink = document.createElement('div')
  thirdDrink.id = 'third-Drink'
  const title9 = document.createElement('h3')
  title9.textContent = 'Juice'
  const image9 = document.createElement('img')
  image9.id = 'image-9'
  image9.src = '/src/images/juice.jpeg'
  thirdDrink.append(title9, image9)
  thirdRow.append(thirdDrink)

  // CSS STYLING SECTION
  menuDiv.style.cssText = `
    width: 95%;
    height: 95%;
    background-color: #FFEBCD;
    border-radius: 10px;
    `

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
    display: flex;
    flex-direction: column;
    height: 95%;
    margin: auto;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px 0px 10px 0px;
    margin: 10px;
    width: 90%;
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
    margin-bottom: 20px;
    `

  firstRow.style.cssText = `
    display: flex;
    justify-content: space-around;
    background-color: gray;
    display: flex
    width: 90%;
    height: 25%;
    `

  secondRow.style.cssText = `
    display: flex;
    justify-content: space-around;
    background-color: gray;
    display: flex
    width: 90%;
    height: 25%;
    `

  thirdRow.style.cssText = `
    display: flex;
    justify-content: space-around;
    background-color: gray;
    display: flex
    width: 90%;
    height: 25%;
    `

  // first row styles

  firstItem.style.cssText = `
    width: 25%;
    height: 100%;
    `

  title1.style.cssText = `
    background-color: white;
    margin: 0;
    padding: 0;
    `

  image1.style.cssText = `
    width: 100%;
    height: 86%;
    `

  secondItem.style.cssText = `
    width: 25%;
    height: 100%;
    `

  title2.style.cssText = `
    background-color: white;
    margin: 0;
    padding: 0;
    `

  image2.style.cssText = `
    width: 100%;
    height: 86%;
    `

  thirdItem.style.cssText = `
    width: 25%;
    height: 100%;
    `

  title3.style.cssText = `
    background-color: white;
    margin: 0;
    padding: 0;
    `

  image3.style.cssText = `
    width: 100%;
    height: 86%;
    `

  // second row style divs
  // first item
  firstEntree.style.cssText = `
    width: 25%;
    height: 100%;
    `

  title4.style.cssText = `
    background-color: white;
    margin: 0;
    padding: 0;
    `

  image4.style.cssText = `
    width: 100%;
    height: 86%;
    `

  // second item

  secondEntree.style.cssText = `
    width: 25%;
    height: 100%;
    `

  title5.style.cssText = `
    background-color: white;
    margin: 0;
    padding: 0;
    `

  image5.style.cssText = `
    width: 100%;
    height: 86%;
    `

  // third item

  thirdEntree.style.cssText = `
    width: 25%;
    height: 100%;
    `

  title6.style.cssText = `
    background-color: white;
    margin: 0;
    padding: 0;
    `

  image6.style.cssText = `
    width: 100%;
    height: 86%;
    `

  // third row

  // first item
  firstDrink.style.cssText = `
    width: 25%;
    height: 100%;
    `

  title7.style.cssText = `
    background-color: white;
    margin: 0;
    padding: 0;
    `

  image7.style.cssText = `
    width: 100%;
    height: 86%;
    `

  // second item

  secondDrink.style.cssText = `
    width: 25%;
    height: 100%;
    `

  title8.style.cssText = `
    background-color: white;
    margin: 0;
    padding: 0;
    `

  image8.style.cssText = `
    width: 100%;
    height: 86%;
    `

  // third item
  thirdDrink.style.cssText = `
    width: 25%;
    height: 100%;
    `

  title9.style.cssText = `
    background-color: white;
    margin: 0;
    padding: 0;
    `

  image9.style.cssText = `
    width: 100%;
    height: 86%;
    `
}
