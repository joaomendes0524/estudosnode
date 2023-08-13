import React, {Component} from 'React';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';

export default class Filme extends Component{
    render(){
        return(
            <view>
                <text style={styles.nomeFilme}>{this.props.data.nome} </text>
                <TouchableOpacity onPress={()=>alert(this.props.data.id.nome)}>
                     <Image style={styles.capaFilme} source={{uri: this.props.data.foto}}/>
                </TouchableOpacity>
                
            </view>
        )
    }

}

const styles = StyleSheets.create({
    container:{
        nomeFilme:{
            color: 'white',
            fontSize: 22,
            fontWeight:'bold',
            justifycontent: 'center',
            alignSelf: 'center',
            marginTop: 30,
            marginBottom:20,

        },
        capaFilme:{
            width:200,
            height:250,
            borderRadius:30,
            alignSelf:'center',

        }
    }
});