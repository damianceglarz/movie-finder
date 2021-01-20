import { shallow } from "enzyme";
 
import Searchbox from "./Searchbox";
import Input from "../UI/Form/Input/Input";
import Button from "../UI/Form/Button/Button";

describe("[COMPONENT] <Searchbox />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Searchbox config={{type: "text"}} searchHandler={jest.fn()}/>);
  });

  it("should render button and input", () => {
    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.find(Button).length).toEqual(1);
  }); 
});
