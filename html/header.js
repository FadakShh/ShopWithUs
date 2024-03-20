var header = ` <div class="row max-inner">

<div class="columns col-2">
  <a href="index.html" title="Indigo" class="logo">Eclat</a>
</div>

<div class="columns col-6">
<a href="#" class="toggle-nav">
  <i class="fa fa-bars"></i> Menu
</a>
<nav class="main-nav"  >
  <ul>
    <li  style="display: inline;"><a href="index.html"><p class="menucu">HOME</p></a></li>
    <li  style="display: inline;"><a href="shop.html"><p class="menucu">CATALOG</p></a></li>
    <li  style="display: inline;"><a href="Aboutus.html"><p class="menucu">ABOUT US</p></a></li>
    <li  style="display: inline;"><a href="useraccount.html"><p class="menucu">MY ACCOUNT</p></a></li>
  </ul>
</nav>
</div>


<div class="columns col-4">
  <ul class="header-controls">
    <li class="header-search">
      <a href="#" class="reveal-search">
        <i class="fa fa-search"></i> Search
      </a>
      <div class="search-wrapper">
        <form class="search-form">
          <input placeholder="Search..." type="text">
        </form>
      </div>
    </li>
    <li class="header-cart">
      <a href="cart.html" title="view cart">
        <span class="fa fa-shopping-cart"></span>
        <span class="cart-count">Cart</span>
      </a>
    </li>
    <li class="signin-up" >
    <a href="sign-in-page.html" title="sign in"><span class="fa fa-lock"></span>
    <span class=signin-up>sign in-sign up</span></a>
    </li>

  </ul>
</div>

</div>`;

document.getElementById("header").innerHTML = header;