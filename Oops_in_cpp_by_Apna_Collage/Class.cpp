#include<iostream>
#include<vector>
#include<string>
using namespace std;

class Teacher{
private:
    double salary;// now this is not accessible by t1 object;

public: // this is access modifier. it can be 3 types: 1. public, 2.private, 3. protected
    //properties or attributes
    string name;
    string dept;
    string subject;

    //methods or member function o bola hoi
    void changeDept(string newDept){
        dept = newDept;
    }

    //we cannot access private class but if we use some special public class then it will be accessible
    // and this is called setter
    void setSalary(double s){
        salary = s;
    }
    // to get private variable another special public class
    // named getter
    double getSalary(){
        return salary;
    }
};
int main()
{
    //create object
    Teacher t1;
    t1.name = "Rony";//if we not declare Teacher as a public class this is showing error, and 
    //this is not accessible because in cpp every class is by default private
    t1.dept = "cse";
    t1.subject = "computer";
    t1.setSalary(1200);

    cout << t1.name << endl;
    cout << t1.getSalary() << endl;
    return 0;
}