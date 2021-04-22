import * as React from 'react';
import { useState, useEffect } from 'react'
import styles from './ListTiles.module.scss';
import { IListTilesProps } from '../Models/IListTilesProps';

import { PnpSPFunctions } from '../Data/PnpSPFunctions';

import Tile from './Tiles/Tile/Tile';
import Header from './Tiles/Header/Header';
import { sp } from '@pnp/sp';
import TopThree from './TopThree/TopThree';
import QuickLink from './QuickLink/QuickLink';




export const ListTiles: React.FunctionComponent<IListTilesProps> = (props) => {

  let _pnpSPFunctions: PnpSPFunctions = null;
  let _fields = [];


  let _id: number = props.id;
  let _titleColumn: string = props.titleColumn;
  let _iconColumn: string = props.iconColumn;
  let _tooltipColumn: string = props.tooltipColumn;
  let _flagColumn: string = props.flagColumn;
  let _sortColumn: string = props.sortColumn;
  let _hyperlinkColumn: string = props.hyperlinkColumn;
  let _listTitle: string = props.list;
  let _headerText: string = props.headerText;
  let _displayType: number = props.displayType;
  sp.setup({
    spfxContext: props.webpartContext
  });
  _pnpSPFunctions = new PnpSPFunctions(props.webpartContext);

  _fields.push(_titleColumn, _iconColumn, _tooltipColumn, _flagColumn, _sortColumn, _hyperlinkColumn);

  const [listItems, setListItems] = useState([]);
  const [headerText, setHeader] = useState("");
  const [displayType, setDisplayType] = useState(0);



  console.log("---------------------Inside the list tiles");
  console.log("DisplayType: ", _displayType);

  const getListItems = async () => {
    // const currentThis=this;
    //console.log("-----------------------Getting list items");
    //console.log(_listTitle);
    if (_listTitle) {
      let items = [];
      await _pnpSPFunctions.getListItems(_listTitle).then(allItems => {
        items = [];
        // items = allItems;
        allItems.forEach(element => {

          items.push({
            [_titleColumn]: element[_titleColumn],
            [_iconColumn]: element[_iconColumn],
            [_tooltipColumn]: element[_tooltipColumn],
            [_flagColumn]: element[_flagColumn],
            [_sortColumn]: element[_sortColumn],
            [_hyperlinkColumn]: element[_hyperlinkColumn],
          });
        });

        //console.log("------------List Items-----------");
        //console.log(items);

        if (_sortColumn)
          items = items.sort((a, b) => (a[_sortColumn] > b[_sortColumn]) ? 1 : -1);

        setListItems(items);
      });



    }
  }



  useEffect(() => {
    setHeader(_headerText);

  }, [_headerText]);

  useEffect(() => {
    setDisplayType(_displayType)

  }, [_displayType]);

  //getListItems() only runs when any of the below array value changes.
  useEffect(() => {
    getListItems();
  }, [_titleColumn, _iconColumn, _tooltipColumn, _flagColumn, _sortColumn, _hyperlinkColumn]);

  function SwitchCase(type) {
    console.log("Type",type);
    switch(type) {
      case '2':
        console.log("Inside case 2");
        return (
          <div className="container">
            
            <div className="row justify-content-center">
              
              {
                listItems.slice(0,3).map(listItem => (
                  <TopThree
                    id={listItem[_id]}
                    title={listItem[_titleColumn]}
                    icon={listItem[_iconColumn]}
                    tooltip={listItem[_tooltipColumn]}
                    flag={listItem[_flagColumn]}
                    sort={listItem[_sortColumn]}
                    hyperlink={listItem[_hyperlinkColumn]}
                    displayType={displayType}
                  />

                ))
              }
              

            </div>

          </div>
        )
      case '3':
        console.log("Inside case 3");
        return (
          
              <React.Fragment>
                {
                listItems.map(listItem => (
                  <QuickLink
                    id={listItem[_id]}
                    title={listItem[_titleColumn]}
                    icon={listItem[_iconColumn]}
                    tooltip={listItem[_tooltipColumn]}
                    flag={listItem[_flagColumn]}
                    sort={listItem[_sortColumn]}
                    hyperlink={listItem[_hyperlinkColumn]}
                    displayType={displayType}
                  />

                ))
              }
              </React.Fragment>

          

        );
      default:
        console.log("Inside default case");
        return (
          <div className="container">
            {
              (headerText) &&
              (
                <Header headerText={headerText} />
              )
            }
            <div className="row justify-content-center">
              {
                listItems.map(listItem => (
                  <Tile
                    id={listItem[_id]}
                    title={listItem[_titleColumn]}
                    icon={listItem[_iconColumn]}
                    tooltip={listItem[_tooltipColumn]}
                    flag={listItem[_flagColumn]}
                    sort={listItem[_sortColumn]}
                    hyperlink={listItem[_hyperlinkColumn]}
                    displayType={displayType}
                  />

                ))
              }

            </div>

          </div>
        )
    }
  }


  return (
    <div className={styles.listTiles}>

      {
        SwitchCase(displayType)
      }
      
    </div>

  );
}

