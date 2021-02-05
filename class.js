class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Udaon School'
    }

}

const Student1 = new Student(11, 'Rana');
const Student2 = new Student(22, 'mahia');
const Student3 = new Student(45, "sumon");
console.log(Student1, Student2, Student3)