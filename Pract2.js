A company wants to create an employee record system where employee details like employee ID and name are initialized automatically when an object is created. Instead of assigning values separately using methods, the system uses a constructor to initialize data at the time of object creation. This approach makes the program more efficient, reduces code complexity, and ensures that every employee object is created with proper initial values. Write a Java program to create a class Employee and initialize its data using a constructor. Also display the employee details.
            class Employee {
    int id;
    String name;

    // Constructor
    Employee(int i, String n) {
        id = i;
        name = n;
    }

    // Method to display data
    void display() {
        System.out.println("Employee ID: " + id);
        System.out.println("Employee Name: " + name);
    }

    public static void main(String[] args) {
        // Creating objects using constructor
        Employee e1 = new Employee(101, "Anita");
        Employee e2 = new Employee(102, "Rahul");

        // Displaying details
        e1.display();
        e2.display();
    }
}


OUTPUT
Employee ID: 101
Employee Name: Anita
Employee ID: 102
Employee Name: Rahul

