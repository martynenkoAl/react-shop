export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        isLosding: false,
      };
    case 'PREV_PAGE':
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case 'NEXT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case 'HANDLE_PAGINATION':
      return {
        ...state,
        currentPage: payload.pageNumber,
      };
    case 'DECREASE_ITEMS': {
      if (state.order.find((el) => el.mainId === payload.id).quantity <= 1) {
        return {
          ...state,
          order: state.order.filter((el) => el.mainId !== payload.id),
        };
      } else {
        return {
          ...state,
          order: state.order.map((el) =>
            el.mainId === payload.id ? { ...el, quantity: el.quantity - 1 } : el
          ),
        };
      }
    }
    case 'INCREASE_ITEMS':
      return {
        ...state,
        order: state.order.map((el) =>
          el.mainId === payload.id ? { ...el, quantity: el.quantity + 1 } : el
        ),
      };
    case 'HANDLE_BASKET_SHOW':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex(
        (el) => el.mainId === payload.mainId
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = { ...payload, quantity: 1 };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((el, index) => {
          if (index === itemIndex) {
            return { ...el, quantity: el.quantity + 1 };
          } else {
            return el;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== payload.id),
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    default:
      return state;
  }
}
