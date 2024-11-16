<template>
    <div class="info-wrap">
        <h3>인포 페이지</h3>  
        <div class="d-flex justify-content-center">
            <div class="info-top">
                <div class="info-box">
                    <div class="imgbox">
                    <img :src="인포[$route.params.id].image" alt="">
                    </div>
                </div>
            </div>
            <div class="date-box">
                <h3>{{인포[$route.params.id].title }}</h3>
                <p>가격 <span>{{인포[$route.params.id].price }}만원</span></p>
            </div>
        </div>
    </div>
</template>
<script>
import info from './db/info.js'
export default{
    name:'infoPage',
    data(){
        return{
            인포:info
        }
    }
}
</script>
<style>

.info-wrap{
    width: 1200px;
    margin: 0 auto;
}
.info-top{
    width: 1000px;
}
</style>