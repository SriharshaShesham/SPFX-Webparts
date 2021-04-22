import { css } from 'office-ui-fabric-react';
import * as React from 'react';

import Icon from '../Icon/Icon';
import ITileProps from '../../Models/ITileProps';
import styles from './TopThree.module.scss';
import { useState } from 'react';



export default function TopThree(props: ITileProps) {
    //console.log("-----------------Inside TopThree");
    //console.log("Flag: ", props.flag);

    const [displayComponent, setDisplayComponent] = useState(
        <section className={styles.section}>
            <Icon iconName={props.icon} />
            <span className={styles.title}>{props.title}</span>
        </section>
    );


    const cssClasses = css(styles.topThreeBlock, "col-3");



    let onMouseHover = () => {
        console.log("Tooltip",props.tooltip)
        setDisplayComponent(
            
            <section className={styles.section}>
                <span className={styles.title}>{props.title}</span>
                <p className="toolTip">
                    {props.tooltip}
                </p>
            </section>

        );
    }

    let onMouseLeave = () => {
        setDisplayComponent(
            <section className={styles.section}>
                <Icon iconName={props.icon} />
                <span className={styles.title}>{props.title}</span>
            </section>
        );
    }

    return (

        (props.flag == "true" || !props.flag) &&
        (
            <a href={props.hyperlink} onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave} className={cssClasses} aria-label={props.tooltip}>

                {displayComponent}

            </a>



        )

    );
}
