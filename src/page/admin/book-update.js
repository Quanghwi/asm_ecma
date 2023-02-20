import { useState, useEffect, router } from "../../../lib";
import Header from "../Header";
import axios from 'axios'
const bookUpdate = function (id) {

    const [book, setBook] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:3000/books/${id}`)
        .then(function(dataAxios){
            setBook(dataAxios.data)
        })
    },[])


    const updateBook = function(){
        const name = document.querySelector('#name').value
        const price = document.querySelector('#original_price').value
        const description = document.querySelector('#description').value
        axios.put(`http://localhost:3000/books/${id}`,{
            ...book,
            name,
            price,
            description
        }).then(function(res){
            router.navigate("/admin")
        })

    }

    useEffect(function(){
        document.querySelector("#update-form").onsubmit = function(e){
            // console.log("form active");
            e.preventDefault()
            updateBook()
        }

    })

    return `
    <header class="bg-sky-500 grid">
        ${Header()}
    </header>
    <h1 class="ml-10 mt-[15px] mb-[15px] font-semibold text-lg ">Chỉnh sửa sản phẩm</h1>
    <section class="bg-gray-100">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="lg:col-span-2 lg:py-12">

                    <div class="mt-8">
                    <img class="w-full p-2" src="${book.images?.[0].base_url}" alt="">
                    <address class="mt-2 not-italic">
                        <a class="hover:text-blue-600 hover:underline" href="/admin">${book.name}</a>
                    </address>
                    
                </div>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form id="update-form" class="space-y-4">
                    <div>
                        <label class="" for="name">Tên sách</label>
                        <input value="${book.name}" class="w-full rounded-lg border border-gray-200 p-3 text-sm" placeholder="Tên sách" type="text" id="name" />
                    </div>

                    <div class="grid grid-cols-1 gap-4 ">
                        <div>
                            <label class="" for="email">Giá sách</label>
                            <input value="${book.original_price}" class="w-full rounded-lg border border-gray-200 p-3 text-sm" placeholder="Giá sách" type="number"
                                id="original_price" />
                        </div>

                    </div>

                    <div>
                        <label class="" for="message">Mô tả</label>
                        <textarea class="w-full rounded-lg border border-gray-200 p-3 text-sm" placeholder="Mô tả" rows="8"
                        id="description">${book.description}</textarea>
                    </div>

                    <div class="mt-4">
                        <button type="submit"
                        class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto">
                        <span class="font-medium"> Cập nhật </span>
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </section>
    
    `
}

export default bookUpdate