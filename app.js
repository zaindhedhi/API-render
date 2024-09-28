let div = document.querySelector('#render')

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(res => {


    console.log(res)
    let index = 0
    function render(){
        if(index < res.length){
            div.innerHTML = `
            <h1>Employee Details</h1>
            <p> <b>Name</b> : ${res[index].name}</p>
            <p> <b>Email</b> : ${res[index].email}</p>
            <p> <b>Address</b> : ${res[index].address.city}</p>
            <h5> <b>Phone No</b> : ${res[index].phone}</p>
            <button class="rounded-full " onclick="decrease()">Previous</button>
            <button class="rounded-full " onclick="increase()">Next</button>
            `
        }
        else{
            div.innerHTML = `<h1>No Employees Found.</h1><br>        
            <button onclick ="decrease()">Previous</button>`
        }
         
    }
render()
    
})
.catch(err => console.log(err))

function increase(){
    index += 1
    console.log(index)
    render()
}

function decrease(){
    if(index === 0){
        console.log('invalid')
    }
    else{
        index -= 1
        console.log(index)
        render()
    }
}
