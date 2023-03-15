async function searchByPrice(minPrice, maxPrice) {
    console.log("asdasd")
    const response = await fetch(`https://pe.tomujin.digital/product/search/price?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    
    const data = await response.json();
    console.log(data)

    // window.location.href = `./searchResults.html?minPrice=${minPrice}&maxPrice=${maxPrice}`;

    // document.getElementById("list").innerHTML = data.array.forEach(card => {

    //     `
    //     <div class="list">
    //     <a href="./product.html">
    //     <div class="product">
    //                <img class='buuz' src="../images/list/buuznobg.png" width="180" height="135">
    //            <div class="detail">
    //                <h2> 1800₮</h2>
    //                <h2>${card.}</h2> 
    //            </div>      
    //     </div>
    //     </a>
    //     `
        
    // }); 

    return data;
}
