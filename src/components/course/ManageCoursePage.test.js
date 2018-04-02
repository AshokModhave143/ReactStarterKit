import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';  //Get the raw component - add 'export' to the class in component

describe('Manage Course Page', ()=> {
  it('sets error message when trying to save empty title', ()=> {
    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); }},
      course: {id:'', watchHref:'', title:'', authorId:'', length:'', category:''}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const savebutton = wrapper.find('input').last();

    expect(savebutton.prop('type')).toBe('submit');
    savebutton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters. ');
  });
});
