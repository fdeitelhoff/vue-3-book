import { render, fireEvent } from "@testing-library/vue";
// import userEvent from "@testing-library/user-event";
import CustomEvent from "@/components/CustomEvent.vue";

describe("CustomEvent.vue", () => {
  it("emits the custom event properly when the button is clicked", async () => {
    const { getByText, emitted } = render(CustomEvent);

    getByText("Custom Event Component");

    const button = getByText("Event");
    await fireEvent.click(button);
    
    expect(emitted('custom-event').customEvent).toEqual([["Testdaten"]]);
  });
});