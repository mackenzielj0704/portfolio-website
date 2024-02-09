
import { useState } from 'react'
import './pageStyles/projects.css'
import Maze from '../components/maze'
import PigLatin from '../components/pigLatin'
import ShelfHelp from '../components/shelf-help'
import { Link, Outlet } from 'react-router-dom'

function Projects () {

    return (
        <>
        <h1 className="atitle">Projects</h1>
        <Outlet />
        <div className='selectors'>
            <h2><Link to="/projects/maze" style={{ color: 'inherit', textDecoration: 'inherit'}}>•Maze game••</Link></h2>
            <h2><Link to="/projects/pigLatin" style={{ color: 'inherit', textDecoration: 'inherit'}}>Pig Latin Translator••</Link></h2>
            <h2><Link to="/projects/shelfHelp" style={{ color: 'inherit', textDecoration: 'inherit'}}>Shelf-Help•</Link></h2>
            <p className='select'>Select a project</p>
        </div>
        </>
    )
}
export default Projects