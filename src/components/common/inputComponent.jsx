import React from 'react';

const InputComponent = (props) => {
    return (<>
        <div className="mb-3">
            <label className="form-label">{props.title}</label>
            <input autoFocus type={props.type} name={props.name} onChange={props.onChange} className="form-control" aria-describedby="emailHelp" />
        </div>
        {props.error&&<div className="alert alert-danger">{props.error}</div>}
    </>
    );
}

export default InputComponent;