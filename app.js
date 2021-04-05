
// Bài 1:
// let str_input = "program";
// let a = "";
// for (let i = str_input.length - 1; i     >= 0; i--) {
//     a = a + str_input[i];

// } console.log(a);

// Bài 2
// function firstA(str) 
// {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(firstA("baaa"));


// Bài4
// let mindX = []

// let staff = {
// }
// staff = { name: "dinh", age: 20, salary: 1000, position: "giam doc" }
// mindX.push(staff)
// staff = { name: "trường", age: 20, salary: 1000, position: "chủ tịch" }
// mindX.push(staff)
// staff = { name: "hiếu", age: 20, salary: 1000, position: "phó giám đốc" }
// mindX.push(staff)
// while (true) {
//     let inputUser = prompt("chọn C/R/U/D").toLowerCase()

//     if (inputUser === 'c') {
//         let inputName = prompt("Vui lòng nhập tên").toLowerCase()
//         let inputAge = prompt("Vui lòng nhập tuổi").toLowerCase()
//         let inputSalary = prompt("Vui lòng nhập lương").toLowerCase()
//         let inputPosition = prompt("Vui lòng nhập vị trí").toLowerCase()

//         staff.name = inputName
//         staff.age = inputAge
//         staff.salary = inputSalary
//         staff.position = inputPosition

//         mindX.push(staff)


//     } else if (inputUser === 'r') {
//         for (let i = 0; i < mindX.length; i++) {
//             console.log("Nhân viên thứ: " + (i + 1));
//             staff = mindX[i]
//             // for (let key in staff) {
//             //     console.log(key, staff[key])
//             // }
//             for (const [key, value] of Object.entries(staff)) {
//                 console.log(key + ":", value);
//             }
//         }
//     } else if (inputUser === 'u') {
//         let index = Number(prompt("nhập phần tử  muốn đổi nhân viên thứ:"))
//         mindX[index - 1].age = prompt("Nhập tuổi mới")
//         mindX[index - 1].salary = prompt("Nhập lương mới")
//         mindX[index - 1].position = prompt("Nhập chức vụ mới")


//     } else if (inputUser === 'd') {
//         let indexDelete = Number(prompt("nhập phần tử  muốn xoá nhân viên thứ:"))
//         mindX.splice(indexDelete - 1, 1)
//     } else if (inputUser === 'e') {
//         break;
//     }
// }

// bài 3
// function unique(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }
// console.log(unique([1, 1, 2, 8, 5, 3, 1, 5, 6, 7, 4]))

// Bài 5