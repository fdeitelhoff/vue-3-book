import { render, fireEvent } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Cart from "@/components/Cart.vue";

const articles = [
  {
    id: 1,
    name: "Artikel 1",
    quantity: 2,
    price: 1.0,
  },
  {
    id: 2,
    name: "Artikel 2",
    quantity: 3,
    price: 2.0,
  },
];

describe("Cart.vue", () => {
  it("renders article names", () => {
    const { getByText } = render(Cart, {
      props: { articles },
    });

    getByText(articles[0].name);
    getByText(articles[1].name);
  });

  it("renders article quantities", () => {
    const { getByText } = render(Cart, {
      props: { articles },
    });

    getByText("Anzahl: " + articles[0].quantity);
    getByText("Anzahl: " + articles[1].quantity);
  });

  it("renders article prices", () => {
    const { getByText } = render(Cart, {
      props: { articles },
    });

    getByText("Kosten: " + articles[0].quantity * articles[0].price + " EUR");
    getByText("Kosten: " + articles[1].quantity * articles[1].price + " EUR");
  });

  it("renders initial overall price", () => {
    const { getByText } = render(Cart, {
      props: { articles },
    });

    getByText("Gesamtpreis: 8 EUR");
  });

  it("increments articles quantity", async () => {
    const { getAllByRole, getByText } = render(Cart, {
      props: { articles },
    });

    const incrementQuantityButtons = getAllByRole("button", { name: "+" });
    await fireEvent.click(incrementQuantityButtons[0]);
    await fireEvent.click(incrementQuantityButtons[1]);
    getByText("Anzahl: 3");
    getByText("Anzahl: 4");
  });

  it.skip("decrements articles quantity", async () => {
    const user = userEvent.setup();

    const { getAllByRole, getByText } = render(Cart, {
      props: { articles },
    });

    const decrementQuantityButtons = getAllByRole("button", { name: "-" });
    // console.log(decrementQuantityButtons);
    await user.click(decrementQuantityButtons[0]);
    await user.click(decrementQuantityButtons[1]);
    getByText("Anzahl: 1");
    getByText("Anzahl: 2");
  });

  it("coupon is handled properly via v-model", async () => {
    const { getByLabelText, getByText } = render(Cart, {
      props: { articles },
    });

    getByText("Ihr eingegebener Gutschein ist:");

    const couponInput = getByLabelText(/Gutschein:/i);

    await fireEvent.update(couponInput, "123456789");

    getByText("Ihr eingegebener Gutschein ist: 123456789");
  });

  it("renders the Cart.vue component correctly", () => {
    const { container } = render(Cart, {
      props: { articles },
    });

    expect(container).toMatchSnapshot();
  });
});
