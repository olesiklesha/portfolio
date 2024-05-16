/* eslint-disable react/no-unknown-property */
import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";
import {HomeInfo, Loader} from "../../components/index.js";
import {Bird, Island, Plane, Sky} from "../../models/index.js";


export const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const adjustPlaneForScreenSize = () => {
        let screenScale = [0.8, 0.8, 0.8];
        let screenPosition = [0, -6, -7];

        if (window.innerWidth < 768) {
            screenScale = [0.85, 0.85, 0.85];
        }

        return [screenScale, screenPosition];
    };
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
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <section className="w-full h-screen relative bg-blue-400">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo stage={currentStage}/>}
            </div>
            <Canvas
                className={`w-full h-full bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[10, 1, 1]} intensity={2}/>
                    <ambientLight intensity={0.7}/>
                    <hemisphereLight skyColor="#ffffff" groundColor="#000" intensity={1}/>

                    <Sky isRotating={isRotating}/>
                    <Bird/>
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        position={planePosition}
                        scale={planeScale}
                        rotation={[0, 1.3, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

