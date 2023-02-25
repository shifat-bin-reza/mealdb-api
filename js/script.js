document.getElementById('btn-search').addEventListener('click', function () {
    const userSearch = document.getElementById('user-search').value;
    loadData(userSearch);
})

const loadData = (value) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.meals.slice(0, 6)))
}

const loadDataAll = (value) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.meals))
}

document.getElementById('btn-showall').addEventListener('click', function () {
    const userSearch = document.getElementById('user-search').value;
    if (userSearch == '') {
        loadDataAll('fish');
    } else {
        loadDataAll(userSearch);
    }
})

const displayData = meals => {
    console.log(meals);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src="${meal.strMealThumb}" alt="Movie"/></figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p>${"There are many variations of passages of available, but the majority have suffered. Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown. Then take them out on a plate and set aside."}</p>
                <a class="view-details">View Details</a>
            </div>
        </div>
        `
        cardContainer.appendChild(mealDiv);
    })
}

loadData('fish');