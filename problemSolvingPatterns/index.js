// Create a function that takes an array of students and returns an array of student names
// [{ name: 'Steve',}, { name: 'Mike'}, { name: 'John'}] ➞ ['Steve', 'Mike', 'John']

function getStudentNames(students) {
    // let newArr = [];

    // for (let i = 0; i < students.length; i++) {
    //     newArr.push(students[i].name);
    // }
    let newArr = students.map((student) => {
        return student.name;
    })

    return newArr;

}

console.log(getStudentNames([{ name: 'Steve',}, { name: 'Mike'}, { name: 'John'}]));


// Create a function that returns the number of arguments it was called with.
function getNumOfArgs() {
    console.log(arguments.length);
    return arguments.length;
}

getNumOfArgs(true, false);