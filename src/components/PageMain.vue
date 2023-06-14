<script>
import PageDescription from './PageDescription.vue';
import PageSignUp   from './PageSignUp.vue';
import PageIcons from './PageIcons.vue';
import PageResultsCard from './PageResultsCard.vue'
import PageHighPerformance from './PageHighPerformance.vue';
import PageQuote from './PageQuote.vue'
import PageTrainers from './PageTrainers.vue'
import PageNews from './PageNews.vue'
import PageJoinUs from './PageJoinUs.vue'

export default {
    name : "AppMain",
    components: {
    PageDescription,
    PageSignUp,
    PageIcons,
    PageResultsCard,
    PageHighPerformance,
    PageQuote,
    PageTrainers,
    PageNews,
    PageJoinUs
}
}
</script>

<template>

<PageDescription />
<PageSignUp />
<PageIcons />
<PageResultsCard />
<PageHighPerformance />
<PageQuote />
<PageTrainers />
<PageNews />
<PageJoinUs />

</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';

*{
    font-family: 'Montserrat', sans-serif;
}

</style>