import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Test on GifGridItem Component', () => {
    const title = 'Levi';
    const url = `https://media0.giphy.com/media/GISoZGkcy57H2/giphy.gif?cid=f85e1ea97vx4zjbx1lgr9f048qg4j9cy0h0zosdlmzp48l5r&rid=giphy.gif`;
    let wrapper = shallow(<GifGridItem title={title} url={url} />);
    test('should render <GifGridItem /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should display the title correctly', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    test('should display the img correctly', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toMatch(url);
        expect(img.prop('alt')).toMatch(title);
    });
    test('div should have animate__fadeIn class', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toMatch('animate__fadeIn');
    });
});
