import React from "react";

function TicketViewerSkeleton() {
    const loadingSkeletonStyle = "animate-pulse bg-slate-500 h-6 w-full rounded mb-4";
    const loadingSkeletonButtonStyle = "animate-pulse bg-slate-500 h-8 w-1/2 rounded mb-4";
    const animatedLineStyle = "w-full h-1 rounded-full bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 animate-move-line mb-4";

    return (
        <div className="flex flex-col items-center mt-20 w-full">
            <div className="border border-slate-100 rounded-lg w-[32rem] p-8 space-y-6">
                <div className="text-center text-white font-bold text-2xl mb-6">
                    <h1>Loading Tickets...</h1>
                </div>
                <div className={`${loadingSkeletonStyle} w-3/4 mx-auto`} />
                <div className={`${loadingSkeletonStyle} w-2/3 mx-auto`} />
                <div className={`${loadingSkeletonStyle} w-5/6 mx-auto`} />
                <div className={`${loadingSkeletonButtonStyle} mx-auto`} />
                <div className={`${loadingSkeletonStyle} w-3/4 mx-auto`} />
                <div className={`${loadingSkeletonStyle} w-2/3 mx-auto`} />
                <div className={`${loadingSkeletonStyle} w-5/6 mx-auto`} />
                <div className={`${loadingSkeletonButtonStyle} mx-auto`} />
            </div>
        </div>
    );
}

export default TicketViewerSkeleton;
