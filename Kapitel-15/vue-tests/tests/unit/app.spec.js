import { render, fireEvent } from "@testing-library/vue";
import { createRouter, createMemoryHistory } from "vue-router";
import App from "@/App.vue";
import routes from "@/router/routes";

describe("App.vue", () => {
  it("cart should be visible on call", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    router.push("/");
    await router.isReady();

    const { getByText, findByText } = await render(App, {
      global: {
        plugins: [router],
      },
    });

    await fireEvent.click(getByText("Warenkorb"));

    await findByText("Ihr Warenkorb");
  });
});
