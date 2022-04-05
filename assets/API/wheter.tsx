import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  Vibration,
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
    <SafeAreaView style={styleapi.apicontainer}>
      <Pressable
        onLongPress={() => {
            Vibration.vibrate()
            ; atualizar = !atualizar;
          alert(
            "Já choveu: " + precipitacao + "mm/mt e o " + " UV em:" + UV + "% "
          );
        }}
        delayLongPress={300}
      >
        <Text style={styleapi.textitulo}>
          <Image
            source={{ uri: "https://" + imagem }}
            style={{ width: 40, height: 40 }}
          />
        </Text>
        <Text style={styleapi.textitulo}>{temperatura}ºC</Text>
        <Text style={styleapi.textitulo}>{humidade}%Umi.</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styleapi = StyleSheet.create({
  apicontainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 150,
    width: 120,
    backgroundColor: "#819FF7",
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

  listaapi: {
    backgroundColor: "grey",
  },
});
