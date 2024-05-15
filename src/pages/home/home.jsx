/* eslint-disable react/no-unknown-property */
import {Canvas} from "@react-three/fiber";
import {Suspense, useEffect, useState} from "react";
import {Loader} from "../../components/index.js";
import {Island, Sky} from "../../models/index.js";

{/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">*/
}
{/*    popup*/
}
{/*</div>*/
}
export const Home = () => {
    const [isRotating, setIsRotating] = useState(false);

    const adjustIslandForScreenSize = () => {
        let screenScale = [1, 1, 1];
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        }

        return [screenScale, screenPosition, rotation];
    };

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();


    return (
        <section className="w-full h-screen relative">
            <Canvas
                className={`w-full h-full bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[10, 1, 1]} intensity={2}/>
                    <ambientLight intensity={0.7}/>
                    <hemisphereLight skyColor="#ffffff" groundColor="#000" intensity={1}/>

                    <Sky/>
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

