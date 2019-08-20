import React from 'react';
import PropTypes from 'prop-types';

import { Tab, Tabs } from 'grommet';

import EmailSettings from './EmailSettings';
import DetailSettings from './DetailsSettings';

const StudentSettings = () => {
  return (
    <Tabs margin={{ vertical: '30px' }} justify="center">
      <Tab title="Emails">
        <EmailSettings />
      </Tab>
      <Tab title="Update Info">
        <DetailSettings />
      </Tab>
    </Tabs>
  );
};

export default StudentSettings;
