 // Define an array of recipe objects
 const recipes = [
    {
      name: "Berry Muffins",
      image: "https://example.com/berry-muffins.jpg",
      link: "https://example.com/berry-muffins",
      description: "Delicious muffins made with fresh berries."
    },
    {
      name: "Spicy Thai Noodles",
      image: "https://example.com/spicy-thai-noodles.jpg",
      link: "https://example.com/spicy-thai-noodles",
      description: "A spicy and flavorful Thai noodle dish."
    },
    {
      name: "Vegan Lentil Soup",
      image: "https://example.com/vegan-lentil-soup.jpg",
      link: "https://example.com/vegan-lentil-soup",
      description: "Hearty and delicious vegan lentil soup."
    },
    {
      name: "Classic Margherita Pizza",
      image: "https://example.com/classic-margherita-pizza.jpg",
      link: "https://example.com/classic-margherita-pizza",
      description: "A classic pizza topped with tomato sauce, fresh mozzarella, and basil."
    },
    {
      name: "Beef Stroganoff",
      image: "https://example.com/beef-stroganoff.jpg",
      link: "https://example.com/beef-stroganoff",
      description: "A creamy and delicious beef stroganoff recipe."
    },
    {
      name: "Baked Salmon with Lemon and Dill",
      image: "https://example.com/baked-salmon.jpg",
      link: "https://example.com/baked-salmon",
      description: "A simple and flavorful baked salmon recipe."
    },
    {
      name: "Chicken Fajitas",
      image: "https://example.com/chicken-fajitas.jpg",
      link: "https://example.com/chicken-fajitas",
      description: "Tender chicken and flavorful vegetables served in warm tortillas."
    },
    {
      name: "Pesto Pasta",
      image: "https://example.com/pesto-pasta.jpg",
      link: "https://example.com/pesto-pasta",
      description: "A classic pasta dish made with homemade pesto sauce."
    },
    {
      name: "Beet Salad",
      image: "https://example.com/beet-salad.jpg",
      link: "https://example.com/beet-salad",
      description: "A colorful and nutritious salad made with roasted beets and goat cheese."
    },
    {
      name: "Roast Beef",
      image: "https://example.com/roast-beef.jpg",
      link: "https://example.com/roast-beef",
      description: "A tender and juicy roast beef recipe perfect for any occasion."
    },{
name: "Grilled Steak with Chimichurri Sauce",
image: "https://example.com/grilled-steak.jpg",
link: "https://example.com/grilled-steak",
description: "Juicy and flavorful grilled steak served with a tangy chimichurri sauce."
},
{
name: "Mushroom Risotto",
image: "https://example.com/mushroom-risotto.jpg",
link: "https://example.com/mushroom-risotto",
description: "A creamy and savory risotto made with fresh mushrooms."
},
{
name: "Thai Green Curry",
image: "https://example.com/thai-green-curry.jpg",
link: "https://example.com/thai-green-curry",
description: "A spicy and aromatic Thai curry made with green chilies, lemongrass, and coconut milk."
},
{
name: "Butternut Squash Soup",
image: "https://example.com/butternut-squash-soup.jpg",
link: "https://example.com/butternut-squash-soup",
description: "A comforting and flavorful soup made with roasted butternut squash and warming spices."
},
{
name: "Pulled Pork Sandwiches",
image: "https://example.com/pulled-pork-sandwiches.jpg",
link: "https://example.com/pulled-pork-sandwiches",
description: "Tender and juicy pulled pork piled high on a soft bun and topped with tangy barbecue sauce."
},{
name: "Chicken Caesar Salad",
image: "https://example.com/chicken-caesar-salad.jpg",
link: "https://example.com/chicken-caesar-salad",
description: "A classic Caesar salad topped with grilled chicken and croutons."
},
{
name: "Shrimp Scampi",
image: "https://example.com/shrimp-scampi.jpg",
link: "https://example.com/shrimp-scampi",
description: "A delicious shrimp dish cooked in a garlic butter sauce and served over pasta."
},
{
name: "Crispy Fried Chicken",
image: "https://example.com/fried-chicken.jpg",
link: "https://example.com/fried-chicken",
description: "Juicy and crispy fried chicken that will rival any fast food chain."
},
{
name: "Mushroom Risotto",
image: "https://example.com/mushroom-risotto.jpg",
link: "https://example.com/mushroom-risotto",
description: "A rich and creamy risotto loaded with fresh mushrooms."
},
{
name: "Greek Salad",
image: "https://example.com/greek-salad.jpg",
link: "https://example.com/greek-salad",
description: "A fresh and healthy salad loaded with cucumbers, tomatoes, olives, and feta cheese."
},
{
name: "Pesto Chicken",
image: "https://example.com/pesto-chicken.jpg",
link: "https://example.com/pesto-chicken",
description: "Tender and juicy chicken breast topped with homemade pesto sauce."
},
{
name: "Vegetable Stir Fry",
image: "https://example.com/stir-fry.jpg",
link: "https://example.com/stir-fry",
description: "A colorful and flavorful stir fry loaded with fresh vegetables."
},
{
name: "Eggplant Parmesan",
image: "https://example.com/eggplant-parmesan.jpg",
link: "https://example.com/eggplant-parmesan",
description: "A vegetarian twist on classic chicken parmesan, made with breaded eggplant slices and marinara sauce."
},
{
name: "Pumpkin Soup",
image: "https://example.com/pumpkin-soup.jpg",
link: "https://example.com/pumpkin-soup",
description: "A cozy and comforting soup made with roasted pumpkin and warm spices."
},
{
name: "Beef Tacos",
image: "https://example.com/beef-tacos.jpg",
link: "https://example.com/beef-tacos",
description: "Tender and flavorful beef tacos with all the toppings."
}


  ];

  // Map through the array of recipes and dynamically generate recipe cards
  const recipeCards = recipes.map(recipe => {
    return `
      <div class="col-md-4">
        <div class="card mb<img class="card-img-top" src="${recipe.image}" alt="${recipe.name}">
<div class="card-body">
<h5 class="card-title">${recipe.name}</h5>
<p class="card-text">${recipe.description}</p>
<a href="${recipe.link}" class="btn btn-primary">View Recipe</a>
</div>
</div>
</div>
`;
});
// Insert the recipe cards into the HTML
document.getElementById("recipe-cards").innerHTML = recipeCards.join("");