import data from '../../db.json' assert {type: 'json'}
import { Navigation, Navigation2 } from '../components/navigation'

const productsPage = function () {

    return `
    <article>
        <div class="banner">
            <h2 class="text-2xl font-medium mb-2">Nhà Sách Tiki</h2>
            <img width="100%" src="./Rectangle.png" alt="">
        </div>

       ${Navigation2()}
        <div class="flex">
            <img class="mr-5 bg-gray-200 p-2 rounded-lg" src="./Rectangle (1).png" alt="">
            <img class="bg-gray-200 p-2 rounded-lg" src="./Rectangle (2).png" alt="">
        </div>

        <div class="grid grid-cols-4 gap-6">
            ${data.map(function (book, index) {
                return /*html*/`
                    <div class="bg-white mt-4 p-3 rounded">
                        <div class="">
                            <a href="/products/detail/${book.id}">
                                <img class="w-full max-w-[300px] p-3 " src="${book.images?.[0].base_url}" alt="">
                            </a> 
                        </div>
                        <div>
                            <img src="./Rectangle (1).png" alt="">
                            <p class="text-green-500 mt-1">GIAO SIÊU TỐC 2H</p>
                            <a href="/products/detail/${book.id}" class="mt-1">${book.name}</a>
                            <p class="mt-1 ">★★★★★ | đã bán 1000+</p>
                            <p class="mt-1 text-red-600 text-base">${book.original_price}₫</p>
                        </div>
                    </div>
                `
            }).join('')}
        </div>
        
    </article>
    `
}

export default productsPage