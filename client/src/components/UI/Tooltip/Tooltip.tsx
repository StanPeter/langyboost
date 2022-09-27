import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import globalStyles from "styles/globalStyles.module.scss";

interface TooltipInterface {}

const Tooltip: React.FC<TooltipInterface> = () => {
    return (
        <div className={globalStyles.tooltip}>
            <p className="">
                Just trying it out
            </p>
            <AiOutlineQuestionCircle />
        </div>
    );
};

export default Tooltip;
