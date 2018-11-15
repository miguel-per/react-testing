import React from 'react';
import ReactDOM from 'react-dom';
import PersonEdit from './PersonEdit';
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('Adding cancel button makes total number of buttons two', () => {
    //Setup
    const peopleData = [
        {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
        {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
    ]
    
    //const cancelEditedPerson = sinon.stub()
    const personEditWrapper = shallow(<PersonEdit editingIndex={0} people={peopleData}/>)
    const cancelButton = personEditWrapper.find('button')

    //Assert
    expect(cancelButton).toHaveLength(2)
});

it('calls saveEditedPerson when save button is clicked', () => {
    //Setup
    const peopleData = [
        {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
        {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
    ]
    const saveEditedPerson = sinon.stub()
    const personEditWrapper = shallow(<PersonEdit editingIndex={0} people={peopleData} saveEditedPerson={saveEditedPerson}/>)
    const saveButton = personEditWrapper.find('button').at(0)

    //Exercise
    saveButton.simulate('click')

    //Assert
    expect(saveEditedPerson.calledOnce).toBe(true)
})


it('calls cancelEditedPerson when cancel button is clicked', () => {
    //Setup
    const peopleData = [
        {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
        {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
    ]
    const cancelEditedPerson = sinon.stub()
    const personEditWrapper = shallow(<PersonEdit editingIndex={0} people={peopleData} cancelEditedPerson={cancelEditedPerson}/>)
    const cancelButton = personEditWrapper.find('button').at(1)

    //Exercise
    cancelButton.simulate('click')

    //Assert
    expect(cancelEditedPerson.calledOnce).toBe(true)
});


// it('return to the PersonList view (without updating the Person) when cancel is clicked', () => {
//     //Setup
//     const peopleData = [
//         {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
//         {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
//     ]

//     const cancelEditedPerson = sinon.stub()
//     const personEditWrapper = shallow(<PersonEdit editingIndex={0} people={peopleData} cancelEditedPerson={cancelEditedPerson}/>)
//     const cancelButton = personEditWrapper.find('button').at(1)

//     //Exercise
//     cancelButton.simulate('click')

//     //Assert 
//     expect(cancelEditedPerson.).toBe("PersonList")
// });