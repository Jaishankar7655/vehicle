import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottom: '1 solid #ccc',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: 150,
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
  },
});

function PDFDocument({ formData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Multi Brand Workshop & BodyShop</Text>
          <Text style={styles.subtitle}>
            26/A Near Surjeet Hyundai, J.K. Road, Bhopal-887112111
          </Text>
          <Text style={styles.subtitle}>
            Tel: 0755-4862244 | Mob: 887112211, 958442211
          </Text>
        </View>

        {/* Customer Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Information</Text>
          {Object.entries(formData.customerInfo).map(([key, value]) => (
            <View style={styles.row} key={key}>
              <Text style={styles.label}>{key}:</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          ))}
        </View>

        {/* Vehicle Inspection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vehicle Inspection Details</Text>
          {/* Add vehicle inspection details */}
        </View>

        {/* Requirements and Cost */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requirements and Cost</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Customer Demand:</Text>
            <Text style={styles.value}>{formData.customerDemand}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Total Cost:</Text>
            <Text style={styles.value}>{formData.totalCost}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PDFDocument;
