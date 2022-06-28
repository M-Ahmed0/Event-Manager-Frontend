<template>
  <section>
     <title>Newsoft</title>

  <body>
    <div class="hero_area">
      <!-- header section strats -->
      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container">
            <a class="navbar-brand" href="index.html">
              <span>
                Events
              </span>
            </a>

            <div class="navbar-collapse" id="">
              <div
                class="d-none d-lg-flex ml-auto flex-column flex-lg-row align-items-center mt-3"
              >
                <form class="form-inline mb-3 mb-lg-0 ">
                  <button
                    class="btn  my-sm-0 nav_search-btn"
                    type="submit"
                  ></button>
                </form>
                <ul class="navbar-nav  mr-5">
                  <li v-if="!this.$store.getters.isAuthenticated" class="nav-item mr-5">
                    <a   class="nav-link" href="/login">
                      <span>Login</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="custom_menu-btn">
                <button onclick="openNav()">
                  <span class="s-1"> </span>
                  <span class="s-2"> </span>
                  <span class="s-3"> </span>
                </button>
              </div>
              <div id="myNav" class="overlay">
                <div class="overlay-content">
                  <a href="/">Home</a>
                  <a href="#">About</a>
                  <a href="#">Features</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <!-- end header section -->
      <!-- slider section -->
      <section class=" slider_section position-relative">
        <div class="container">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="slider_item-box">
                  <div class="slider_item-container">
                    <div class="slider_item-detail">
                      <h1>
                        Getting Started With CodeTogether
                      </h1>
                    </div>
                    <div class="slider_item-imgbox">
                      <img src="images/coding2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="carousel-item">
                <div class="slider_item-box">
                  <div class="slider_item-container">
                    <div class="slider_item-detail">
                      <h1>
                        Join This Unique Code Hackathon
                      </h1>
                
                    </div>
                    <div class="slider_item-imgbox">
                      <img src="images/codeimg1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="sr-only">Next</span>
        </a>
      </section>
      <!-- end slider section -->
    </div>

    <br>

    <!-- contact section -->
    <section class="contact_section ">
      <div class="container d-flex justify-content-center">
        <h2 class="text-uppercase">
          Get in touch
        </h2>
      </div>
      <div class="container-fluid layout_padding-top">
        <div class="row">
          <div class="col-md-6">
            <div class="col-md-10 offset-md-2">
              <div class="contact_img-box">
                <img src="images/form-img.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-6 form_bg px-0">
            <div class="col-md-10 px-0">
              <form action="">
                <div class="contact_form-container">
                  <div>
                    <div>
                      <input type="text" placeholder=" Name" />
                    </div>
                    <div>
                      <input type="email" placeholder="  Email" />
                    </div>

                    <div>
                      <input type="text" placeholder=" Phone Number" />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Message"
                        class="message_input"
                      />
                    </div>
                    <div class="mt-3 d-flex justify-content-end">
                      <button type="submit">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end contact section -->

    <!-- info section -->
    <section class="info_section layout_padding">
      <div class="container info_content">
        <div>
          <div class="row">
            <div class="col-md-4">
              <div class="d-flex">
                <h5>
                  New software
                </h5>
              </div>
              <div class="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex">
                <h5>
                  The Services
                </h5>
              </div>
              <div class="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Lorem ipsum dolor
                    </a>
                  </li>
                  <li>
                    <a href="">
                      sit amet, consectetur
                    </a>
                  </li>
                  <li>
                    <a href="">
                      adipiscing elit,
                    </a>
                  </li>
                  <li>
                    <a href="">
                      sed do eiusmod
                    </a>
                  </li>
                  <li>
                    <a href="">
                      tempor incididunt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex">
                <h5>
                  Contact Us
                </h5>
              </div>
              <div class="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a href="">
                      dolor sit amet,
                    </a>
                  </li>
                  <li>
                    <a href="">
                      consectetur
                    </a>
                  </li>
                  <li>
                    <a href="">
                      adipiscing
                    </a>
                  </li>
                  <li>
                    <a href="">
                      elit, sed do eiusmod
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline"
        >
          <div class="social-box">
            <a href="">
              <img src="images/fb.png" alt="" />
            </a>

            <a href="">
              <img src="images/twitter.png" alt="" />
            </a>
            <a href="">
              <img src="images/linkedin1.png" alt="" />
            </a>
            <a href="">
              <img src="images/instagram1.png" alt="" />
            </a>
          </div>
          <div class="form_container mt-5">
            <form action="">
              <label for="subscribeMail">
                Newsletter
              </label>
              <input
                type="email"
                placeholder="Enter Your email"
                id="subscribeMail"
              />
              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- end info section -->

    <!-- footer section -->
    <section class="container-fluid footer_section">
      <p>
        &copy; 2022 All Rights Reserved.
      </p>
    </section>
    <!-- footer section -->

    
  </body>


  </section>
</template>

<script>
export default {
  name: "Home",
};


</script>

<style>
</style>