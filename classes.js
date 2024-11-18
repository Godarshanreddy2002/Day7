class Employee
{
    name:string;
    age:number;
    dept:string
    constructor(name:string,age:number,dept:string)
    {
        this.name=name
        this.age=age;
        this.dept=dept;

    }
    employeeDetails()
    {
        console.log(`Employee name is ${this.name} age is ${this.age} and dependent is ${this.dept} `)
    }
}

const emp1=new Employee("Godarshan",22,"Back end developer")
emp1.employeeDetails();
