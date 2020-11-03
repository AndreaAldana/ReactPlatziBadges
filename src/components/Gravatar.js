import React from 'react';
import md5 from 'md5'

function Gravatar(props) {
    const email = props.email;
    const hashh = md5(email);

    return <img className={props.className} src={`https://es.gravatar.com/avatar/${hashh}?d=identicon`} alt="avatar" />


};

export default Gravatar;