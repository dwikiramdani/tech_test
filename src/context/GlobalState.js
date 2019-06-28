import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    buy: initialBuy,
    loading: initialLoading,
    shop: initialShop,
    list: initialList,
    children
  } = props;

  // Use State to keep the values
  const [shop, setShop] = useState(initialShop);
  const [list, setList] = useState(initialList);
  const [buy, setBuy] = useState(initialBuy)
  const [loading, setLoading] = useState(initialLoading);

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
    addNewUser,
    loading,
    setLoading
  };

  // pass the value in provider and return
  return <Context.Provider value={valueContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  shop: PropTypes.array,
  list: PropTypes.array,
  loading: PropTypes.bool,
  buy: PropTypes.object,
};

Provider.defaultProps = {
  shop: [],
  list: [],
  loading: true,
  buy: '',
};