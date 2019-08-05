<template>
    <div class="container" v-if="model">
        <div class="d-flex ai-center py-3 px-2 border-bottom">
            <div class="iconfont icon-back" @click="goBack"></div>
            <strong class="flex-1 text-blue">
                {{model.title}}s
            </strong>
            <div class="text-grey fs-xs">2019/08/05</div>
        </div>
        <div class="body" v-html="model.body">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: { required : true }
    },
    data(){
        model: null
    },
    methods: {
        getModel(){
            this.$http.get(`./data/article${this.id}.json`).then(res => {
                this.model = res.data[0];
            })    
        },
        goBack(){
            this.$router.go(-1);
        }
    },
    created(){
        this.getModel();
    }
    
}
</script>

<style>
</style>


