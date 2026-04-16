A school wants to develop a student information system to display student details in different formats. Sometimes only the student’s name is available, sometimes name and marks are provided, and in other cases, name along with percentage is given. In some situations, marks may be entered before the name. To handle all these cases efficiently using a single method name, the system uses method overloading, where methods have the same name but differ in parameters, data types, or order.Write a Java program to demonstrate method overloading by displaying student details using different combinations of parameters.


class Student 
{
    // Method 1: Only name
    void display(String name) 
  {
        System.out.println("Name: " + name);
    }

    // Method 2: Name and marks
    void display(String name, int marks) 
   {
        System.out.println("Name: " + name + ", Marks: " + marks);
    }

    // Method 3: Name and percentage
    void display(String name, double percentage) 
   {
        System.out.println("Name: " + name + ", Percentage: " + percentage);
    }

    public static void main(String[] args) 
   {
        Student obj = new Student();

        obj.display("Anita");
        obj.display("Rahul", 85);
        obj.display("Priya", 92.5);
    }
} 
