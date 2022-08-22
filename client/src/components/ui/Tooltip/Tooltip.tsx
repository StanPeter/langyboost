import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import globalStyles from "../../../styles/style.module.scss";

interface TooltipInterface {}

const Tooltip: React.FC<TooltipInterface> = () => {
    return (
        <div className={globalStyles.tooltip}>
            <p className="">
                tooltipssssssssssss aafsafqwwfq dasdsasda dasdas tooltipssssssssssss aafsafqwwfq
                dasdsasda dasdas
            </p>
            <AiOutlineQuestionCircle />
        </div>
    );
};

export default Tooltip;
