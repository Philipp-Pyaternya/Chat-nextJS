import Link from 'next/link';

function NotFound() {
    return (
        <div
            className="w-full flex flex-col justify-center items-center
        h-screen"
        >
            <h2 className="text-8xl font-bold text-center text-gray-500 ">
                404
            </h2>
            <p className="my-6 text-gray-600 whitespace-pre-wrap">
                Sorry. the page you’re looking for doesn’t exist.<br></br>{' '}
                Either it was removed, or you mistyped the link.
            </p>
            <Link
                className="p-5 rounded-full drop-shadow-lg text-white font-bold bg-emerald-500 hover:bg-emerald-400 mt-10"
                href="/"
            >
                Go to homepage
            </Link>
        </div>
    );
}
export default NotFound;
