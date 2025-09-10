import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store'

const Shirt = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt_baked.glb')//how to import a 3D model
    const logoTexture = useTexture(snap.logoDecal)
    const fullTexture = useTexture(snap.fullDecal)

    useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)); //change la couleur progressivment pour une animation fluid

    const stateToString = JSON.stringify(snap)//track state change
    return (
        <group
            key={stateToString}>             {/* force React à recréer entièrement l’objet 3D quand stateToString change.this way react rander evry time the state change*/}
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                material-roughness={1}
                dispose={null}
            >
                {snap.isFullTexture && (
                    <Decal
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={1}
                        map={fullTexture}
                    />
                )}

                {snap.isLogoTexture && (
                    <Decal
                        position={[0, 0.04, 0.15]}
                        rotation={[0, 0, 0]}
                        scale={0.15}
                        map={logoTexture}
                       
                        depthTest={false}
                        depthWrite={true}
                    />
                )}

            </mesh>
        </group>
    )
}

export default Shirt