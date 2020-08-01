import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Tests on AddCategory Component', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should handle changes on Input', () => {
        let input = wrapper.find('input');
        const value = 'HelloWorld';
        input.simulate('change', { target: { value } });
        input = wrapper.find('input');
        expect(input.prop('value')).toBe(value);
    });
    test('should not call setCategories onSubmit if InputValue is empty', () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(setCategories).not.toBeCalled();
    });
    test('should call setCategories and clean Input', () => {
        const value = 'Omae wa mou shindeiru... NANI?!';
        wrapper.find('input').simulate('change', { target: { value } });
        expect(wrapper.find('input').prop('value')).toBe(value);
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(setCategories).toBeCalledTimes(1);
        expect(setCategories).toBeCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
