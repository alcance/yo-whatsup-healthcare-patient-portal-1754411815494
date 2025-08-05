import { PortalCard } from '../ui/PortalCard';

const portals = [
  {
    title: "Patient Portal",
    description: "Access your medical records, schedule appointments, and manage prescriptions.",
    buttonText: "Sign In",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    buttonColor: "bg-blue-600"
  },
  {
    title: "Provider Portal", 
    description: "Healthcare professionals can access patient data and manage schedules.",
    buttonText: "Provider Login",
    bgColor: "bg-green-50",
    textColor: "text-green-700", 
    buttonColor: "bg-green-600"
  }
];

export function PortalSelector() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
      {portals.map((portal, index) => (
        <PortalCard key={index} {...portal} />
      ))}
    </div>
  );
}