A school wants to automate the process of calculating student results to avoid manual work and errors. In this system, a student enters marks for three subjects, each typically out of 100. The program then calculates the total marks by adding all three subject scores and computes the average by dividing the total by three. Based on this average, the program assigns a grade according to predefined criteria: if the average is 90 or above, the student gets Grade A; if it is between 60 and 89, the student gets Grade B; otherwise, the student is considered to have failed. This system helps teachers quickly generate accurate results, reduces calculation time, and ensures consistency in grading, making it useful for real-life school result processing. Write a Java program to calculate the total marks, average, and grade of a student based on marks of three subjects.

 import java.util.Scanner;
class StudentMarks
{
        public static void main(String[] args)
       {
        Scanner sc = new Scanner(System.in);
        int m1, m2, m3, total;
        double avg;
        System.out.print("Enter marks of 3 subjects: ");
        m1 = sc.nextInt();
        m2 = sc.nextInt();
        m3 = sc.nextInt();

        total = m1 + m2 + m3;
        avg = total / 3.0;
        System.out.println("Total = " + total);
        System.out.println("Average = " + avg);

        if (avg >= 90)
            System.out.println("Grade A");
        else if (avg >= 60)
            System.out.println("Grade B");
        else
            System.out.println("Fail");
    }
}
