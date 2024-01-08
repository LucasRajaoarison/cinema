export enum MovieActionType {
  GET_ALL_POPULAR_MOVIES = "Get all popular movies",
  GET_ALL_TOP_RATED_MOVIES = "Get all top rated movies"
}

export interface ActionEvent {
  type: MovieActionType;
  payload?: any;
}
