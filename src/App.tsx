import React from 'react';
import { Layout } from './components/Layout';
import { LaptopDetailsCard } from './components/LaptopDetailsCard';
import { AcknowledgmentForm } from './components/AcknowledgmentForm';
import { useAcknowledgment } from './hooks/useAcknowledgment';
import { laptopDetails } from './data/mockLaptopDetails';

const App: React.FC = () => {
  const { handleAcknowledgment } = useAcknowledgment(laptopDetails);

  return (
    <Layout>
      <LaptopDetailsCard details={laptopDetails} />
      <AcknowledgmentForm onAcknowledge={handleAcknowledgment} />
    </Layout>
  );
};

export default App;