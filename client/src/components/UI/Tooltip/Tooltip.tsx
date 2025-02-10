import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

interface TooltipInterface {}

const Tooltip: React.FC<TooltipInterface> = () => {
    return (
        <div className="tooltip">
            <p className="">Just trying it out</p>
            <AiOutlineQuestionCircle />
        </div>
    );

};

export default Tooltip;
