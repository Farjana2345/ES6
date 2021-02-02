class Student{
    constructor(sId, sName){
        this.id = sId;
        this.Name = sName;
        this.university = 'Britannia University';
    }
}
const student1 = new Student(10, 'Farjana');
const student2 = new Student(50, 'shimu');
// console.log(student1, student2);
console.log(student1.Name, student2.Name);