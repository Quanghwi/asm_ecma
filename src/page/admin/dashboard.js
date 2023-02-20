import Header from "../Header"
import footerPage from "../Footer"
import { useState, useEffect } from "../../../lib"



const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(() =>{
        getBook()
    },[])

const getBook = function(){
    fetch('http://localhost:3000/books')
    .then((res) =>{
        return res.json()
    })
    .then((dataFetch) =>{
        setData(dataFetch)
    })
}

    useEffect(() =>{
        const deleteBtns = document.querySelectorAll('.delete-btn')
        deleteBtns.forEach((btn) =>{
            btn.addEventListener('click',function(){
                const id = btn.dataset.id
                deleteBook(id)
            })
        })
    })

    const deleteBook = function(id) {
        fetch(`http://localhost:3000/books/${id}`, {
            method: "DELETE",
        })
        .then(() => getBook())
    }

    return `
        <header class="bg-sky-500 grid">
            ${Header()}
        </header>
        <table class="mt-6 border-collapse border border-slate-400 ">
            <thead>
                <tr>
                    <th class="border border-slate-300 p-2 w-[10%] ">STT</th>
                    <th class="border border-slate-300 p-2 w-[60%] ">Tên sách</th>
                    <th class="border border-slate-300 p-2 w-[10%] ">Hình ảnh</th>
                    <th class="border border-slate-300 p-2 w-[10%] ">Giá sách</th>
                    <th class="border border-slate-300 p-2 w-[10%] ">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                ${data.map((book, index) => `
                    <tr>
                        <td class="border border-slate-300 text-center">${index + 1}</td>

                        <td class="border border-slate-300">
                            <a class="p-2 hover:text-blue-500 hover:underline" href="/admin/updateBook/${book.id}">${book.name}</a>
                        </td>

                        <td class="border border-slate-300">
                            <img class="w-full p-2" src="${book.images?.[0].base_url}" alt="">
                        </td>

                        <td class="text-center text-red-500 border border-slate-300">${book.original_price}đ</td>

                        <td class="border border-slate-300">
                        <button data-id="${book.id}" class="delete-btn bg-red-600 rounded text-white p-2 ml-[15%]">Remove <i class="ml-3 fas fa-times"></i></button>
                        </td>

                    </tr>
                `
                ).join('')}
            </tbody>
        </table>

        <footer class="mt-20">
            ${footerPage()}
        </footer>
    `
}

export default Dashboard