<!-- App.vue -->
<script>
import MyChild1 from './components/MyChild1.vue';

export default {
  components: { MyChild1 },  // 자식 컴포넌트 등록

  data() {
    return {
      parentNum: 5  // App.vue의 내부 데이터
    };
  },

  mounted() {
    // 자식 컴포넌트(MyChild1)에 ref="childRef"를 걸었으므로
    // 부모에서 this.$refs.childRef로 접근 가능

    // 1️⃣ 자식의 data 값 접근 → 직접 접근할 경우 $data.childNum으로 가야 정확함
    console.log(this.$refs.childRef.childNum);

    // 2️⃣ 자식의 computed 값 접근 → getter처럼 값으로 직접 꺼내짐
    console.log(this.$refs.childRef.childNumOddAdd);

    // 3️⃣ 자식의 method 접근 → 함수의 **참조**만 출력됨 (함수 자체)
    // 호출하려면 this.$refs.childRef.getChildNum()처럼 괄호 붙여야 실행됨
    console.log(this.$refs.childRef.getChildNum());
  },
};
</script>

<template>
  <div>
    <!-- 자식 컴포넌트에 ref 지정 -->
    <MyChild1 ref="childRef" />
  </div>
</template>