<template>
  <div class="wrap">
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <div class="binding d-flex">
      <a class="navbar-brand text-white" href="/">
        <i class="bi bi-luggage-fill"></i> 어디 갈래?
      </a>
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white active" aria-current="page" href="/hotel">호텔</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="/flight">항공권</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/tour">투어&티켓</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/promotion">프로모션</a>
        </li>
      </ul>
    </div>
    </div>
    <div class="" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white active" aria-current="page" href="/login"><i class="bi bi-box-arrow-in-right"></i> 로그인</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="/cart"><i class="bi bi-cart4"></i> 장바구니</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/mypage"><i class="bi bi-person-fill"></i> 마이페이지</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <!-- <List :blogdb="blogdb[i]" v-for="(a,i) in blogdb" :key="i"></List> -->
  <!-- :blogdb="blogdb" 에서 "blogdb"안에 [i]를 넣지 않아서 작동하지 않았음 -->
  <!-- 라우터 안에 주석 들어있으면 원활하게 작동이 되지 않는다 -->

  <router-view :원룸 ="원룸" :데이터="데이터" :인포="인포">
  </router-view > 
<main v-if="$route.path == '/'">
  <main class="main-wrap">
    <div class="main-box">
    <div class="typo">    
      <h5>Welcome!</h5>
      <h2 class="bold">This is My Page</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        <br>
        Voluptates sint saepe architecto ut voluptatem accusamus libero beatae! Quam, 
        <br>
        ipsa quo nostrum libero repellendus minus tempora numquam eos dolor magni fugit.
      </p>
      <button class="more-btn">More <i class="bi bi-chevron-compact-right"></i></button>
    </div>
    <div class="thumb"><img src="./asset/pc.png" alt=""></div>
  </div>
  </main>
  <div class="banner-wrap">
    <div class="banner">
      <h3 class="bold">수능생 대상 특별 할인!</h3>
      <p>기간 : 11/14 ~ 11/31</p>
  </div>
  </div>
  <div class="second">
    <div class="second-box">
      <div class="board-title d-flex justify-content-between">
        <h2 class="ms-4 mt-4" style="background-image: linear-gradient(to right,#0090f7,skyblue,blue); background-clip:text; -webkit-text-fill-color:transparent; font-weight: 600;">Categories</h2>
         <router-link class="more-btn" to="/list">More <i class="bi bi-chevron-compact-right"></i></router-link>
      </div>
      <div class="row row-cols-1 px-4 row-cols-lg-4 align-items-stretch g-4 py-4">
      <div :id="a.id"  class="rel cards" v-for="(a,i) in 카드" :key="i">
        <router-link :to="`/detail/${a.id}`">
        <div class="imgbox">
          <img :src="a.image" alt="">
        </div> 
       <div class="contents" >
        <p>{{ a.title1 }}</p>
        <h3>{{ a.title2 }} <span style="font-size:20pt !important;"><i class="bi bi-chevron-double-right"></i></span></h3>
        <ul>
          <li>
            <h4><img :src="a.logo" alt=""></h4>
          </li>
          <li class="d-flex">
              <div class="icon-box d-flex">
                <div class="me-3"><i class="bi bi-geo-fill me-2"></i>{{ a.name }}</div>
                <div><i class="bi bi-calendar3  me-2"></i>{{ a.date }}</div>
              </div>
          </li>
        </ul>
       </div>
      </router-link>
      </div>
    </div>
    </div>
  </div>
</main>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <i class="bi bi-luggage-fill"></i> 어디 갈래?
        <span class="ms-3">© 2024 Company, Inc</span>
      </a>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><i class="bi bi-github"></i></li>
      <li class="ms-3"><i class="bi bi-instagram"></i></li>
      <li class="ms-3"><i class="bi bi-twitter-x"></i></li>
    </ul>
  </footer>
  </div>
</template>

<script>
// import List from './MyList.vue'
// import Detail from './DetailPage.vue'
import info from './db/info.js'
import data from './db/db.js'
import room from './db/oneroom.js'
import card from './db/card.js'

// 카테고리 컴포넌트


