import React from 'react';
import { easePolyOut } from 'd3-ease';
import { Animate } from 'react-move';

import Otamendi from 'assets/images/players/Otamendi.png';
import Sterling from 'assets/images/players/Raheem_Sterling.png';
import Kompany from 'assets/images/players/Vincent_Kompany.png';
import PlayerCard from 'utils/playerCard';

const cards = [
  {
    bottom: 90,
    left: 300,
    player: Kompany,
  },
  {
    bottom: 60,
    left: 200,
    player: Sterling,
  },
  {
    bottom: 30,
    left: 100,
    player: Otamendi,
  },
  {
    bottom: 0,
    left: 0,
    player: Kompany,
  },
];

interface IProps {
  show: boolean;
}

const HomeCards = ({ show }: IProps) => {
  const showAnimateCards = () =>
    cards.map((card, i) => {
      return (
        <Animate
          key={i}
          show={show}
          start={{
            left: 0,
            bottom: 0,
          }}
          enter={{
            left: [card.left],
            bottom: [card.bottom],
            timing: { delay: 1000, duration: 1000, ease: easePolyOut },
          }}
        >
          {({ left, bottom }) => (
            <div
              style={{
                position: 'absolute',
                left,
                bottom,
              }}
            >
              <PlayerCard
                number='30'
                name='Nicolas'
                lastname='Otamendi'
                background={card.player}
              />
            </div>
          )}
        </Animate>
      );
    });

  return <div>{showAnimateCards()}</div>;
};

export default HomeCards;
