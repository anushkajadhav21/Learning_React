import React from 'react';

let footStyle = {
  color: '#568203',
  fontSize: '20px'                                                                                        
}


function Footer(props) {
    return   <p style={footStyle}>Day 1{props.dayCount}</p>

}
export default Footer;