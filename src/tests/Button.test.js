import { mount, shallow } from "enzyme";
import { Button } from "../components";

describe("<Button /> without props", () => {
  const container = shallow(<Button />);
  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("should have a single button", () => {
    expect(container.find("button").length).toEqual(1);
  });
});

describe("<Button /> with props", () => {
  const initialProps = {
    handleOnClick: jest.fn(),
    children: "some_text",
  };
  const container = shallow(<Button {...initialProps} />);

  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("should have a single button", () => {
    expect(container.find("button").length).toEqual(1);
  });

  it("should have a text inside the button", () => {
    expect(container.find("button").text()).toEqual(initialProps.children);
  });

  it("should fire a click event", () => {
    container.find("button").simulate("click");
    expect(initialProps.handleOnClick.mock.calls.length).toEqual(1);
  });
});
