import React from 'react';
import { LaptopDetails } from '../types/laptop';

interface Props {
  details: LaptopDetails;
}

export const LaptopDetailsCard: React.FC<Props> = ({ details }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Your Assigned Laptop Details</h2>
      <div className="space-y-2">
        <p><span className="font-medium">Serial Number:</span> {details.serialNumber}</p>
        <p><span className="font-medium">Model:</span> {details.model}</p>
        <p><span className="font-medium">Assigned Date:</span> {details.assignedDate}</p>
      </div>
    </div>
  );
};