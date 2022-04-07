import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  Vibration,
  View,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

//Para tipar os dados
interface Result {
  location: {
    name: String;
    region: String;
    country: String;
    lat: number;
    lon: number;
    tz_id: String;
    localtime_epoch: number;
    localtime: String;
  };
  current: {
    last_updated_epoch: number;
    last_updated: String;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: String;
      icon: String;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: String;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

//AXIOS
export default function APIwheter() {
  const APItempo = axios.create({
    baseURL:
      "http://api.weatherapi.com/v1/current.json?key=779744a5afc94dd4aff05614212311&q=",
  });

  //Armazenando os estado

  let [atualizar, setAtualizar] = useState(false);
  const [temperatura, setTemperatura] = useState<Result[]>([]);
  const [humidade, setUmidade] = useState<Result[]>([]);
  const [precipitacao, setPrecipitacao] = useState<Result[]>([]);
  const [UV, setUV] = useState<Result[]>([]);
  const [imagem, setImagem] = useState<Result[]>([]);

  //TENTANDO USAR DADOS

  //Carrega Temperatura
  useEffect(() => {
    async function dadosTemperatura() {
      const { data } = await APItempo.get("Sao-Paulo");
      setTemperatura(data.current.feelslike_c);
    }
    dadosTemperatura();
  }, [atualizar]);

  //Carregar Humidade
  useEffect(() => {
    async function dadosUmidade() {
      const { data } = await APItempo.get("Sao-Paulo");
      setUmidade(data.current.humidity);
    }
    dadosUmidade();
  }, []);

  //Carregar a Precipitação
  useEffect(() => {
    async function dadosPrecipitacao() {
      const { data } = await APItempo.get("Sao-Paulo");
      setPrecipitacao(data.current.precip_mm);
    }
    dadosPrecipitacao();
  }, []);

  //Carregar a Precipitação
  useEffect(() => {
    async function dadosUV() {
      const { data } = await APItempo.get("Sao-Paulo");
      setUV(data.current.uv);
    }
    dadosUV();
  }, []);

  //Carregar Icone Tempo
  useEffect(() => {
    async function ImagemTempo() {
      const { data } = await APItempo.get("Sao-Paulo");
      setImagem(data.current.condition.icon);
    }
    ImagemTempo();
  }, []);

  //COMPONENTE DE RENDER

  return (
    <Pressable
      style={styleapi.apicontainer}
      onLongPress={() => {
        Vibration.vibrate();
        atualizar = !atualizar;
        alert(
          "Mais detalhes em curso"
        );
      }}
      delayLongPress={300}
    >


      <View style={styleapi.Temperatura}>
        <Text style={styleapi.textitulo}>Clima</Text>

         <Image
          source={{ uri: "https://" + imagem }}
          style={{ width: 55, height: 55 }}
        />
        <Text style={styleapi.textitulo}> { temperatura } ºC</Text>
        
      </View>



      <View style={styleapi.Previsao}>
      
        <Text>Chuva {precipitacao} mm/m2</Text>
        <Text>UV { UV } % </Text>
        <Text>{humidade}% Umidade</Text>
      </View>




    </Pressable>
  );
}

const styleapi = StyleSheet.create({
  apicontainer: {
    justifyContent: "flex-start",
    alignSelf: "auto",
    flexDirection: "row",
    height: 160,
    padding: 10,
    backgroundColor: "#9DCC9B",
    margin: 5,
    borderRadius: 7,
  },

  textitulo: {
    fontSize: 20,
    color: "#0B0B61",
  },

  texleitura: {
    fontSize: 16,
    color: "#000000",
    padding: 10,
  },

  cardtempo: {
    flexDirection: "row",
    backgroundColor: "grey",
    height: 160,
  },

  Temperatura: {
    height: 160,
    width:100,
    color: "#00FFFF",
    padding: 2,
  },

  Previsao: {
    height: 160,
    color: "#ffffff",
    padding: 2,
  },
});
