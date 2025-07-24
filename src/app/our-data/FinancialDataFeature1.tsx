import { Globe, Building2, Mail, Linkedin } from "lucide-react";

export default function ExelliusAdvantage() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Why us?</h2>
      <p className="text-xl text-indigo-700 font-bold mb-6">The Exellius Data Advantage</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Global Coverage */}
        <div className="bg-indigo-50 rounded-lg p-5 flex space-x-4 items-center shadow-sm">
          <span className="text-indigo-600">
            <Globe size={36} />
          </span>
          <div>
            <div className="text-lg font-bold text-gray-900">190+ Countries</div>
            <div className="text-sm text-gray-500">Global Coverage</div>
          </div>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-5 flex space-x-4 items-center shadow-sm">
          <span className="text-indigo-600">
            <Building2 size={36} />
          </span>
          <div>
            <div className="text-lg font-bold text-gray-900">80M+ Companies</div>
            <div className="text-sm text-gray-500">Business Reach</div>
          </div>
        </div>

        {/* Data Coverage */}
        <div className="bg-green-50 rounded-lg p-5 flex space-x-4 items-center shadow-sm">
          <span className="text-green-600">
            <Mail size={36} />
          </span>
          <div>
            <div className="text-lg font-bold text-gray-900">420M+ Verified Emails</div>
            <div className="text-sm text-gray-500">Verified Data</div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-5 flex space-x-4 items-center shadow-sm">
          <span className="text-green-600">
            <Linkedin size={36} />
          </span>
          <div>
            <div className="text-lg font-bold text-gray-900">185M+ LinkedIn Profiles</div>
            <div className="text-sm text-gray-500">Social Reach</div>
          </div>
        </div>
      </div>
    </section>
  );
}
