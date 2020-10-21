        class Person {
            constructor(_ide,_name,_age){
                this.ide;
                this.name;
                this.age;
            }

            Greeting(){
                console.log("Hello "+this.name);
            }
            Greeting1 = () => console.log("Id " +this.ide+ "and your name is " +this.name+ " with age " +this.age);
        }

        class Teacher extends Person{
            constructor(ide,name,age){
                super(ide,name,age);
            }
            print = () => console.log("Id " +this.ide+ "and your name is " +this.name+ " with age " +this.age);
        }
        let personNew = new Person(31515,"Diaa",23);
        let personNew1 = new Person(20618, "SobhiBrother",25 );



        class Car{
            constructor(_id,_model,_speed){
                this.ide;
                this.model;
                this.speed;
            }
        }
        let carNew = new Car(20-24, "Audi" , "200km");
        let carNew1 = new Car(50-78, "Taxi" ,"90km");