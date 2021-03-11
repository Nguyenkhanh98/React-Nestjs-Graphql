import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { gql, useQuery } from '@apollo/client';
import Avatar from '../assests/images/avatar.jpg';
import $ from 'jquery';
import MenuItem from './menuItem';
import MenuTree from './menuTree';
// import logo from '../assets/img/logo.png';
import { smoothlyMenu } from './helpers/helpers';
import list from '../constants/list';
import { getTreeMenu } from '../helpers/permission';


const Navigation = () => {
  const menuRef = useRef();

  const [menu, setMenu] = useState(list.menu);

  const [navMenu, setNavMenu] = useState(getTreeMenu(list.menu))

  // const [getProfile, { profile }] = useQuery(GET_PROFILE);

  $('body').toggleClass('mini-navbar');
  smoothlyMenu();

  $(() => {
    $(menuRef).metisMenu({
      toggle: true,
    });
  });

  useEffect(() => {

  }, []);


  const renderProfile = () => (
    <div className="dropdown profile-element">
      {/* <img alt="" className="img-circle logo" src={logo} /> */}
      <span data-toggle="dropdown" className="dropdown-toggle" style={{ cursor: 'pointer' }}>
        <span className="block m-t-xs font-bold">Mir Nawaz</span>
        <span className="text-muted text-xs block">
          Software Dev
          <b className="caret" />
        </span>
      </span>
      <ul className="dropdown-menu animated fadeInRight m-t-xs">
        {navMenu.map((menu, index) => {
          if (menu.divider) {
            return (<li key={index} className="dropdown-divider" />);
          }
          return (<li key={index}><Link className="dropdown-item" to={menu.path}>{menu.label}</Link></li>);
        })}
      </ul>
    </div>
  );



  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu" ref={menuRef} style={{ zIndex: 2000 }}>
          <li className="nav-header">
            {renderProfile()}
            <div className="logo-element">
              <img alt="" className="img-circle logo" src={Avatar} />
            </div>
          </li>
          {renderMenu(menu)}
        </ul>
      </div>
    </nav>
  );
}

const renderMenu = (menu) => menu.map((item, index) => {
  if (isEmpty(item.tree)) {
    return (<MenuItem key={index} path={item.path} icon={item.icon} label={item.label} />);
  }
  return (
    <MenuTree key={index} icon={item.icon} label={item.label}>
      {
        item.tree.map((treeItem, treeIndex) => {
          if (isEmpty(treeItem.tree)) {
            return (<MenuItem key={treeIndex} path={treeItem.path} label={treeItem.label} icon={treeItem.icon} tree />);
          }
          return (
            <MenuTree key={treeIndex} icon={treeItem.icon} label={treeItem.label}>
              {treeItem.tree.map((subItem, subIndex) => (<MenuItem key={subIndex} path={subItem.path} label={subItem.label} icon={subItem.icon} />))}
            </MenuTree>
          );
        })
      }
    </MenuTree>
  );
});

// const GET_PROFILE = gql`

//   `;

export default Navigation;
