
import { shallow } from "enzyme";
import { default as React } from "react";
import App from "../App";
import { Activities } from "../components";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("<App />", () => {
  const container = shallow(<App />);
  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("should have an some wrappers", () => {
    expect(container.find(".app").length).toEqual(1);
    expect(container.find(".content").length).toEqual(1);
  });

  it("should have an <Activities /> component", () => {
    expect(container.find(Activities).length).toEqual(1);
  });
});
