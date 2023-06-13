<script>
import PageDescription from './PageDescription.vue';
import PageSignUp   from './PageSignUp.vue';
import PageIcons from './PageIcons.vue';

export default {
    name : "AppMain",
    components: {
    PageDescription,
    PageSignUp,
    PageIcons
}
}
</script>

<template>

<PageDescription />
<PageSignUp />
<PageIcons />

</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';

*{
    font-family: 'Montserrat', sans-serif;
}

</style>