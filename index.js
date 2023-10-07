class Hero{
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type
        }

    escrever(){
        switch(this.type){
        case "Monge": 
            console.log(`o ${this.type} atacou usando Artes marciais`)
            break;
        case "Guerreiro":
            console.log(`o ${this.type} atacou usando Espada`)
            break;
        case "Mago":
            console.log(`o ${this.type} atacou usando Magia`)
            break;
        case "Ninja":
            console.log(`o ${this.type} atacou usando Shuriken`)
            break;
        }
    }
}

let classe = new Hero("Ronaldinho", 30 , "Guerreiro")

classe.escrever()

