import React from 'react';
import {useLoader} from "@react-three/fiber";

const Animate = () => {
    const textureMap = useLoader(TextureLoader, texture);

    return (
        <mesh ref={meshRef} position={[0, 0, -2]}>
            <sphereGeometry args={[2, 32]} />
            {/* ! */}
            <meshStandardMaterial map={textureMap} />
        </mesh>
    );
};

export default Animate;
