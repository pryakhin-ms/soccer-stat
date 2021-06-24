import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ activeTab }) => ({ activeTab });

class ContentPad extends Component {
  render() {
    const { activeTab } = this.props;
    return (
      <div className="container">
        {activeTab === 'leagues' && <p>LEAGUES</p>}
        {activeTab === 'teams' && <p>TEAMS</p>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ContentPad);
