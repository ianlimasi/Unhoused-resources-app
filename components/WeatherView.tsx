import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
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
    icon: string;
  };
  wind_mph: number;
  wind_kph: number;
  wind_dir: string;
  precip_mm: number;
  precip_in: number;
  uv: number;
}

export default function WeatherView() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    getCurrentLocationAysnc();
  }, []);

  useEffect(() => {
    if (location) {
      getWeatherAsync();
      getWeatherAlertsAsync();
    }
  }, [location]);

  const getCurrentLocationAysnc = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log("location permissions failed");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log("location set as " + location.coords.latitude);
  }

  const getWeatherAlertsAsync = async () => {
    if (location === null) {
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
    if (location === null) {
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
      {(weather === null) ? (
        <View style={styles.weatherHeader}>
          <Text style={styles.headerText}>Loading...</Text>  
        </View>
      ) : (
        <View style={styles.weatherHeader}>
          <WeatherIcon iconPath={weather?.condition.icon} altText={weather?.condition.text} />
          <WeatherInfo isAmer={true} weather={weather} />
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

type WeatherIconProps = {
  iconPath: string;
  altText: string;
};

function WeatherIcon({ iconPath, altText }: WeatherIconProps) {
  const iconUrl = `https:${iconPath}`;

  return (
    <View style={styles.iconContainer}>
      <Image
        source={{uri: iconUrl}}
        style={styles.icon}
      />
      <Text style={styles.iconLabel}>{altText}</Text>
    </View>
  )
}

type WeatherInfoProps = {
  isAmer: boolean;
  weather: Weather;
};

function WeatherInfo({ isAmer, weather }: WeatherInfoProps) {
  return (
    isAmer ? (
      <View style={styles.weatherInfo}>
        <Text style={styles.infoTemp}>{weather.temp_f} °F</Text>
        <Text style={styles.infoSmall}>{weather.wind_mph} mph  <Feather name="wind" /></Text>
        <Text style={styles.infoSmall}>{weather.precip_in} in  <Ionicons name="rainy" /></Text>
        <Text style={styles.infoSmall}>{weather.uv} UV  <MaterialCommunityIcons name="sun-wireless-outline" /></Text>
      </View>
    ) : (
      <View>
        <Text>{weather.temp_c} °C</Text>
        <Text>{weather.wind_kph} kph {weather.wind_dir}</Text>
        <Text>{weather.precip_mm} mm</Text>
        <Text>{weather.uv} UV</Text>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  weatherContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  weatherHeader: {
    backgroundColor: '#4F5D6C',
    width: '100%',
    alignItems: 'center',
    color: 'white',
    borderRadius: 10,
    padding: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
  },
  alertsContainer: {

  },
  alert: {
    backgroundColor: '#4F5D6C',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 64,
    height: 64,
    padding: 5,
  },
  iconLabel: {
    color: 'white',
    fontWeight: 'bold'
  },
  weatherInfo: {
    alignItems: 'flex-end'
  },
  infoTemp: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 5
  },
  infoSmall: {
    color: 'white',
    opacity: 0.5,
    marginVertical: 1,
  }
});