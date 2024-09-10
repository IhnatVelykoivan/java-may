// const cartsDiv = document.getElementById('carts');
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(cartsObject => {
//         const {carts} = cartsObject;
//         console.log(carts)
//         for (const cart of carts) {
//             const div = document.createElement('div')
//             div.classList.add('cart-container');
//             const divWithInfo = document.createElement('div');
//             divWithInfo.innerText =
//                 `"userId": ${cart.userId},
//                 "discountedTotal":${cart.discountedTotal},
//                 "totalProducts":${cart.totalProducts},
//                 "totalQuantity":${cart.totalQuantity}`
//
//             const ol = document.createElement('ol');
//             for (const product of cart.products) {
//                 const li = document.createElement('li');
//                 const info = document.createElement('p');
//                 info.innerText=
//                     `"id":${product.id},
//                     "price":${product.price},
//                     "quantity":${product.quantity},
//                     "thumbnail":${product.id}`
//                 const img = document.createElement('img');
//                 img.src = product.thumbnail;
//                 li.appendChild(img,info)
//                 ol.appendChild(li)
//
//
//             }
//
//             div.appendChild(divWithInfo, ol);
//             cartsDiv.appendChild(div);
//         }
//     });

const url = new URL('https://dummyjson.com/recipes')
url.searchParams.set('limit', '2')

const target = document.getElementsByClassName('target')[0];
fetch(url)
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        for (const recipe of recipes) {
            const recipeDiv = document.createElement('div');
            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])){
                    let arrayAndTitleDiv = document.createElement('div');
                    const title = document.createElement('h2');
                    title.innerText = `${recipeKey}:`;
                    const ol = document.createElement('ol');
                    const array = recipe[recipeKey];
                    for (const item of array) {
                        let li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    arrayAndTitleDiv.append(title, ol);
                    recipeDiv.appendChild(arrayAndTitleDiv);
                } else {
                    if (recipeKey !== 'image'){
                const keyDiv = document.createElement('div');
                keyDiv.innerText = `${recipeKey}: ${recipe[recipeKey]}`
                recipeDiv.appendChild(keyDiv)
                    }
                }
            }
            const img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img)
            target.appendChild(recipeDiv);
        }
    });