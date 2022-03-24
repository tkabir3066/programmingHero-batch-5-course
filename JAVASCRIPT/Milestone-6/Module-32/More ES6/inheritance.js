
class TeamMember{
    name;
    designation = "Support Web Dev";
    address = 'India';
    constructor(name, address){
       this.name = name;
       this.address = address;
    }
}





class Support extends TeamMember{
   
    startSession(){
        console.log(this.name, 'Start a support session');
    }
}


class StudentCare{
    name;
    designation = "Student care Web Dev";
    address = "India";
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    buildARoutine(student){
        console.log(this.name, "Build a routine for " , student);
    }
}

class NeptuneDev{
    name;
    designation = "App dev version";
    address = "India";
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    releaseApp(version){
        console.log(this.name, "release app version " , version);
    }
}




const aamir = new Support("Tutul kabir", 'India');
const salman = new Support("Atif Islam", "China");
const ayan = new Support("Ayan Ali", "Jaopan");
const soyab = new Support("Soyab Aktar", "Jaopan");


const alia = new StudentCare("Alia Bhatt", "Mumbai");
const julia = new StudentCare("Juliya Raj", "Chennai");

console.log(alia);