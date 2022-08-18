import React from "react";
import styles from "./dialog.module.scss";
import { AiOutlineClose } from "react-icons/ai";

interface DialogProps {
    hideFunction: Function;
    content: React.ReactNode;
}

const Overlay: React.FC<DialogProps> = ({ hideFunction }) => (
    <div onClick={() => hideFunction()} className={styles.overlay}></div>
);

const Modal: React.FC<DialogProps> = ({ content, hideFunction }) => {
    return (
        <React.Fragment>
            <div className={styles.modal}>
                <AiOutlineClose onClick={() => hideFunction()} className={styles.close} />
                {content}
            </div>
        </React.Fragment>
    );
};

const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
    return (
        <React.Fragment>
            <Overlay {...props} />
            <Modal {...props} />
        </React.Fragment>
    );
};

export default Dialog;
