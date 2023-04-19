import jwtFetch from "./jwt";
import { receiveCurrentUser } from "./session";

export const RECEIVE_IMAGES = "images/RECEIVE_IMAGES";
export const RECEIVE_IMAGE = "images/RECEIVE_IMAGE";
export const REMOVE_IMAGE = "images/REMOVE_IMAGE";

const receiveImages = (images) => ({
  type: RECEIVE_IMAGES,
  images,
});

export const receiveImage = (image) => ({
  type: RECEIVE_IMAGE,
  image,
});

const removeImage = (imageId) => ({
  type: REMOVE_IMAGE,
  imageId,
});

export const getImages = (state) => {
  if (state.images) {
    return Object.values(state.images);
  } else {
    return [];
  }
};

export const getImage = (imageId) => (state) => {
  if (state.images) {
    return state.images[imageId];
  } else {
    return null;
  }
};

export const fetchUserImages = (userId) => async (dispatch) => {
  const response = await jwtFetch(`/api/images/all/${userId}`);
  if (response.ok) {
    const images = await response.json();
    dispatch(receiveImages(images));
  }
};

export const fetchImage = (imageId) => async (dispatch) => {
  const response = await jwtFetch(`/api/images/${imageId}`);
  if (response.ok) {
    const image = await response.json();
    dispatch(receiveImage(image));
  }
};

export const fetchRandomImages = () => async (dispatch) => {
  const response = await fetch(`/api/images/random`);
  if (response.ok) {
    const data = await response.json();
    dispatch(receiveImages(data));
    return data;
  }
};

export const deleteImage = (imageId) => async (dispatch) => {
  const response = await jwtFetch(`/api/images/${imageId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    const data = await response.json()
    dispatch(removeImage(imageId));
    dispatch(receiveCurrentUser(data))
  }
};

const imagesReducer = (state = {}, action) => {
  let nextState = { ...state };
  switch (action.type) {
    case RECEIVE_IMAGES:
      action.images.images.forEach((image) => {
        nextState[image._id] = image;
      });
      return nextState;
    case RECEIVE_IMAGE:
      return { ...state, [action.image.id]: action.image };
    case REMOVE_IMAGE:
      delete nextState[action.imageId];
      return nextState;
    default:
      return state;
  }
};

export default imagesReducer;
