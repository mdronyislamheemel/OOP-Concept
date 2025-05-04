class Player{
    constructor(name, age, skill){
        this.name = name;
        this.age = age;
        this.skill = skill;
    }

    //sayHello is a method
    sayHello(){
        return `Hi I am ${this.name} and I am a ${this.skill}`;
    }
}


//here mashrafe is a instant ba protimurti
const mashrafe = new Player("Mashrahe", 35, "Bowler");
console.log(`${mashrafe.name} \n${mashrafe.age} \n${mashrafe.skill}`);

console.log(mashrafe.sayHello());