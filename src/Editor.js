import React,{Component} from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'

import 'codemirror/mode/clike/clike'
import 'codemirror/mode/python/python'

import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/base16-light.css'

import 'codemirror/lib/codemirror.css'

import "codemirror/addon/hint/show-hint"
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/keymap/sublime";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/foldgutter.css";

import 'codemirror-minimap'
import 'codemirror-minimap/src/minimap.css'

import Switch from "react-switch"

import './asset/Editor.css'

const languages = [
    {
        lang: "c",
        mode: 'text/x-csrc',
        value: '#include <stdio.h>\nint main() {\n\tchar input[100];\n\tscanf("%s",input);\n\tprintf("Hello CCM! Your input is %s",input);\n\treturn 0;\n}'
    },
    {
        lang: "c++",
        mode: 'text/x-c++src',
        value: '#include <iostream>\nusing namespace std;\n\tint main() {\n\tchar input[100];\n\tcin >> input;\n\tcout << "Hello CCM! Your input is " << input << endl;\n\treturn 0;\n}'
    },
    {
        lang: "java",
        mode: 'text/x-java',
        value: 'import java.io.*;\nclass Main {\n\tpublic static void main(String[] args) throws Exception {\n\t\tBufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n\t\tString input = br.readLine();\n\t\tSystem.out.println("Hello CCM! Your input is " + input);\n\t}\n}'
    },
    {
        lang: "python",
        mode: 'text/x-python',
        value: '# -*- coding: utf-8 -*-\n# UTF-8 encoding when using korean\nuser_input = input()\nprint("Hello CCM! Your input is " + user_input)'
    }
]

const Theme = [
    {
        mode:'light',
        theme:'base16-light'
    },
    {
        mode:'dark',
        theme:'base16-dark'
    }
]

class Editor extends Component {
    constructor(props){
        super(props);
        this.state={
            value: languages[0].value,
            theme: 'base16-light',
            minimap: true,
            mode: languages[0].mode,
            onKeyUp:(editor, event) =>{
                if (!editor.state.completionActive &&((event.keyCode >= 65)&&(event.keyCode <= 90))){
                    editor.showHint({completeSingle: false});
                }
            },
            lineWrapping: true,
            lineNumbers: true,
            tabSize: 2,
            smartIndent: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
            autoCloseBrackets: true,
            keyMap: 'sublime'
        }
    }

    // onChange = (newValue) => {
    //     this.setState({
    //       value: newValue
    //     });
    // }

    setTheme = (e) => {
        this.setState({
          theme: e.target.value
        });
    }

    setMode = (e) => {
        this.setState({
          mode: e.target.value,
          value: languages.find(lang => lang.mode === e.target.value).value
        });
    }

    setMiniMap = (e) => {
        this.setState({
            minimap: e
        });
    }

    Reset = () => {
        this.setState({
            value: languages.find(lang => lang.mode === this.state.mode).value
        });
    }

    render() {
        return (
            <div className="editor">
                <div id="menu">
                    <span>
                        <button >
                            제출
                        </button>
                    </span>
                    <span>
                        <button >
                            실행
                        </button>
                    </span>
                    <span>
                        <button >
                            저장
                        </button>
                    </span>
                    <span>
                        <button onClick={this.Reset}>
                            초기화
                        </button>
                    </span>
                    <span>
                        <span>미니맵</span>
                        <span>
                            <Switch className="Switch" onChange={this.setMiniMap} checked={this.state.minimap} height={20} width={40} onColor={'#263747'}/>
                        </span>
                    </span>
                    <span>
                        <select
                            name="theme"
                            onChange={this.setTheme}
                            value={this.state.theme}
                        >
                            {Theme.map((theme,index) => (
                                <option key={index} value={theme.theme}>
                                    {theme.mode}
                                </option>
                            ))}
                        </select>
                    </span>
                    <span>
                        <select
                            name="mode"
                            onChange={this.setMode}
                            value={this.state.mode}
                        >
                            {languages.map((lang,index) => (
                                <option key={index} value={lang.mode}>
                                    {lang.lang}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
                <CodeMirror className="CodeMirror"
                    value={this.state.value}
                    onKeyUp={this.state.onKeyUp}
                    autoCursor={false}
                    options={{
                        theme: this.state.theme,
                        mode: this.state.mode,
                        lineWrapping: this.state.lineWrapping,
                        lineNumbers: this.state.lineNumbers,
                        tabSize: this.state.tabSize,
                        smartIndent: this.state.smartIndent,
                        foldGutter: this.state.foldGutter,
                        gutters: this.state.gutters,
                        minimap: this.state.minimap,
                        autoCloseBrackets: this.state.autoCloseBrackets,
                        keyMap: this.state.keyMap
                    }}
                    onChange={(editor,data, value) => {
                        this.setState({
                            value: value
                        })
                    }}
                    />
            </div>
        );
    }
}

export default Editor;