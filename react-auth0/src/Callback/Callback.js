import React from 'react';
import { withRouter } from 'react-router';

function Callback(props) {
  console.debug("Callback");  
  props.auth.handleAuthentication().then(() => {
    props.history.push('/');
  });

  return (
    <div>
      Loading user profile.
    </div>
  );
}

export default withRouter(Callback);