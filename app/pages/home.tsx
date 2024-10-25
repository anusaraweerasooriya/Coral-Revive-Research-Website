import Image from 'next/image';
import backgroundHome from '../../public/background-home.jpg'; // Make sure this path is correct

const Home = () => {
    return (
        <section
            id="home"
            className="h-screen relative flex items-start justify-center bg-cover bg-center pt-24 md:pt-32"
            style={{
                backgroundImage: `url(${backgroundHome.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="text-center text-white z-10">
                <h1 className="text-5xl md:text-7xl font-bold">Welcome to CoralRevive</h1>
                <p className="mt-4 text-xl md:text-2xl">
                    Restoring coral reefs for a sustainable future.
                </p>
            </div>

            {/* Curved SVG */}
            <svg
                className="absolute bottom-0 left-0 right-0 w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#ffffff" // Change this to match your desired background color
                    fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
};

export default Home;
