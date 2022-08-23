

export const productos = [{nombre:"SELVA NEGRA",  precio:3000, categoria:"Tortas", stock:20 },
                  {nombre:"BAGUETTES",  precio:200, categoria:"Panaderia", stock:20 },
                  {nombre:"TRIPLE JYQ",  precio:150, categoria:"Sandwiches", stock:20 },
                  {nombre:"SERVICIO CUMPLEAÑOS",  precio:6000, categoria:"Catering", stock:20 },
                  {nombre:"MEDIALUNAS DE MANTECA",precio:3000,categoria:"Panaderia",stock:20},
                  {nombre:"CHIPA",  precio:200, categoria:"Panaderia", stock:20 },
                  {nombre:"TRIPLE ROQUEFORT",  precio:150, categoria:"Sandwiches", stock:20 },
                  {nombre:"SERVICIO VEGANO",  precio:6000, categoria:"Catering", stock:20 },
                  {nombre:"MEDIALUNAS DE GRASA",  precio:1200, categoria:"Panaderia", stock:20 }
];

export const data = new Promise((resolve, reject) => {
  let condition = true
  setTimeout(() => {
    if (condition) {
      resolve(productos)
    } else {
      reject("ERROR")
    }
  }, 3000)
})
