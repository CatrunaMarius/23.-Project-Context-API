import { createContext } from 'react';

import SHOP_DATA from './shop.data';

// stocare ce e in interiorul componentelor
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;