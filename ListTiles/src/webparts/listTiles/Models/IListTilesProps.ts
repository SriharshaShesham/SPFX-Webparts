import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ITheme } from "office-ui-fabric-react";

export interface IListTilesProps {
  
  description: string;
  list: string;
  id:number;
  titleColumn: string;
  iconColumn: string;
  tooltipColumn: string;
  flagColumn: string;
  sortColumn: string;
  hyperlinkColumn: string;
  webpartContext:WebPartContext;
  headerText:string;
  displayType:number;
}
