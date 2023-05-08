<template>
    <div class="m-search" v-if="$state.isSearch">
        <div class="m-search-body">
            <div class="logo">
                <a href="/"><img src="@/assets/img/logo.png" alt="" /></a>
            </div>
            <div class="m-search-input">
                <m-input placeholder="Tìm kiếm theo tên sản phẩm" />
                <h6>Gợi ý sản phẩm</h6>
                <m-search-item />
            </div>
            <div class="logo">
                <a style="opacity:0" href="/"><img src="@/assets/img/logo.png" alt="" /></a>
            </div>
            <div @click="$state.isSearch = false" class="close-search icon-close-big"></div>
        </div>
    </div>
</template>
<script>
import MInput from '../input/MInput.vue'
import MSearchItem from './MSearchItem.vue'
export default {
    components:{
        MInput,
        MSearchItem
    }
}
</script>
<style scoped>
.m-search{
    background: rgba(106, 105, 105, 0.323);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
}
.m-search-body{
    background-color: white;
    width: calc(100% - var(--padding-beside) * 2);
    margin: 0 auto;
    padding:0 32px 32px 32px;
    border-radius: 0 0 8px 8px;
    display: flex;
    justify-content: space-between;
    position: relative;
}
.m-search-input{
    width: 100%;
}
.m-search-input > h6
{
    text-align: center;
}
.logo img {
    height: 31%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}
.close-search{
    position: absolute;
    right: 20px;
    top: 31px;
    padding: 4px;
}
</style>