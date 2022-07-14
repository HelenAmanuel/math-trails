<template>
  <div v-if="hasUserProfile" class="profile row">
    <NavWithProfile/>
  </div>
  <div v-else class="no-profile">
    <a class="menu" @click="openNav()">
      <img src="/menu.svg" alt="">
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
    <a class="mt-logo" href="/">
        <img src="/logo.svg" alt="">
    </a>
    <div></div>
  </div>
</template>

<script>
import NavWithProfile from "./NavWithProfile.vue"
export default{
components: {NavWithProfile},
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
  .no-profile{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  /* .menu{
    flex-grow: 1;
  } */

  .mt-logo{
    padding-right: 4rem;;
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