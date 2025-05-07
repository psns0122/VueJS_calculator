<template>
  <div>
    <!-- input 값과 message가 양방향 바인딩됩니다 -->
    <input type="text" v-model="message" />
    <!-- message 값이 실시간으로 화면에 출력됩니다 -->
    {{ message }}
    <hr>
    <!-- input 값과 message가 양방향 바인딩됩니다 -->
    <input type="text" @input="onChangeHandler($event)" />
    <!-- message 값이 실시간으로 화면에 출력됩니다 -->
    {{ message }}
    <hr>
    {{ name1 }}
    {{ name2 }}
    


  </div>
</template>

<script>
export default {
  data() {
    return {
      // 객체 리터럴에는 콜론(:)을 사용해야 합니다
      name1: "Park",
      name2: "GunHee",
      message: ""
    };
  },
  methods: {
    onChangeHandler($event) {
      this.message = $event.target.value;
    }
  }
};
</script>