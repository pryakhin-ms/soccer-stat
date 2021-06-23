import React, { Component } from 'react';
// import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-md">
          <span className="navbar-brand mb-0 h1">Soccer Stat</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button type="button" className="btn btn-outline-success m-2" href="#">Лиги</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-outline-success m-2" href="#">Команды</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
// export default connect()(NavBar);
