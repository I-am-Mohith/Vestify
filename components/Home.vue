<template>
    <div>
        <navBar/>
        <Header/>
    </div>
</template>
<script>
import navBar from './navBar.vue';
import Header from './Header.vue';
import footer from './footer.vue';

export default defineComponent({
    components: {
        navBar,
        Header,
        footer
    }
})
</script>