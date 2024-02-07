class Person {
    constructor (name, gender, age, profession, phone) {
        this.name = name;
        this.gender = gender;
        this.age = age ;
        this.profession = profession ;
        this.phone = phone
    }
    //method
    Aboutperson() {
        return `I am ${this.name}, and my profession is ${this.profession}`
    }
}
    var person1 = new Person("Tony_Stark", "Male", 28, "Philanthropist", "0000000000")
    
    console.log(person1)
    console.log(person1.Aboutperson)