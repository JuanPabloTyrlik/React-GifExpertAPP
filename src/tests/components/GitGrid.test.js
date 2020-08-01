import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';

describe('Tests on GifGrid', () => {
    const category = 'One Punch Man';
    const wrapper = shallow(<GifGrid category={category} />);
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
