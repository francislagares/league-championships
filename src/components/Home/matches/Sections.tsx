import React, { useState, useEffect } from 'react';
import { getDocs } from 'firebase/firestore';
import { Slide } from 'react-awesome-reveal';
import { matchesCollection } from 'config/firebase';
import MatchesBox from 'utils/matchesBox';

const Sections = () => {
  const [matches, setMatches] = useState<IMatch[]>([]);
  const slideSettings = {
    bottom: true,
  };

  useEffect(() => {
    if (!matches.length) {
      const getMatches = async () => {
        const matchesData = await getDocs(matchesCollection);
        setMatches(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          matchesData.docs.map(doc => ({ ...doc.data(), id: doc.id })),
        );
      };

      getMatches();
    }
  }, [matches]);

  const showMatches =
    matches &&
    matches.map(match => (
      <Slide key={match.id} className='item' {...slideSettings} triggerOnce>
        <div className='wrapper'>
          <MatchesBox match={match} />
        </div>
      </Slide>
    ));

  return <div className='home_matches'>{showMatches}</div>;
};

export default Sections;
