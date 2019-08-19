import React from 'react';
import PropTypes from 'prop-types';

import { Tab, Tabs } from 'grommet';

import EmailSettings from './EmailSettings';
import DetailSettings from './DetailsSettings';

const StudentSettings = ({ history }) => {
  return (
    <Tabs>
      <Tab title="Emails">
        <EmailSettings />
      </Tab>
      <Tab title="Update Info">
        <DetailSettings />
      </Tab>
    </Tabs>
  );
};

StudentSettings.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default StudentSettings;
