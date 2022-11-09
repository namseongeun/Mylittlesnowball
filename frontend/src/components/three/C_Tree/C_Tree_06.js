/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function C_Tree_06(props) {
  const { nodes, materials } = useGLTF('/C_tree/C_Tree_06.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Christmas_Tree_3.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('/C_tree/C_Tree_06.glb')
