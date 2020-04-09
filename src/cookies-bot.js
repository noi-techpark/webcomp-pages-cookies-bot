import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import _ from 'lodash';

class CookiesBotElement extends LitElement {

  constructor() {
    super();

    this.domainGroupID = '';
  }

  static get properties() {
    return {
      domainGroupID: { attribute: 'domain-group-id', type: String }
    };
  }

  render() {
    return html``;
  }

  async firstUpdated() {
    let self = this;

    if (!!self.domainGroupID) {
      var script = document.createElement('script');
      script.setAttribute('id', 'Cookiebot');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', 'https://consent.cookiebot.com/uc.js');
      script.setAttribute('data-cbid', self.domainGroupID);
      script.setAttribute('data-blockingmode', 'auto');

      var head = document.getElementsByTagName('head')[0];
      head.insertBefore(script, head.children[0]);
    }
  }

}

if (!customElements.get('pages-cookies-bot')) {
  customElements.define('pages-cookies-bot', CookiesBotElement);
}