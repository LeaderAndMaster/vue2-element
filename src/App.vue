<template>
<div>
  <v-header :seller="seller"></v-header>
  <div class="tab">
    <div class="tab-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>
  <keep-alive>
    <router-view :seller="seller"></router-view>
  </keep-alive>
</div>

</template>

<script>
import header from 'components/header/header'
import axios from 'axios'

const ERR_OK = 0

export default {
  data() {
    return {
      seller: {}
    }
  },
  created() {
    axios.get('static/data.json').then((res) => {
      this.seller = res.data.seller
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="scss" >
  // @import 'common/stylus/index'
  .tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: -1px solid rgba(7,17,27,0.1);
}
.tab .tab-item {
  flex: 1;
  text-align: center;
}
.tab .tab-item a {
  display: block;
  font-size: 14px;
  color: #4d555d;
}
.tab .tab-item a.active {
  font-size: 14px;
  color: #f01414;
}

</style>