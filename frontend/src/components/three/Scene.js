/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: JussilaVille (https://sketchfab.com/JussilaVille)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/snow-globe-ba2480f70ad1473ebd8cc1306d64ba35
title: Snow Globe
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.Tree_Trunk} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.Tree_Trunk} />
          <group scale={[0.95, 0.96, 0.95]}>
            <mesh geometry={nodes.Object_7.geometry} material={materials.Snow} />
          </group>
          <group position={[-0.29, 0.28, -0.27]} rotation={[0, -1.08, 0]} scale={[0.18, 0.18, 0.27]}>
            <mesh geometry={nodes.Object_9.geometry} material={materials.HouseWalls} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.House_Window} />
            <mesh geometry={nodes.Object_11.geometry} material={materials.Chimney} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.Snow} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.HouseRoof} />
          </group>
          <group position={[0.02, 0.2, 0.33]} scale={[0.64, 1, 0.64]}>
            <mesh geometry={nodes.Object_15.geometry} material={materials.Spruce_Leaves} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Tree_Trunk} />
            <mesh geometry={nodes.Object_17.geometry} material={materials.Snow} />
          </group>
          <group position={[0.27, 0.2, 0.47]} scale={[0.46, 0.72, 0.46]}>
            <mesh geometry={nodes.Object_19.geometry} material={materials.Spruce_Leaves} />
            <mesh geometry={nodes.Object_20.geometry} material={materials.Tree_Trunk} />
            <mesh geometry={nodes.Object_21.geometry} material={materials.Snow} />
          </group>
          <group position={[0.24, 0.2, 0.22]} scale={[0.38, 0.6, 0.38]}>
            <mesh geometry={nodes.Object_23.geometry} material={materials.Spruce_Leaves} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.Tree_Trunk} />
            <mesh geometry={nodes.Object_25.geometry} material={materials.Snow} />
          </group>
          <group position={[0.38, 0.12, -0.45]} rotation={[0, -0.76, 0]} scale={[0.7, 1.28, 0.7]}>
            <mesh geometry={nodes.Object_27.geometry} material={materials.Spruce_Leaves} />
            <mesh geometry={nodes.Object_28.geometry} material={materials.Tree_Trunk} />
            <mesh geometry={nodes.Object_29.geometry} material={materials.Snow} />
          </group>
          <group position={[0, -0.6, 0]} scale={0.97}>
            <mesh geometry={nodes.Object_31.geometry} material={materials.Material} />
          </group>
        </group>
      </group>
    </group>
  )
}
export default Model

useGLTF.preload('/scene.gltf')
