<!-- App.vue -->
<script>
import FirstChild from './components/FirstChild.vue';

export default {
  components: { FirstChild },
  data() {
    return {
      message: 'Hello, Vue JS!'
    };
  }
};
</script>


<template>
  <div>
    <FirstChild />
  </div>
</template>