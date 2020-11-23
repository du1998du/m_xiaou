<template>
    <div class="box">
     <mine-cont></mine-cont>
     <f-nav></f-nav>
    </div>
</template>
 
<script>
import MineCont from "./mineCont"
    export default {
        data () {
            return {
            
            }
        },
        components:{
            MineCont
        }
    }
</script>
 
<style scoped>
 .box{
     width: 7.5rem;
     margin:0 auto;
 }
</style>