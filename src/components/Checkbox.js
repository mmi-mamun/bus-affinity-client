import { useState } from "react";
const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="checkbox-wrapper">
            <label>
                <input type="checkbox" onChange={() => setIsChecked((prev) => !prev)} />
                <span>{label}</span>
            </label>
        </div>
    );
};
export default Checkbox;