export default interface ITileProps {
    
        title: string;
        icon: string;
        tooltip: string;
        flag: string;
        sort: string;
        hyperlink: string;
        id:number;
        displayType:number;
}

export interface ITileItems extends Array<ITileProps>{}