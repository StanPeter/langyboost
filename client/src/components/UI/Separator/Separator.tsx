import React from "react";
import { TSeparatorUseCase } from "ts/types";
import styles from "./separator.module.scss";

interface ISeparator {
    style?: object;
    useCase: TSeparatorUseCase;
    classes?: string;
}

const Separator: React.FC<ISeparator> = ({ style, useCase, classes }) => {
    let useCaseClasses: string[] = [];

    if (useCase === "fullHorizontal") useCaseClasses.push(styles.fullHorizontal);

    return <hr className={`${classes} ${useCaseClasses.join(" ")}`} style={style} />;
};

export default Separator;
