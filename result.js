//Deklarasi Data [1]
const productData = [
    {
      productId: 1000,
      productName: 'Product 1000'
    },
    {
      productId: 1001,
      productName: 'Product 1001'
    }
  ];
const stockData = [
    {
      productId: 1000,
      locationId: 1,
      stock: 21
    },
    {
      productId: 1000,
      locationId: 2,
      stock: 8
    },
    {
      productId: 1001,
      locationId: 1,
      stock: 4
    },
    {
      productId: 1001,
      locationId: 2,
      stock: 10
    }
  ];
const locationData = [
    {
      locationId: 1,
      locationName: 'Location 1'
    },
    {
      locationId: 2,
      locationName: 'Location 2'
    }
];

// Find Stock [2]
function findStockByKey(array, key, value) {
    let result=[];
    let total = 0;
    let index =0;
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            result[index]={
                locationName: findLocationByKey(locationData,'locationId',array[i].locationId).locationName,
                stock: array[i].stock
            }
            total=total+array[i].stock;
            index++;
        }
    }
    const stock = {
      total: total,
      detail:result
    }
    return stock;
}

// Find Location [3]
function findLocationByKey(array, key, value) {
    let result=[];
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

// List Product [4]
function listProduct(array){
  let result = []; 
  for (var i = 0; i < array.length; i++) {
    result[i] = {
      productName: array[i].productName,
      stock: findStockByKey(stockData, 'productId', array[i].productId)
    }
  }
  return result;
} 

// Output in web http://playcode.io
$('#msg').html(listProduct(productData))
console.log(listProduct(productData))

/*
    Analisa :
    * Permasalahan menampilkan data sesuai dengan yang diminta.
    * Identifikasi data yang dibutuhkan :
      - productName dari Variable -> productData
      - total dari hasil penjumlahan stok Location 1 dan location 2
      - locationName dari Variable locationData
      - stock dari Variable stockData
    * Solusi :
      => Solusi yang dipilih adalah pertama, melakukan proses loop dari function listProduct dan mengambil data dari
         variable productData. Kedua, di dalam proses yang pertama terdapat pemanggilan function findStockByKey 
         untuk mengambil data stock dari variable stockData. Ketiga, proses loop dari function findStockByKey dan 
         mengambil data dari variable stockData. Keempat, di dalam function findStockByKey ada pemanggilan function 
         findLocationByKey yang berfungsi untuk memanggil locationName dari Variable locationData. Kelima, loop yang 
         ada di dalam function findLocationByKey adalah untuk memanggil data dari variable locationData.
*/ 
