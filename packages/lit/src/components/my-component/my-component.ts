import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js';
import {format} from "../../utils/utils";

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

  @property({ type: String })
  first = ''

  @property({ type: String })
  middle = ''

  @property({ type: String })
  last = ''

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  getText = () => {
      return format(this.first, this.middle, this.last)
  }

  render() {
    return html`
      <div class=${classMap({
        'my-element': true,
        'my-element--middle': this.middle,
      })}>
          <span>Hello World! I'm ${this.getText()}</span> <slot></slot> <br /><br />
          <button @click=${this._onClick} part="button">
              count is ${this.count}
          </button>
      </div>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyComponent
  }
}
