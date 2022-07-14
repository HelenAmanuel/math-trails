<template>
    <div class="flex row">
    <a @click="openNav()">
        <img  src="/menu.svg" alt="">
    </a>
    <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()"><img src="/close-btn.svg" alt=""></a>
        <div class="overlay-content">
          <a href="/about">About Us</a>
          <a href="#">Resources</a>
          <a href="#">Our Games</a>
        <div class="menu-line"></div>
        <div>
          <p>Follow us!</p>
          <div class="social-media">
            <a href="https://www.youtube.com"><img src="/youtube.svg" alt=""></a>
            <a href="https://www.twitter.com"><img src="/twitter.svg" alt=""></a>
            <a href="https://www.twitter.com"><img src="/twitter-t.svg" alt=""></a>
            <a href="https://www.snapchat.com"><img src="/snap.svg" alt=""></a>
            <a href="https://www.facebook.com"><img src="/facebook.svg" alt=""></a>
          </div>
        </div>
        </div>
    </div>
    <a href="/">
        <img src="/logo.svg" alt="">
    </a>
    <a href="#login" id="openPopUp">
        <img src="/user.svg" alt="">
    </a>
    <aside id="login" class="popup">
    <div class="loginContainer">
      <div class="p-3">
        <header>
        <a href="#!" class="closePopUp"><img src="/close.svg" alt=""></a>
        </header>
        <img class="popup-logo" src="/logo-white.svg" alt="">
         <p class="before">Before you proceed...</p>
         <div class="login-btn">
          <img src="/blue-user.svg" alt="">
          <button >login</button>
         </div>
         <div class="signup-btn">
           <img src="/plus-sign.svg" alt="">
          <button>signup!</button>
         </div>
         <p>OR</p>
      </div>
         <div class="flex-continue">
          <a href="">
            <span class="continue">Continue without login</span>
            <img src="/arrow-right.svg" alt="">
          </a>
         </div>
    </div>        
    <a href="#!" class="closePopUpOutSide"></a>    
    </aside>
  </div>
</template>

<script>
export default{
methods:{
  openNav() {
  document.getElementById("myNav").style.height = "100%";
  },
  closeNav() {
  document.getElementById("myNav").style.height = "0%";
  }
},
data() {
  return {
    hasUserProfile: false
    // bar: { name: "hi" }
  }
}
}
</script>

<style>
  .flex{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.25rem 1rem;
  }
 /* Popup css */
.popup{
  position: fixed;
  top: -100vh;
  left: 0;
  z-index: 9999999;
  background: rgba(39, 3, 117, 0.711);
  width: 100vw;
  height: 100vh;

    -webkit-transition: opacity  0.35s ease;
    -moz-transition: opacity 0.35s ease;
    -o-transition: opacity 0.35s ease;
    transition: opacity 0.35s ease;
}
.popup .loginContainer{
  width: 100%;
  max-width: 31.25rem;
  position: fixed; /* To avoid scroll to target */
  left: 50%;
  top: -100vh;
    -webkit-transition: top  0.35s ease;
    -moz-transition: top 0.35s ease;
    -o-transition: top 0.35s ease;
    transition: top 0.35s ease;

  /* Trick to properly center the element by using negative 
  1/2 length of element as margin left and top */
  margin-left: -250px;
  background-color: #ffffff;
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  -moz-box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  border-radius: 1rem;
  z-index: 9999999; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.popup h2{
  padding: 0.5em;
  text-align: center;
  color: #444444;
  margin: 0;
}

.popup p {
  color: #3620A5;
  font-size: 1.25rem;
}

.before{
  padding: 2.125rem 0 0 0;
}

.popup-logo{
  height: 5.5rem;
}
.popup a.closePopUp{
  font-family: verdana;
  color: #e74c3c;
  position: absolute;
  top: 0.2em;
  right: 0.375em;
  margin: 0;
  padding: 5px;
  font-weight: bold;
  font-size: 1.5em;
  text-decoration: none;
}
.popup a:hover{
  color: #c0392b;
}
.popup:target{
  opacity: 1;
  top: 0;
}
.popup .closePopUpOutSide{
  position: absolute;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 9999991; 
}
.popup:target .loginContainer{
  top: 50px;
    -webkit-transition: top  0.35s ease;
    -moz-transition: top 0.35s ease;
    -o-transition: top 0.35s ease;
    transition: top 0.35s ease;
}

button,.signup-btn,.login-btn{
    border-radius: .5rem;
    font-weight: 700;
    padding: 1.25rem 4.5rem;
    color: white;
    font-size: 1.25rem;
    margin-top: .75rem;
    align-items: center;
    justify-content: center;
}

.signup-btn{
background: #FF960A;
  display: flex;
  flex-direction: row;
white-space: nowrap;
margin-bottom: 1.5rem;
box-shadow: 0 .2rem .3rem #D37E0C;
}

.login-btn{
  background: #6A3FD1;
  display: flex;
  flex-direction: row;
  box-shadow: 0 .2rem .3rem #3620A5;
}

.login-btn img, .signup-btn img {
  margin-right: .75rem;
  height: 1.5rem;
  width: 1.5rem;
}

.flex-continue img {
  margin-left: .75rem;
  height: 1.5rem;
  width: 1.5rem;
  display: inline;
}
.flex-continue{
  font-size: 1.375rem;
  display: flex;
margin: 0 auto;
  flex-direction: row;
  color:#F46234;
line-height: 26px;
letter-spacing: -0.02em;
}

p .continue{
  padding: 0;
}

@media  (max-width: 796px) {
  .popup .loginContainer{
    width: 90%;
    max-width: none;
    left: 5%;
    margin-left: 0;
  }
  .popup ul{
    padding: 0 1em 0 1em;
  }
  .popup:target .loginContainer{
    top: 8rem;
    padding: 2.5rem;
    -webkit-transition: top  0.35s ease;
    -moz-transition: top 0.35s ease;
    -o-transition: top 0.35s ease;
    transition: top 0.35s ease;
  }
}

/* menu popup */
.overlay {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-y: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay {overflow-y: auto;}
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
}

.social-media{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.menu-line{
  border-bottom: .05rem solid rgba(164, 115, 220, 0.736);
}

#myNav p{
  margin: 1.5rem 0;
}

</style>