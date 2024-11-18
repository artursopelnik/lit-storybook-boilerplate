import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }
  .storybook-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .storybook-header svg {
    display: inline-block;
    vertical-align: top;
  }

  .storybook-header h1 {
    display: inline-block;
    vertical-align: top;
    margin: 6px 0 6px 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
  }

  .storybook-header button + button {
    margin-left: 10px;
  }

  .storybook-header .welcome {
    margin-right: 10px;
    color: #333;
    font-size: 14px;
  }
`