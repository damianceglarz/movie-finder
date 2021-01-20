import { shallow } from "enzyme";

import Layout from "./Layout";
import Header from "../../components/Header/Header";
import MovieController from "../MovieController/MovieController";

describe("[CONTAINER] <Layout />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it("should render <Header />", () => {
      expect(wrapper.find(Header)).toHaveLength(1);
  });

  it("should render <MovieController />", () => {
      expect(wrapper.find(MovieController)).toHaveLength(1);
  });
});
