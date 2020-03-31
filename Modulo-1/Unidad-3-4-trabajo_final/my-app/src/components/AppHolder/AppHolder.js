import React,{Component} from 'react'
import './AppHolder.scss';
import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'



class AppHolder extends Component{
    constructor(props){
        super(props)
        this.state={
            one:'menuOnTop'
        }
    }

    componentDidMount(){
        window.onscroll = () => this.handleAnimation()
    }

    handleAnimation = () => {
        if(document.documentElement.scrollTop > 100){
            this.setState({
                one:'scroll' //header.scss
            })
        }
        if(document.documentElement.scrollTop === 0){
            this.setState({
                one:'menuOnTop' //appHolder.scss
            })
        }
     }

    render(){
        return (
            <div className="appHolder--container">
                <Header userImage={require(`../../assets/evilMorty.jpg`)} classHeader={this.state.one}/>
                <MainContent/>
            </div>
         )
    }
}


export default AppHolder
