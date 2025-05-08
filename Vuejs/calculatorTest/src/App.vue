<script>
export default {
    data() {
      return {
        output : null, // 양방향 바인딩을 위한 변수
        cur : null, // 현재 입력된 값을 가지는 변수
        prev : null, // 연산자 입력전까지 숫자값(혹은 누적결과값)을 가지는 변수
        operator : null, // 입력된 연산자를 일시적으로 기억하는 변수
      };
    },

    methods:{
      // 초기화 함수
      clear() {
        console.log("clear() called");
        this.output = null;
        this.cur = null;
        this.prev = null;
        this.operator = null;
      },

      // 사칙연산(=) 함수
      operation(e) {
        const op = e.currentTarget.value;
        console.log("operation('" + op + "') called");

        // 현재 입력값이 없다면 -> 연산자를 연속으로 누르는 경우
        if (this.cur === null) {
          // 사칙연산자 연속 입력시 연산자 업데이트
          if (op !== '=') {
            this.operator = op;
          }
          else {
            // this.prev = null;
            this.operator = null;
            return;
          }
          // = 연속 입력시 아무것도 변화 X
          return;
        }

        if (this.prev != null) { // 직전 입력값이 존재한다면
          this.prev = Number(this.prev);
          this.cur = Number(this.cur);

          switch (this.operator) {
            case '+' : this.prev = this.prev + this.cur; break;
            case '-' : this.prev = this.prev - this.cur; break;
            case '*' : this.prev = this.prev * this.cur; break;
            case '/' : this.prev = this.prev / this.cur; break;
          }
        }
        else { // 직전 입력값이 존재하지 않는다면
          this.prev = this.cur; // cur를 prev로 백업
        }

        this.cur = null;
        this.output = this.prev;

        // = 연산자 처리
        if (op === '=') {
          this.operator = null; // =이면 연산자 초기화
        } else {
          this.operator = op; // switch 문 실행을 위해 다음 연산자를 항상 갱신
        }
      },

      // 숫자 클릭 이벤트용 함수
      number(e) {
        const num = e.currentTarget.value;
        console.log("number('" + num + "') called");

        // = 이후 숫자 누르면 기존 입력 무시
        if (this.output !== null && this.cur === null && this.operator === null) {
          this.prev   = null;
          // if (this.output?.includes('.') && num === '.') {

          // }

          if (num === '.') {
              this.cur = this.output + num;
              this.output = this.cur;
              return;
          } else {
            this.cur = null;
            this.output = null;
          }
        }

        // 소숫점은 한번만 허용
        if (this.cur != null && this.cur.includes('.') && num === '.') {
          return;
        }

        this.cur = this.cur === null ? num : this.cur + num;

        // 소숫점을 처음으로 입력했을 때
        if (this.cur[0] === '.') {
          this.cur = '0' + this.cur;
        }

        this.output = this.cur;
      }
    },
  }
</script>

<template>
    <div class="calculator">
      <form name="forms">
        <input type="text" name="output" v-model="output" readonly />
        <input type="button" class="clear" value="C" @click="clear"/>
        <input type="button" class="operator" value="/" @click="operation"/>
        <input type="button" value="1" @click="number"/>
        <input type="button" value="2" @click="number"/>
        <input type="button" value="3" @click="number"/>
        <input type="button" class="operator" value="*" @click="operation"/>
        <input type="button" value="4" @click="number"/>
        <input type="button" value="5" @click="number"/>
        <input type="button" value="6" @click="number"/>
        <input type="button" class="operator" value="+" @click="operation"/>
        <input type="button" value="7" @click="number"/>
        <input type="button" value="8" @click="number"/>
        <input type="button" value="9" @click="number"/>
        <input type="button" class="operator" value="-" @click="operation"/>
        <input type="button" class="dot" value="." @click="number"/>
        <input type="button" value="0" @click="number"/>
        <input type="button" class="operator result" value="=" @click="operation"/>
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