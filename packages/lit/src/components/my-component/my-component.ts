import {LitElement, html, CSSResultGroup} from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js';
import { format } from "../../utils/utils";
import componentStyles from '../../styles/component.styles'
import styles from './my-component.styles'

export interface MyComponentProps {
    /** first contents */
    first: string;
    /** middle contents */
    middle?: string;
    /** last contents */
    last?: string;
    /** Optional click handler */
    onClick?: () => void;
}

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-component')
export class MyComponent extends LitElement {
  static styles: CSSResultGroup = [componentStyles, styles]

  @property({ type: String })
  first = ''

  @property({ type: String })
  middle = ''

  @property({ type: String })
  last = ''

  @property({ type: Number })
  count = 0

  private _handleClick() {
    this.count++
    this.dispatchEvent(new Event('onClick', { bubbles: false }))
  }

  private _getText = () => {
      return format(this.first, this.middle, this.last)
  }

  render() {
    return html`
      <div class=${classMap({
        'my-element': true,
        'my-element--middle': this.middle,
      })}>
          <span>Hello World! I'm ${this._getText()}</span> <slot></slot> <br /><br />
          <button @click="${this._handleClick}">
              count is ${this.count}
          </button>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyComponent
  }
}
