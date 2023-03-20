import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { TButtonUseCase } from "ts/types";
import Button from "../Button/Button";
import Header from "../Header/Header";
import styles from "./dialog.module.scss";

interface DialogProps {
    hideFunction: Function;
    content: React.ReactNode;
    title: string;
    submitBtn?: {
        onSubmit?: () => void;
        text: string;
        useCase?: TButtonUseCase;
        disabled?: boolean | (() => boolean);
    };
}

const Backdrop: React.FC<DialogProps> = ({ hideFunction }) => (
    <div onClick={() => hideFunction()} className={styles.overlay}></div>
);

const ModalOverlay: React.FC<DialogProps> = ({ content, hideFunction, submitBtn, title }) => {
    return (
        <React.Fragment>
            <dialog className={styles.modal}>
                <header>
                    <Header level={3} text={title} classes={styles.modalTitle} />
                    <AiOutlineClose onClick={() => hideFunction()} className={styles.close} />
                </header>
                <section className={styles.modalContent}>{content}</section>
                {submitBtn && (
                    <Button
                        // classes={styles.submitBtn}
                        disabled={submitBtn.disabled}
                        useCase={submitBtn.useCase}
                        text={submitBtn.text}
                        onClick={submitBtn.onSubmit}
                    />
                )}
            </dialog>
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
