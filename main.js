//################################################header##############################################//

//create header element
let header = document.createElement("header");
header.className = "website-head";

//create logo
let logo = document.createElement("div");
logo.className = "logo";
//create title attribute in logo div
logo.setAttribute("title", "website logo");
// create logo content
let logoContent = document.createTextNode("Ali Muhammed");
//add logo content to logo
logo.appendChild(logoContent);

//create links menu
let menu = document.createElement("div");
menu.className = "menu";
// create menu content
let menuContent = document.createElement("ul");
let homeLink = document.createElement("li");
let aboutLink = document.createElement("li");
let serviceLink = document.createElement("li");
let contactLink = document.createElement("li");

let homeLinkContent = document.createTextNode("home");
let aboutLinkContent = document.createTextNode("about");
let serviceLinkContent = document.createTextNode("service");
let contactLinkContent = document.createTextNode("contact");

homeLink.appendChild(homeLinkContent);
aboutLink.appendChild(aboutLinkContent);
serviceLink.appendChild(serviceLinkContent);
contactLink.appendChild(contactLinkContent);

menuContent.appendChild(homeLink);
menuContent.appendChild(aboutLink);
menuContent.appendChild(serviceLink);
menuContent.appendChild(contactLink);

//add menu content to menu
menu.appendChild(menuContent);

// add logo and menu to header

header.appendChild(logo);
header.appendChild(menu);

// add header to body
document.body.appendChild(header);

//################################################productes##############################################//

//create productes div

let productes = document.createElement("div");
productes.className = "content";

for (let i = 0; i < 15; i++) {
  //create product
  let product = document.createElement("div");
  product.className = "product";

  //create product content
  let productText = document.createTextNode("product");
  let productNum = document.createElement("span");
  let num = document.createTextNode(i + 1);
  productNum.appendChild(num);
  product.appendChild(productNum);
  product.appendChild(productText);
  //add product to productes
  productes.appendChild(product);
}
// add productes to body
document.body.appendChild(productes);

//################################################footer##############################################//
let footer = document.createElement("footer");
footer.className="footer"
let footerContent = document.createTextNode("Copyright 2023")

footer.appendChild(footerContent)

// add footer to body
document.body.appendChild(footer);

//################################################style##############################################//

//body style
document.body.style.cssText =
  "margin:0;padding:0;background-color:rgb(236,236,236);font-family:Tahoma,Arial;text-transform: capitalize;"
//header style
document.querySelector(".website-head").style.cssText =
  "display:flex; align-items:center; justify-content:space-between;padding:20px;background-color:#fff";
//logo style
document.querySelector(".logo").style.cssText =
  "font-weight:bold;color:rgb(35,169,110);font-size:22px";
//menu style
document.querySelector(".menu").style.cssText = "width:20%;";
document.querySelector(".menu").children[0].style.cssText =
  "list-style-type:none;color:gray;display:flex;justify-content:space-evenly;width:100%; padding:0;margin:0";

//productes style
document.querySelector(".content").style.cssText =
  "display:flex;padding:20px;flex-wrap:wrap;justify-content:center;gap:20px;min-height:calc(100vh - 142px);box-sizing:border-box;text-aline:center;color:rgb(136, 136, 136)";

//product style
document.querySelectorAll(".product").forEach(function (product) {
  product.style.cssText =
    "padding: 20px; background-color:#fff; border: 1px solid rgb(221, 221, 221); width:25%; border - radius: 6px;text-align:center ";
});

// select all the span elements within the div elements with the class "product"
let spans = document.querySelectorAll(".product span");

// loop through the NodeList and apply the style to each span element individually
spans.forEach(function (span) {
  span.style.cssText =
    "font-size: 40px; color: black; font-weight: normal;display:block;margin:10px 0;";
});


//footer style

document.querySelector(".footer").style.cssText =
    "background-color:rgb(35,169,110);font-size:26px;    text-align: center;padding:20px;color:#fff;";