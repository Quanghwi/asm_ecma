// synchronous

import asyncTask from "./asynchronous";

const task1 = function(){
    console.log("1");
}

// const task2 = function(){
//     console.log("2");
// }
const task3 = function(){
    console.log("3");
}
const task4 = function(){
    console.log("4");
}

// chưa xử lý bất đồng bộ
// task1()
// // task2()
// asyncTask("2")
// task3()
// task4()


// xử lý bất đồng bộ

task1()

asyncTask("2",function(){
    task3()
    task4()
})
