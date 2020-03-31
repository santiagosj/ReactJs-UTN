import React, { Component } from 'react'
import NavItem from '../NavItem/NavItem'
import Image from '../Image/Image'
import './Header.scss'

class Header extends Component {
     constructor(props){
         super(props)

         this.navigationItems = {
            items:[
                {link:'/',name:'Home'},
                {link:'/page2/Gente',name:'Gente'},
                {link:'/page3/MiPerfil',name:'MiPerfil'},
            ]
        }

     }

    render() {
        return (
            <header className={`${this.props.classHeader}`}>

                <div className="header-conent">
                    <h2>Rick and Morty social network</h2>
                    <ul>
                    {this.navigationItems.items.map((item,i) => <NavItem key={i} data={item}/>)}
                    </ul>
                    <span>Evil Morty</span>
                    <div className="Image--container">
                        <Image 
                        imgSrc={this.props.userImage}
                        alt={`userImage`}
                        />
                    </div>
                </div>
          
            </header>
        )
    }
}

export default Header
