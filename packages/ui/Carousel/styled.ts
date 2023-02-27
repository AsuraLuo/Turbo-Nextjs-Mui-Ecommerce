import styled from '@emotion/styled'

export const StyledCarousel = styled.div`
  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }

  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  .slick-list:focus {
    outline: 0;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    top: 0;
    left: 0;
  }

  .slick-track::after,
  .slick-track::before {
    display: table;
    content: '';
  }

  .slick-track::after {
    clear: both;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
    width: 100%;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dots {
    position: absolute;
    bottom: 2rem;
    z-index: 30;
    width: 100%;
    padding: 0.5rem;
    text-align: center;

    > li {
      position: relative;
      display: inline-block;
      width: 12px;
      height: 12px;
      margin: 0 0.5rem;
      cursor: pointer;

      button {
        display: block;
        font-size: 0;
        background: transparent;
        border: 0;
        outline: none;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 12px;
          height: 12px;
          text-align: center;
          cursor: pointer;
          background-color: #f2e0d6;
          border-radius: 50%;
          content: '"';
        }
      }

      &.slick-active {
        button {
          &::before {
            background-color: #fff;
          }
        }
      }
    }
  }
`

export const StyledArrow = styled.div`
  position: absolute;
  top: 50%;
  z-index: 30;
  transform: translateX(-50%);

  &.slick-prev {
    left: -2.5rem;
  }

  &.slick-next {
    right: -2.5rem;
  }
`
