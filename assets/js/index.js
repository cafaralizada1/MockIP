const btn = document.getElementById('btn')
const form = document.getElementById('form')
const name2 = document.getElementById('exampleName')
const surname = document.getElementById('exampleSurname')
const age = document.getElementById('exampleAge')
const StudentId = document.getElementById('exampleStudentId')

form.addEventListener("submit" , function (event){
    event.preventDefault();
})

    axios.post('https://655c83b725b76d9884fd6e89.mockapi.io/Students',{
        name: name2.value,
        surname: surname.value,
        age: age.value,
        StudentId: StudentId.value
})
.then(response => {
    console.log('melumat ugurla gonderildi' + response.data);
});




// function fetchPost (){
//     fetch('https://655c83b725b76d9884fd6e89.mockapi.io/Students',{
//         method:"POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             name: name2.value,
//             surname: surname.value,
//             age: age.value,
//             StudentId: StudentId.value
//         }),
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);        
//     })
// }
// form.addEventListener('submit', fetchPost)





