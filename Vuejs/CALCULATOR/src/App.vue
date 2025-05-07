<script>
  export default {
      data() {
        return {
          output: null, // 양방향 바인딩 해야 함
          prev : null,
          cur : null, // 입력된 숫자 와 연산자 연결
          operator : null,
        };
      },

      methods : {
        operation(e) {
          const n = e.currentTarget.value;
          console.log(n);

          if (['+', '-', '*', '/', '='].includes(n)) {
            // this.output = null;
            // this.operator = n;
            // this.prev = Number(this.cur);
            // this.cur = null;
            // return;
            this.cur = Number(this.cur);
            if (this.operator != null) {
              switch (this.operator) {
                case '+' :
                  this.$prev = this.$prev + this.cur;
                  break;
                case '-' :
                  this.$prev = this.$prev - this.cur;
                  break;
                case '*' :
                  this.$prev = this.$prev * this.cur;
                  break;
                case '/' :
                  this.$prev = this.$prev / this.cur;
                  break;
              }
              if (n === '=') {
                this.output = this.prev;
                this.operator = null;
                this.cur = this.prev;
              } else {
                
              }
            }

          }
          
          // curr 에 있는 값이 하나라도 있으면 n을 +, 아니라면 초기값을 n으로
          this.cur = this.cur === null ? n : (this.cur += n);

          // 입력한 값이 출력칸에 표시되도록 output 데이터 수정
          this.output = this.cur;
          

        },
      },

  }
</script>

<template>
      <div class="calculator">
      <form name="forms">
        <!--  1. 양방향 바인딩 설정
              2. 이벤트 바인딩 추가
              3. 이벤트 메소드 정의 -> 2번과 연결해서 이벤트 잘 걸렸는지 확인
              4. 로직 구현 (클릭한 값 가져오고 data 설정하고 등) -->
        <input type="text" name="output" v-model="output" readonly />
        <input type="button" class="clear" value="C" @click="operation"/>
        <input type="button" class="operator" value="/"  @click="operation"/>
        <input type="button" value="1"  @click="operation"/>
        <input type="button" value="2"  @click="operation"/>
        <input type="button" value="3"  @click="operation"/>
        <input type="button" class="operator" value="*"  @click="operation"/>
        <input type="button" value="4" @click="operation" />
        <input type="button" value="5"  @click="operation"/>
        <input type="button" value="6"  @click="operation"/>
        <input type="button" class="operator" value="+"  @click="operation"/>
        <input type="button" value="7"  @click="operation"/>
        <input type="button" value="8"  @click="operation"/>
        <input type="button" value="9"  @click="operation"/>
        <input type="button" class="operator" value="-"  @click="operation"/>
        <input type="button" class="dot" value="."  @click="operation"/>
        <input type="button" value="0"  @click="operation"/>
        <input type="button" class="operator result" value="="  @click="operation"/>
      </form>
    </div>
</template>

<style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type='text'] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
</style>