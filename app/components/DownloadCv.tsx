import { Button } from "@/components/ui/button";
import React from "react";

const DownloadCVButton = () => {
    const handleDownload = () => {
        // Define the file URL (relative to public folder or absolute URL)
        const fileUrl = "/AHMED-HUSSEIN-CV.pdf"; // Adjust path if needed
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "AHMED-HUSSEIN-CV.pdf"; // Optional: specify downloaded file name
        link.click();
    };

    return (
        <Button
            className="mt-4 bg-slate-50 text-black hover:bg-slate-200"
            onClick={handleDownload}
        >
            Download My Resume
        </Button>
    );
};

export default DownloadCVButton;
