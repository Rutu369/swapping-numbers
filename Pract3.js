A college wants to develop a student management system that can store student details based on the available information at the time of admission. In some cases, only the student’s name is available, in other cases both name and age are known, and sometimes complete details such as name, age, and course are provided. To handle these different situations efficiently, the system uses constructor overloading, where multiple constructors with different parameters are defined in the same class. This allows creating student objects in different ways depending on the available data.Write a Java program to create a class Student using constructor overloading with three constructors to initialize name, age, and course. Also display the student details.
      class Student 
   {
    String name;
    int age;
    String course;

    // Constructor 1: Only name
    Student(String n) {
        name = n;
        age = 0;
        course = "Not Assigned";
    }

    // Constructor 2: Name and age
    Student(String n, int a) {
        name = n;
        age = a;
        course = "Not Assigned";
    }

    // Constructor 3: Name, age and course
    Student(String n, int a, String c) {
        name = n;
        age = a;
        course = c;
    }

    // Method to display details
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
System.out.println("Course: " + course);
        System.out.println();
    }

    public static void main(String[] args)
 {
        // Using different constructors
        Student s1 = new Student("Anita");
        Student s2 = new Student("Rahul", 20);
        Student s3 = new Student("Priya", 21, "Computer Science");

        // Display details
        s1.display();
        s2.display();
        s3.display();
    }
}


OUTPUT:


Name: Anita
Age: 0
Course: Not Assigned

Name: Rahul
Age: 20
Course: Not Assigned

Name: Priya
Age: 21
Course: Computer Science
