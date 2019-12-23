import React, {Component} from 'react';
import {
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity
 } from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {
       altura:0,
       resultado:0,
       massa:0,
       resultadoText:""  
    }
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
     let imc = (this.state.massa/(this.state.altura * this.state.altura)).toFixed(2)
     let s = this.state
     s.resultado = imc

 
   if(s.resultado < 16){
     s.resultadoText = "Magreza Grave"
   }else  if(s.resultado < 17){
    s.resultadoText = "Magreza Moderada"
  }else  if(s.resultado < 18.5){
    s.resultadoText = "Magreza Leve"
  }else  if(s.resultado < 25){
    s.resultadoText = "Saudável"
  }else  if(s.resultado < 30){
    s.resultadoText = "Sobrepeso"
  }else  if(s.resultado < 35){
    s.resultadoText = "Obsedidade Grau 1"
  }else  if(s.resultado < 40){
    s.resultadoText = "Obsedidade Grau 2"
  }else  if(s.resultado < 45){
    s.resultadoText = "Obsedidade Grau 3"
  }
  
  this.setState(s) 
     
}
  render() {   
    
    return (    
      <View style={styles.container}> 
      <View style={styles.entradas}> 
      {/* evento Onchange para capturar número digitado */}

      <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=> {this.setState({altura})}} />
      <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=> {this.setState({massa})}} />
      </View>
      {/* evento Onpress para executar função calcular */}
      <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
      <Text style={styles.resultado}>{this.state.resultado}</Text>
      <Text style={[styles.resultado,{fontSize:30}]}>{this.state.resultadoText}</Text>
      </View>
    );    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F5FCFF',
  },
  entradas: {
    flexDirection:'row',
    padding:10
  },
  input: {
    height:80,
    textAlign: 'center',
    width: '50%',
    fontSize:50,
    marginTop:24,
    color:'#ccc',
    
  } ,
  button: {
    backgroundColor:'#89ffa5',
    borderRadius: 10
  },
  buttonText: {
    alignSelf:'center',
    padding:30,
    fontSize:25,
    color:'#6dc4a4',
    fontWeight:'bold'
    
  },
  resultado: {
    alignSelf:"center",
    color:"lightgray",
    fontSize:65,
    padding:15
  }
});    
