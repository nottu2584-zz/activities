import { shallow } from "enzyme";
import { Button, Modal } from "../components";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("<Modal /> without props", () => {
  const container = shallow(<Modal />);
  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("should have an some wrappers", () => {
    expect(container.find(".modal").length).toEqual(1);
    expect(container.find(".wrapper").length).toEqual(1);
    expect(container.find(".content").length).toEqual(1);
  });

  it("should have an some content", () => {
    expect(container.find("h2").length).toEqual(1);
    expect(container.find("p").length).toEqual(1);
    expect(container.find("ul").length).toEqual(1);
  });

  it("should have a button", () => {
    expect(container.find(Button).length).toEqual(1);
  });
});

describe("<Modal /> with props", () => {
  const initialProps = {
    activities: [
      {
        id: 3,
        name: "Vacations in Hawaii",
        friendly: false,
        performed: 1,
      },
    ],
    handleModal: jest.fn(),
    title: 'some_title',
    message: 'some_message'
  };
  const container = shallow(<Modal {...initialProps} />);

  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("should have an some wrappers", () => {
    expect(container.find(".modal").length).toEqual(1);
    expect(container.find(".wrapper").length).toEqual(1);
    expect(container.find(".content").length).toEqual(1);
  });

  it("should have an some content", () => {
    expect(container.find("h2").length).toEqual(1);
    expect(container.find("p").length).toEqual(1);
    expect(container.find("ul").length).toEqual(1);
  });

  it("should have a button", () => {
    expect(container.find(Button).length).toEqual(1);
  });

  it("should have a title", () => {
    expect(container.find("h2").text()).toEqual(initialProps.title);
  });

  it("should have a message", () => {
    expect(container.find("p").text()).toEqual(initialProps.message);
  });

  it("should have an activities list", () => {
    container.find('li').forEach((node, index) => {
      expect(node.text()).toEqual(initialProps.activities[index].name);
    });
  });

  it("should have a <Button /> with a callback", () => {
      expect(container.find(Button).props().handleOnClick).toEqual(initialProps.handleModal);
  });
});
