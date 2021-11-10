import React, { useState, useEffect } from 'react';
import { getDocs } from 'firebase/firestore';
import { Slide } from 'react-awesome-reveal';
import { matchesCollection } from 'config/firebase';

const Sections = () => {
  const [matches, setMatches] = useState<IMatch[]>([]);

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
  console.log(matches);

  return <div>Hello</div>;
};

export default Sections;
