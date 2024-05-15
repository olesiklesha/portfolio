/* eslint-disable react/no-unknown-property */

// import plane from '../../assets/3d/plane.glb';
import plane1 from '../../assets/3d/plane1.glb';
// import plane2 from '../../assets/3d/plane2.glb';
import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";


// eslint-disable-next-line react/prop-types
export const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(plane1);
    const {actions} = useAnimations(animations, ref);

    useEffect(() => {
        if (isRotating) {
            actions['Animation'].play();
        } else {
            actions['Animation'].stop();

        }
    }, [actions, isRotating]);

    return (
        <mesh {...props}>
            <primitive object={scene} ref={ref}/>
        </mesh>
    );
};
