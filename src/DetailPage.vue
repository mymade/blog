<template>
    <main>
        <div>
            <h3>{{원룸[$route.params.id].title }}</h3>
            <p>{{ 원룸[$route.params.id].content }}</p>
        </div>
    </main>
</template>
<script>
export default {
    name: 'DetailPage',
    props: {
        원룸:Array
    }
    // 오히려 챗지피티가 알려준 required를 사용하니까 안됐음
    // 만악의 원인은 데이터값을 데이터값 안의 값으로 잘못 적었기 때문에 불러오지 못한 거였음!
}
</script>
<style>
</style>