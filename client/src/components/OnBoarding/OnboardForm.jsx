import React, { useState } from './node_modules/react';
import { useStateValue } from './node_modules/react-conflux';
import { addSchoolDetails } from './onboardQueries';
import {
  globalContext,
  ON_BOARD_DETAILS
} from '../../store/reducers/globalReducer';

const NewSchoolForm = () => {
  const [, dispatchGlobal] = useStateValue(globalContext);
  const [input, setInput] = useState({
    name: '',
    taxId: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    type: '',
    url: '',
    userId: 1
  });

  const handleChanges = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addSchoolDetails(input).then(res =>
      dispatchGlobal({
        type: ON_BOARD_DETAILS,
        payload: res.data
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder={'Name of Institution'}
        onChange={handleChanges}
        value={input.name}
      />
      <input
        name="taxId"
        placeholder={'TaxId'}
        onChange={handleChanges}
        value={input.taxId}
      />
      <input
        name="street1"
        placeholder={'Address 1'}
        onChange={handleChanges}
        value={input.street1}
      />
      <input
        name="street2"
        placeholder={'Address 2'}
        onChange={handleChanges}
        value={input.street2}
      />
      <input
        name="city"
        placeholder={'City'}
        onChange={handleChanges}
        value={input.city}
      />
      <input
        name="state"
        placeholder={'State'}
        onChange={handleChanges}
        value={input.state}
      />
      <input
        name="zip"
        placeholder={'Zip Code'}
        onChange={handleChanges}
        value={input.zip}
      />
      <input
        name="phone"
        placeholder={'Phone Number'}
        onChange={handleChanges}
        value={input.phone}
      />
      <input
        name="type"
        placeholder={'Type of Institution'}
        onChange={handleChanges}
        value={input.type}
      />
      <input
        name="url"
        placeholder={'Institution Website'}
        onChange={handleChanges}
        value={input.url}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewSchoolForm;
