// components/layouts/DiceConstructor.tsx
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

interface DiceProps {
    color?: string;
    position?: [number, number, number];
}

type DicePropsWithRef = DiceProps & {
    ref?: React.Ref<DiceHandle>;
};

export interface DiceHandle extends DiceProps {
    startRoll: (time: number) => number | undefined;
}

const DiceConstructor = forwardRef<DiceHandle, DiceProps>(({ color, position }, ref) => {
    const sides = 6;
    const meshRef = useRef<THREE.Mesh>(null!);
    const [isRolling, setIsRolling] = useState<boolean>(false);
    const [value, setValue] = useState<number | undefined>(undefined);

    useImperativeHandle(ref, () => ({
        startRoll: (time: number): number | undefined => {
            if (!isRolling) {
                setIsRolling(true);
                setValue(undefined);
                const result = Math.floor(Math.random() * sides) + 1;
                setTimeout(() => {
                    endRoll(result);
                }, time);
                return result;
            } else {
                return;
            }
        },
    }));

    const endRoll = (result: number) => {
        setIsRolling(false);
        setValue(result);
        if (meshRef.current) {
            meshRef.current.rotation.set(0, 0, 0);
        }
    };

    useFrame((_, delta) => {
        if (meshRef.current && isRolling) {
            meshRef.current.rotation.x += delta * 10;
            meshRef.current.rotation.y += delta * 10;
            meshRef.current.rotation.z += delta * 10;
        }
    });

    return (
        <mesh {...{ position }} ref={meshRef}>
            <boxGeometry args={[1.99, 1.99, 1.99]} />
            {/* <icosahedronGeometry args={[1, 0]} /> */}
            <meshStandardMaterial color={color} />
            <Text
                position={[0, 0, 1]}
                rotation={[0, 0, 0]}
                fontSize={1}
                color="black"
                anchorX="center"
                anchorY="middle"
            >
                {value}
            </Text>
        </mesh>
    );
});

const Dice = forwardRef<DiceHandle, DicePropsWithRef>(({ ...props }, ref) => {
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <DiceConstructor {...props} ref={ref} />
        </Canvas>
    );
});

export default Dice;
