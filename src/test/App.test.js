import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

configure({
    adapter: new Adapter()
});

describe("Test componente App", () => {
    test("Probando renderizado de componente", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("Navegation")).toHaveLength(1);
        expect(wrapper.find("Route")).toHaveLength(3);
    });
});
