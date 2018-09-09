<template>
    <div class="detail">
        <detail-head></detail-head>
        <detail-banner></detail-banner>
        <detail-ticket></detail-ticket>
        <div class="detail-cont"></div>
    </div>
</template>

<script>
import DetailHead from './components/head'
import DetailBanner from './components/banner'
import DetailTicket from './components/ticket'

export default {
    name: 'Detail',
    data(){
        return {
            bannerData: {
                sightName: '',
                bannerImg: '',
                commentsNum: '',
                gallartImgs: []
            },
            categoryList: []
        }
    },
    methods: {
        getDatailInfo(){
            this.$ajax
              .get('../../../../static/mock/detail.json',{
                  params: {
                      id: this.$route.params.id
                  }
              })
              .then((res)=>{
                  const resData = res.data;
                  if(resData.ret && resData.data){
                      const data = resData.data;
                      this.bannerData.sightName = data.sightName;
                      this.bannerData.bannerImg = data.bannerImg;
                      this.bannerData.gallartImgs = data.gallartImgs;
                      this.categoryList = data.categoryList;
                  }
              })
        }

    },
    mounted(){
        this.getDatailInfo();
    },
    components: {
        DetailHead,
        DetailBanner,
        DetailTicket
    }
}
</script>

<style lang="stylus" scoped>
    .detai-cont
        height: 50rem
</style>


