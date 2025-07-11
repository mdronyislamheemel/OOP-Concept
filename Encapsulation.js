class Player{
    constructor(name, birthDay, monthlySalary, totalMonth){
        this.name = name;
        this.birthDay = birthDay;
        this.monthlySalary = monthlySalary;
        this.totalMonth = totalMonth;

    }

    getAge(){
        const diff_ms = Date.now() - new Date(this.birthDay).getTime();
        const age_df  = new Date(diff_ms);

        return Math.abs(age_df.getUTCFullYear() - 1970);
    }

    getSalary(){
        return (this.monthlySalary * this.totalMonth) .toLocaleString();
    }
}


const rony = new Player("Rony", "1998-09-12",200000, 12);
console.log(rony.getAge());
console.log(rony.getSalary());