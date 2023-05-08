<template>
  <div class="search-item" @click="$router.push(`/products/${item.ProductId}`)">
    <div class="item-ult">
      <div class="thumbs">
        <a
        >
          <img
            alt="Bộ Quần Áo Nữ Áo I9CLS555K"
            :src="item.Images[0].ImageLink"
          />
        </a>
      </div>
      <div class="title">
        <a
          >{{item.ProductName}}</a
        >
        <p class="f-initial">
          {{$state.formatPrice(item.PriceDel)}}
          <del> {{$state.formatPrice(item.PriceDel)}}</del>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>
<style scoped>
.item-ult {
    padding: 12px 0;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}
.item-ult .thumbs {
    width: 50px;
}
.title {
    width: calc(100% - 50px);
    padding-right: 15px;
    position: relative;
}
.item-ult .title a {
    font-weight: 500;
    display: block;
    color: #252a2b;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre;
    margin: 0px 0 5px;
}
.title p {
    line-height: 15px;
    font-size: 14px;
    font-weight: 600;
    margin: 0;
}
.title p del {
    font-size: 12px;
    font-weight: 400;
    margin-left: 10px;
    color: #797979;
}
</style>
