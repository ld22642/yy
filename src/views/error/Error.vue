<template>
    <div>
        <h1>你找的页面不存在</h1>
        <h1>No Found!</h1>
        <div @click="$router.go(-1)">点击返回上一页</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
h1{
    font-size: 40px;
}
div{
    font-size: 26px;
    margin-top: 20px;
}
</style>