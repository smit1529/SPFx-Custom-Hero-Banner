import * as React from 'react';
import styles from './CustomHeroBanner.module.scss';
import { ICustomHeroBannerProps } from './ICustomHeroBannerProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Button, ButtonType, DatePicker, TextField, Dropdown, Panel, PanelType } from 'office-ui-fabric-react';

export interface IPanelLargeExampleState {
  showPanel: boolean;
}

export default class CustomHeroBanner extends React.Component<ICustomHeroBannerProps, IPanelLargeExampleState> {
  public state = {
    showPanel: false
  };

  private _hidePanel = () => {
    this.setState({ showPanel: false });
  };

  private _showPanel = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ showPanel: true });
  };

  public render(): React.ReactElement<ICustomHeroBannerProps> {
    var wpWidth = parseInt(this.props.width) > 0 ? this.props.width : 500;
    var wpHeight = parseInt(this.props.height) > 0 ? this.props.height : 200;
    var wpChoiceGroup = this.props.choiceGroup;
    var wpChoiceLayout = parseInt(this.props.choiceLayout);

    if (wpChoiceGroup == "Tiles") {
      switch (wpChoiceLayout) {
        case 0: {
          return (
            <div className={[styles.fullwidth].join(' ')} style={{ width: wpWidth, height: wpHeight }}>
              <div className={[styles.col100, styles.height100, styles.borderBottom].join(' ')} style={{ position: "relative" }}>
                <div>
                  <span className="heroItemElement__placeholder_content_0176ac5f">
                    <i data-icon-name="FiveTileGrid" className="heroItemElement__placeholder_icon_0176ac5f placeholderTilesContent-397" role="presentation"></i>
                    <span className="placeholderTilesContent-117 heroItemElement__placeholder_title_0176ac5f">
                      Hero Content
                    </span>
                    <span className="placeholderTilesDescription-118 heroItemElement__placeholder_descriptionLine_0176ac5f">
                      Make a visual impression with content.
                    </span>
                    <span className="placeholderTilesDescription-118 heroItemElement__placeholder_descriptionLine_0176ac5f">
                      Select a link to an image, document, or page.
                    </span>
                  </span>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
              </div>
              <Panel isOpen={this.state.showPanel} onDismiss={this._hidePanel} type={PanelType.extraLarge} headerText="Extra Large Panel" closeButtonAriaLabel="Close">
                <span>Content goes here.</span>
              </Panel>
            </div >
          );
        }
        case 1: {
          return (
            <div className={[styles.fullwidth].join(' ')} style={{ width: wpWidth, height: wpHeight }}>
              <div className={[styles.col50, styles.height100, styles.borderRight, styles.borderBottom].join(' ')}>
                <div>
                  <span className="heroItemElement__placeholder_content_0176ac5f">
                    <i data-icon-name="FiveTileGrid" className="heroItemElement__placeholder_icon_0176ac5f placeholderTilesContent-397" role="presentation"></i>
                    <span className="placeholderTilesContent-117 heroItemElement__placeholder_title_0176ac5f">
                      Hero Content
                    </span>
                    <span className="placeholderTilesDescription-118 heroItemElement__placeholder_descriptionLine_0176ac5f">
                      Make a visual impression with content.
                    </span>
                    <span className="placeholderTilesDescription-118 heroItemElement__placeholder_descriptionLine_0176ac5f">
                      Select a link to an image, document, or page.
                    </span>
                  </span>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
              </div>
              <div className={[styles.col50, styles.height100, styles.borderBottom].join(' ')}>
                <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
              </div>
              <Panel isOpen={this.state.showPanel} onDismiss={this._hidePanel} type={PanelType.extraLarge} headerText="Extra Large Panel" closeButtonAriaLabel="Close">
                <span>Content goes here.</span>
              </Panel>
            </div>
          );
        }
        case 2: {
          return (
            <div className={[styles.fullwidth].join(' ')} style={{ width: wpWidth, height: wpHeight }}>
              <div className={[styles.col75, styles.height100, styles.borderRight, styles.borderBottom].join(' ')}>
                <div>
                  <span className="heroItemElement__placeholder_content_0176ac5f">
                    <i data-icon-name="FiveTileGrid" className="heroItemElement__placeholder_icon_0176ac5f placeholderTilesContent-397" role="presentation"></i>
                    <span className="placeholderTilesContent-117 heroItemElement__placeholder_title_0176ac5f">
                      Hero Content
                    </span>
                    <span className="placeholderTilesDescription-118 heroItemElement__placeholder_descriptionLine_0176ac5f">
                      Make a visual impression with content.
                    </span>
                    <span className="placeholderTilesDescription-118 heroItemElement__placeholder_descriptionLine_0176ac5f">
                      Select a link to an image, document, or page.
                    </span>
                  </span>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
              </div>
              <div className={[styles.col25, styles.height100].join(' ')}>
                <div className={[styles.col100, styles.height50, styles.borderRight, styles.borderBottom].join(' ')}>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
                <div className={[styles.col100, styles.height50, styles.borderRight, styles.borderBottom].join(' ')}>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
              </div>
              <Panel isOpen={this.state.showPanel} onDismiss={this._hidePanel} type={PanelType.extraLarge} headerText="Extra Large Panel" closeButtonAriaLabel="Close">
                <span>Content goes here.</span>
              </Panel>
            </div>
          );
        }
        case 3: {
          return (
            <div className={[styles.fullwidth].join(' ')} style={{ width: wpWidth, height: wpHeight }}>
              <div className={[styles.col50, styles.height100, styles.borderRight, styles.borderBottom].join(' ')}>
                <div>
                  <span className="heroItemElement__placeholder_content_0176ac5f">
                    <i data-icon-name="FiveTileGrid" className="heroItemElement__placeholder_icon_0176ac5f placeholderTilesContent-397" role="presentation"></i>
                    <span className="placeholderTilesContent-117 heroItemElement__placeholder_title_0176ac5f">
                      Hero Content
                    </span>
                    <span className="placeholderTilesDescription-118 heroItemElement__placeholder_descriptionLine_0176ac5f">
                      Make a visual impression with content.
                    </span>
                    <span className="placeholderTilesDescription-118 heroItemElement__placeholder_descriptionLine_0176ac5f">
                      Select a link to an image, document, or page.
                    </span>
                  </span>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
              </div>
              <div className={[styles.col50, styles.height100].join(' ')}>
                <div className={[styles.col50, styles.height50, styles.borderRight, styles.borderBottom].join(' ')}>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
                <div className={[styles.col50, styles.height50, styles.borderBottom].join(' ')}>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
                <div className={[styles.col100, styles.height50, styles.borderBottom].join(' ')}>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
              </div>
              <Panel isOpen={this.state.showPanel} onDismiss={this._hidePanel} type={PanelType.extraLarge} headerText="Extra Large Panel" closeButtonAriaLabel="Close">
                <span>Content goes here.</span>
              </Panel>
            </div>
          );
        }
        case 4: {
          return (
            <div className={[styles.fullwidth].join(' ')} style={{ width: wpWidth, height: wpHeight }}>
              <div className={[styles.col50, styles.height100, styles.borderRight, styles.borderBottom].join(' ')}>
                <div>
                  <span className="heroItemElement__placeholder_content_0176ac5f">
                    <i data-icon-name="FiveTileGrid" className="heroItemElement__placeholder_icon_0176ac5f placeholderTilesContent-397" role="presentation"></i>
                    <span className="placeholderTilesContent-117 heroItemElement__placeholder_title_0176ac5f">
                      Hero Content
                    </span>
                    <span className="placeholderTilesDescription-118 heroItemElement__placeholder_descriptionLine_0176ac5f">
                      Make a visual impression with content.
                    </span>
                    <span className="placeholderTilesDescription-118 heroItemElement__placeholder_descriptionLine_0176ac5f">
                      Select a link to an image, document, or page.
                    </span>
                  </span>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
              </div>
              <div className={[styles.col50, styles.height100].join(' ')}>
                <div className={[styles.col50, styles.height50, styles.borderRight, styles.borderBottom].join(' ')}>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
                <div className={[styles.col50, styles.height50, styles.borderBottom].join(' ')}>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
                <div className={[styles.col50, styles.height50, styles.borderRight, styles.borderBottom].join(' ')}>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
                <div className={[styles.col50, styles.height50, styles.borderBottom].join(' ')}>
                  <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                </div>
              </div>
              <Panel isOpen={this.state.showPanel} onDismiss={this._hidePanel} type={PanelType.extraLarge} headerText="Extra Large Panel" closeButtonAriaLabel="Close">
                <span>Content goes here.</span>
              </Panel>
            </div>
          );
        }
      }
    }
    else if (wpChoiceGroup == "Layers") {
      switch (wpChoiceLayout) {
        case 0: {
          return (
            <div style={{ width: wpWidth, height: wpHeight }}>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.imgDiv, styles.height100, styles.borderRight].join(' ')}>
                  <span>Image Div</span>
                </div>
                <div className={[styles.actionDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
              </div>
            </div>
          );
        }
        case 1: {
          return (
            <div style={{ width: wpWidth, height: wpHeight }}>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.imgDiv, styles.height100, styles.borderRight].join(' ')}>
                  <span>Image Div</span>
                </div>
                <div className={[styles.actionDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
              </div>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.actionDiv, styles.height100, styles.borderRight].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
                <div className={[styles.imgDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <span>Image Div</span>
                </div>
              </div>
            </div>
          );
        }
        case 2: {
          return (
            <div style={{ width: wpWidth, height: wpHeight }}>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.imgDiv, styles.height100, styles.borderRight].join(' ')}>
                  <span>Image Div</span>
                </div>
                <div className={[styles.actionDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
              </div>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.actionDiv, styles.height100, styles.borderRight].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
                <div className={[styles.imgDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <span>Image Div</span>
                </div>
              </div>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.imgDiv, styles.height100, styles.borderRight].join(' ')}>
                  <span>Image Div</span>
                </div>
                <div className={[styles.actionDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
              </div>
            </div>
          );
        }
        case 3: {
          return (
            <div style={{ width: wpWidth, height: wpHeight }}>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.imgDiv, styles.height100, styles.borderRight].join(' ')}>
                  <span>Image Div</span>
                </div>
                <div className={[styles.actionDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
              </div>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.actionDiv, styles.height100, styles.borderRight].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
                <div className={[styles.imgDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <span>Image Div</span>
                </div>
              </div>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.imgDiv, styles.height100, styles.borderRight].join(' ')}>
                  <span>Image Div</span>
                </div>
                <div className={[styles.actionDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
              </div>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.actionDiv, styles.height100, styles.borderRight].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
                <div className={[styles.imgDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <span>Image Div</span>
                </div>
              </div>
            </div>
          );
        }
        case 4: {
          return (
            <div style={{ width: wpWidth, height: wpHeight }}>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.imgDiv, styles.height100, styles.borderRight].join(' ')}>
                  <span>Image Div</span>
                </div>
                <div className={[styles.actionDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
              </div>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.actionDiv, styles.height100, styles.borderRight].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
                <div className={[styles.imgDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <span>Image Div</span>
                </div>
              </div>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.imgDiv, styles.height100, styles.borderRight].join(' ')}>
                  <span>Image Div</span>
                </div>
                <div className={[styles.actionDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
              </div>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.actionDiv, styles.height100, styles.borderRight].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
                <div className={[styles.imgDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <span>Image Div</span>
                </div>
              </div>
              <div className={[styles.fullwidth, styles.borderBottom].join(' ')}>
                <div className={[styles.imgDiv, styles.height100, styles.borderRight].join(' ')}>
                  <span>Image Div</span>
                </div>
                <div className={[styles.actionDiv, styles.height100, styles.borderLeft].join(' ')}>
                  <div>
                    <div className="heroItemElement__placeholder_content_0176ac5f">
                      <span className="placeholderLayersTitle-160 heroItemElement__placeholder_title_0176ac5f">
                        Hero Content
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Make a visual impression with content.
                    </span>
                      <span className="placeholderLayersDescription-161 heroItemElement__placeholder_descriptionLine_0176ac5f">
                        Select a link to an image, document, or page.
                    </span>
                    </div>
                    <Button buttonType={ButtonType.primary} onClick={this._showPanel} text="Select link" />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
    }
    else {
      return (
        <div className={styles.customHeroBanner} style={{ background: "#005a9e", textAlign: "center" }}>
          <div className={styles.container} style={{ height: "100%" }}>
            < div className={styles.row} style={{ height: "100%" }}>
              <span className={styles.title}>Select Layout First !!</span>
            </div>
          </div>
        </div >
      );
    }
  }
}
