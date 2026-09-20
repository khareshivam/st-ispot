import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// लीडरबोर्ड का डमी डेटा
const leaderboardData = [
  { id: '1', rank: '1', name: 'shsbssiisj...', winning: '2203' },
  { id: '2', rank: '2', name: 'yash sam', winning: '1344' },
  { id: '3', rank: '3', name: 'fang 7', winning: '1030' },
  { id: '4', rank: '4', name: 'Radha Shy...', winning: '996' },
  { id: '5', rank: '5', name: 'Dhruv Raj', winning: '982' },
  { id: '6', rank: '6', name: 'avneet kaur', winning: '881' },
  { id: '7', rank: '7', name: 'faiza khan', winning: '808' },
  { id: '8', rank: '8', name: 'ABHI GG', winning: '756' },
  { id: '9', rank: '9', name: 'komal ffyt', winning: '583' },
  { id: '10', rank: '10', name: 'KARAN Ku...', winning: '575' },
];

export default function RankingScreen() {
  const [activeTab, setActiveTab] = useState('daily');

  const renderItem = ({ item }) => (
    <View style={styles.rowItem}>
      <View style={styles.rankBox}>
        <Text style={styles.rankText}>{item.rank}</Text>
      </View>
      <Text style={styles.nameText} numberOfLines={1}>{item.name}</Text>
      <View style={styles.winningBox}>
        <Icon name="logo-bitcoin" size={16} color="#FFD700" style={{ marginRight: 4 }} />
        <Text style={styles.winningText}>{item.winning}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* सबसे ऊपर के फ़िल्टर टैब */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.topTab, activeTab === 'daily' && styles.activeTopTab]}
          onPress={() => setActiveTab('daily')}
        >
          <Text style={[styles.topTabText, activeTab === 'daily' && styles.activeTopTabText]}>Daily for full map</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.topTab, activeTab === 'weekly' && styles.activeTopTab]}
          onPress={() => setActiveTab('weekly')}
        >
          <Text style={[styles.topTabText, activeTab === 'weekly' && styles.activeTopTabText]}>Weekly for full map</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.topTab, activeTab === 'monthly' && styles.activeTopTab]}
          onPress={() => setActiveTab('monthly')}
        >
          <Text style={[styles.topTabText, activeTab === 'monthly' && styles.activeTopTabText]}>Monthly</Text>
        </TouchableOpacity>
      </View>

      {/* टेबल हेडर */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerColumnText}>Position</Text>
        <Text style={styles.headerColumnText}>Player Name</Text>
        <Text style={styles.headerColumnText}>Winning</Text>
      </View>

      {/* लीडरबोर्ड की लिस्ट */}
      <FlatList
        data={leaderboardData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingTop: 45,
    paddingHorizontal: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  topTab: {
    backgroundColor: '#1E293B',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  activeTopTab: {
    backgroundColor: '#10B981',
    borderColor: '#34D399',
  },
  topTabText: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: 'bold',
  },
  activeTopTabText: {
    color: '#FFFFFF',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#7C3AED',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  headerColumnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  listContainer: {
    paddingBottom: 80,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#334155',
    justifyContent: 'space-between',
  },
  rankBox: {
    width: 30,
    alignItems: 'flex-start',
  },
  rankText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 13,
    flex: 1,
    textAlign: 'left',
    paddingLeft: 10,
  },
  winningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 80,
  },
  winningText: {
    color: '#FACC15',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
