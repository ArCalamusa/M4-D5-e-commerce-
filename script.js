let token = "";
let array = [];
let div = document.getElementById("product-list");

const addProduct = document.getElementById("add");

const getData = async (auth) => {

    try {

        const data = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
                "Authorization": `Bearer ${auth}`
            }
        });

        const response = await data.json();
        return response;

    } catch (e) {
        console.log(e);
    }

}

/*  */

const getToken = async () => {

    const credential = {
        username: "manciko@hotmail.it",
        password: "Pentotal10",
    }

    try {

        const data = await fetch("https://striveschool-api.herokuapp.com/api/account/login", {
            headers: {
                "Content-type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(credential),
        })
        return await data.json();

    } catch (e) {
        console.log(e);
    }
}

getToken().then(key => { //recupera token da api

    console.log(key.access_token);
    token = key.access_token;
    //console.log(token);

    array.push(key.access_token);
    console.log(array);

    getData(token).then(products => console.log(products));

});
console.log(array);

const addProducts = async () => {

    const myProduct = {

        name: "name",
        description: "description",
        brand: "brand",
        imageUrl: "imageUrl",
        price: 100
    }

    try {

        const data = await fetch("https://striveschool-api.herokuapp.com/api/product/", {

            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWQ5ZmIxNGE1MTAwMTQ2NjQwMDUiLCJpYXQiOjE2ODA3MTk2MTMsImV4cCI6MTY4MTkyOTIxM30.4n4R-86XMqm_LSsm36YRNHmqUyjB5yyA5bPwUIkSfVQ`,

                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(myProduct),

        })

        return await data.json();


    } catch (e) {
        console.log(e);
    }
}

addProduct.addEventListener("click", () => {

    addProducts();

})

const createCard = (singleProduct) => {

    const div = document.createElement("div");
    div.innerHTML =
        `<p> ${singleProduct.name} </p>
    <p> ${singleProduct.description} </p>
    <p> ${singleProduct.brand} </p>
    <p> ${singleProduct.price} </p>
    `
}

