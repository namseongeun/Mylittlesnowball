/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Objet3_01(props) {
  const { nodes, materials } = useGLTF('/Objet3/Objet3_01.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Candy_8.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('/Objet3/Objet3_01.glb')
export default Objet3_01