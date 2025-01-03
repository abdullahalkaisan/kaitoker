

import ChipsCustom from './ChipsCustom'
import { PropTypes } from 'prop-types';


export default function ChipsCustomDynamic(props) {
    const getSkillsArray = props.user_skills;

  return (
    getSkillsArray.map((item, index)=>{
        return <ChipsCustom key={index} label={item}/>
    })
  )
}


 ChipsCustomDynamic.propTypes = {
    user_skills: PropTypes.string,
 };

