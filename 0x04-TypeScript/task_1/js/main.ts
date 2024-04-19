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
    return `${firstName.charAt(0)}. ${lastName}`
  }

  // Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

  // Define interface for class constructor
interface studentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

  // Define interface for class constructor
interface StudentClassInterface {
    WorkOnHomework(): string;
    displayName(): string;
  }

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  WorkOnHomework(): string {
    return "Currently working";
  }
  
  displayName(): string {
    return this.firstName
  }
}


   
