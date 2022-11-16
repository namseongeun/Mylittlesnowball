/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Objet3_02(props) {
  const { nodes, materials } = useGLTF('/Objet3/Objet3_02.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ginger_boy.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('/Objet3/Objet3_02.glb')
export default Objet3_02