<template>
    <div>
        <div class="board-box" v-for="(a,i) in 블로그" :key="i">
            <div>
                <h5>{{ a.title }}</h5>
                <p>{{ a.date }}</p>
                <button class="more">More</button>
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
        background-color: rgb(247, 247, 247);
        padding: 20px 40px;
        display: flex;
        border-bottom: 1px solid gray;
        justify-content: space-between;
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
    }
    .more:hover{
        color: white;
        background-color: rgb(74, 74, 74);
    }
    .imgbox{
        width: 150px;
        height: auto;
        border-radius: 5px;
        overflow: hidden;
        
    }
    .imgbox > img{
        width: 100%;
        object-fit: contain;
    }
</style>