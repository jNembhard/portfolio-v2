import { createSlice } from "@reduxjs/toolkit";
import portfolio_data from "../data/portfolio_data";

const initialPortfolioState = {
  slides: portfolio_data,
  direction: 0,
  currentSlideIndex: 0,
};

const portfolioSlice = createSlice({
  name: "porfolio",
  initialState: initialPortfolioState,
  reducers: {
    setCurrentSlide: (state, action) => {
      state.currentSlideIndex = action.payload;
    },

    paginate: (state, action) => {
      const direction = action.payload;

      if (direction > 0) {
        state.currentSlideIndex =
          (state.currentSlideIndex + 1) % state.slides.length;
      } else {
        state.currentSlideIndex =
          (state.currentSlideIndex - 1 + state.slides.length) %
          state.slides.length;
      }
      state.direction = direction;
    },

    resetSlider: (state) => {
      (state.currentSlideIndex = 0),
        (state.direction = 0),
        (state.isPlaying = false);
    },
  },
});

export const numberOfSlides = (state) => state.portfolio.slides.length;
export const currentSlideIndex = (state) => state.portfolio.currentSlideIndex;
export const currentSlide = (state) =>
  state.portfolio.slides[state.portfolio.currentSlideIndex];
export const slidesDirection = (state) => state.portfolio.direction;

export const { paginate, setCurrentSlide, resetSlider } =
  portfolioSlice.actions;

export default portfolioSlice.reducer;
