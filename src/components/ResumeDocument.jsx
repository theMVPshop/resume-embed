import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';






Font.register({
  family: 'Lora',
  src: 'http://fonts.gstatic.com/s/lora/v10/4A-myfZX6oDr9CtSTkTGig.ttf'
});



// Font.register({ family: 'Lora', src: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap", fontStyle: 'normal', fontWeight: 'normal'});

// Create styles
const styles = StyleSheet.create({
  page: {
  flexDirection: 'row',
  backgroundColor: '#E4E4E4',

},

section: {
  margin: 20,
  padding: 15,
  flexGrow: 1,
},

name: {

  marginBottom: 5,
  marginLeft: 'auto',
  marginRight: 'auto',
  textTransform: 'uppercase',
  fontSize: 25,
  letterSpacing: 3,
  fontFamily: 'Lora',
 },

 divider:{
  letterSpacing: "5px",
  backgroundColor: '#b8b8b8',
  marginTop: 5,
  marginBottom: 5,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: 2,
  paddingBottom: 2,
  textAlign: 'center',
  fontSize: 14,
  width: 540,
  fontFamily: 'Lora',
 },

 divider2:{
  letterSpacing: "5px",
  backgroundColor: '#b8b8b8',
  marginTop: 5,
  marginBottom: 5,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: 2,
  paddingBottom: 2,
  textAlign: 'left',
  fontSize: 14,
  width: 540,
  fontFamily: 'Lora',
 },

 divider3:{
  lineHeight: .05,
  backgroundColor: '#b8b8b8',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: 14,
 },

 address: {
    marginBottom: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 10,
    letterSpacing: '1.25px',
    fontFamily: 'Lora',
 },

 summary: {
  lineHeight: 1.75,
  paddingTop: 5,
  paddingBottom: 3,
  textAlign: 'center',
  fontSize: 10,
  fontFamily: 'Lora',
  
 },
  compname: {
    marginTop: 7,
    marginBottom: 3,
    fontSize: 12,
    fontFamily: 'Lora',
    fontWeight: 500,
  },
  
  detail: {    
    marginBottom: 2,
    fontSize: 10,
  },
  
  detail1: {    
    marginBottom: 2,
    marginLeft: 7,
    fontSize: 10,
    fontFamily: 'Lora',
  },

  line: {
    borderBottom: 1,
   borderBottomColor: '#b8b8b8',
   width: 540,
  }

  });

const ResumeDocument = (props) => {
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.name}>{props.name}</Text>  
          <Text style={styles.address}>{props.address} </Text> 
          <Text style={styles.address}> {props.city} {props.state}, {props.zip}</Text> 
          <Text style={styles.address}>{props.phone} </Text> 
          <Text style={styles.address}> {props.email}</Text> 

          <Text style={styles.divider}>PROFESSIONAL SUMMARY</Text>
          <Text style={styles.summary}> {props.summary}</Text>
  
          <Text style={styles.line} > </Text>
          <Text style={styles.divider2}>PROFESSIONAL EXPERIENCE</Text>
    
          <Text style={styles.compname}>{props.company}</Text>
          <Text style={styles.detail}><strong>{props.position}</strong></Text>
          <Text style={styles.detail}>{props.location}</Text>
          <Text style={styles.detail}>{props.start}  <span>to</span>  {props.end}</Text>
          <Text style={styles.detail1}>  <span>&bull;</span>  {props.desc1}</Text>
          <Text style={styles.detail1}>  <span>&bull;</span>  {props.desc2}</Text>
          <Text style={styles.detail1}>  <span>&bull;</span>  {props.desc3}</Text>
       
          

          <Text style={styles.compname}>{props.company2}</Text>
          <Text style={styles.detail}>{props.location2}</Text>
          <Text style={styles.detail}>{props.position2}</Text>
          <Text style={styles.detail}>{props.start2}  <span>to</span>  {props.end2}</Text>
          <Text style={styles.detail1}>  <span>&bull;</span>  {props.desc11}</Text>
          <Text style={styles.detail1}>  <span>&bull;</span>  {props.desc22}</Text>
          <Text style={styles.detail1}>  <span>&bull;</span>  {props.desc33}</Text>
     

          <Text style={styles.compname}>{props.company3}</Text>
          <Text style={styles.detail}> {props.location3}</Text>
          <Text style={styles.detail}>{props.position3}</Text>
          <Text style={styles.detail}>{props.start3}  <span>to</span>  {props.end3}</Text>
          <Text style={styles.detail1}>  <span>&bull;</span>  {props.desc111}</Text>
          <Text style={styles.detail1}>  <span>&bull;</span>  {props.desc222}</Text>
          <Text style={styles.detail1}>  <span>&bull;</span>  {props.desc333}</Text>


          <Text style={styles.divider2}>EDUCATION</Text>
          <Text style={styles.detail}>{props.institute} </Text>
          <Text style={styles.detail}>{props.instLocation}</Text>
          <Text style={styles.detail}>{props.major}</Text>
          <Text style={styles.detail}>{props.graduation}</Text>
          <Text style={styles.detail}>{props.info}</Text>

          <Text style={styles.detail}>{props.institute2}</Text>
          <Text style={styles.detail}>{props.instLocation2}</Text>
          <Text style={styles.detail}>{props.major2}</Text>
          <Text style={styles.detail}>{props.graduation2}</Text>
          <Text style={styles.detail}>{props.info2}</Text>

          <Text style={styles.detail}>{props.institute3}</Text>
          <Text style={styles.detail}>{props.instLocation3}</Text>
          <Text style={styles.detail}>{props.major3}</Text>
          <Text style={styles.detail}>{props.graduation3}</Text>
          <Text style={styles.detail}>{props.info3}</Text>


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