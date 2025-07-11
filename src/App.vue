<template>
  <navigation-bar />
  <router-view />
</template>

<script>
import NavigationBar from './components/navigation-bar.vue'
export default {
  components: {
    NavigationBar
  }
}
</script>
