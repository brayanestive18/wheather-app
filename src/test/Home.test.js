import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Home from "../components/Home";

configure({
    adapter: new Adapter()
});

describe("Test componente Home", () => {
    test("Probando renderizado de componente", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find("h1")).toHaveLength(1)
        expect(wrapper.find("h1").text()).toBe("Wellcome!!");
    });
});
