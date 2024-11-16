<template>
    <main>
        <div class="d-flex flex-column align-items-center mt-4" v-if="$route.path == `/detail/${$route.params.id}`">
            <h3>{{원룸[$route.params.id].title }}</h3>
            <div class="imgbox"><img :src="원룸[$route.params.id].image" alt=""></div>
            <p>{{ 원룸[$route.params.id].content }}</p>
            <h5>{{ 원룸[$route.params.id].price }} 원</h5>
            <router-link to="/list">목록으로</router-link>
            <router-link :to="`/detail/${$route.params.id}/info`">자세히</router-link>
        </div>
        <router-view></router-view>
    </main>
</template>
<script>
export default {
    name: 'DetailPage',
    props: {
        원룸:Array
    },
    // 오히려 챗지피티가 알려준 required를 사용하니까 안됐음
    // 만악의 원인은 데이터값을 데이터값 안의 값으로 잘못 적었기 때문에 불러오지 못한 거였음!
}
</script>
<style>
.imgbox{
    width: 500px;
    height: auto;
    margin-bottom: 10px;
}
.imgbox > img{
    width: 100%;
    object-fit: cover;
}
</style>