// callback javascript.info

function loadScript(src, callback) {
    // tạo thẻ script
    const script = document.createElement('script')
    // <script src="https://javascript.info"></script>
    script.src = src
    script.onload = function () {
        callback(script);
    }

    script.onerror = function () {
        callback(new Error('Lỗi rồi anh ơi'))
    }


    // nhúng vào thẻ <head></head>
    document.head.append(script)
    // console.log(script);
}

loadScript("https://javascript.info", function (script) {
    console.log('loaded script', script);
    loadScript("https://vi-vn.facebook.com", function (script) {
        console.log('loaded script', script);
        //...
        // callback hell - callback in callback

    })
})