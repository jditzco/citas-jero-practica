// // acordarse de importar useEffect!
// useEffect(() => {
//     const logDatos = async() => {
//       const response = await fetch('https://dummyjson.com/products')
//       const data = await response.json()
//       console.log(data)
//     }
//     logDatos()
// }, [])

// console.clear()

// .map
// console.clear()

[ {nombre: "juan", edad: 15}, {nombre: "pedro", edad: 25} ].map(({ nombre }) => console.log("hola " + nombre))