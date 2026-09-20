import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {
  const [importanceNotice, setImportanceNotice] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);

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
        
        {/* यूजर प्रोफ़ाइल कार्ड */}
        <View style={styles.profileCard}>
          <View style={styles.avatarCircle}>
            <Icon name="person" size={40} color="#1E293B" />
          </View>
          <Text style={styles.usernameText}>Username : Sourabh</Text>
          <Text style={styles.kycText}>Kyc Verified</Text>

          {/* स्टैटिस्टिक्स रो (Matches Played, Total Kills, PlayCoin Won) */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNum}>0</Text>
              <Text style={styles.statLabel}>Matches Played</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNum}>0</Text>
              <Text style={styles.statLabel}>Total Kills</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNum}>💰 0</Text>
              <Text style={styles.statLabel}>PlayCoin Won</Text>
            </View>
          </View>
        </View>

        {/* मेनू लिंक्स */}
        <View style={styles.menuList}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="person-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>My Profile</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#64748B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Wallet')}>
            <View style={styles.menuItemLeft}>
              <Icon name="wallet-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>My Wallet</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#64748B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="bar-chart-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>My Statics</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#64748B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Ranking')}>
            <View style={styles.menuItemLeft}>
              <Icon name="trophy-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>Top Players</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#64748B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="people-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>Refer & Earn</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#64748B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="notifications-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>Notifications</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#64748B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="headset-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>Contact Us</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#64748B" />
          </TouchableOpacity>

          {/* इंपॉर्टेंस नोटिस टॉगल */}
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="notifications-circle-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>Importance Notice</Text>
            </View>
            <Switch
              trackColor={{ false: '#334155', true: '#38BDF8' }}
              thumbColor={importanceNotice ? '#FFFFFF' : '#94A3B8'}
              onValueChange={setImportanceNotice}
              value={importanceNotice}
            />
          </View>

          {/* म्यूजिक टॉगल */}
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="musical-notes-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>Music</Text>
            </View>
            <Switch
              trackColor={{ false: '#334155', true: '#38BDF8' }}
              thumbColor={musicEnabled ? '#FFFFFF' : '#94A3B8'}
              onValueChange={setMusicEnabled}
              value={musicEnabled}
            />
          </View>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="help-circle-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>FAQ</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#64748B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="information-circle-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>About Us</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#64748B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="lock-closed-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>Privacy Policy</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#64748B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="shield-checkmark-outline" size={20} color="#38BDF8" style={styles.menuIcon} />
              <Text style={styles.menuText}>Terms & Conditions</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#64748B" />
          </TouchableOpacity>

          {/* लॉगआउट बटन */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Icon name="power-outline" size={20} color="#EF4444" style={styles.menuIcon} />
              <Text style={[styles.menuText, { color: '#EF4444' }]}>Logout</Text>
            </View>
            <Icon name="chevron-forward" size={18} color="#EF4444" />
          </TouchableOpacity>
        </View>

        {/* ऐप वर्शन */}
        <Text style={styles.versionText}>App Version: v1.11</Text>

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
  profileCard: {
    backgroundColor: '#161622',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2C2C38',
    marginBottom: 20,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FACC15',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  usernameText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  kycText: {
    color: '#22C55E',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#101018',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#222230',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#2C2C38',
  },
  statNum: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 9,
    textAlign: 'center',
  },
  menuList: {
    backgroundColor: '#161622',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2C2C38',
    overflow: 'hidden',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1F1F2C',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
  },
  versionText: {
    color: '#64748B',
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 10,
  },
});
