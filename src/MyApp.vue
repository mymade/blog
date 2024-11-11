<template>
  <div class="wrap">
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="/">Vuelog</a>
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-white" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <!-- <List :blogdb="blogdb[i]" v-for="(a,i) in blogdb" :key="i"></List> -->
  <!-- :blogdb="blogdb" 에서 "blogdb"안에 [i]를 넣지 않아서 작동하지 않았음 -->
  <!-- 라우터 안에 주석 들어있으면 원활하게 작동이 되지 않는다 -->
  <router-view :원룸 ="원룸">
  </router-view>
<main>
  <router-link to="/list">페이지 리스트로 이동</router-link>
</main>
  <footer class="fixed-bottom row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <h5>Vuelog</h5>
      <div>© 2024</div>
    </div>
    <div class="col mb-3">
      <h5></h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">Home</li>
        <li class="nav-item mb-2">Features</li>
        <li class="nav-item mb-2">Pricing</li>
        <li class="nav-item mb-2">FAQs</li>
        <li class="nav-item mb-2">About</li>
      </ul>
    </div>
  </footer>
  </div>
</template>

<script>
// import List from './MyList.vue'
// import data from './db/db.js'
import room from './db/oneroom.js'
// import Detail from './DetailPage.vue'

export default {
  name: 'MyApp',
  data(){
    return{
    //  blogdb:data,
     원룸:room
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.text-white{
  color: white;
}

.navbar{
  padding-left: 30px !important;
  padding-right: 30px !important;
  background-color: rgb(26, 26, 26);
}
.mr-20{
  margin-right: 20px;
}
footer{
  text-align: center;
}
.container{
  max-width: 1440px !important;
}
.mainbox > div{
  max-width: 380px !important;
}
.row{
  margin: unset !important;
}
</style>
