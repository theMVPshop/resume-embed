import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { AutorenewTwoTone } from "@material-ui/icons";






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
  paddingTop: 10,
  fontFamily: 'Lora',

},

section: {
  marginRight: 20,
  marginLeft: 20,
  marginBottom: 20,

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

 },

 divider2:{
  letterSpacing: "5px",
  backgroundColor: '#b8b8b8',
  marginTop: 5,
  marginBottom: 7,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: 2,
  paddingBottom: 2,
  textAlign: 'left',
  fontSize: 14,
  width: 540,
 
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

 },

 summary: {
  lineHeight: 1.75,
  paddingTop: 5,
  paddingBottom: 3,
  textAlign: 'center',
  fontSize: 10,

  
 },
  compname: {
    marginTop: 12,
    marginBottom: 3,
    fontSize: 12,
    fontFamily: 'Lora',
    fontWeight: 500,
  },
  
  detail: {    
    marginBottom: 2,
    fontSize: 10,
  },


  
 bullet: {    
    
    marginBottom: 6,
  
    textIndent: 5,
    fontSize: 10,
    

  },

  detail2: {    
    marginTop: 10,
    marginBottom: 2,
    fontSize: 12,
  },


  line: {
    borderTop: 1,
   borderTopColor: '#b8b8b8',
   lineHeight: .25,
   width: 540,
  },

  institute: {
    marginTop: 5,
  },

  pageNumber: {
    position: 'absolute',
    fontSize: 8,
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#b8b8b8',
  },

  edublock:{
    marginTop: 5,
    marginBottom: 5,
  },

  bull: {
    lineHeight: 3,
    fontSize: 10,
    marginTop: 12,
    textAlign: 'center',
  },


  });

const ResumeDocument = (props) => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.name} fixed>{props.name}</Text>  
          <Text style={styles.address}>{props.address} </Text> 
          <Text style={styles.address}> {props.city} {props.state}, {props.zip}</Text> 
          <Text style={styles.address}>{props.phone} </Text> 
          <Text style={styles.address}> {props.email}</Text> 

          <Text style={styles.divider}>PROFESSIONAL SUMMARY</Text>
          <Text style={styles.summary}> {props.summary}</Text>
  
          <Text style={styles.line} > </Text>
          <Text style={styles.divider2}>PROFESSIONAL EXPERIENCE</Text>
    
          <Text style={styles.compname}>{props.company}</Text>
          <Text style={styles.detail}>{props.position}</Text>
          <Text style={styles.detail}>{props.location}</Text>
          <Text style={[styles.detail, {marginBottom: 10}]}>{props.start}  {props.end}</Text>
          <Text style={styles.bullet}>  {props.desc1}</Text>
          <Text style={styles.bullet}>  {props.desc2}</Text>
          <Text style={styles.bullet}>  {props.desc3}</Text>
       
          <Text style={styles.compname}>{props.company2}</Text>
          <Text style={styles.detail}>{props.location2}</Text>
          <Text style={styles.detail}>{props.position2}</Text>
          <Text style={[styles.detail, {marginBottom: 10}]}>{props.start2}  {props.end2}</Text>
          <Text style={styles.bullet}>   {props.desc11}</Text>
          <Text style={styles.bullet}>   {props.desc22}</Text>
          <Text style={styles.bullet}>   {props.desc33}</Text>
     
          <Text style={styles.compname}>{props.company3}</Text>
          <Text style={styles.detail}>{props.location3}</Text>
          <Text style={styles.detail}>{props.position3}</Text>
          <Text style={[styles.detail, {marginBottom: 10}]}>{props.start3}  {props.end3}</Text>
          <Text style={styles.bullet}>  {props.desc111}</Text>
          <Text style={styles.bullet}>  {props.desc222}</Text>
          <Text style={styles.bullet}>  {props.desc333}</Text>
        
          <Text style={styles.divider2}break>EDUCATION</Text>
          <Text style={styles.detail2}>{props.institute} </Text>
          <Text style={styles.detail}>{props.instLocation}</Text>
          <Text style={styles.detail}>{props.major}</Text>
          <Text style={styles.detail}>{props.graduation}</Text>
          <Text style={styles.detail}>{props.info}</Text> 

          <Text style={styles.detail2}>{props.institute2}</Text>
          <Text style={styles.detail}>{props.instLocation2}</Text>
          <Text style={styles.detail}>{props.major2}</Text>
          <Text style={styles.detail}>{props.graduation2}</Text>
          <Text style={styles.detail}>{props.info2}</Text>

          <Text style={styles.detail2}>{props.institute3}</Text>
          <Text style={styles.detail}>{props.instLocation3}</Text>
          <Text style={styles.detail}>{props.major3}</Text>
          <Text style={styles.detail}>{props.graduation3}</Text>
          <Text style={styles.detail}>{props.info3}</Text>


          <Text style={styles.divider2}>ADDITIONAL SKILLS</Text>
          <Text style={styles.bull}>
              {props.addSkillsData.map((add) => (
                <Text style={styles.bull} key={add.id}>
                  <Text>   {add.skill1}   <span>&bull;</span></Text>
                  </Text>
              ))}

              {props.skills.map((skill, id) => (
                <Text key={id}>
                  {skill.select === false ? (
                    ''
                    ) : (
                   
                      <Text style={styles.bull}>   {skill.name}   <span>&bull;</span></Text>
                 
                  )}
                </Text>
              ))}</Text>


          </View>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
          )} fixed />
      </Page>
    </Document>
  )
}

export default ResumeDocument;

