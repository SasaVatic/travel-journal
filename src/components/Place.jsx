import React from 'react';
import pinIcon from '../assets/pin.svg';

export default function Place(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props;

  const dateStart = new Date(startDate).toISOString().slice(0, 10);
  const dateEnd = new Date(endDate).toISOString().slice(0, 10);

  return (
    <div className="place">
      <img
        src={imageUrl}
        alt={`Picture of ${title}`}
        className="place-img"
        title={title}
      />
      <div className="place-content">
        <h4 className="place-subtitle">
          <span>
            <img
              src={pinIcon}
              alt=""
              className="place-icon"
              aria-hidden="true"
            />
            {location}
          </span>
          <a
            href={googleMapsUrl}
            title={`View ${title} on Google Maps`}
            className="place-link"
          >
            View on Google Maps
          </a>
        </h4>
        <h3 className="place-title">{title}</h3>
        <p className="place-time">
          <time dateTime={dateStart} title="Start date">
            {startDate}
          </time>{' '}
          -{' '}
          <time dateTime={dateEnd} title="End date">
            {endDate}
          </time>
        </p>
        <p className="place-text">{description}</p>
      </div>
    </div>
  );
}
