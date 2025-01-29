import React from 'react'
import SkillsMostlyUsed from './SkillsMostlyUsed'
import SkillsLessUsed from './SkillsLessUsed'

export default function Skills() {
  return (
    <div>
    <p>Mostly Used</p>
    <SkillsMostlyUsed/>
    <p>Less Commonly Used</p>
    <SkillsLessUsed/>
    </div>
  )
}