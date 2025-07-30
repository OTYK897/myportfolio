'use client';

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            {/* スピンする円形ローダー */}
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mb-4"></div>

            {/* ローディングテキスト */}
            <p className="text-gray-600 text-lg">読み込み中...</p>
        </div>
    );
}