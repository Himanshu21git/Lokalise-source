<template>
<div class="home">
  <h1>Static Data</h1>
  <p>{{ $t('main.welcome', {company: 'VidyaMantra'}) }}</p>
  <p>{{ $tc('main.new_message', 10) }}</p>
  <p>{{ $d(new Date(), 'short') }}</p>
  <p>{{ $n(100, 'currency') }}</p>
  <!-- <sample :lang="selectedLanguage" /> -->
  <sample />
</div>
</template>

<script>
import dynamicLocalisation from '@/components/mixins/dynamicLocalisation'
import sample from '@/components/sample.vue'
export default {
  components: {
    sample
  },

  mixins: dynamicLocalisation,
  // computed: {
  //   selectedLanguage() {
  //     console.log("Getter", this.$store.getters.getLanguage)
  //     return this.$store.getters.getLanguage
      
  //   }
  // }, 
  // created() {
  //   this.lang = this.$store.getters.getLanguage
  //   console.log("Inside :", this.lang)
  // }
}
</script>