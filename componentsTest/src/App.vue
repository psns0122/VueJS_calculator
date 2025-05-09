<script>
import UserProfile from './components/UserProfile.vue';

export default {
  components: { UserProfile },
  data() {
    return {
        visible: false,
        user_name: undefined,
        user_age: undefined,
        user_address: undefined,
        user_number: undefined,
    };
  },
  methods: {
    submit() {
        this.visible = true;
    },
    print() {

        alert("dkssud!");
    }
  }
};

</script>

<template>
  <div>
    <input v-model="user_name" placeholder="* 이름을 입력하시오 (2글자 이상)" />
    <input v-model.number="user_age" placeholder="나이를 입력하시오" />
    <input v-model="user_address" placeholder="주소를 입력하시오" />
    <input v-model="user_number" placeholder="* 전화번호를 입력하시오 (- 없이 숫자만 13개)" />
    <button @click="submit">입력</button>
    <UserProfile
        v-if="visible"
        v-bind:name="user_name"
        v-bind:age="user_age" 
        v-bind:address="user_address"
        v-bind:number="user_number" @aiai="print"/>
  </div>
</template>

<style scoped>
    
</style>