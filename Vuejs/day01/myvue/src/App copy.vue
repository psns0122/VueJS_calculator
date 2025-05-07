<script>

import { hydrateOnVisible } from 'vue';

export default {
  // data : function () {
  //    return {};
  // } -> 2버전

  // ✅ methods는 Vue의 공식 옵션 필드
  // ❌ method는 아무 의미 없음 (Vue 입장에서 무시당함)
  methods: { // 함수(기능, 동작)을 모아놓은 영역
    clickHandler() {
      alert('click');
    },
    dbclickHandler() {
      alert('dbclick');
    }
  },

  data () { // 데이터만 반환하는 함수
    return {
      visible: true, unvisible: false,
      condition: 'C',
      fruits: ['apple', 'pear', 'orange'],
      user: {
        name: 'Jeongmin',
        age: 25,
        job: 'Developer'
      },
      users: [
        { name: 'Jeongmin', age: 25, job: 'Developer' },
        { name: 'Minji', age: 22, job: 'Designer' },
        { name: 'Hyunwoo', age: 30, job: 'Manager' }
      ],

      message : '<h1> Hello 거니짱! </h1>',
      className : 'red-color',
      id : 'idT',
      class2 : 'classT',
    };
  },
}

</script>

<template>

  <div v-html="message"></div>
  <div v-text="message"></div>

  <div v-pre>{{ message }}</div>
  <h1 v-bind:class="className">Hello Vuejs333</h1>

  <h1 :id="id">Hello Vuejs2222222</h1>
  <h1 :id :class="class2">Hello!!!</h1>
  <h1 :class="[class2, className]">Hello!!!</h1>

  <p v-if="visible">이 요소는 렌더링 됩니다</p>
  <p v-if="unvisible">이 요소는 렌더링 됩니다</p>

  <p v-if="condition === 'A'">A입니다</p>
  <p v-else-if="condition === 'B'">B입니다</p>
  <p v-else-if="condition === 'C'">C입니다</p>
  <p v-else>D입니다</p>

  <button type="button" v-on:click="clickHandler">클릭</button>
  <button type="button" @dblclick="dbclickHandler">더블클릭</button>

  <h1>과일 데이터의 반복 결과</h1>
  <ul>
    <li v-for="(fruits, index) in fruits" :key="index"> <!-- :key="index" 는 v-bind:key="index" 의 약자-->
      index: {{ index }}, value : {{ fruits }}
    </li>
  </ul>

  <h1>반복문 테스트</h1>
  <ul>
    <li v-for="(value, key, index) in user" :key="value">
      {{ index }} : {{ key }} - {{ value }}
    </li>
  </ul>

  <h1>유저 리스트 출력하기</h1>
  <ul>
    <li v-for="(user, index) in users" :key="index">
      {{ index }}번 유저: {{ user.name }}, {{ user.age }}세, {{ user.job }}
    </li>
  </ul>

  <h1>유저의 속성을 여러줄로 출력하는걸 다시 여러번 반복하기</h1>
  <div v-for="(user, index) in users" :key="index">
    <h3>{{ index }}번째 유저</h3>
    <ul>
      <li v-for="(value, key, i) in user" :key="i">
        {{ key }} : {{ value }}
      </li>
    </ul>
  </div>

  <!-- {{ name }} {{ age }}
  <p> 내 이름은 {{ name }} 이고 </p>
  <p> 내 나이는 {{ age }} 이다 </p>
  <p> {{ name.toUpperCase() }} 이건 대문자 버전이다 </p> -->
</template>

<style>
  .red-color {
    color: red;
  }
  #idT {
    color:aqua
  }
  .classT {
  text-shadow:
    -1px -1px 0 black,
     1px -1px 0 black,
    -1px  1px 0 black,
     1px  1px 0 black;
  }
</style>