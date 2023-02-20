

const asyncTask = function (text, callback) {
    const rand = Math.random() * (3000 - 500) + 500
    //asynchronous fonction
    setTimeout(function () {
        console.log(`${text} - ${Math.round(rand)}ms`);
        if (callback) {
            callback()
        }
    }, rand)

    // setInterval
    // fetch
}

asyncTask('task1', function () {
    asyncTask('task2',function(){
        asyncTask('task3',function(){
            asyncTask('task4')
            //asyncTask...
            // callback hell
        })
    })
});

export default asyncTask