import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useNetworkStatus = (): boolean => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected ?? true);
    });

    return () => unsubscribe();
  }, []);

  return isOnline;
};

export default useNetworkStatus;
