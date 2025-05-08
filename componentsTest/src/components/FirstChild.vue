<script>
    export default {
         beforeUnmount() {
            console.log('beforeUnmount');
         },
         unmounted() {
            console.log('unmounted');
         },
    }
</script>
<template>   
   <h1>First Child</h1>
</template>
<style>
     h1 {
        color: blue;
     }
     p {
         color: green;
     }
     
</style>