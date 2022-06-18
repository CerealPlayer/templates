import Button from "../Button";
import renderer from "react-test-renderer";

test("Button is disabled", () => {
  const component = renderer.create(<Button dis>Hey</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
