interface Student {
 firstName: string;
 lastName: string;
 age: number;
 location: string;
}
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    location: "Nigeria",
};

const student2: Student = {
    firstName: "Ridwan",
    lastName: "Dada",
    age: 50,
    location: "Ghana",
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", function () {
    const table = document.createElement("table");
    studentsList.forEach((student) => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell(0);
        const locationCell = row.insertCell(1);

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });
    document.body.appendChild(table);
});
