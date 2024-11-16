<template>
    <div>
        <div class="board-box" v-for="(a,i) in 블로그" :key="i">
            <div>
                <h5 class="title"><router-link :to="`/detail/${a.id}`">{{ a.title }}</router-link></h5>
                <!-- :to 부분에 템플릿 리터럴과 함께 {{  }} 괄호는 사용할 수 없다. 대신 백틱과 ${} 구문을 사용해야한다 -->
                <p>{{ a.date }}</p>
                <button class="more"><router-link :to="`/detail/${a.id}`">More</router-link></button>
            </div>
            <div class="imgbox"><img :src="a.image" alt=""></div>
        </div>
    </div>
</template>
<script>
    import blogdb from './db/db.js'
    export default{
        name:'MyList',
        data(){
            return{
                블로그 : blogdb
            }
        },
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
    font-family: 'Pretendard-Regular';
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
    }
    .board-box{
        width: 1200px;
        margin: 0 auto;
        background-color: rgb(247, 247, 247);
        padding: 20px 40px;
        display: flex;
        border-bottom: 1px solid gray;
        justify-content: space-between;
        align-items: center;
    }
    .board-box .imgbox{
        width: 300px !important;
    }
    .board-box > div> p{
        color: darkgray;
    }
    .more{
        border-radius: 4px;
        border: none;
        padding: 2px 8px;
        border: 1px solid rgb(74,74,74);
        color: black;
        background-color: white;
        transition: 0.3s;
        margin-top: 40px;
    }
    .more a{
        text-decoration: none;
        color: black 
    }
    .more:hover{
        color: white !important;
        background-color: rgb(74, 74, 74);
    }
    .more:hover a{
        color: white !important;
    }
    .title a{
        color: black !important;
        text-decoration: none;
    }
    /*  .more:hover a는 .more 요소에 마우스를 올렸을 때, 그 안에 있는 a 태그에만 스타일을 적용하라는 의미.
        따라서, 이 CSS 선택자는 .more 요소 안에 포함된 a 태그만 선택하며, HTML 내의 다른 a 태그에는 영향을 주지 않음. */
    .imgbox{
        width: 150px;
        height: auto;
        border-radius: 10px;
        overflow: hidden;
        
    }
    .imgbox > img{
        width: 100%;
        object-fit: contain;
    }
</style>