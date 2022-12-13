import React from 'react';
import Button from 'react-bootstrap/Button';

import '../Styles/Twitbox.css';


function TwitBox() {
    return (

        <div className="twitbox_container">
            <textarea className="twitbox_textarea" placeholder='Quoi de neuf ?'>

            </textarea>
            <Button variant="primary">Publier</Button>
        </div>
    )

}


export default TwitBox;