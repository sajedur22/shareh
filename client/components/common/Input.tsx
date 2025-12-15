import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
                                                   label,
                                                   name,
                                                   value,
                                                   onChange,
                                                   className = "",
                                                   ...rest
                                               }) => {
    return (
        <div className="space-y-1 w-full">
            {label && (
                <label
                    htmlFor={name}
                    className="text-gray-700 font-medium text-sm"
                >
                    {label}
                </label>
            )}

            <input
                id={name}
                name={name}
                value={value ?? ""}  // <-- FIXED
                onChange={onChange}
                className={`w-full border border-gray-300 rounded-lg px-3 py-2 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:border-blue-500 transition ${className}`}
                {...rest}
            />
        </div>
    );
};

export default InputField;
