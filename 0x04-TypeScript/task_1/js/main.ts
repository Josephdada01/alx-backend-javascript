// writing an interface for class
interface Teacher {
 firstName: string;
 lastName: string;
 fullTimeEmployee: boolean;
 // making years of experience optional 
 yearsOfExperience?: number;
 location: string;
 [key: string]: any;
 }
 // this interface extends from the teachers interface
 interface Directors extends Teacher {
  numberOfReports: number;
  }

  function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. {lastName}`
  }

  // Define the interface for the function
  interface printTeacherFunction {
   (firstName: string, lastName: string): string;
   }


   
