import React from 'react';

const Loading = (props) => {
  return (
      <div className="ui active dimmer">
        <div className="ui indeterminate text loader">Fetching location.</div>
      </div>
  );
}

export default Loading;