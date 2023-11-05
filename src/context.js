import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  isLosding: true,
  order: [],
  isBasketShow: false,
  alertName: '',
  currentPage: 1,
  goodsPerPage: 10,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.removeFromBasket = (id) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id } });
  };

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'HANDLE_BASKET_SHOW' });
  };

  value.increaseItems = (id) => {
    dispatch({ type: 'INCREASE_ITEMS', payload: { id } });
  };

  value.decreaseItems = (id) => {
    dispatch({ type: 'DECREASE_ITEMS', payload: { id } });
  };

  value.handlePagination = (pageNumber) => {
    dispatch({ type: 'HANDLE_PAGINATION', payload: { pageNumber } });
  };

  value.nextPage = () => {
    dispatch({ type: 'NEXT_PAGE' });
  };

  value.prevPage = () => {
    dispatch({ type: 'PREV_PAGE' });
  };

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
