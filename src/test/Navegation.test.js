import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Navegation from "../components/Navegation";

configure({
    adapter: new Adapter()
});

describe("Test componente Navegation", () => {
    test("Probando renderizado de componente", () => {
        const wrapper = shallow(<Navegation />);
        // console.log(wrapper.find("img").get(0).props.src)
        expect(wrapper.find("Link")).toHaveLength(3);
        expect(wrapper.find("Link").get(0).props.children).toBe('Home');
        expect(wrapper.find("Link").get(1).props.children).toBe('OneTv');
        expect(wrapper.find("Link").get(2).props.children).toBe('Weather');
    });
});