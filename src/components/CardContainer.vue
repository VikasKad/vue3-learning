<template>
    <div class="card">
        <div class="title">
            <slot name="title"/>
        </div>

        <div class="content">
            <slot name="content"/>
            
        </div>

        <div class="description">
            <slot name="description"/>
            
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'CardContainer'
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  