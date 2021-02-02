class parent{
    constructor(){
        this.fatherName = 'babul mia';
    }
}
class Child extends parent{
    constructor(name){
        super();
        this.Name = name;
    }
    getFullName(){
        return this.Name +' '+ this.fatherName;
    }
}
const baby =new Child('shima');
const baby2 = new Child('farjana');
console.log(baby.getFullName());
console.log(baby2);