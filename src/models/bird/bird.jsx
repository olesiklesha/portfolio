/* eslint-disable react/no-unknown-property */

import bird from '../../assets/3d/bird.glb';
import birds from '../../assets/3d/birds.glb';
import {useGLTF} from "@react-three/drei";

export const Bird = () => {
    const {scene, animations} = useGLTF(birds);
    return (
        <mesh position={[-1, 1, 0]} scale={[0.3, 0.3, 0.3]}>
            <primitive object={scene}/>
        </mesh>
    );
};
