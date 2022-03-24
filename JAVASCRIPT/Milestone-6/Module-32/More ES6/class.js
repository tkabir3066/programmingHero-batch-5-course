
class Support{
    name;
    designation = "Support Web Dev";
    address = 'India';
    constructor(name, address){
       this.name = name;
       this.address = address;
    }
    startSession(){
        console.log(this.name, 'Start a support session');
    }
}

const aamir = new Support("Tutul kabir", 'India');
const salman = new Support("Atif Islam", "China");
const ayan = new Support("Ayan Ali", "Jaopan");
const soyab = new Support("Soyab Aktar", "Jaopan");

// console.log(aamir);
// console.log(salman);

aamir.startSession();
salman.startSession();
ayan.startSession();
soyab.startSession();