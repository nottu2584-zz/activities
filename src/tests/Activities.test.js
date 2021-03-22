import { shallow } from "enzyme";
import { Activities } from "../components";

describe("<Activities /> without props", () => {
  const container = shallow(<Activities />);
  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("should have an activities wrapper", () => {
    expect(container.find(".activities").length).toEqual(1);
  });

  it("should have a single head row", () => {
    expect(container.find(".head").length).toEqual(1);
  });

  it("should have at least four columns", () => {
    expect(container.find(".col").length).toBeGreaterThanOrEqual(4);
  });
});

describe("<Activities /> with props", () => {
  const initialProps = {
    activities: [
      {
        id: 1,
        name: "Netflix & Chill",
        friendly: true,
        performed: 50,
      },
      {
        id: 2,
        name: "Birthdate in a restaurant",
        friendly: false,
        performed: 0,
      },
      {
        id: 3,
        name: "Vacations in Hawaii",
        friendly: false,
        performed: 1,
      },
      {
        id: 4,
        name: "Becoming Maria Kondo",
        friendly: true,
        performed: 2,
      },
    ],
    checked: [],
    handleOnChange: jest.fn(),
  };
  const container = shallow(<Activities {...initialProps} />);

  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("should have an activities wrapper", () => {
    expect(container.find(".activities").length).toEqual(1);
  });
  
  it("should have a single head row", () => {
    expect(container.find(".head").length).toEqual(1);
  });

  it("should have at least eight cells", () => {
    expect(container.find(".col").length).toBeGreaterThanOrEqual(8);
  });

  it("should have checkboxes unchecked", () => {
    container.find('input[type="checkbox"]').forEach((node) => {
      expect(node.props().checked).toEqual(false);
    });
  });

  it("should have some checkboxes unchecked and a checkbox checked", () => {
    initialProps.checked = [
      {
        id: 3,
        name: "Vacations in Hawaii",
        friendly: false,
        performed: 1,
      },
    ];

    container.find('input[type="checkbox"]').forEach((node, index) => {
      if (initialProps.activities[index] === 3)
        expect(node.props().checked).toEqual(true);
      else expect(node.props().checked).toEqual(false);
    });
  });

  it("should handle an activity in an onChange event", () => {
    const event = {
      preventDefault() {},
    };

    container.find('input[type="checkbox"]').forEach((node, index) => {
      node.simulate("change", event);
      expect(initialProps.handleOnChange).toBeCalledWith(
        event,
        initialProps.activities[index]
      );
    });
  });
});
