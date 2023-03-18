<template>  
    <div id="app">
    <Header />
    <div class="box">
   <router-view></router-view> 
    </div>
    <cart/>
    <Footer /></div> 
    </template>

<script>
import Header from '../src/components/layout/Header.vue'
import Footer from '../src/components/layout/Footer.vue'
import cart from './components/cart.vue';

export default {
    components: {
    Header,
    Footer,
    cart
},
};
</script>



