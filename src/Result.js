import React,{useState} from 'react'
import './asset/Result.css'

const content = [
    {
        tab: "실행결과",
        content:
            "      실행결과"
    },
    {
        tab: "제출결과",
        content:
            "      제출결과"
    }
];
  
const useTabs = (initialTabs, allTabs) => {
    const [contentIndex, setContentIndex] = useState(initialTabs);
    return {
        contentItem: allTabs[contentIndex],
        contentChange: setContentIndex
    };
};

function Result(){
    const { contentItem, contentChange } = useTabs(0, content);
    return (
      <div className="result">
        {content.map((section, index) => (
          <button onClick={() => contentChange(index)}>{section.tab}</button>
        ))}
        <br />
        <br />
        {contentItem.content}
      </div>
    );
  }

export default Result;