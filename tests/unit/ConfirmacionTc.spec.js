import axios from "axios";
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

import { shallowMount } from "@vue/test-utils";
import ConfirmacionTc from '@/components/ConfirmacionTc'

describe("ConfirmacionTc", () => {
  afterAll(() => {
    mock.restore();
  });
  beforeEach(() => {
    mock.reset();
  });

  it("loads users", async () => {
    mock
      .onPost("http://localhost:3000/pagar")
      .reply(200, [{
        estado: 3,
        idPagoPasarela: '28464424',
        uuid: '8385b3b9-e093-4301-98c0-73264e5b5dfa',
        mensaje: 'Listo, se acreditó tu pago desde el mock!',
        url: null
      }]);

		var tarjeta = {
			idPago: "1"
		};

		const wrapper = shallowMount(ConfirmacionTc, {
			propsData: {  card:tarjeta }
		})

    await wrapper.vm.pagar();
		expect(wrapper.vm.estado).toEqual(3);
  });
});
