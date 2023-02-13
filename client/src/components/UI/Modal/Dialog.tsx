import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { ButtonUseCases } from "ts/types";
import Button from "../Button/Button";
import styles from "./dialog.module.scss";

interface DialogProps {
    hideFunction: Function;
    content: React.ReactNode;
    submitBtn?: {
        onSubmit?: () => void;
        text: string;
        useCase?: ButtonUseCases;
        disabled?: boolean | (() => boolean);
    };
}

const Backdrop: React.FC<DialogProps> = ({ hideFunction }) => (
    <div onClick={() => hideFunction()} className={styles.overlay}></div>
);

const ModalOverlay: React.FC<DialogProps> = ({ content, hideFunction, submitBtn }) => {
    return (
        <React.Fragment>
            <div className={styles.modal}>
                <AiOutlineClose onClick={() => hideFunction()} className={styles.close} />
                {content}
                {submitBtn && (
                    <Button
                        className={styles.submitBtn}
                        disabled={submitBtn.disabled}
                        useCase={submitBtn.useCase}
                        text={submitBtn.text}
                        onClick={submitBtn.onSubmit}
                    />
                )}
            </div>
        </React.Fragment>
    );
};

const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
    return (
        <React.Fragment>
            {createPortal(<Backdrop {...props} />, document.getElementById("backdrop")!)}
            {createPortal(<ModalOverlay {...props} />, document.getElementById("modal-overlay")!)}
        </React.Fragment>
    );
};

export default Dialog;
