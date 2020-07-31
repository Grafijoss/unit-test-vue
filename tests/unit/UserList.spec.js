import axios from "axios";
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

import { shallowMount } from "@vue/test-utils";
import UserList from "@/components/UserList";

describe("UserList", () => {
  afterAll(() => {
    mock.restore();
  });
  beforeEach(() => {
    mock.reset();
  });

  it("loads users", async () => {
    mock
      .onGet("http://localhost:3000/usuarios")
      .reply(200, [{ name: "foo" }, { name: "bar" }, { name: "baz" }]);

    const wrapper = shallowMount(UserList);
    await wrapper.vm.loadUsers();
    const listItems = wrapper.findAll("li");
    expect(listItems).toHaveLength(3);
  });
});
