import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* सबसे ऊपर का हेडर */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoBadge}>
            <Icon name="flame" size={16} color="#FFD700" />
            <Text style={styles.headerLogoText}>PLAYT24</Text>
          </View>
          <View>
            <Text style={styles.welcomeSubText}>Welcome Back,</Text>
            <Text style={styles.welcomeMainText}>PLAYT24</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="headset" size={20} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.walletBadge} onPress={() => navigation.navigate('Wallet')}>
            <Icon name="wallet" size={16} color="#FFD700" />
            <Text style={styles.walletText}>0</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* रूल्स बैनर */}
        <TouchableOpacity style={styles.rulesBanner}>
          <Icon name="megaphone" size={20} color="#FFD700" />
          <Text style={styles.rulesText}>FOLLOW OFFICIAL RULES 🚀</Text>
          <Icon name="chevron-forward" size={18} color="#FFD700" />
        </TouchableOpacity>

        {/* 4 मुख्य बटन (Profile, Wallet, Top Player, Contact Us) */}
        <View style={styles.quickNavRow}>
          <TouchableOpacity style={styles.quickNavBtn} onPress={() => navigation.navigate('Profile')}>
            <View style={styles.quickIconCircle}><Icon name="person" size={22} color="#FF3D00" /></View>
            <Text style={styles.quickNavText}>MY PROFILE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickNavBtn} onPress={() => navigation.navigate('Wallet')}>
            <View style={styles.quickIconCircle}><Icon name="wallet" size={22} color="#FF3D00" /></View>
            <Text style={styles.quickNavText}>MY WALLET</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickNavBtn} onPress={() => navigation.navigate('Ranking')}>
            <View style={styles.quickIconCircle}><Icon name="trophy" size={22} color="#FF3D00" /></View>
            <Text style={styles.quickNavText}>TOP PLAYER</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickNavBtn}>
            <View style={styles.quickIconCircle}><Icon name="headset" size={22} color="#FF3D00" /></View>
            <Text style={styles.quickNavText}>CONTACT US</Text>
          </TouchableOpacity>
        </View>

        {/* ऐप कैसे इस्तेमाल करें (How to Use Our App) */}
        <TouchableOpacity style={styles.dropdownBox}>
          <Text style={styles.dropdownTitle}>❓ How to Use Our App</Text>
          <Icon name="chevron-down" size={18} color="#FFD700" />
        </TouchableOpacity>

        {/* व्हाट्सएप चैनल ज्वाइन करने का बैनर */}
        <View style={styles.whatsappCard}>
          <View style={styles.whatsappLeft}>
            <View style={styles.miniPhoneMockup}>
              <Text style={styles.miniPhoneText}>PLAYT24 E-SPORTS</Text>
            </View>
          </View>
          <View style={styles.whatsappRight}>
            <View style={styles.waIconContainer}>
              <Icon name="logo-whatsapp" size={28} color="#00FF66" />
            </View>
            <Text style={styles.waSubTitle}>FOR UPDATES, INFORMATION & ACCESS CODE</Text>
            <Text style={styles.waMainTitle}>JOIN OUR OFFICIAL WHATSAPP CHANNEL</Text>
          </View>
        </View>

        {/* मंथली लीडरबोर्ड बैनर */}
        <View style={styles.leaderboardCard}>
          <Text style={styles.lbHeaderTitle}>MONTHLY LEADERBOARD</Text>
          <Text style={styles.lbSubTitle}>TOP 10 PRIZEPOOL</Text>
          
          <View style={styles.lbRanksRow}>
            <View style={[styles.lbRankBox, styles.rankTop1]}>
              <Text style={styles.rankNum}>TOP 1</Text>
              <Text style={styles.rankPrize}>₹499</Text>
            </View>
            <View style={[styles.lbRankBox, styles.rankTop2]}>
              <Text style={styles.rankNum}>TOP 2</Text>
              <Text style={styles.rankPrize}>₹299</Text>
            </View>
          </View>

          <View style={styles.lbRanksRowSmall}>
            <View style={styles.lbRankSmallBox}><Text style={styles.rankSmallText}>TOP 3 : ₹249</Text></View>
            <View style={styles.lbRankSmallBox}><Text style={styles.rankSmallText}>TOP 4 : ₹199</Text></View>
            <View style={styles.lbRankSmallBox}><Text style={styles.rankSmallText}>TOP 5 : ₹199</Text></View>
          </View>
          <Text style={styles.lbFooterText}>PLAY MORE • RANK HIGHER • EARN BIGGER</Text>
        </View>

        {/* ऐप ट्यूटोरियल सेक्शन */}
        <View style={styles.tutorialCard}>
          <View style={styles.tutorialContent}>
            <Text style={styles.tutorialTitle}>PLAYT24 APP TUTORIAL</Text>
            <Text style={styles.tutorialDesc}>HOW TO USE APP? LOGIN? ADD COINS? JOIN MATCH?</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B10',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1F1F2C',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E28',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  headerLogoText: {
    color: '#FFD700',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 3,
  },
  welcomeSubText: {
    color: '#888899',
    fontSize: 10,
  },
  welcomeMainText: {
    color: '#00FF66',
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: '#1E1E28',
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  walletBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6D00',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  walletText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 14,
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 80,
  },
  rulesBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161622',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  rulesText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 0.5,
  },
  quickNavRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickNavBtn: {
    alignItems: 'center',
    width: '23%',
  },
  quickIconCircle: {
    backgroundColor: '#1A1A26',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF3D00',
    marginBottom: 6,
  },
  quickNavText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dropdownBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#161622',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
  },
  dropdownTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  whatsappCard: {
    flexDirection: 'row',
    backgroundColor: '#082815',
    borderWidth: 1,
    borderColor: '#00FF66',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  whatsappLeft: {
    width: '30%',
  },
  miniPhoneMockup: {
    backgroundColor: '#111',
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#00FF66',
  },
  miniPhoneText: {
    color: '#00FF66',
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  whatsappRight: {
    width: '70%',
    paddingLeft: 10,
  },
  waIconContainer: {
    marginBottom: 4,
  },
  waSubTitle: {
    color: '#FFD700',
    fontSize: 9,
    fontWeight: 'bold',
  },
  waMainTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  leaderboardCard: {
    backgroundColor: '#161622',
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#FF3D00',
    marginBottom: 20,
    alignItems: 'center',
  },
  lbHeaderTitle: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  lbSubTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 12,
  },
  lbRanksRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  lbRankBox: {
    width: '48%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  rankTop1: {
    backgroundColor: '#331A00',
    borderColor: '#FFD700',
  },
  rankTop2: {
    backgroundColor: '#222233',
    borderColor: '#AAAAAA',
  },
  rankNum: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  rankPrize: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  lbRanksRowSmall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  lbRankSmallBox: {
    backgroundColor: '#221111',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FF3D00',
    width: '32%',
    alignItems: 'center',
  },
  rankSmallText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  lbFooterText: {
    color: '#FFD700',
    fontSize: 10,
    fontWeight: 'bold',
  },
  tutorialCard: {
    backgroundColor: '#1E1208',
    borderWidth: 1,
    borderColor: '#FF9900',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  tutorialTitle: {
    color: '#FF9900',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tutorialDesc: {
    color: '#CCCCCC',
    fontSize: 10,
  },
});
