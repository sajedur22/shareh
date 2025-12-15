import React from "react";

interface TextAreaFieldProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    name: string;
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
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

            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full border border-gray-900 rounded-lg px-3 py-2 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:border-blue-500 transition h-28 resize-none ${className}`}
                {...rest}
            />
        </div>
    );
};

export default TextAreaField;
