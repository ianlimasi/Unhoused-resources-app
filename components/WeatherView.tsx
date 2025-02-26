import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { StyleSheet, Text, View } from "react-native";
import colors from "@/app/colors";

type Alert = {
  headline: string;
  msgtype: string;
  severity: string;
  urgency: string;
  areas: string;
  category: string;
  event: string;
  desc: string;
  instruction: string;
}

type Weather = {
  temp_c: number;
  temp_f: number;
  is_day: boolean;
  condition: {
    text: string;
    code: number;
    icon: string;
  };
}

export default function WeatherView() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    update();
  }, []);

  const update = async () => {
    getCurrentLocationAysnc();
    getWeatherAsync();
    getWeatherAlertsAsync();
  }

  const getCurrentLocationAysnc = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  const getWeatherAlertsAsync = async () => {
    if (location == null) {
      return;
    }
    try {
      const response = await fetch('http://api.weatherapi.com/v1/alerts.json?key=0b50c9222bd8438ea0d232922252402&q=' 
          + location.coords.latitude + ','
          + location.coords.longitude );
      const json = await response.json();
      setAlerts(json.alerts.alert);
    } catch (e) {
      console.error(e);
    }
  }

  const getWeatherAsync = async () => {
    if (location == null) {
      return;
    }
    try {
      const response = await fetch('http://api.weatherapi.com/v1/current.json?key=0b50c9222bd8438ea0d232922252402&q=' 
          + location.coords.latitude + ','
          + location.coords.longitude );
      const json = await response.json();
      setWeather(json.current);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.weatherContainer}>
      {(weather == null) ? (
        <View style={styles.weatherHeader} />
      ) : (
        <View style={styles.weatherHeader}>
          {weather?.temp_f + ' °F / ' + weather?.temp_c + ' °C'}
        </View>
      )}
      <View style={styles.alertsContainer}>
        {alerts
          .filter(item => (item.msgtype === 'Alert'))
          .map(item => (
            <AlertItem alert={item}/>
        ))}
      </View>
    </View>
  );
}

type AlertProps = {
  alert: Alert;
};

function AlertItem({ alert }: AlertProps) {
  return (
    <View style={styles.alert}>
      {alert.headline}
    </View>
  )
}

const styles = StyleSheet.create({
  weatherContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  weatherHeader: {
    backgroundColor: colors.navyBlue,
    width: '100%',
    alignItems: 'center',
  },
  alertsContainer: {
    
  },
  alert: {
    backgroundColor: colors.navyBlue,
    alignItems: 'center',
  },
});