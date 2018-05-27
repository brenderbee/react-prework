import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  // var myStyledComponentStyles = {
  //   backgroundColor: '#ecf0f1',
  //   border: '1px solid black',
  //   fontFamily: 'sans-serif',
  //   paddingTop: '50px',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // };

  return (
    // <div style={myStyledComponentStyles}>
    <div>
      <style jsx>{`
          div {
            background-color: red;
          }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
