<!-- FirstChild.vue -->
<script>
    import SecondChild from './SecondChild.vue';

    export default {
        components: { SecondChild },
        provide() {
            return {
                message: 'Hello, Vue JS!',
                reversedMessage: 'aiai?'
            };
        }
    };
</script>

<template>
    <SecondChild />
</template>