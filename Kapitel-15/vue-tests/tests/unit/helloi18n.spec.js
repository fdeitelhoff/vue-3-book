import { render } from '@testing-library/vue';
import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import de from '@/locales/de.json';
import HelloI18n from '@/components/HelloI18n.vue'

describe('HelloI18n.vue', () => {
  it('cart should be visible on call with the correct translation', async () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'de',
      fallbackLocale: 'en',
      messages: { en, de },
    });
    
    const { getByText } = await render(HelloI18n, {
      global: {
        plugins: [i18n],
      },
    });

    getByText('Hallo i18n !!');
  });
});
