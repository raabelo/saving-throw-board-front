const DiceConstructor: React.FC<DiceProps> = ({ ...props }) => {
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta;
            ref.current.rotation.y += delta;
        }
    });

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={() => click(!clicked)}
            onPointerOver={(event) => {
                event.stopPropagation();
                hover(true);
            }}
            onPointerOut={() => hover(false)}
        >
            {/* <boxGeometry args={[1, 2, 2]} /> */}

            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
            <Text scale={[1, 1, 1]} position={[0, 0, 1.1]} color="black" anchorX="center" anchorY="middle">
                test
            </Text>

            {getGeometrySides(12).map((detail, index) => (
                <Text
                    key={index}
                    position={detail.position as Vector3}
                    rotation={detail.rotation as Euler}
                    fontSize={0.5}
                    color="black"
                    anchorX="center"
                    anchorY="middle"
                >
                    {index + 1}
                </Text>
            ))}
        </mesh>
    );
};

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Text } from "@react-three/drei";

type DiceProps = {
    color?: string;
    position?: [number, number, number];
};

const DiceConstructor: React.FC<DiceProps> = ({ color, position }) => {
    const ref = useRef<THREE.Mesh>(null!);
    const [isRolling, setIsRolling] = useState<boolean>(false);
    const [value, setValue] = useState<number | undefined>(undefined);

    const startRoll = () => {
        setIsRolling(true);
        setValue(undefined);
        setTimeout(() => {
            endRoll();
        }, 2000);
    };

    const endRoll = () => {
        setIsRolling(false);
        setValue(Math.floor(Math.random() * 6) + 1);
        ref.current.rotation.x = new THREE.Euler().x;
        ref.current.rotation.y = new THREE.Euler().y;
        ref.current.rotation.z = new THREE.Euler().z;
    };

    useFrame((_, delta) => {
        if (ref.current && isRolling) {
            ref.current.rotation.x += delta * 10;
            ref.current.rotation.y += delta * 10;
            ref.current.rotation.z += delta * 10;
        }
    });

    return (
        
    );
};

const Dice: React.FC<DiceProps> = (props) => {
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <DiceConstructor {...props} />
            {/* <OrbitControls /> */}
        </Canvas>
    );
};

export default Dice;
