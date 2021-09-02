import React from "react"
import Page from '../components/page'


class IndexPage extends React.Component {
   state={
     loc:'welcome'
   }
   handleLoc=(x)=>{
      this.setState({loc:x})
   }
  
  
  render(){
  
  return(
    <Page loc={this.state.loc} handleLoc={this.handleLoc}/>
    )
  }
}

export default IndexPage
