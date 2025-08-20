"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

interface InvitationConfirmationProps {
  onConfirm: () => void;
}

export default function InvitationConfirmation({ onConfirm }: InvitationConfirmationProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-serif text-gray-800 mb-4">
            Wedding Invitation
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Kami dengan senang hati mengundang Anda untuk merayakan hari bahagia kami
          </p>
          <div className="space-y-2 mb-8">
            <p className="text-2xl font-serif text-gray-800">John & Jane</p>
            <p className="text-gray-600">31 Agustus 2025</p>
          </div>
          <Button 
            onClick={onConfirm}
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Buka Undangan
          </Button>
        </div>
      </div>
    </div>
  );
}
