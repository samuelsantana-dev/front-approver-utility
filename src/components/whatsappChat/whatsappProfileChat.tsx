import React from 'react';

const WhatsAppProfileImage: React.FC = () => {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
      <img 
        src="/lovable-uploads/5204afa5-366b-4bf7-b054-4274515582ab.png" 
        alt="Profile" 
        className="w-full h-full object-cover"
        // onError={(e) => {
        //   const target = e.target as HTMLImageElement;
        //   target.src = "https://via.placeholder.com/40";
        // }}
      />
    </div>
  );
};

export default WhatsAppProfileImage;