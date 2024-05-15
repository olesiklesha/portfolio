import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {Loader} from "../../components/index.js";
import {Island} from "../../models/index.js";

{/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">*/
}
{/*    popup*/
}
{/*</div>*/
}
export const Home = () => {
    const adjustIslandForScreenSize = () => {
        let screenScale = [1, 1, 1];
        let screenPosition = [0, -0.65, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, -0.65, -43];
        }

        return [screenScale, screenPosition, rotation];
    };

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <Canvas className="w-full h-full bg-transparent"
                    camera={{near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader/>}>
                    <ambientLight/>
                    <directionalLight/>
                    <pointLight/>
                    <spotLight/>
                    <hemisphereLight/>

                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

