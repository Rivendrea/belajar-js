const rizki = {
    codename : "brengos",
    power  : 8028,
    isDead: false,
    weapon : {
        righthand : "rokok",
        lefthand  : "kopi",
    },
    attack : ["punch","kick","headbutt"],
    taunt:() => {
        console.log("dancing")
    }
}

const dapit = {
    codename : "pak bos",
    power  : 9999,
    isDead: false,
    weapon : {
        righthand : "rokok",
        lefthand  : "sirup",
    },
    attack : ["punch","flying kick","karate"]
}

const gilang = {
    codename : "cah klaten",
    power  : 5631,
    isDead: false,
    weapon : {
        righthand : "pentung",
        lefthand  : "hp",
    },
    attack : ["bicoin","flying kick","headbutt"]
}

console.log(rizki.codename, rizki.power)
console.log(rizki["codename"], rizki["power"])

rizki.power -= 50
console.log(rizki,rizki.weapon.righthand)
console.log(dapit,dapit.attack[2])

