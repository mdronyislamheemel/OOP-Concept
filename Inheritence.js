class Human{
    constructor(name){
        this.name = name;
        this.arms = 2;
        this.legs = 2;
    }

}

class Baby extends Human{ //Human class ta baby class k extends kore
    //mane Human class theke uttoradhikar sutre tar property gula baby class peye jai
    constructor(name){
        super(name);
        this.cute = true;
    }
    Cry(){
        return `Waa Waa!`;
    }
}

const banti = new Baby("Banti");
console.log(banti.name);
console.log(banti.Cry());

class Teenager extends Human{
    constructor(name){
        super(name); //to call the parent class Human
        this.emotion = true;
    }
    Crush(){
        return `I have crush on you!`;
    }
}
const rony = new Teenager("Rony");
console.log(rony.name, rony.emotion, rony.legs, rony.arms);
console.log(rony.Crush());
