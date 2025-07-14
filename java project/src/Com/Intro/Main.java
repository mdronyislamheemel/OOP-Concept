package Com.Intro;
public class Main {
    public static void main(String[] args) {
        System.out.println("this is rony");

        //store 5 students numbers 
        int[] num = new int[5];
        //store 5 students name
        String[] name = new String[5];

        //data of 5 students: {roll, name, marks}
        int[] rno = new int[5];
        String[] names = new String[5];
        float[] marks = new float[5];

        Student[] student = new Student[5];
        //if we call student class by a name then this student consist all the property of student class
        //just declaring
        /*Student rony;
        rony = new Student();*/

        //we can write this in a single line
        //Student rony = new Student();
        //System.out.println(rony); jodi print kori tahole just akta random number print korbe
        //abar amra jodi 
        // System.out.println(rony.rno); print kori tahole by default 0 print korbe but if we assign the value
        /*rony.rno = 14;
        rony.names = "Rony";
        rony.marks = 87.5f; //f for float number, jodi na dei tahole automatic double number hisebe dhore nibe

        //so if now I try to print these number then it will return those given number
        System.out.println(rony.rno);
        System.out.println(rony.names);
        System.out.println(rony.marks);*/

        //so after the add construtor object if I try to print the value it will return same as before
        // System.out.println(rony.rno);
        // System.out.println(rony.names);
        // System.out.println(rony.marks);

        Student rony = new Student(15, "Rony Islam", 87.5f);

    }
}

//create a class for every single student
class Student {
    int rno;
    String names;
    float marks;
    
    //we need a way to add the values of the above properties object by object
    //so that we need one word to access every object
    //Constructor

    void greeting(){
        System.out.println("My name is:");
    }

    Student(){
        this.rno = 14;
        this.names = "Rony";
        this.marks = 87.5f;
    }

    Student(int roll, String naam, float mark){
        this.rno = roll;
        this.names = naam;
        this.marks = mark;
    }
    
}

