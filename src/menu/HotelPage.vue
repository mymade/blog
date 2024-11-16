<template>
    <div class="wrap">
        <div class="main-container">
         <h3>호텔</h3>
         <div class="searchbox">
            <div class="first-line d-flex">
                <div class="where">
                    <label for="">여행지</label>
                    <input type="text" class="d-block" id="place" placeholder="도시, 공항, 지역, 랜드마크, 호텔 이름으로 검색">
                </div>
                <div class="date d-flex">
                    <div class="check-box">
                        <label for="checkin" class="d-block">체크인</label>
                        <input type="date">
                    </div>
                    <div class="check-box">
                        <label for="checkout" class="d-block">체크아웃</label>
                        <input type="date">
                    </div>
                </div>
                <div class="option">
                    <label for="person" class="d-block">객실 당 인원수</label>
                    <input id="person" type="text">
                </div>
                <button class="search">검색</button>
            </div>
            <div class="second-line">
                <div class="business">
                    <input type="checkbox">
                    <label for="">출장</label>
                </div>
                <div class="star-box">
                    <div class="hotel-star">호텔 성급</div>
                    <button>s2 ☆</button>
                    <button>s3 ☆</button>
                    <button>s4 ☆</button>
                    <button>s5 ☆</button>
                </div>
            </div>
         </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'HotelPage',
    data(){
        return{

        }
    }
}
</script>
<style>
    .search{
        width: 130px;
        border-radius: 8px;
        border: none;
        background-color: rgb(58, 58, 70);
        color: white;
    }
</style>