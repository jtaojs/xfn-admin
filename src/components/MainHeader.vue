<template>
  <div class="mainheader">
    
  </div>
</template>
<script>
export default {
    methods:{
        signout(){
            this.$store.commit("setAdminName",'')
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="scss">

</style>