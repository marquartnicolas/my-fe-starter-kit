<template>
  <div class="w-full flex flex-col items-center text-gray-700 mt-20">
    <div class="text-center">
      <div class="text-5xl font-dark font-bold py-5">404</div>
      <p class="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn't find this page. </p>
      <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
      <router-link to="/" class="btn btn-accent">back to homepage</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: `NotFound`,
  mounted() {
    this.$emit("closeSideMenu")
    this.$emit("closeProfileMenu")
  },
};
</script>
