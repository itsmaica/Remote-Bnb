import { csrfFetch } from "./csrf";

const LOAD_SPOT_REVIEWS = 'review/loadSpotReviews'
const GET_REVIEW = 'review/getReview'
const CREATE_REVIEW = 'review/createReview'

//------ Actions -----

export const loadSpotReviews = (reviews) => ({
    type: LOAD_SPOT_REVIEWS,
    reviews
});

export const getReview = (review) => ({
    type: GET_REVIEW,
    review
})

export const createReview = (review) => ({
    type: CREATE_REVIEW,
    review
})

//------ Thunks -------

//Reviews for One Spot
export const LoadSpotReviewsThunk = (spotId) => async(dispatch) => {
    // console.log("Hello from Review Thunk")
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
    if (response.ok) {
        const reviews = await response.json();
        dispatch(loadSpotReviews(reviews));
        return reviews;
    }
    return response;
}

//One Review
export const getReviewThunk = (reviewId) => async(dispatch) => {
    // console.log("Hello from thunk", reviewId)
    const response = await csrfFetch(`/api/reviews/${reviewId}`);
    if (response.ok) {
        const review = await response.json();
        dispatch(getReview(review));
        return review;
    };
    return response;
};

export const createReviewThunk = (spotId, review) => async(dispatch) => {
    // console.log("Hello from create review thunk, what is review---------------------? \n\n", spotId)
    const response = await csrfFetch(`/api/reviews/${spotId}/new`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(review)
    })
    // const { review, spotId } = review;
    if (response.ok) {
        const review = await response.json();
        dispatch(createReview(review));
        return review;
    }
    return response;
};



const initialState = {};

export const reviewReducer = (state=initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_SPOT_REVIEWS:
            // newState = {...state};
            // newState["spotReviews"] = action.reviews;
            // newState = { ...state, ...action.reviews};

            newState = {...state}
            action.reviews.forEach(review => {
                newState[review.id] = review
            })

            return newState;
        case GET_REVIEW:
            newState = {...state};
            newState = {...state, ["review"]: action.review};
            return newState;
        case CREATE_REVIEW:
            // newState = {...state};
            // newState = {...state, ...action.review}
            // newState = {...state}
            // action.reviews.forEach(review => {
            //     newState[review.id] = review
            // })

            // newState = {...state.reviews.spotReviews, ...action.review}

            // newState = {...state.reviews['spotReviews'], ...action.review}

            // newState = {...state.reviews, ...action.review}
            // newState = {...state.reviews.spotReviews}



            // newState = {...state['spotReviews'],...action.review}
            // newState.spotReviews.splice(...action.review)

            // newState = {...state, [action.payload.id]: action.payload.review}

            newState={...state, [action.review.id]: action.review}

            // console.log('how to get my review in here', newState)
            // console.log("What is happening in the reducer? --action.payload", action.review.id )
            return newState;
        default:
            return state;
    };

};

export default reviewReducer