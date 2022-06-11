import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import {
  TextBoxCommonBase,
  InputBase,
  TextBoxDisable,
  TextBoxEnable,
} from "../utils/theme";

export const defaultProps = {
  disabled: false,
  readOnly: false,
  className: "",
  placeholder: "",
  initialValue: "",
  showToken: false,
};

const Input = ({
  className,
  label,
  id,
  value,
  name,
  initialValue,
  disabled,
  readOnly,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  input_title,
  maticAmount,
  showToken,
  ...props
}) => {
  const [initValue, setInitValue] = useState(initialValue);
  const { chainId } = useWeb3React();
  const changeHandler = (event) => {
    if (disabled || readOnly) return;
    setInitValue(event.target.value);
    onChange && onChange(event);
  };

  const focusHandler = (e) => {
    onFocus && onFocus(e);
  };

  const blurHandler = (e) => {
    onBlur && onBlur(e);
  };

  useEffect(() => {
    if (value === undefined) return;
    setInitValue(value);
  }, [value]);

  const classNames =
    InputBase +
    " " +
    TextBoxCommonBase +
    " " +
    (disabled === true ? TextBoxDisable : TextBoxEnable) +
    " " +
    className +
    "focus:outline-white p-2";

  return (
    <React.Fragment>
      <div
        className="p-3 rounded-xl relative"
        style={{ backgroundColor: "#483f5a" }}
      >
        <label htmlFor={name} className="text-xs text-white absolute top-4">
          {label}
        </label>
        {showToken && (
          <label className="text-xs text-white absolute top-4 right-4">
            {maticAmount} {chainId === 1 ? "ETH" : "MATIC"}
          </label>
        )}

        <div className="flex justify-between">
          <input
            type="text"
            placeholder={placeholder}
            className={classNames}
            id={name}
            value={initValue}
            disabled={disabled}
            readOnly={readOnly}
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={blurHandler}
            autoComplete="off"
            name={name}
            {...props}
          />
          <div className="mt-auto bg-yellow-50 px-3 rounded-full">
            {input_title}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Input.defaultProps = defaultProps;

export default Input;
