const asyncTask = function (text) {
    const rand = Math.random() * (3000 - 500) + 500

    return new Promise(function(resolve,reject){
         //asynchronous fonction
        setTimeout(function () {
        resolve(`${text} - ${Math.round(rand)}ms`);
    }, rand)
    })

}


// consumer
asyncTask('task1')
.then(function(response){
    console.log(response);
    return asyncTask('task2')
})
.then(function(response){
    console.log(response);
})



// // class
// // producer
// const promise = new Promise(function(resolve, reject){
//     // resolve - hoàn thành
//     // reject - thất bại
//     setTimeout(function(){
//         resolve("Hoàn thành")
//     },3000)
// })

// console.log(promise);

// promise.then(function(response){
//     console.log(response);
// })

// window.promise = promise