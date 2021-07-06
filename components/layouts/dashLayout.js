import dynamic from 'next/dynamic';


const Navbar = dynamic(
    () => import('../navbar'),
    { ssr: false }
)

export default function DashLayout({ children }) {

    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
        </>
    );
}