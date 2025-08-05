import { HealthcareChatbot } from '@/components/HealthcareChatbot'

export default function PatientPortal() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Patient Portal</h1>
          <p className="text-blue-700">Welcome back! Access your medical information and manage your healthcare.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">My Appointments</h2>
            <p className="text-gray-600">View and manage your upcoming appointments</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              View Appointments
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Medical Records</h2>
            <p className="text-gray-600">Access your complete medical history</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              View Records
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Prescriptions</h2>
            <p className="text-gray-600">Manage your medications and refills</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              View Prescriptions
            </button>
          </div>
        </div>

        {/* AI Assistant Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-blue-900 mb-2">AI Health Assistant</h2>
            <p className="text-gray-600">
              Get instant answers to your health questions. Our AI assistant can help with general health information, 
              medication questions, and appointment scheduling.
            </p>
          </div>
          
          <HealthcareChatbot 
            placeholder="Ask about symptoms, medications, or general health questions..."
            systemPrompt="You are a healthcare assistant for patients. Focus on general health information, medication guidance, appointment help, and wellness tips. Always remind users to consult their healthcare provider for specific medical advice."
          />
        </div>
      </div>
    </div>
  );
}