import React from 'react';
import { Tab, Tabs } from 'grommet';
import { useStateValue } from 'react-conflux';

import EmailSettings from './EmailSettings';
import DetailSettings from './DetailsSettings';
import { studentContext } from '../../../store/reducers/studentReducer';

const StudentSettings = () => {
  const [studentState] = useStateValue(studentContext);

  return (
    <Tabs margin={{ vertical: '30px' }} justify="center">
      <Tab title="Emails">
        <EmailSettings />
      </Tab>
      <Tab title="Update Info">
        <DetailSettings
          firstName={studentState.studentData.studentDetails.firstName}
          lastName={studentState.studentData.studentDetails.lastName}
          middleName={studentState.studentData.studentDetails.middleName}
          street1={studentState.studentData.studentDetails.street1}
          street2={studentState.studentData.studentDetails.street2}
          city={studentState.studentData.studentDetails.city}
          state={studentState.studentData.studentDetails.state}
          zip={studentState.studentData.studentDetails.zip}
          phone={studentState.studentData.studentDetails.phone}
        />
      </Tab>
    </Tabs>
  );
};

export default StudentSettings;
