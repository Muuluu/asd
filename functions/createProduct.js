function createProduct(name, price, vendor_name, vendorID, longitude, latitude, imagePath, location){
    productData = { 
        "id": "a", 
        "name": name, 
        "price": price, 
        "vendor_name": vendor_name, 
        "vendorID": vendorID, 
        "longitude": longitude, 
        "latitude": latitude, 
        "rating": "0", 
        "image": imagePath,
        "location": location
    }
    console.log(productData)
    console.log(JSON.stringify(productData))
    fetch('https://pe.tomujin.digital/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create product');
      }
      console.log('Product created successfully');
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }
