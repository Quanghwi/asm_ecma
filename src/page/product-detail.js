import Header from "./Header";
import footerPage from "./Footer";
import { useState, useEffect } from "../../lib";
import { btnCountDown } from "../action";

const productsDetail = function (id) {
  const [book, setBook] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    btnCountDown();
  });

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  return `
      <header class="bg-sky-500 grid">
        ${Header()}
      </header>
        <main class="max-w-[1200px] m-auto mt-[20px]">
            <div class=" mt-7 grid grid-cols-[1fr,2fr] gap-5">

                <div class="">
                    <img class="w-full max-w-[444px]" src="${
                      book.images?.[0].base_url
                    }" alt="">
                    <div class="mt-[30px]">
                    <img class="w-full max-w-[80px] hover:border border-black py-1 inline-block" src="${
                      book.images?.[0].base_url
                    }" alt="">
                    <img class="w-full max-w-[80px] hover:border border-black py-1 inline-block" src="${
                      book.images?.[0].base_url
                    }" alt="">
                    <img class="w-full max-w-[80px] hover:border border-black py-1 inline-block" src="${
                      book.images?.[0].base_url
                    }" alt="">
                    <img class="w-full max-w-[80px] hover:border border-black py-1 inline-block" src="${
                      book.images?.[0].base_url
                    }" alt="">
                    </div>
                </div>
                <div class="bg-white p-4">
                    <div class="">
                        <div class="text-[13px]">
                            <p class="inline-block mr-2">Tác giả: <a href="" class="text-blue-500">${
                              book.authors?.[0].name || "không xác định"
                            }</a></p>
                            <p class="inline-block ">Đứng thứ 13 trong <a href="" class="text-blue-500">Top 1000
                            Sách tư duy - Kỹ năng sống
                            bán chạy tháng này</a></p>
                        </div>
                        
                        <h2 class="text-[23px]">${book.name}</h2>
                        <p class="text-[15px] mb-3">★★★★★ | đã bán 1000+</p>
                        <div class="bg-gray-100 w-full max-w-[480px] pb-5 pt-2 pl-2">
                            <p class="inline-block text-[32px] text-red-500">83.930 ₫ </p>
                            <p class="inline-block m-[10px] text-[15px] text-gray-500">109.000 ₫</p>
                            <p class="inline-block text-red-500 border-[1px] border-red-500 bg-red-50 px-[3px]">-23%</p>
                        </div>
                    </div>
                    <div class="">
                        <h3>Số Lượng</h3>
                        <div class="mt-2 mb-[20px] flex">
                            <i id="minus" class="fas fa-minus border border-gray-400 w-[25px] text-center pt-1 cursor-pointer"></i>
                            <input id="amount" type="text" id="" value="1" class="border border-gray-400 w-[35px] text-center">
                            <i id="plus" class="fas fa-plus border border-gray-400 w-[25px] text-center pt-1 cursor-pointer"></i>
                        </div>
                        <a><button class="text-white border-white bg-red-500 px-[150px] py-4 rounded-md">Chọn mua</button></a>
                    </div>
                </div>
            </div>
            <div class="mt-[50px]">
                <h3 class="text-[20px]"> Sản Phẩm Tương Tự</h3>
                <div class="grid grid-cols-6 gap-2">
                ${data
                  .map(function (book, index) {
                    return /*html*/ `
                        <div class="bg-white mt-4 p-3 rounded">
                            <div class="">
                                <a href="/products/detail/${book.id}">
                                    <img class="w-full max-w-[300px] p-3 " src="${book.images?.[0].base_url}" alt="">
                                </a> 
                            </div>
                            <div>
                                <img src="./Rectangle (1).png" alt="">
                                <a href="/products/detail/${book.id}" class="mt-1 text-[12px]">${book.name}</a>
                                <p class="mt-1 text-[12px] ">★★★★★ | đã bán 1000+</p>
                                <p class="mt-1 text-[12px] text-red-600 text-base">${book.original_price}₫</p>
                            </div>
                        </div>
                    `;
                  })
                  .join("")}
            </div>
            </div>
            <div class="mt-[30px]">
                <h3 class="text-[19px] mb-[10px]">Thông tin chi tiết</h3>
                <table class="flex">
                    <thead class="bg-gray-100 p-3 ">
                        <th class="block text-left font-normal ">Công ty phát hành</th>
                        <th class="block text-left font-normal mt-[13px]">Ngày xuất bản</th>
                        <th class="block text-left font-normal mt-[13px]">Kích thước</th>
                        <th class="block text-left font-normal mt-[13px]">Dịch Giả</th>
                        <th class="block text-left font-normal mt-[13px]">Loại bìa</th>
                        <th class="block text-left font-normal mt-[13px]">Số trang</th>
                        <th class="block text-left font-normal mt-[13px]">Nhà xuất bản</th>
                    </thead>
                    <tbody class="ml-[30px] ">
                        <tr>
                        ${book.specifications?.[0].attributes
                          .map(
                            (atr) =>
                              `<td class="block mt-[7px] pl-2 pt-[5px]">${atr.value}</td>`
                          )
                          .join("")}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="des">
                <h3>Mô Tả Sản Phẩm</h3>
                ${book.description}
            </div>
        </main>

        <footer class="mt-20">
            ${footerPage()}
        </footer>
    `;
};

export default productsDetail;
