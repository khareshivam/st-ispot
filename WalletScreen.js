import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function WalletScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* ऊपर का हेडर */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Wallet</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* कुल बैलेंस कार्ड */}
        <View style={styles.totalBalanceCard}>
          <View style={styles.coinCircle}>
            <Text style={styles.coinSymbol}>C</Text>
          </View>
          <Text style={styles.totalAmount}>0</Text>
        </View>

        {/* तीन छोटे बैलेंस बॉक्स (Deposited, Winning, Bonus) */}
        <View style={styles.balanceBreakdownRow}>
          <View style={styles.miniCard}>
            <View style={styles.miniCoinRow}>
              <View style={styles.smallCoinIcon}><Text style={styles.smallCoinText}>C</Text></View>
              <Text style={styles.miniAmount}>0</Text>
            </View>
            <Text style={styles.miniLabel}>Deposited</Text>
          </View>

          <View style={styles.miniCard}>
            <View style={styles.miniCoinRow}>
              <View style={styles.smallCoinIcon}><Text style={styles.smallCoinText}>C</Text></View>
              <Text style={styles.miniAmount}>0</Text>
            </View>
            <Text style={styles.miniLabel}>Winning</Text>
          </View>

          <View style={styles.miniCard}>
            <View style={styles.miniCoinRow}>
              <View style={styles.smallCoinIcon}><Text style={styles.smallCoinText}>C</Text></View>
              <Text style={styles.miniAmount}>0</Text>
            </View>
            <Text style={styles.miniLabel}>Bonus</Text>
          </View>
        </View>

        {/* एक्शन बटन (Add Coins, Withdraw Coins, Transactions) */}
        <View style={styles.actionButtonsRow}>
          <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.actionIconCircle}>
              <Icon name="wallet" size={24} color="#FF3D00" />
            </View>
            <Text style={styles.actionText}>Add Coins</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.actionIconCircle}>
              <Icon name="cash" size={24} color="#FF3D00" />
            </View>
            <Text style={styles.actionText}>Withdraw Coins</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.actionIconCircle}>
              <Icon name="receipt" size={24} color="#FF3D00" />
            </View>
            <Text style={styles.actionText}>Transactions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64748B', // स्क्रीनशॉट के अनुसार ग्रे बैकग्राउंड
    paddingTop: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#475569',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 20,
  },
  totalBalanceCard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  coinCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FACC15',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#CA8A04',
    marginBottom: 10,
  },
  coinSymbol: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#78350F',
  },
  totalAmount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  balanceBreakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  miniCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '31%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  miniCoinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  smallCoinIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FACC15',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  smallCoinText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#78350F',
  },
  miniAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  miniLabel: {
    fontSize: 12,
    color: '#334155',
    fontWeight: 'bold',
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 20,
    width: '31%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  actionIconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
  },
});
