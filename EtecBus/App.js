import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator, TouchableOpacity, Platform, Linking, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

// Configurações de Localização
const SCHOOL = {
  id: 'school',
  name: 'ETEC Comendador João Rays',
  coordinate: { latitude: -22.489233172207847, longitude: -48.546409528694575},
  address: 'Rua Ludovico Victório, 2140, Barra Bonita - SP  '
}

const BUS_STOPS = [
  {
    id: 'stop_1',
    name: 'Autoescola Muriano',
    coordinate: { latitude: -22.48407736695823, longitude: -48.564716875350165 },
    lines: ['Nova Barra'],
    address: 'R. Geraldo Fazzio, 484'
  },
  {
     
  }
]

// Distância Haversine (metros)
function getDistance(coord1, coord2) {
  const R = 6371e3; // Raio da Terra em metros
  const phi1 = coord1.latitude * Math.PI / 180;
  const phi2 = coord2.latitude * Math.PI / 180;
  const deltaPhi = (coord2.latitude - coord1.latitude) * Math.PI / 180;
  const deltaLambda = (coord2.longitude - coord1.longitude) * Math.PI / 180;

  const a = Math.sin(deltaPhi/2) ** 2 +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaLambda/2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c; // Distância em metros
}

function formatDistance(distance) {
  return distance < 100 ? `${Math.round(distance)} m` : `${(distance / 1000).toFixed(1)} km`;
}

// HTML do Leaflet (OpenStreetMap - sem chave)]
function buildLeaftletHTML(userCoord, nearestStopId, selectedStopId) {
  const stopsJSON = JSON.stringify(BUS_STOPS);
  const schoolJSON = JSON.stringify(SCHOOL);
  const userJSON = userCoord ? JSON.stringify(userCoord) : 'null';

  return `  `
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
