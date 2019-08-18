import { combineReducers } from "redux";

import { reducer as podcasts } from "./podcasts";
import { reducer as player } from "./podcasts";

export default combineReducers({
  podcasts,
  player
});
