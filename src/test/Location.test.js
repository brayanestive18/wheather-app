import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import ConnectLocation, { Location } from "../components/Location";
import { setCity } from "../actions";

configure({
    adapter: new Adapter()
});

const initialState = {
    temperature: { city: "Medellín" },
    count: 0
};

let store, mockStore, wrapperConnect, wrapper;

const middlewares = [thunk];

describe("Test componente Location", () => {
    beforeAll(() => {
        mockStore = configureMockStore(middlewares);
        store = mockStore(initialState);
        wrapperConnect = mount(
            <Provider store={store}>
                <ConnectLocation />
            </Provider>
        );
        wrapper = shallow(<Location />);
    });

    it("Se debe conectar el componente con el store de la aplicación.", () => {
        expect(wrapperConnect.length).toEqual(1);
    });

    it("Se debe renderizar una etiqueta h1", () => {
        expect(wrapper.find("h1")).toHaveLength(1);
    });

    it("Comprobar el estado inicial", () => {
        expect(wrapperConnect.find("h1").text()).toBe("Medellín");
    });

    it("Comprobar el cambio de estado al despachar una acción", () => {
        wrapperConnect.props().store.dispatch(setCity("Calí"));
        expect(wrapperConnect.props().store.getActions()[0].payload).toBe(
            "Calí"
        );
    });
});
