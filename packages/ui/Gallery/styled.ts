import styled from '@emotion/styled'

export const StyledGallery = styled.div`
  .image-gallery-icon {
    position: absolute;
    z-index: 11;
    color: #fff;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: none;
    filter: drop-shadow(0 2px 2px #1a1a1a);
    transition: all 0.3s ease-out;
    appearance: none;

    @media (min-width: 768px) {
      &:hover {
        color: #337ab7;

        .image-gallery-svg {
          transform: scale(1.1);
        }
      }
    }

    &:focus {
      outline: 2px solid #337ab7;
    }
  }

  .image-gallery-using-mouse {
    .image-gallery-icon {
      &:focus {
        outline: none;
      }
    }
  }

  .image-gallery-fullscreen-button,
  .image-gallery-play-button {
    bottom: 0;
    padding: 20px;

    .image-gallery-svg {
      width: 28px;
      height: 28px;
    }

    @media (max-width: 768px) {
      padding: 15px;

      .image-gallery-svg {
        width: 24px;
        height: 24px;
      }
    }

    @media (max-width: 480px) {
      padding: 10px;

      .image-gallery-svg {
        width: 16px;
        height: 16px;
      }
    }
  }

  .image-gallery-fullscreen-button {
    right: 0;
  }

  .image-gallery-play-button {
    left: 0;
  }

  .image-gallery-left-nav,
  .image-gallery-right-nav {
    top: 50%;
    padding: 50px 10px;
    transform: translateY(-50%);

    .image-gallery-svg {
      width: 60px;
      height: 120px;
    }

    @media (max-width: 768px) {
      .image-gallery-svg {
        width: 36px;
        height: 72px;
      }
    }

    @media (max-width: 480px) {
      .image-gallery-svg {
        width: 24px;
        height: 48px;
      }
    }

    &[disabled] {
      pointer-events: none;
      cursor: disabled;
      opacity: 0.6;
    }
  }

  .image-gallery-left-nav {
    left: 0;
  }

  .image-gallery-right-nav {
    right: 0;
  }

  .image-gallery-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    &.center {
      position: relative;
      z-index: 10;
    }

    &:not(.center) {
      display: none;
    }

    .image-gallery-image {
      display: none;
      width: 100%;
      object-fit: contain;
    }

    .image-gallery-description {
      position: absolute;
      bottom: 70px;
      left: 0;
      padding: 10px 20px;
      line-height: 1;
      color: #fff;
      white-space: normal;
      background: rgba(0, 0, 0, 0.4);

      @media (max-width: 768px) {
        bottom: 45px;
        padding: 8px 15px;
        font-size: 0.8em;
      }
    }
  }

  .image-gallery-content {
    position: relative;
    top: 0;
    line-height: 0;

    &.fullscreen {
      background: #000;

      .image-gallery-image {
        display: block;
      }

      .image-magnifier {
        display: none;
      }
    }

    .image-gallery-slide .image-gallery-image {
      max-height: calc(100vh - 7rem);
    }

    &.left,
    &.right {
      .image-gallery-slide .image-gallery-image {
        max-height: 100vh;
      }
    }
  }

  .image-gallery {
    position: relative;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &.fullscreen-modal {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      height: 100%;
      background: #000;

      .image-gallery-content {
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .image-gallery-slide-wrapper {
    position: relative;
    overflow: hidden;

    &.image-gallery-rtl {
      direction: rtl;
    }

    &.left,
    &.right {
      display: inline-block;
      width: calc(100% - 122px);

      @media (max-width: 768px) {
        width: calc(100% - 87px);
      }
    }
  }

  .image-gallery-slides {
    position: relative;
    overflow: visible;
    line-height: 0;
    text-align: center;
    white-space: nowrap;

    img {
      max-width: unset;
    }
  }

  .image-gallery-bullets {
    position: absolute;
    right: 0;
    bottom: 20px;
    left: 0;
    z-index: 11;
    width: 80%;
    margin: 0 auto;

    .image-gallery-bullets-container {
      padding: 0;
      margin: 0;
      text-align: center;
    }

    .image-gallery-bullet {
      display: inline-block;
      padding: 5px;
      margin: 0 5px;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #fff;
      border-radius: 50%;
      outline: none;
      box-shadow: 0 1px 0 lighten(#000, 10%);
      transition: all 0.2s ease-out;
      appearance: none;

      @media (max-width: 768px) {
        padding: 3px;
        margin: 0 3px;
      }

      @media (max-width: 480px) {
        padding: 2.7px;
      }

      &:focus,
      &:hover {
        background: #337ab7;
        transform: scale(1.1);
      }

      &.active {
        background: #fff;
      }
    }
  }

  .image-gallery-thumbnails {
    padding: 5px 0;
    overflow: hidden;

    @media (max-width: 768px) {
      padding: 3px 0;
    }

    .image-gallery-thumbnails-container {
      white-space: nowrap;
      cursor: pointer;
      transition: transform 0.3s ease-out;
    }
  }

  .image-gallery-thumbnail {
    display: inline-block;
    width: 112px;
    padding: 0;
    background: transparent;
    border: 1px solid transparent;
    transition: border 0.3s ease-out;

    @media (max-width: 768px) {
      width: 81px;
      border: 1px solid transparent;
    }

    + .image-gallery-thumbnail {
      margin-left: 2px;
    }

    .image-gallery-thumbnail-inner {
      position: relative;
      cursor: pointer;
    }

    .image-gallery-thumbnail-image {
      width: 100%;
      line-height: 0;
      vertical-align: middle;
    }

    &:hover,
    &:focus,
    &.active {
      border: 1px solid #212529;
      outline: none;

      @media (max-width: 768px) {
        border: 1px solid #212529;
      }
    }
  }

  .image-gallery-thumbnails-wrapper {
    position: relative;

    &.thumbnails-swipe-horizontal {
      touch-action: pan-y;
    }

    &.thumbnails-swipe-vertical {
      touch-action: pan-x;
    }

    &.thumbnails-wrapper-rtl {
      direction: rtl;
    }

    &.left,
    &.right {
      display: inline-block;
      width: 112px;
      vertical-align: top;

      @media (max-width: 768px) {
        width: 81px;
      }

      .image-gallery-thumbnails {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0;

        .image-gallery-thumbnail {
          display: block;
          padding: 0;
          margin-right: 0;

          + .image-gallery-thumbnail {
            margin-top: 5px;
            margin-left: 0;
          }
        }
      }
    }
  }

  .image-gallery-thumbnail-label {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    padding: 5%;
    font-size: 1em;
    line-height: 1em;
    color: white;
    text-shadow: 1px 1px 0 black;
    white-space: normal;
    transform: translateY(-50%);
    box-sizing: border-box;

    @media (max-width: 768px) {
      font-size: 0.8em;
      line-height: 0.8em;
    }
  }

  .image-gallery-index {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 4;
    padding: 10px 20px;
    line-height: 1;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);

    @media (max-width: 768px) {
      padding: 5px 10px;
      font-size: 0.8em;
    }
  }
`

export const RenderItem = styled.div`
  padding-left: 1.5rem;
`
