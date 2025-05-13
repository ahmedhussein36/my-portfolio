import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DownloadCVButton = () => {
    return (
        <Button className="mt-4 bg-slate-50 text-black hover:bg-slate-200">
            <Link
                href={"/Ahmed-Hussein-frontend-developer-resume-2025.pdf"}
                target="_blank"
            >
                My Resume
            </Link>
        </Button>
    );
};

export default DownloadCVButton;
