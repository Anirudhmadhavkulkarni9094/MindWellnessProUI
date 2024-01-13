import React from 'react';
import { Page, Text, Document, Font, View, StyleSheet , Image} from '@react-pdf/renderer';

// Font registration
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf' },
    { src: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc9.ttf', fontWeight: 700 },
  ],
});


const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 40,
  },
  logo : {
    width : 50
  },
  title : {
    fontSize : 18,
    fontWeight : 800
  },
  header : {
    
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 10,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  score: {
    marginBottom: 10,
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius :2,
    borderCollapse: 'collapse',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  tableCell: {
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 8,
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  },
});

const formattedText = (responseText) =>
  responseText.split('**').map((part, index) =>
    index % 2 === 0 ? (
      <Text key={index}>{part.replace(/\*/g, '')}</Text>
    ) : (
      <Text key={index}>
        <Text style={{ fontWeight: 800 }}>{part.replace(/\*/g, '')}</Text>
        {'\n'}
      </Text>
    )
  );

  const handleLink = ()=>{
    window.location.href = "www.google.com"
  }

const MyDocument = ({ data }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={{flexDirection: 'row',
    justifyContent : "space-between" , borderBottom : "2px solid black" , marginBottom : 10}}>
          <Text style={styles.title}>MindWelnessPro</Text>
          <Image src={require("./Assets/LOGO.png")} style={styles.logo}></Image>
        </View>
       
        <Text style={styles.heading}>Patient Name:{data.name}</Text>
        <Text style={{fontSize: 14}}>Contact: {data.email}</Text>
        <Text style={{fontSize: 14}}>suggestions : {formattedText(data.suggestions)}</Text>
        <View style={styles.section}>

          <Text style={styles.label}>Sentiment Scores:</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableCell, styles.tableHeader]}>Label</Text>
              <Text style={[styles.tableCell, styles.tableHeader]}>Score</Text>
            </View>
            {data.sentiments_scores.map((senti, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{senti.label}</Text>
                <Text style={styles.tableCell}>{(senti.score * 100).toFixed(2)}%</Text>
              </View>
            ))}
          </View>
        </View>
        <Text style={{ marginTop: 20 }}>
          Your sincere,
        </Text>
        <Text>
        MindWellnessPro team.
        </Text>
        <Text onClick={handleLink}>Link</Text>
        <Text
          style={{
            position: 'absolute',
            fontSize: 10,
            bottom: 10,
            right: 10,
          }}
          render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )}
          fixed
        />
        <Text
          style={{
            position: 'absolute',
            fontSize: 10,
            bottom: 10,
            left: 10,
            right: 10,
            textAlign: 'center',
            color: 'gray',
          }}
        >
          *Disclaimer: This document is for informational purposes only and should not be considered as professional advice.
        </Text>
      </Page>
      
    </Document>
  );
};

export default MyDocument;
