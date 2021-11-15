import React, { useState, useEffect } from 'react';
import {
  DocumentData,
  getDocs,
  limit,
  query,
  QuerySnapshot,
} from '@firebase/firestore';
import { Button } from '@mui/material';
import AdminLayout from '../../../hoc/AdminLayout';
import { playersCollection } from 'config/firebase';

const AdminPlayers = () => {
  const [lastVisible, setLastVisible] = useState();
  const [players, setPlayers] = useState<QuerySnapshot<DocumentData>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!players) {
      const getPlayers = async () => {
        const playersQuery = query(playersCollection, limit(2));
        const playersData = await getDocs(playersQuery);
        const lastVisible = playersData.docs[playersData.docs.length - 1];

        console.log(lastVisible);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setLastVisible(lastVisible);
        setPlayers(playersData);
      };

      getPlayers();
    }
  }, [players]);
  //console.log(lastVisible);

  const loadMorePlayers = () => {
    if (lastVisible) {
      setLoading(true);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      lastVisible.startAfter(lastVisible);
    } else {
      console.log('Nothing to load');
    }
  };

  return (
    <AdminLayout title='The Players'>
      <Button onClick={() => loadMorePlayers()}>Load More</Button>
    </AdminLayout>
  );
};

export default AdminPlayers;
