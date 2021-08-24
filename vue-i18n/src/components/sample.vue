<template>
  <div class="sample">
    <h1>Dynamic Data</h1>
    <p>{{ value.sky }}</p>
    <p>{{ value.grass }}</p>
  </div>
</template>

<script>
const testData = {
  //Sample data from API
  en: {
    sky: "The sky is everything that lies above the surface of the Earth, including the atmosphere and outer space.",
    grass:
      "Green is the color between blue and yellow on the visible spectrum. It is evoked by light which has a dominant wavelength of roughly 495–570 nm.",
  },
  hi: {
    sky: "आकाश वह सब कुछ है जो पृथ्वी की सतह के ऊपर स्थित है, जिसमें वायुमंडल और बाहरी स्थान भी शामिल है।",
    grass: "हरे रंग दृश्यमान स्पेक्ट्रम पर नीले और पीले रंग के बीच का रंग है। यह प्रकाश द्वारा उत्पन्न होता है जिसकी प्रमुख तरंग दैर्ध्य लगभग ४९५-५७० एनएम है।",
    // 'sky': '',
    // 'grass': ''
  },
  ru: {
    sky: "Небо - это все, что находится над поверхностью Земли, включая атмосферу и космическое пространство.",
    grass:
      "Зеленый - это цвет между синим и желтым в видимом спектре. Он вызывается светом с доминирующей длиной волны примерно 495–570 нм.",
  },
  gu: {
    sky: "આકાશ એ બધું છે જે પૃથ્વીની સપાટીથી ઉપર આવેલું છે, જેમાં વાતાવરણ અને બાહ્ય અવકાશનો સમાવેશ થાય છે.",
    grass:
      "લીલો એ દૃશ્યમાન સ્પેક્ટ્રમ પર વાદળી અને પીળો વચ્ચેનો રંગ છે. તે પ્રકાશ દ્વારા ઉત્પન્ન થાય છે જે આશરે 495-570 એનએમ ની પ્રબળ તરંગલંબાઇ ધરાવે છે.",
  },
  ja: {
    sky: "空は、大気や宇宙空間を含め、地球の表面上にあるすべてのものです。",
    grass:
      "緑は、可視スペクトルの青と黄色の間の色です。これは、主波長が約495〜570nmの光によって引き起こされます。",
  },
};
export default {
  data() {
    return {
      value: {
        sky: null,
        grass: null,
      },
    };
  },
  watch: {
    lang() {
      // console.log(this.lang)
      // console.log(this.value.sky , " = > ", this.value.grass)
      this.value.sky =
        testData[this.lang].sky === ""
          ? testData["en"].sky
          : testData[this.lang].sky;
      this.value.grass =
        testData[this.lang].grass === ""
          ? testData["en"].grass
          : testData[this.lang].grass;
      this.$store.commit("changeData", this.value);
      // console.log(this.$store.getters.getSky, " -------- ", this.$store.getters.getGrass)
    },
  },
  computed: {
    lang() {
      return this.$store.getters.getLanguage;
    },
  },
  created() {
    // Axios call
    // axios.get('https://jsonplaceholder.typicode.com/users/7').then(data => {
    //   this.value = data.data.name
    //   console.log(this.value)
    // })
    // console.log(window.location.pathname.substring(1, 3));
    this.$store.commit(
      "changeLanguage",
      window.location.pathname.substring(1, 3)
    );
    this.value.sky =
      testData[this.lang].sky === ""
        ? testData["en"].sky
        : testData[this.lang].sky;
    this.value.grass =
      testData[this.lang].grass === ""
        ? testData["en"].grass
        : testData[this.lang].grass;
    this.$store.commit("changeData", this.value);
  },
};
</script>