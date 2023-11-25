import React from 'react';
import { Page, Text, Document, Font , View , Image , Svg , Line  } from '@react-pdf/renderer';

// Font registration
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf' },
    { src: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc9.ttf', fontWeight: 700 },
  ],
});

const MyDocument = () => {
  const dummyData = {
    user: "John Doe",
    overallSentiment: {
      "Positive": 40,
      "Neutral": 30,
      "Negative": 30,
    },
    emotionalPatterns: [
      {
        emotion: "Happiness",
        percentage: 40,
        details: "You expressed happiness in discussions about [Topic 1], indicating positive well-being."
      },
      {
        emotion: "Anxiety",
        percentage: 20,
        details: "Some conversations indicated feelings of anxiety and stress related to [Topic 2]. This suggests the importance of self-awareness regarding your emotional state and managing stress effectively."
      },
      // Add more emotional patterns as needed...
    ],
    yourName: "MindWellnessPro",
    yourOrganization: "MindWellnessPro Organization"
  };

  return (
    <Document style={{backgroundColor : "red"}}>
      <Page style={{ padding: 40, fontFamily: 'Roboto' }}>
      <View style={{ position: 'relative', marginBottom: 20 , display : 'flex' , flexDirection : 'row' , justifyContent : 'space-between' , alignItems : "center" , alignContent : "center"}}>
          <Image src={require("./Assets/LOGO.png")} style={{ width: "10%" }} />
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sentiment Analysis Report</Text>
        </View>
        <Svg height="10" width="520">
          <Line x1="0" y1="0" x2="100%" y2="0" strokeWidth={1} stroke="rgb(0,0,0)" />
      </Svg>
        <Text style={{ fontSize: 12 , marginTop : "10rem"}}>Date: {new Date().toLocaleDateString()}</Text>
        <Text style={{ fontSize: 16, fontWeight : 700, color: "green", marginTop: 10 }}>Dear {dummyData.user},</Text>
        <Text style={{ fontSize: 14, color: "#333", marginTop: 20 }}>
          We understand the importance of your emotional well-being during our interactions with you. We have conducted a sentiment analysis of your
          recent conversations with our chatbot to provide insights into your emotional states and possible mental conditions.
        </Text>
        <Text style={{ fontSize: 18, marginTop: 20 }}>Overall Sentiment:</Text>
        {Object.entries(dummyData.overallSentiment).map(([emotion, percentage]) => (
          <Text key={emotion} style={{ fontSize: 16, color: "#444", marginLeft: 20 }}>
            - {emotion}: {percentage}%
          </Text>
        ))}
        <Text style={{ fontSize: 18, marginTop: 20 }}>Key Emotional Patterns and Suggested Self-Awareness:</Text>
        {dummyData.emotionalPatterns.map((pattern, index) => (
          <Text key={index} style={{ fontSize: 16, color: "#555", marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{pattern.emotion}: {pattern.percentage}%</Text>{"\n"}
            - {pattern.details}
          </Text>
        ))}
        <Text style={{ fontSize: 14, color: "#333", marginTop: 20 }}>
          We want to emphasize the importance of self-awareness and recognizing your emotional well-being. While sentiment analysis can provide
          insights, it's not a substitute for professional assessment. If you ever feel overwhelmed or experience persistent emotional challenges, we
          encourage you to consider seeking professional help. Your well-being is important to us, and we are here to support you.
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#333", marginTop: 20 }}>Sincerely,</Text>
        <Text style={{ fontSize: 14, color: "#333", marginTop: 5 }}>{dummyData.yourName}</Text>
        <Text style={{ fontSize: 14, color: "#333" }}>{dummyData.yourOrganization}</Text>
      </Page>
    </Document>
  );
};

export default MyDocument;
