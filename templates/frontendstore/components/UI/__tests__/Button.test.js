import Button from "../Button";
import ActionButton from "../ActionButton";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

describe("Test UI elements", () => {
  test("Renders a common button", () => {
    const tree = renderer.create(<Button>Click Me</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Renders an action primary button", () => {
    const clickHandler = jest.fn();
    const tree = renderer
      .create(
        <ActionButton primary type="button" onClick={clickHandler}>
          Click Me
        </ActionButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Renders an action secondary button", () => {
    const clickHandler = jest.fn();
    const tree = renderer
      .create(
        <ActionButton type="button" onClick={clickHandler}>
          Click Me
        </ActionButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Click handler is callable in action button", () => {
    const clickHandler = jest.fn();
    const { getByText } = render(
      <ActionButton primary type="button" onClick={clickHandler}>
        Click Me
      </ActionButton>
    );
    fireEvent.click(getByText(/click me/i));
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
