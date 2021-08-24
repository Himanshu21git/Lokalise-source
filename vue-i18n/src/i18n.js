import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/locales/en.json'

const defaultImpl = VueI18n.prototype.getChoiceIndex

VueI18n.prototype.getChoiceIndex = function(choice, choicesLength) {
  // this === VueI18n instance, so the locale property also exists here
  if (this.locale !== 'ru') {
    // proceed to the default implementation
    return defaultImpl.apply(this, arguments)
  }

  if (choice === 0) {
    return 0;
  }

  const teen = choice > 10 && choice < 20;
  const endsWithOne = choice % 10 === 1;

  if (!teen && endsWithOne) {
    return 1;
  }

  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2;
  }

  return (choicesLength < 4) ? 2 : 3;
}

Vue.use(VueI18n)

const dateTimeFormats = {
  'hi': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
  },
  'gu': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
  },
  'ru': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
  },
  'en': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
  },
}

const numberFormats = {
  'hi': {
    currency: {
      style: 'currency', currency: 'INR'
    }
  },
  'gu': {
    currency: {
      style: 'currency', currency: 'INR'
    }
  },
  'ru': {
    currency: {
      style: 'currency', currency: 'RUB'
    }
  }, 
  'en': {
    currency: {
      style: 'currency', currency: 'USD'
    }
  },
}

export const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'hi',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'hi',
  messages: { en },
  dateTimeFormats,
  numberFormats
})
