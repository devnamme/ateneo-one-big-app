import React from 'react';
import './IconTextButton.css';

const IconTextButton = (props) => {

    const clickHandler = () => {
        // just placeholder for now
        if (props.id == 'addSchedule') {
            alert("Schedule Added");
        }

        if (props.id == 'enlistmentScheduler') {
            alert("Enlistment Scheduled");
        }
        
        if (props.id == 'addSubjectGroup') {
            alert("Subject Group Added");
        }

        if (props.id == 'addClass') {
            alert("Class Added");
        }

        if (props.id == 'pasteFromAISIS') {
            alert("Pasted from AISIS");
        }
    }   

    return (
        <button
            id={props.id}
            onClick = {clickHandler}
        >   
        <img class='icon' src={`/${props.icon}.svg`} />
            {/* Debating whether its better to do it like this or to have a prop.text value for the text instead*/}
            {props.id == 'addSchedule' &&
            <p> Add New Schedule </p>
            }
    
            {props.id == 'enlistmentScheduler' &&
            <p> Enlistment Scheduler </p>
            }

            {props.id == 'addSubjectGroup' &&
            <p> Add Subject Group </p>
            }

            {props.id == 'addClass' &&
            <p> Add Class </p>
            }

            {props.id == 'pasteFromAISIS' &&
            <p> Paste from AISIS </p>
            }
        </button>
  );
};

IconTextButton.defaultProps = {
    id: 'addSchedule',
    icon: 'add'
}

export default IconTextButton;

