<template>
    <div>
        <navBar/>
        <header/>
    </div>
</template>
<script>
import navBar from './navBar.vue';
import header from './header.vue';
import footer from './footer.vue';

export default defineComponent({
    components: {
        navBar,
        header,
        footer
    }
})
</script>