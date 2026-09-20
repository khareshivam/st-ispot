import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={require('../assets/background.png')} // यहाँ आप अपनी बैकग्राउंड इमेज का रास्ता दे सकते हैं
      style={styles.container}
      resizeMode="cover"
    >
      {/* ऊपर का लोगो और हेडर */}
      <View style={styles.headerContainer}>
        <View style={styles.logoRow}>
          <Icon name="flame" size={28} color="#FFD700" />
          <Text style={styles.logoText}>PLAYT24</Text>
        </View>
      </View>

      {/* बीच का मुख्य कंटेंट और स्लोगन */}
      <View style={styles.contentContainer}>
        <View style={styles.bannerBox}>
          <Text style={styles.mainTitle}>Play Small Win Big</Text>
        </View>

        <View style={styles.featuresCard}>
          <View style={styles.featureRow}>
            <View style={styles.badgeNumber}>
              <Text style={styles.badgeText}>1</Text>
            </View>
            <Text style={styles.featureText}>INDIA'S NO.1 PLATFORM</Text>
            <Icon name="star" size={18} color="#FFD700" style={{ marginLeft: 'auto' }} />
            <Text style={styles.featureTextRight}>PLAYERS BEST RATINGS</Text>
          </View>

          <View style={styles.featureRow}>
            <Icon name="wallet" size={20} color="#00FF66" style={styles.featureIcon} />
            <Text style={styles.featureText}>INSTANT WITHDRAWAL</Text>
            <Icon name="headset" size={20} color="#00E5FF" style={{ marginLeft: 'auto' }} />
            <Text style={styles.featureTextRight}>24/7 CUSTOMER SUPPORT</Text>
          </View>

          <View style={styles.featureRow}>
            <Icon name="shield-checkmark" size={20} color="#FFD700" style={styles.featureIcon} />
            <Text style={styles.featureText}>FAIR PLAYER'S</Text>
            <Icon name="checkmark-circle" size={20} color="#00FF66" style={{ marginLeft: 'auto' }} />
            <Text style={styles.featureTextRight}>SAFE & TRUSTED</Text>
          </View>
        </View>
      </View>

      {/* नीचे का वेलकम बटन */}
      <View style={styles.footerContainer}>
        <TouchableOpacity 
          style={styles.welcomeButton} 
          onPress={() => navigation.replace('MainApp')}
          activeOpacity={0.8}
        >
          <Text style={styles.welcomeButtonText}>WELCOME !</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#8B0000', // अगर इमेज लोड न हो तो बैकअप रेड कलर
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    letterSpacing: 1,
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%',
  },
  bannerBox: {
    backgroundColor: '#D32F2F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: '#FF5252',
    elevation: 5,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  featuresCard: {
    backgroundColor: 'rgba(15, 15, 25, 0.85)',
    borderRadius: 12,
    padding: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: '#333344',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  badgeNumber: {
    backgroundColor: '#FFD700',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  badgeText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  featureIcon: {
    marginRight: 10,
  },
  featureText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  featureTextRight: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  footerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  welcomeButton: {
    backgroundColor: '#E53935',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  welcomeButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});
