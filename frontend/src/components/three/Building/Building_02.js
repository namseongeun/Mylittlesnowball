/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Building_02(props) {
  const { nodes, materials } = useGLTF('/Building/Building_02.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.House_5.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('/Building/Building_02.glb')
