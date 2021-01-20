import { shallow } from "enzyme";

import Spinner from "../../components/UI/Spinner/Spinner";
import Movie from "../../components/Movie/Movie";
import { MovieController } from "./MovieController";

describe("[CONTAINER] <MovieController />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieController />);
  });

  it("should render .no-movie class", () => {
    expect(wrapper.find(".no-movie").length).toEqual(1);
  });

  it("should render .fetch-error class", () => {
    wrapper.setProps({
      loading: false,
      movie: null,
      error: {
        message: "some-error"
      },
    });

    expect(wrapper.find(".fetch-error").length).toEqual(1);
  });

  it("should render <Spinner />", () => {
    wrapper.setProps({
      loading: true,
      movie: null,
      error: null,
    });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it("should render <Movie />", () => {
    wrapper.setProps({
      loading: false,
      movie: {
        title: 'mockedTitle'
      },
      error: null,
    });

    expect(wrapper.find(Movie)).toHaveLength(1);
  });
});
