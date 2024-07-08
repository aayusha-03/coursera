
// List of available categories
const categories = ["Lunch", "Dinner", "Sushi", "Breakfast", "Dessert", "Drinks"];

// Function to get a random category
function getRandomCategory() {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

// Event listener for Specials tile click
document.getElementById("specials-tile").addEventListener("click", function() {
  const randomCategory = getRandomCategory();
  // Redirect to the random category page
  window.location.href = `/categories/${randomCategory.toLowerCase()}.html`;
});

