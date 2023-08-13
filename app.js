import React, {Component} from 'React';
import {SafeAreaView,Text,StyleShee,FlatList,} from 'react-native'
import api from '.src/services/api';
import filme from './src/pages/filmes';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            filmes: []
        }
    } 

    async componentDidMount(){
        const response = await api.get ('/filmes');
        this.setState({
            filmes: response.data 
            });
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
            <FlatList>
            data={this.state.filmes}
            keyExtractor={item => item.id}
            renderItem={({item})=> <Filme data={item} />}
            </FlatList>

            </SafeAreaView>
  ) 
 }    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    }
});