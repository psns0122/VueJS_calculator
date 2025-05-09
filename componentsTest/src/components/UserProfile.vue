<script>
    export default {
        props : {
            name : {
                type : String,
                required : true,
                validator : function(value) {
                    return value.length > 2;
                },
            },
            age : {
                type : Number,
                default : function() {
                    return 10;
                }
            },
            address : {
                type : String,
                default : '거주지 불명',
            },
            number : {
                type : String,
                required : true,
                validator : function(value) {
                    return value.length <= 13;
                },
            }
        },
    }
</script>

<template>
    <p>이름 : {{ name }}</p>
    <p>나이 : {{ age }}</p>
    <p>주소 : {{ address }}</p>
    <p>번호 : {{ number }}</p>
    <button @click="$emit('aiai')">클릭</button>
</template>