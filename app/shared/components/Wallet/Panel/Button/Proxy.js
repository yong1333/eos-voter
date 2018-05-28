// @flow
import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import { Button } from 'semantic-ui-react';

export default class WalletPanelButtonProxy extends Component<Props> {

  proxyVote = () => {
    const {
      proxyVote,
      settings
    } = this.props;
    proxyVote(settings);
  }

  render() {
    return (
      <I18n ns="wallet">
        {
          (t) => (
            <Button
              color="blue"
              content={t('wallet_panel_wallet_proxy_vote')}
              fluid
              icon="user"
              onClick={this.proxyVote}
            />
          )
        }
      </I18n>
    );
  }
}
