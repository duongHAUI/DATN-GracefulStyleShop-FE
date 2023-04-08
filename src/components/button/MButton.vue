<template>
    <button class="m-button" :style="{backgroundColor,borderColor,margin,padding,color}" @click="click">
        <div :class="icon" v-if="icon"></div>
        <slot />
    </button>
</template>
<script>
export default {
    name:"MButton",
    emits:["click"],
    props:{
        color: String,
        backgroundColor: String,
        borderColor: String,
        padding: String,
        margin: String,
        backgroundColorHover: String,
        icon:String
    },
    data() {
        return {
        }
    },
    methods:{
        click(e){
            this.$emit("click",e);
        }
    }
}
</script>
<style scoped>
.m-button{
    background-color: var(--color-btn-primary);
    color: white;
    width: 100%;
    height: var(--height-default);
    border-radius: 2px;
}
</style>