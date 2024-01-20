<template>
    <div class="flex flex-col justify-between items-center w-full min-h-screen overflow-x-hidden bg-gradient-to-r from-bg-inicial to-bg-final h-screen">
        <header class="w-full">
            <Header />
        </header>
        <main class="flex flex-col flex-1 mt-[20px] w-full max-w-max-w">
            <slot />
        </main>
        <footer class="w-full">
            <Footer />
        </footer>
    </div>
</template>

<script>
import Header from '../components/Header/index.vue'
import Footer from '../components/Footer/index.vue'
export default {
    name: 'LayoutDefault',
    components: {
        Header,
        Footer
    },
    setup() {

    }

}
</script>

<style></style>