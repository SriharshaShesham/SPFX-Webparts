import { css } from 'office-ui-fabric-react';
import * as React from 'react';

import IQuickLinkProps from '../../Models/IQuickLinkProps';
import Icon from '../Icon/Icon';
import styles from './QuickLink.module.scss';

export default function QuickLink(props: IQuickLinkProps) {
    console.log("-----------------Inside QuickLink");
    //console.log("Flag: ", props.flag);
    const cssClasses = css(styles.quickLink, "row justify-content-left");
    return (

        (props.flag=="true" || !props.flag) &&
        (
            <a href={props.hyperlink} className={cssClasses} aria-label={props.tooltip}>

                <Icon iconName={props.icon} displayType={props.displayType} />
                <span className={styles.title}>{props.title}</span>


            </a>
        )

    );
}
