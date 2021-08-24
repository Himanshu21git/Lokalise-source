<template>
<div id="nav">
  <h1>Pages</h1>
  <router-link :to="$i18nRoute({ name: 'Home' })">
    {{ $t('menu.home') }}
  </router-link>

  <br>

  <router-link :to="$i18nRoute({ name: 'About' })">
    {{ $t('menu.about') }}
  </router-link>
</div>
</template>
