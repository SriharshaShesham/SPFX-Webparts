import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneLabel,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ListTilesWebPartStrings';
import {ListTiles} from './components/ListTiles';
import { IListTilesProps } from './Models/IListTilesProps';
import { IColumnReturnProperty, PropertyFieldColumnPicker, PropertyFieldColumnPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldColumnPicker';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { createTheme, ISemanticColors, ITheme } from 'office-ui-fabric-react';
require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');

export interface IListTilesWebPartProps {
  headerText: string;
  id:number;
  description: string;
  list: string;
  titleColumn: string;
  iconColumn: string;
  tooltipColumn: string;
  flagColumn: string;
  sortColumn: string;
  hyperlinkColumn: string;
  columnInternalName: string[];
  displayType:number;
}



export default class ListTilesWebPart extends BaseClientSideWebPart<IListTilesWebPartProps> {
  

  public render(): void {
    
    const element: React.ReactElement<IListTilesProps> = React.createElement(
      ListTiles,
      {
        id:this.properties.id,
        description: this.properties.description,
        list: this.properties.list,
        titleColumn: this.properties.titleColumn,
        iconColumn:this.properties.iconColumn,
        tooltipColumn:this.properties.tooltipColumn,
        flagColumn:this.properties.flagColumn,
        sortColumn:this.properties.sortColumn,
        hyperlinkColumn:this.properties.hyperlinkColumn,
        webpartContext:this.context,
        headerText:this.properties.headerText,
        displayType:this.properties.displayType
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected tilesConfigurationChanged(propertyPath: string, oldValue: any, newValue: any): void {

    //console.log("Propertypane info changed");
    // this.render();

    // if (propertyPath === 'listName' && newValue) {
      // push new list value
      super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
      // refresh the item selector control by repainting the property pane
      this.context.propertyPane.refresh();
      // re-render the web part as clearing the loading indicator removes the web part body
      this.render();      
    // }
    // else {
    //   super.onPropertyPaneFieldChanged(propertyPath, oldValue, oldValue);
    // }
  }
  private validatePropertyPaneField(value: string): string {
    if (value === null ||
      value.trim().length === 0) {
      return 'Please provide a value';
    }


    return '';
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                // PropertyPaneTextField('description', {
                //   label: strings.DescriptionFieldLabel
                // }),
                PropertyFieldListPicker('list', {
                  label: 'Select a list',
                  selectedList: this.properties.list,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context as any,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId'
                }),
                // Single column selection returning 'Internal Name' of the selected column

                PropertyPaneDropdown('displayType', {
                  label: 'Dropdown',
                  options: [
                    { key: '1', text: 'Boxed Tiles'},
                    { key: '2', text: 'Top Three Tiles' },
                    { key: '3', text: 'Quick Links' },
                  ],
                  
              })

              ],

            },
            {
              groupName: "List Fields",
              groupFields: [
                
                PropertyFieldColumnPicker('iconColumn', {
                  label: 'Select the column for Icon',
                  context: this.context as any,
                  selectedColumn: this.properties.iconColumn,
                  listId: this.properties.list,
                  disabled: false,
                  orderBy: PropertyFieldColumnPickerOrderBy.Title,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onGetErrorMessage: this.validatePropertyPaneField.bind(this),
                  deferredValidationTime: 0,
                  key: 'columnSingleTitlePickerFieldId',
                  displayHiddenColumns: false,
                  columnReturnProperty: IColumnReturnProperty['Internal Name']
                }),

                PropertyFieldColumnPicker('titleColumn', {
                  label: 'Select the column for Title',
                  context: this.context as any,
                  selectedColumn: this.properties.titleColumn,
                  listId: this.properties.list,
                  disabled: false,
                  orderBy: PropertyFieldColumnPickerOrderBy.Title,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onGetErrorMessage: this.validatePropertyPaneField.bind(this),
                  deferredValidationTime: 0,
                  key: 'columnSingleTitlePickerFieldId',
                  displayHiddenColumns: false,
                  columnReturnProperty: IColumnReturnProperty['Internal Name']
                }),
                
                PropertyFieldColumnPicker('tooltipColumn', {
                  label: 'Select the column for Tooltip',
                  context: this.context as any,
                  selectedColumn: this.properties.tooltipColumn,
                  listId: this.properties.list,
                  disabled: false,
                  orderBy: PropertyFieldColumnPickerOrderBy.Title,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'columnSingleTitlePickerFieldId',
                  displayHiddenColumns: false,
                  columnReturnProperty: IColumnReturnProperty['Internal Name']
                }),
                PropertyFieldColumnPicker('flagColumn', {
                  label: 'Select the column for show/hide flag',
                  context: this.context as any,
                  selectedColumn: this.properties.flagColumn,
                  listId: this.properties.list,
                  disabled: false,
                  orderBy: PropertyFieldColumnPickerOrderBy.Title,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'columnSingleTitlePickerFieldId',
                  displayHiddenColumns: false,
                  columnReturnProperty: IColumnReturnProperty['Internal Name']
                }),
                PropertyFieldColumnPicker('sortColumn', {
                  label: 'Select the column for sort',
                  context: this.context as any,
                  selectedColumn: this.properties.sortColumn,
                  listId: this.properties.list,
                  disabled: false,
                  orderBy: PropertyFieldColumnPickerOrderBy.Title,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'columnSingleTitlePickerFieldId',
                  displayHiddenColumns: false,
                  columnReturnProperty: IColumnReturnProperty['Internal Name']
                }),
                PropertyFieldColumnPicker('hyperlinkColumn', {
                  label: 'Select the column for hyperlink',
                  context: this.context as any,
                  selectedColumn: this.properties.hyperlinkColumn,
                  listId: this.properties.list,
                  disabled: false,
                  orderBy: PropertyFieldColumnPickerOrderBy.Title,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'columnSingleTitlePickerFieldId',
                  displayHiddenColumns: false,
                  columnReturnProperty: IColumnReturnProperty['Internal Name']
                }),
                PropertyPaneTextField('headerText', {
                  label: "Header text",
                  value:this.properties.headerText,
                  
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
