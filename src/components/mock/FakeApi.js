

const productos = [{nombre:"SELVA NEGRA", id:1, precio:3000, categoria:"Tortas", stock:20 },
                  {nombre:"BAGUETTES", id:2, precio:200, categoria:"Panaderia", stock:20 },
                  {nombre:"TRIPLE JYQ", id:3, precio:150, categoria:"Sandwiches", stock:20 },
                  {nombre:"SERVICIO CUMPLEAÑOS", id:4, precio:6000, categoria:"Catering", stock:20 },
                  {nombre:"MEDIALUNAS DE MANTECA",id:5,precio:3000,categoria:"Panaderia",stock:20},
                  {nombre:"CHIPA", id:6, precio:200, categoria:"Panaderia", stock:20 },
                  {nombre:"TRIPLE ROQUEFORT", id:7, precio:150, categoria:"Sandwiches", stock:20 },
                  {nombre:"SERVICIO VEGANO", id:8, precio:6000, categoria:"Catering", stock:20 },
                  {nombre:"MEDIALUNAS DE GRASA", id:9, precio:1200, categoria:"Panaderia", stock:20 }
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
