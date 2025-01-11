import { FaDownload } from 'react-icons/fa';

function Resume() {
  return (
    <div className="w-full">
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-8">Resume</h1>
        
        {/* Download button */}
        <div className="flex justify-center mb-8">
          <a 
            href="/Yonatan Paz-Priel Resume.pdf" 
            download
            className="flex items-center gap-2 bg-[#001b5e] text-white px-6 py-2 rounded hover:bg-[#001b5e]/80"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        {/* Embedded Resume */}
        <div className="w-full h-screen">
          <iframe
            src="/Yonatan Paz-Priel Resume.pdf#view=FitH"
            className="w-full h-full"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume; 