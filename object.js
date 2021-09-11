const students = {
    name: 'ali khan',
    age: 31,
    house: 'mirpur10',
    bestu: {
        name: 'mahhamud',
        age: 33,
        house: 'ashulia',
        salary: 4000
    },
}
// there is 3 way to access property by name
/*Dot property accessor: object. property.
Square brackets property access: object['property']
Object destructuring: const { property } = object */

// console.log(students.name) // direct
// console.log(students['house']) // Square brackets property accessor:
console.log(students.bestu['name']) // Object destructuring:


