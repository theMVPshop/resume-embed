import React from 'react';


function ResumePaper(props) {

  // const classes = useStyles();
  // Work Experience Title
  let proTitle;
  if (props.company.length < 1) {
    proTitle = '';
  } else {
    proTitle = (
      <div>
        <h3 className='resume-titles'>Professional Experience</h3>
      </div>
    );
  }

  // Education Title
  let eduTitle;
  if (props.institute.length < 1) {
    eduTitle = '';
  } else {
    eduTitle = (
      <div>
        <h3 className='resume-titles'>Education</h3>
      </div>
    );
  }

  // Skills Title
  let skillsTitle;
  if (props.addSkillsData.length === 0) {
    skillsTitle = '';
  } else {
    skillsTitle = (
      <div>
        <h3 className='resume-titles'>Additional Skills</h3>
      </div>
    );
  }

  let headerDivider;
  if (props.name.length > 0) {
    headerDivider = <hr className='resume-divider' />;
  } else {
    headerDivider = '';
  }

  let summaryDivider;
  if (props.summary.length === 0) {
    summaryDivider = '';
  } else {
    summaryDivider = (
      <div>
        <h3 className='resume-titles'>Professional Summary</h3>
      </div>
    );
  }

  return (
    <div className='right'>
      <div size='A4' className='page' >
        {/* HEADER */}
        <div className='resume-header'>
          <div className='content-header'>
            <h1 className='header-h1'>{props.name}</h1>
            <p>
              {props.address} <br />
              {props.city} {props.state} {props.zip} <br />
              {props.phone} <br />
              {props.email} <br />
            </p>
            {summaryDivider}
            <p className='paper-summary'>{props.summary}</p>

            {headerDivider}
          </div>
        </div>

        <div className='content'>
          {/* PROFESSIONAL */}
          <div className='work-exp'>
            {proTitle}
            {/* This maps over the proData array */}
            <div className='work-content'>
              <div className='work-single'>

                <p className='work-one'>
                  <strong>{props.company}</strong>
                  <br />
                  {props.location}
                  <br />
                  {props.position} <br />
                  {props.start === '' ? '' : `${props.start} -`}
                  {props.end} <br />
                  {props.desc1 === '' ? '' : <li>{props.desc1}</li>}
                  {props.desc2 === '' ? '' : <li>{props.desc2}</li>}
                  {props.desc3 === '' ? '' : <li>{props.desc3}</li>}
                </p>

                {props.company2 &&
                <p className='work-one'>
                  <strong>{props.company2}</strong>
                  <br />
                  {props.location2}
                  <br />
                  {props.position2} <br />
                  {props.start2 === '' ? '' : `${props.start2} -`} {props.end2}{' '}
                  <br />
                  {props.desc11 === '' ? '' : <li>{props.desc11}</li>}
                  {props.desc22 === '' ? '' : <li>{props.desc22}</li>}
                  {props.desc33 === '' ? '' : <li>{props.desc33}</li>}
                </p>
}               
                {props.company3 && 
                <p className='work-one'>
                  <strong>{props.company3}</strong>
                  <br />
                  {props.location3}
                  <br />
                  {props.position3} <br />
                  {props.start3 === '' ? '' : `${props.start3} -`}
                  {props.end3} <br />
                  {props.desc111 === '' ? '' : <li>{props.desc111}</li>}
                  {props.desc222 === '' ? '' : <li>{props.desc222}</li>}
                  {props.desc333 === '' ? '' : <li>{props.desc333}</li>}
                </p>
}
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className='education'>
            {eduTitle}

            <div className='edu-content'>
              {/* EDU 1 */}
              <p className='edu-single'>
                <strong>{props.institute}</strong>
                <br />
                {props.instLocation}
                <br />
                {props.major}
                <br />
                {props.graduation}
                <br />
                {props.info}
              </p>
              {/* EDU 2 */}
              {props.institute2 &&
              <p className='edu-single'>
                <strong>{props.institute2}</strong>
                <br />
                {props.instLocation2}
                <br />
                {props.major2}
                <br />
                {props.graduation2}
                <br />
                {props.info2}
              </p>
}
              {/* EDU 3 */}
              {props.institute3 &&
              <p className='edu-single'>
                <strong>{props.institute3}</strong>
                <br />
                {props.instLocation3}
                <br />
                {props.major3}
                <br />
                {props.graduation3}
                <br />
                {props.info3}
              </p>
}
            </div>
          </div>

          {/* ADDITIONAL SKILLS */}
          <div className='additional'>
            {skillsTitle}

            <div className='additional-content'>
              {props.addSkillsData.map((add) => (
                <p className='additional-single' key={add.id}>
                  <li className='list-item'>{add.skill1}</li>
                </p>
              ))}

              {props.skills.map((skill, id) => (
                <p key={id}>
                  {skill.select === false ? (
                    ''
                    ) : (
                      <p className='additional-single'>
                      <li className='list-item'>{skill.name}</li>
                    </p>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePaper;
