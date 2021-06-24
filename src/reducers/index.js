import { combineReducers } from 'redux';

const activeTab = (state = 'leagues', { type }) => {
  switch (type) {
    case 'SWITCH_LEAGUES':
      return 'leagues';
    case 'SWITCH_TEAMS':
      return 'teams';
    default:
      return state;
  }
};

const isFetching = (state = 'false', { type }) => {
  switch (type) {
    case 'FETCH_TEAMS':
    case 'FETCH_LEAGUES':
      return true;
    default:
      return state;
  }
};

export default combineReducers({ activeTab, isFetching });
