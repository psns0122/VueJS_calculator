<script>
    export default {
        // data: 컴포넌트 내부에서 사용할 데이터 (반응성 있음)
    data() {
        return {
            childNum: 0, // 자식 컴포넌트의 숫자 값, 초기값 0
        };
    },

    // computed: 계산된 속성, childNum 값이 변하면 자동으로 재계산됨
    computed: {
        childNumOddAdd() {
            // childNum이 짝수면 "짝수", 홀수면 "홀수" 반환
            return this.childNum % 2 === 0 ? "짝수" : "홀수";
        },
    },

    // methods: 호출할 수 있는 메서드 모음
    methods: {
        getChildNum() {
            // 현재 childNum 값을 반환하는 메서드
            return this.childNum;
        },
    },
    }
</script>

<template>
    <h1>MyChild1 자기자신 꼽깅</h1>
</template>