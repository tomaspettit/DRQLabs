let Tasks = [];

//Adds the task to the array.
let addTask = (task) =>{
    //Not Exist in an array
    if(Tasks.indexOf(task) == -1){
    Tasks.push(task);
    console.log(task + " has been added to my Tasks");
    return Tasks.length;
    //Already Exist in an array
    }else{
        console.log(task + " has already been added to my Tasks");
    }
}
addTask("Software Quality Management");
addTask("Data Centric Web Application");
addTask("Graphics Programming");
addTask("Graphics Programming");
addTask("Operating Systems");
addTask("Object Oriented Programming");
addTask("Data Representation & Querying");
addTask("Software Testing");
console.log("\n");


//All the tasks in the array
let listAllTasks = () =>{
    Tasks.forEach((element)=>{
        console.log(element);
    })
}
listAllTasks();
console.log("\n");

//Delete the task from the array
let deleteTask = (task) =>{
    let index = Tasks.indexOf(task);
    if(index > -1){
        Tasks.splice(index, 1);
        console.log(task + " has been removed from my Tasks");
    }else{
        console.log(task + " not found in my Tasks");
    }
}

deleteTask("fdfsdfb");
deleteTask("Software Testing");
console.log("\n");
listAllTasks();