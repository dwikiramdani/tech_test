import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    shop: initialShop,
    list: initialList,
    users: initialUsers,
    selectedUser: initialSelectedUsers,
    children
  } = props;

  // Use State to keep the values
  const [shop, setShop] = useState(initialShop);
	const [list, setList] = useState(initialList);
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(initialSelectedUsers);

  const addNewUser = userName => {
    const newUser = { id: new Date().getTime().toString(), name: userName };
    setUsers(users.concat([newUser]));
  };

  // Make the context object:
  const valueContext = {
    shop,
    setShop,
    list,
    setList,
    users,
    setUsers,
    selectedUser,
    setSelectedUser,
    addNewUser
  };

  // pass the value in provider and return
  return <Context.Provider value={valueContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  users: PropTypes.array,
  selectedUser: PropTypes.object,
  shop: PropTypes.array,
  list: PropTypes.array,
};

Provider.defaultProps = {
  users: [],
  selectedUser: {},
  shop: [],
  list: [],
};