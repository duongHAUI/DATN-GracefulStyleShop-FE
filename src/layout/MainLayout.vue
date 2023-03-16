<template>
    <div>
        <the-header />
        <the-footer />
    </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  components: { TheFooter, TheHeader },
    name: 'MainLayout',
    component:{
        TheHeader,
        TheFooter
    }
}
</script>
<style>

</style>