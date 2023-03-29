import React from 'react';
import Speaker from '../Speaker/Speaker';
import speakers from '../../utils/data/speakers';
import Carousel from '../shared/Carousel/Carousel';

const SpeakerList = () => (
  <Carousel>
    {speakers.map(speaker => (
      <Speaker
        key={speaker.id}
        name={speaker.name}
        work={speaker.work}
        image={speaker.image}
      />
    ))}
  </Carousel>
);

export default SpeakerList;
