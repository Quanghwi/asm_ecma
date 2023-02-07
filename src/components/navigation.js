const Navigation = () => {
    return /*html*/`
    <nav>
        <ul class="ml-5">
            <h3 class="text-xl">Danh Mục Sản Phẩm</h3>
            <li class="mt-2.5 hover:text-sky-500"><a href="/">English Books</a></li>
            <li class="mt-2.5 hover:text-sky-500"><a href="/">Sách tiếng Việt</a></li>
            <li class="mt-2.5 hover:text-sky-500"><a href="/">Văn phòng phẩm</a></li>
            <li class="mt-2.5 hover:text-sky-500"><a href="/">Quà lưu niệm</a></li>
        </ul>
    </nav>
    `
}
const Navigation2 = () => {
    return /*html*/`
    <nav class="mt-4">
        <ul>
            <li class="mb-5 inline-block " >     <a class="hover:text-sky-500 hover:border-b-4 border-sky-500 p-2 "href="/">Phổ biến</a></li>
            <li class="ml-5 mb-5 inline-block " ><a class="hover:text-sky-500 hover:border-b-4 border-sky-500 p-2 " href="/">Bán chạy</a></li>
            <li class="ml-5 mb-5 inline-block " ><a class="hover:text-sky-500 hover:border-b-4 border-sky-500 p-2 " href="/">Hàng mới</a></li>
            <li class="ml-5 mb-5 inline-block " ><a class="hover:text-sky-500 hover:border-b-4 border-sky-500 p-2 " href="/">Giá thấp</a></li>
            <li class="ml-5 mb-5 inline-block " ><a class="hover:text-sky-500 hover:border-b-4 border-sky-500 p-2 " href="/">Giá cao</a></li>
        </ul>
    </nav>
    `
}

export { Navigation, Navigation2 };



// export default Navigation;
