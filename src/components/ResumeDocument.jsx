import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
  flexDirection: 'row',
  backgroundColor: '#E4E4E4',

  title: {
    fontFamily: 'Lora'
  }
  
},

section: {
  margin: 10,
  padding: 10,
  flexGrow: 1,
  
},



text: {
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    textTransform: 'uppercase',
    fontSize: 20,
    letterSpacing: '3px',
    color: 'blue',
 },

 address: {
    marginTop: 5,
    marginBottom: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 10,
    letterSpacing: '1.5px',
    color: 'orange',
 }


  });

const ResumeDocument = (props) => {
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>{props.name}</Text>  
          <Text style={styles.address}>{props.address} </Text> 
          <Text style={styles.address}> {props.city} {props.state}, {props.zip}</Text> 
          <Text style={styles.address}>{props.phone} </Text> 
          <Text style={styles.address}> {props.email}</Text> 

          <Text>PROFESSIONAL SUMMARY</Text>
          <Text> {props.summary}</Text>
  
          <Text>PROFESSIONAL EXPERIENCE</Text>
    
          <Text>{props.company}</Text>
          <Text>{props.position}</Text>
          <Text>{props.location}</Text>
          <Text>{props.start} {props.end}</Text>
          <Text>{props.desc1}</Text>
          <Text>{props.desc11}</Text>
          <Text>{props.desc111}</Text>

          <Text>{props.company2}</Text>
          <Text>{props.location2}</Text>
          <Text>{props.position2}</Text>
          <Text>{props.start2} {props.end2}</Text>
          <Text>{props.desc2}</Text>
          <Text>{props.desc22}</Text>
          <Text>{props.desc222}</Text>

          <Text>{props.company3}</Text>
          <Text> {props.location3}</Text>
          <Text>{props.position3}</Text>
          <Text>{props.start3} {props.end3}</Text>
          <Text>{props.desc3}</Text>
          <Text> {props.desc33}</Text>
          <Text>{props.desc333}</Text>


          <Text>EDUCATION</Text>
          <Text>{props.institute} </Text>
          <Text>{props.instLocation}</Text>
          <Text>{props.major}</Text>
          <Text>{props.graduation}</Text>
          <Text>{props.info}</Text>

          <Text>{props.institute2}
          {props.instLocation2}
          {props.major2}
          {props.graduation2}
          {props.info2}</Text>

          <Text>{props.institute3}
          {props.instLocation3}
          {props.major3}
          {props.graduation3}
          {props.info3}</Text>


          <Text></Text>
</View>
        {/* <View style={styles.section}>
          <Text>Section #2</Text>
        </View> */}
      </Page>
    </Document>
  )
}

export default ResumeDocument;



        // <Text>{props.addSkillsData}
        // {props.skill1}
        // {props.skills}
        // {props.setSkills}</Text>