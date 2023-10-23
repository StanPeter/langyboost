import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import globalClasses from 'styles/globalClasses.module.scss';

interface TooltipInterface {}

const Tooltip: React.FC<TooltipInterface> = () => {
    return (
        <div className={globalClasses.tooltip}>
            <p className="">Just trying it out</p>
            <AiOutlineQuestionCircle />
        </div>
    );
};

export default Tooltip;
