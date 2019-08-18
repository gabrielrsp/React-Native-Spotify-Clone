import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  setPodcastRequest: ["podcast", "episodeId"],
  setPodcastSuccess: ["podcast"],
  setCurrent: ["id"]
});

export const PlayerTypes = Types;
export default Creators;

/**
 * Initial state
 */

export const INITIAL_STATE = Immutable({
  podcast: null,
  current: null
});

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCAST_SUCCESS]: (state, { podcast }) =>
    state.merge({ podcast, current: podcast.tracks[0].id }),
  [Types.SET_CURRENT]: (state, { id }) => state.merge({ current: id })
});
