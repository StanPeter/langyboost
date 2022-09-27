import MainBody from "components/layouts/MainBody/MainBody";
import React from "react";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <MainBody>
            <div className="">PAGE WAS NOT FOUND 404</div>
        </MainBody>
    );
};

export default NotFound;
