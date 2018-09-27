import React from "react";
import PropTypes from "prop-types";
import "../style/app.css";

const InputField = (props) => {
  let id = props.id;
  id = window.isUndefined(id) ? null : id;
  return (
    <div class="login-form-child user_details">
      <div  class="user_details_div">
        <img src={props.imageSrc} class="image-input"/>
        <input id={id} type={props.type} name={props.name} placeholder={props.placeholder}/>
      </div>
    </div>
  );
};

InputField.propTypes =  { imageSrc : PropTypes.string
                        , type : PropTypes.string
                        , name : PropTypes.string
                        , placeholder : PropTypes.string
                        };
export default InputField;