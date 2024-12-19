import React from 'react';
import { AcknowledgmentStatus } from '../types/laptop';
import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

interface Props {
  status: AcknowledgmentStatus;
  onClick: () => void;
  label: string;
}

export const AcknowledgmentButton: React.FC<Props> = ({ status, onClick, label }) => {
  const getButtonStyles = () => {
    switch (status) {
      case 'received_working':
        return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'received_not_working':
        return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200';
      case 'not_received':
        return 'bg-red-100 text-red-700 hover:bg-red-200';
    }
  };

  const getIcon = () => {
    switch (status) {
      case 'received_working':
        return <CheckCircleIcon className="h-5 w-5" />;
      case 'received_not_working':
        return <ExclamationTriangleIcon className="h-5 w-5" />;
      case 'not_received':
        return <XCircleIcon className="h-5 w-5" />;
    }
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center gap-2 px-4 py-2 rounded-md transition-colors',
        getButtonStyles()
      )}
    >
      {getIcon()}
      {label}
    </button>
  );
};