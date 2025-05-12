import { Button } from "@/components/ui/button";
import React from "react";

const DownloadCVButton = () => {
    const handleDownload = () => {
        // Define the file URL (relative to public folder or absolute URL)
        const fileUrl = "/Ahmed-Hussein-frontend-developer-resume-2025"; // Adjust path if needed
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Ahmed-Hussein-frontend-developer-resume-2025"; // Optional: specify downloaded file name
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
