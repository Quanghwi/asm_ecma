const Header = () => {
    return /*html*/`
  
          <div class="logo p-4">
              <a href="/"><img class="w-16" src="../../public/Group 1.svg" alt=""></a>
          </div>
          <form action="">
              <input class="mt-5 w-4/5 h-9 p-1" type="text" name="" id="" required>
              <button class="bg-indigo-600 p-1.5 text-white"><i class="fas fa-search w-2/12"></i> Tìm kiếm</button>
          </form>
          <div class="infomation grid grid-cols-2 gap-2 text-white mt-5 ">
              <div class="user ">
              <i class="fas fa-user">
                 
              </i>
                 <a href="">Đăng nhập /</a> <a href="">Đăng kí</a>
                  <a href="">Tài khoản ▼</a>
              </div>
              <div class="cart">
                  <a href="/cart"><i class="fas fa-shopping-cart"></i> Giỏ hàng</a>
                  <a class="text-white block border w-[120px] pl-3" href="/admin" >Admin pages</a>
              </div>
          </div>
   
    `
  }
  
  export default Header;
  