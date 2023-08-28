import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App)
 
app.directive('blink', {
  mounted(el) {
    let isVisible = true;
    setInterval(() => {
      isVisible = !isVisible;
      el.style.visibility = isVisible ? 'visible' : 'hidden';
    }, 1000);
  }
});

const newMixin = {
  methods: {
    log(data) {
      console.log('Logging:', data)
    }
  }
}

app.mixin(newMixin);
app.mount("#app");
