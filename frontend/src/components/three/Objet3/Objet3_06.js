/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Objet3_06(props) {
  const { nodes, materials } = useGLTF('/Objet3/Objet3_06.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Penguin_4.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('/Objet3/Objet3_06.glb')
export default Objet3_06
