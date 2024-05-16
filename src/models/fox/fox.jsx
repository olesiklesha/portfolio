/* eslint-disable react/no-unknown-property */
import {useEffect, useRef} from 'react';
import {useGLTF, useAnimations} from '@react-three/drei';

import foxScene1 from '../../assets/3d/fox1.glb';

// eslint-disable-next-line react/prop-types
export const Fox = ({currentAnimation, ...props}) => {
    const group = useRef();
    const {nodes, materials, animations} = useGLTF(foxScene1);
    const {actions} = useAnimations(animations, group);

    useEffect(() => {
        Object.values(actions).forEach((action) => action.stop());

        if (actions[currentAnimation]) {

            actions[currentAnimation].play();
        }
    }, [actions, currentAnimation]);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="fbx_mergefbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="fox" rotation={[-Math.PI / 2, 0, 0]}/>
                                <group name="FoxTransform" rotation={[-Math.PI / 2, 0, 0]}>
                                    <group name="Object_6">
                                        <primitive object={nodes._rootJoint}/>
                                        <skinnedMesh
                                            name="Object_9"
                                            geometry={nodes.Object_9.geometry}
                                            material={materials['08_-_Default']}
                                            skeleton={nodes.Object_9.skeleton}
                                        />
                                        <group name="Object_8" rotation={[-Math.PI / 2, 0, 0]}/>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};
