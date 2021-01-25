import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ShallowRenderer from 'react-test-renderer/shallow';
import logo from "./assets/Logo-PNG-600.png";
import DateDialog from "./components/DateDialog/";
import Header from "./components/Header";
import SwitchMode from "./components/SwitchMode";
import dateFormat from "./utils/dateFormat";
// in your test:

test("check logo", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
  expect(result.props.children).toEqual(
    <img src={logo} alt="noPhoto" width="20%" height="20%" />
  );
})

test('dateFormat check regex', () => {
  let dateInfo = {
    year: 2020,
    month: 10,
    day: 12
  }
  let time = "09:00"
  let regEx = /^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}T[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}:00\+00:00/
  const stringFormated = dateFormat(dateInfo, time)
  expect(stringFormated).toEqual(expect.stringMatching(regEx))
})

test('render without crash', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DateDialog open={false} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('switchmode text on true', () => {
  const { getByTestId } = render(<SwitchMode checked={true} />)
  expect(getByTestId('switch')).toHaveTextContent("Mode ADD DATE actived")
})

//snapshot demo to see changes
test('matches snapshot', () => {
  const tree = renderer.create(<SwitchMode checked={false} />).toJSON()
  expect(tree).toMatchSnapshot()
})