export default {
  name: 'MyApp',
  data(){
    return{
    //  blogdb:data,
     원룸:room,
     데이터:data,
     카드:card,
     인포:info
    }
  }
}
</script>

<style>
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    *{
    font-family: 'Pretendard-Regular' !important;
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
    }
#app {
  width: 100%;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.text-white{
  color: white;
}
a{
  text-decoration: none !important;
  color: unset !important;
}

main{
  /* width: 1200px; */
  margin: 0 auto;
}

.main-container{
    width: 1200px;
    margin: 0 auto;
}

.bold{
  font-weight: 600;
  margin-top: -5px;
}

.rel{
  position: relative;
}

.contents{
  position: absolute;
  z-index: 99999;
  left: 0;
  bottom: 0;
  margin-bottom: 30px;
  width: 100%;
  box-sizing: border-box;
}

.bg-box{
  position: relative;
  width: 100%;
  height: 500px;
}

.bg-box img{
  object-fit: contain;
  width: 100%;
}

.navbar{
  --bs-navbar-padding-y:1rem !important
}

.container-fluid{
  width: 1200px !important;
  margin: 0 auto; 
}

main .main-wrap{
  background:linear-gradient(rgb(221, 198, 255),rgb(181, 209, 255));
}

.second-box h2{
  height: 60px;
}

.second-box .board-title{
  border-bottom: 1px solid rgb(197, 197, 197);
  align-items: center;
}

.board-title .more-btn{
  width: 100px;
  height: 40px;
  padding: unset !important;
  margin: unset !important;
  display: block;
  text-decoration: none;
  text-align: center;
  line-height: 35px;
  color: black !important;
}


main .main-box {
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 1200px;
  margin: 0 auto;
  height: 550px;
  /* background: url('../public/asset/winter.jpg'); */

}

main .banner-wrap{
  text-align: center;
  width: 100%;
  height: 150px;
  /* line-height: 120px; */
  font-size: 22pt;
  background-color: rgb(0, 0, 0);
  color: white;
}

main .banner{
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main .banner p, h3{
  margin: unset !important;
}

main .banner p{
  font-size: 13pt;
  margin-top: 10px !important;
}

.second-box{
  width: 1200px;
  margin: 0 auto !important;
}

.main-box .thumb{
  width:500px;
  height: 400px;
  border-radius: 10px;
  /* background-color: black; */
  margin-right: 80px;
}

.main-box .thumb > img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cards{
  cursor: pointer;
  transition: 0.5s;
}
.cards:hover{
  transform: scale(1.03);
}

.typo{
  color: rgb(33, 32, 32);
  padding-left: 80px;
}

.typo h5{
  font-size: 20pt;
}
.typo h2{
  font-size: 36pt;
  margin-bottom: 30px;
}
.typo p{
  font-size: 11pt;
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
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
footer i{
  font-size: 15pt;
}
.container{
  max-width: 1200px !important;
}
.mainbox > div{
  max-width: 380px !important;
}
.link-btn{
  text-align: center;
  display: block;
  /* a는 기본적으로 inline 태그이기 때문에 내용만큼의 넓이만을 갖는다. 그래서 text-center를 설정하여도 가운데 정렬이 눈에 띄지 않는다. 그래서 한 칸을 전부 차지하는 block 설정을 주고 text-center를 설정하여야 중앙 정렬이 원하는대로 된다. */
}
.second{
  margin-top: 60px;
  color: white;
}
.more-btn{
  margin-top: 20px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50px;
  padding: 5px 20px;
  transition: 0.3s;
}
.more-btn:hover{
  color: white !important;
  background-color: black !important;
  transform: scale(1.1);
}
.second .imgbox{
  width: 100%;
  height: 600px;

}
.second .imgbox img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.second .contents{
  padding: 10px 40px;
}

.second .contents h3, p{
  padding: 0;
  margin: 0;
}

.second .contents h3{
  margin-top: -5px !important;
  font-weight: 600;
}


.second .contents p{
  margin-bottom: 5px !important;
}

.second .contents ul{
  padding: 0;
  width: 100%;
}

.second .contents ul  li{
width: 100%;
}


</style>
