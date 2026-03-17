<template>
    <div class="about">
        <Header />
        <div class="content">
            <h1>About Us</h1>
            <p>We are a leading foreign trade company specializing in international business.</p>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'About',
    components: {
        Header
    }
}
</script>

<style scoped>
.about {
    padding-top: 80px;
    min-height: 100vh;
}

.content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}
</style>