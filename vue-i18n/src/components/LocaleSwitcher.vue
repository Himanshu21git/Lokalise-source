<template>
  <div>
    <ul>
      <p>Select Language</p>
      <li
        v-for="locale in supportedLocales"
        :key="locale"
        @click="switchLocale(locale)"
      >
        {{ $t("menu." + locale) }}
      </li>
    </ul>
    <!-- <select @change="onChange($event)"
      v-model="selected" >
      <option
        v-for="(locale,i) in supportedLocales"
        :key="i"
      >
        {{ $t("menu." + locale) }}
      </option>
    </select>
    {{ selected }} -->
  </div>
</template>

<script>
import { Trans } from "@/plugins/Translation";

export default {
  name: "LocaleSwitcher",
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    supportedLocales() {
      return Trans.supportedLocales;
    },
  },
  methods: {
    switchLocale(locale) {
      console.log("entered");
      this.$store.commit("changeLanguage", locale);
      if (this.$i18n.locale !== locale) {
        const to = this.$router.resolve({ params: { locale } });
        return Trans.changeLocale(locale).then(() => {
          this.$router.push(to.location);
        });
      }
    },
    onChange(event) {
      console.log(event.target.value);
    },
  },
};
</script>

<style scoped>
li {
  text-decoration: underline;
  color: #459ce7;
  cursor: pointer;
}
</style>
