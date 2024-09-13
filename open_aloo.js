function goToAlooPage() {
  // Replace 'nextpage.html' with the page you want to navigate to
  window.location.href = "aloo.html";
}
function goToMex_alooPage() {
  // Replace 'nextpage.html' with the page you want to navigate to
  window.location.href = "mexican_aloo.html";
}
function goToVeggiePage() {
  // Replace 'nextpage.html' with the page you want to navigate to
  window.location.href = "Veggie.html";
}
function goToPannerPage() {
  // Replace 'nextpage.html' with the page you want to navigate to
  window.location.href = "Panner.html";
}
function goToCornPage() {
  // Replace 'nextpage.html' with the page you want to navigate to
  window.location.href = "corn.html";
}
function goToDeluxePanner() {
  // Replace 'nextpage.html' with the page you want to navigate to
  window.location.href = "Deluxe_panner.html";
}
function goToPrem_vegPage() {
  // Replace 'nextpage.html' with the page you want to navigate to
  window.location.href = "Prem_Veg.html";
}
function goToMac_Veg() {
  // Replace 'nextpage.html' with the page you want to navigate to
  window.location.href = "Mac_Veg.html";
}
function goToMcCheese_Veg() {
  // Replace 'nextpage.html' with the page you want to navigate to
  window.location.href = "McCheese_Veg.html";
}
function goToPanner_wrap() {
  // Replace 'nextpage.html' with the page you want to navigate to
 window.location.href = "panner_wrap.html";
}
function goToSuprise_chicken() {
  // Replace 'nextpage.html' with the page you want to navigate to
 window.location.href = "suprise_chicken.html";
}
function goToMcEgg() {
  // Replace 'nextpage.html' with the page you want to navigate to
 window.location.href = "Mc_Egg.html";
}
function goToMcChicken() {
  // Replace 'nextpage.html' with the page you want to navigate to
 window.location.href = "Mc_Chicken.html";
}
function goToGrill() {
  // Replace 'nextpage.html' with the page you want to navigate to
 window.location.href = "Grill.html";
}
function goToSpicy_Chicken() {
  // Replace 'nextpage.html' with the page you want to navigate to
 window.location.href = "spicy_chicken.html";
}
function goToDeluxe_Chicken() {
  // Replace 'nextpage.html' with the page you want to navigate to
 window.location.href = "Deluxe_chicken.html";
}
function goToPrem_Chicken() {
  // Replace 'nextpage.html' with the page you want to navigate to
 window.location.href = "prem_chicken.html";
}

function goToMcCheese_Chicken() {
  // Replace 'nextpage.html' with the page you want to navigate to
 window.location.href = "McCheese_Chicken.html";
}
function goToMac_Chicken() {
  // Replace 'nextpage.html' with the page you want to navigate to
 window.location.href = "Mac_Chicken.html";
}
function goToChicken_wrap() {
  // Replace 'nextpage.html' with the page you want to navigate to
 window.location.href = "Chicken_wrap.html";
}
function filterFood(type) {
  let foodItems = document.getElementsByClassName('burger');
  for (let i = 0; i < foodItems.length; i++) {
    if (type === 'all') {
      foodItems[i].style.display = 'block';
    } else if (foodItems[i].getAttribute('data-type') === type) {
      foodItems[i].style.display = 'block';
    } else {
      foodItems[i].style.display = 'none';
    }
  }
}
