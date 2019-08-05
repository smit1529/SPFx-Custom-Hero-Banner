import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  IPropertyPaneDropdownOption,
  PropertyPaneChoiceGroup,
  IPropertyPaneChoiceGroupOption
} from '@microsoft/sp-webpart-base';
import * as $ from 'jquery';
import * as strings from 'CustomHeroBannerWebPartStrings';
import CustomHeroBanner from './components/CustomHeroBanner';
import { ICustomHeroBannerProps } from './components/ICustomHeroBannerProps';

export interface ICustomHeroBannerWebPartProps {
  description: string;
  dropdown: string;
  choiceGroup: string;
  choiceLayout: string;
  width: string;
  height: string;
}

export default class CustomHeroBannerWebPart extends BaseClientSideWebPart<ICustomHeroBannerWebPartProps> {
  private dropDownOptions: IPropertyPaneDropdownOption[] = [];
  private choiceGroupOptions: IPropertyPaneChoiceGroupOption[] = [];
  public tileValues: IPropertyPaneChoiceGroupOption[] = [
    { key: '0', text: 'One Tile', imageSrc: "" },
    { key: '1', text: 'Two Tiles', imageSrc: "" },
    { key: '2', text: 'Three Tiles', imageSrc: "" },
    { key: '3', text: 'Four Tiles', imageSrc: "" },
    { key: '4', text: 'Five Tiles', imageSrc: "" }
  ];
  public layerValues: IPropertyPaneChoiceGroupOption[] = [
    { key: '0', text: 'One Layer', imageSrc: "" },
    { key: '1', text: 'Two Layers', imageSrc: "" },
    { key: '2', text: 'Three Layers', imageSrc: "" },
    { key: '3', text: 'Four Layers', imageSrc: "" },
    { key: '4', text: 'Five Layers', imageSrc: "" }
  ];

  public render(): void {
    const element: React.ReactElement<ICustomHeroBannerProps> = React.createElement(
      CustomHeroBanner,
      {
        description: this.properties.description,
        dropdown: this.properties.dropdown,
        choiceGroup: this.properties.choiceGroup,
        choiceLayout: this.properties.choiceLayout,
        width: this.properties.width,
        height: this.properties.height
      }
    );

    this._getListData();
    ReactDom.render(element, this.domElement);
  }

  public LoadLayoutTileValues(data): any {
    this.choiceGroupOptions = [];
    data.map((items, index) => {
      this.choiceGroupOptions.push({ key: items.key, text: items.text, imageSrc: items.imageSrc })
    })
  }

  private _getListData(): any {
    var self = this;
    $.ajax({
      url: this.context.pageContext.web.absoluteUrl + "/_api/web/lists?$filter=Hidden eq false",
      type: "GET",
      dataType: "json",
      headers: {
        Accept: "application/json;odata=nometadata"
      }
    }).done(function (data) {
      var listTitle = data.value.map((items) => { return items.Title })
      self.LoadDropDownValues(listTitle);
    });
  }

  private LoadDropDownValues(data): any {
    data.map((items) => {
      this.dropDownOptions.push({ key: items, text: items })
    })
  }

  protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
    if (propertyPath == 'choiceGroup') {
      if (newValue == "Layers") {
        this.LoadLayoutTileValues(this.layerValues);
      }
      else if (newValue == "Tiles") {
        this.LoadLayoutTileValues(this.tileValues);
      }
    }
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: "Webpart Configuration", //strings.BasicGroupName,
              groupFields: [
                PropertyPaneChoiceGroup('choiceGroup', {
                  label: 'Layout Style',
                  options: [{ key: 'Tiles', text: 'Tiles' }, { key: 'Layers', text: 'Layers' }]
                }),
                PropertyPaneChoiceGroup('choiceLayout', {
                  label: 'Layout Options',
                  options: this.choiceGroupOptions.length > 0 ? this.choiceGroupOptions : this.tileValues
                }),
                PropertyPaneTextField('width', {
                  label: strings.WidthFieldLabel
                }),
                PropertyPaneTextField('height', {
                  label: strings.HeightFieldLabel
                }),
                PropertyPaneDropdown('dropdown', {
                  label: strings.DropDownListFieldLabel,
                  options: this.dropDownOptions
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
