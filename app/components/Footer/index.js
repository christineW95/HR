import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import { Button } from '@material-ui/core';

function Footer() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'

    }}>

      <Button variant="contained" color="primary" style={{ margin: 20 }}>Save</Button>
      <Button variant="contained"  color="primary" style={{ margin: 20 }}>Edit</Button>
      <Button variant="contained" color="primary" style={{ margin: 20 }}>Cancel</Button>
    </div>

  );
}

export default Footer;
