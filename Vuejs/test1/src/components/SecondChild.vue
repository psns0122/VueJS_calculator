<!-- SecondChild.vue -->
<script>
    export default {
        inject: {
            customMessage: {
                from: 'message',
                default: 'default value'
            },
            customReversedMessage: {
                from: 'reversedMessage',
                default: 'default value'
            }
        }
    };
</script>

<template>
    <div>
        <h2 style="color: red;">{{ customReversedMessage }}</h2>
        <h2 style="color: red;">2 컴포넌트</h2>
    </div>
</template>

<!-- data() → 내부용 (자기 자신에서만 사용)
provide() → 외부용 (하위 컴포넌트에 공급) -->