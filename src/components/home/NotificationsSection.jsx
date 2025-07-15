import React from 'react';

const NotificationsSection = () => {
  const notifications = [
    {
      id: 1,
      title: "AMENDMENTS OF APPENDICES I AND II OF THE CONVENTION",
      date: "04 July 2025",
      url: "#"
    },
    {
      id: 2,
      title: "AUSTRALIA - Loss of CITES permit",
      date: "04 July 2025",
      url: "#"
    },
    {
      id: 3,
      title: "AUSTRALIA - Loss of CITES permit",
      date: "03 July 2025",
      url: "#"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">Notifications to the Parties</h2>

      <div className="mb-4">
        <a href="#" className="text-green-600 hover:text-green-800 text-sm">
          Subscribe to Notification alerts
        </a>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="border-b border-gray-200 pb-3 last:border-b-0">
            <a 
              href={notification.url}
              className="text-green-600 hover:text-green-800 font-medium text-sm block mb-1"
            >
              {notification.title}
            </a>
            <p className="text-gray-500 text-xs">{notification.date}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <a href="#" className="text-green-600 hover:text-green-800 font-medium text-sm">
          See more →
        </a>
      </div>
    </div>
  );
};

export default NotificationsSection;