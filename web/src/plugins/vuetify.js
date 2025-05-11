import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import OpenTofuIcon from '@/components/OpenTofuIcon.vue';
import PulumiIcon from '@/components/PulumiIcon.vue';
import TerragruntIcon from '@/components/TerragruntIcon.vue';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#6f7187',
        success: '#757bab',
        blue: '#626996',
        red: '#d35555',
        error: '#e75858',
      },
      dark: {
        primary: '#756fb1',
        success: '#757bab',
        blue: '#abb1e1',
        red: '#bf5048',
        error: '#c9534a',
      },
    },
  },
  icons: {
    values: {
      tofu: {
        component: OpenTofuIcon,
      },
      pulumi: {
        component: PulumiIcon,
      },
      terragrunt: {
        component: TerragruntIcon,
      },
    },
  },
});
