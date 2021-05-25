<template>
  <div v-if="!$route.meta.plainLayout">
    <Navbar />
    <Header />
  </div>
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
export default {
  name: "App",
  components: {
    Navbar,
    Header
  }
}
</script>
