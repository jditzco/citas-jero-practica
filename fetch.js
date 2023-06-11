// acordarse de importar useEffect!
useEffect(() => {
    const logDatos = async() => {
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json()
      console.log(data)
    }
    logDatos()
}, [])