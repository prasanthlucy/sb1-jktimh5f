import React from 'react';
import { AcknowledgmentButton } from './AcknowledgmentButton';
import type { AcknowledgmentStatus } from '../types/laptop';

interface Props {
  onAcknowledge: (status: AcknowledgmentStatus) => void;
}

export const AcknowledgmentForm: React.FC<Props> = ({ onAcknowledge }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Please Acknowledge Your Laptop Status</h2>
      
      <div className="space-y-4">
        <AcknowledgmentButton
          status="received_working"
          onClick={() => onAcknowledge('received_working')}
          label="I received the laptop & everything works fine"
        />
        
        <AcknowledgmentButton
          status="received_not_working"
          onClick={() => onAcknowledge('received_not_working')}
          label="I received the laptop but it has issues"
        />
        
        <AcknowledgmentButton
          status="not_received"
          onClick={() => onAcknowledge('not_received')}
          label="I haven't received the laptop"
        />
      </div>
    </div>
  );
};