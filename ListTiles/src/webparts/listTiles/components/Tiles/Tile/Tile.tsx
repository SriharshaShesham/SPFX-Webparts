import { css } from 'office-ui-fabric-react';
import * as React from 'react';

import ITileProps from '../../../Models/ITileProps';
import Icon from '../../Icon/Icon';
import styles from './Tile.module.scss';



export default function Tile(props: ITileProps) {
    console.log("-----------------Inside Tile");
    //console.log("Flag: ", props.flag);
    const cssClasses = css(styles.tile, "col-sm-12 col-md-6 col-lg-3");
    return (

        (props.flag=="true" || !props.flag) &&
        (
            <a href={props.hyperlink} className={cssClasses} aria-label={props.tooltip}>

                <Icon iconName={props.icon} />
                <span className={styles.title}>{props.title}</span>


            </a>
        )

    );
}
