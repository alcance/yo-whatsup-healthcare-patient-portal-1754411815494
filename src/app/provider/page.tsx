export default function ProviderPortal() {
  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-3xl font-bold text-green-900 mb-4">Provider Portal</h1>
          <p className="text-green-700">Manage your patients and clinical workflow efficiently.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Patient Management</h2>
            <p className="text-gray-600">View and manage your patient roster</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Manage Patients</button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Schedule</h2>
            <p className="text-gray-600">View your appointments and availability</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">View Schedule</button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Clinical Notes</h2>
            <p className="text-gray-600">Access and update patient documentation</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">View Notes</button>
          </div>
        </div>
      </div>
    </div>
  );
}