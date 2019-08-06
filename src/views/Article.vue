<template>
    <div class="container" >
        <div class="d-flex ai-center py-3 px-2 border-bottom">
            <div class="iconfont icon-back" @click="goBack"></div>
            <strong class="flex-1 text-blue">
                {{data.title}}
            </strong>
            <div class="text-grey fs-xs">2019/08/05</div>
        </div>
        <div class="body text-dark-1" v-html="data.body"></div>
        <div class="body text-dark-1" v-html="data.body"></div>
        <div class="body text-dark-1" v-html="data.body"></div>
    </div>
</template>

<script>
export default {
    props: {
        id: { required : true }
    },
    data(){
        return {
            data: null
        }  
    },
    methods: {
        getData(){
            this.$http.get(`./data/article${this.id}.json`).then(res => {
                this.data = res.data[0];
            })    
        },
        goBack(){
            this.$router.go(-1);
        }
    },
    created(){
        this.getData();
    }
    
}
</script>