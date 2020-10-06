/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <a target="_blank" href={props.href}>
                        <img
                        className='cards__item__img'
                        alt='Travel Image'
                        src={props.src}
                        />
                    </a>
                </figure>
            <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;