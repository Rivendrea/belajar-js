const sayHelloName = (name) => {
        const number = Math.floor(Math.random()*1000)
        console.log("yay "+ name+" kamu dapat jackpot",number+ " dollar")    
        }

        const sayHelloNameAlias = (name,alias = "drembis") => {
            const number = Math.floor(Math.random()*150)
            console.log("yay "+ name+"",alias+" kamu dapat jackpot",number+ " dollar")    
            }



  const jackpot = () => {
    console.log("Selamat kamu dapat Jackpot")
  }
  const nama = () => {
    console.log("Hoki banget Suw")
  }

  const rulet = (sayHelloNameFn,namaFn) => {
    if (!sayHelloNameFn){
HelloNameFn = () => {}
    }
    sayHelloNameFn()
    namaFn()
  }

  rulet(sayHelloName,nama)
