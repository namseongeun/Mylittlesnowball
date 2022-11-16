/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Objet2_06(props) {
  const { nodes, materials } = useGLTF('/Objet2/Objet2_06.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Snowman_Santa_Hat.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('/Objet2/Objet2_06.glb')
export default Objet2_06
