var footer = `
<div class="row max-inner">
  
  <div class="columns col-2">
    <h3>Address</h3>
    <p>
      Eclat LLC<br />
      <br />
      11 Beirut Ave<br />
      Lebanon,beirut <br />
      <br />
      <a href="#">office@Eclat.com</a><br />
      (+961)01 111 222 <br />           
    </p>
  </div>

  <div class="columns col-2">
    <h3>Customer Service</h3>
    <ul>
      <li><a href="Aboutus.html">About us</a></li>
      <li><a href="#">Help center</a></li>
      
      <li><a href="contactus.html">Contact us</a></li>
    </ul>
  </div>

  <div class="columns col-2">
    <h3>Account</h3>
    <ul>
      <li><a href="sign-in-page.html">Login</a></li>
      <li><a href="sign-up-page.html">Register</a></li>
      <li><a href="myprofile.html">My Account</a></li>
      
    </ul>
  </div>

  <div class="columns col-6">
    <h3>Follow us</h3>
    <div class="row">
      <form class="newsletter-form">
        <div class="columns col-8">
          <input placeholder="Enter your Email ..." type="text">
        </div>
        <div class="columns col-4">
          <input type="submit" value="Subscribe" class="submit">
        </div>
      </form>              
    </div>
    <div class="row">
      <div class="columns col-12 social-links">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-google-plus"></i></a>
        <a href="#"><i class="fa fa-pinterest"></i></a>
      </div>            
    </div>
  </div>

</div>` ;

document.getElementById("footer").innerHTML = footer;