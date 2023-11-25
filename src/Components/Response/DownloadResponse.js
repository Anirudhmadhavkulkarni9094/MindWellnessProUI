import React from 'react';
import { Page, Text, Document, Font, StyleSheet } from '@react-pdf/renderer';

// Register font if needed
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf' },
    { src: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc9.ttf', fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    padding: 20,
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444444',
  },
  listItemHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 12,
    color: '#000000',
  },
  listItem: {
    fontSize : 8,
    marginBottom: 10,
    color: '#666666',
  },
  bold : {
    fontWeight : 700
  }
});

function DownloadResponse({ selectedUser }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>User: {selectedUser.name}</Text>
        <Text style={styles.subtitle}>Email: {selectedUser.email}</Text>
        <Text style={styles.subtitle}>Responses:</Text>
        {selectedUser.responses.map((response, index) => (
          <React.Fragment key={index}>
            <Text style={styles.listItemHeader}>Q{index+1 + ": " }{selectedUser.questions[index].Question}?</Text>
            <Text style={styles.listItem}><Text style={styles.bold}>Response:</Text> {response.response}</Text>
            <Text style={styles.listItem}><Text style={styles.bold}>Explanation: </Text>{response.text}</Text>
          </React.Fragment>
        ))}
      </Page>
    </Document>
  );
}

export default DownloadResponse;
